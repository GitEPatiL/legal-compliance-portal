const fs = require('fs');
const path = require('path');
const { z } = require('zod');

// Import schema (simplified version for Node.js)
const MetaSchema = z.object({
  description: z.string(),
  keywords: z.array(z.string()),
  canonical: z.string(),
});

const ThemeSchema = z.object({
  color_palette: z.array(z.string()).min(1),
  font_pair: z.string(),
  card_style: z.string(),
}).optional();

const ContentBlockSchema = z.object({
  type: z.enum([
    'hero',
    'text',
    'two_column',
    'three_column',
    'faq',
    'process',
    'table',
    'grid',
    'cta',
    'testimonial',
    'gallery',
  ]),
  style: z.string(),
  content: z.record(z.any()),
  props: z.record(z.any()).optional(),
});

const PageSchema = z.object({
  slug: z.string(),
  page_name: z.string(),
  title: z.string(),
  meta: MetaSchema,
  layout_style: z.string().optional(),
  theme: ThemeSchema,
  content_blocks: z.array(ContentBlockSchema),
  published: z.boolean().optional(),
  last_generated_at: z.string().optional(),
});

const pagesDir = path.join(__dirname, '..', 'public', 'pages');

if (!fs.existsSync(pagesDir)) {
  console.error('Error: public/pages directory not found. Run npm run write-pages first.');
  process.exit(1);
}

const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.json') && f !== 'manifest.json' && f !== 'manifest-duplicates.json');

let validCount = 0;
let invalidCount = 0;
const errors = [];

console.log(`Validating ${files.length} pages...\n`);

files.forEach((file) => {
  const filePath = path.join(pagesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  try {
    const data = JSON.parse(content);
    const result = PageSchema.safeParse(data);

    if (result.success) {
      validCount++;
      console.log(`✓ ${file}`);
    } else {
      invalidCount++;
      errors.push({ file, errors: result.error.errors });
      console.error(`✗ ${file}`);
      result.error.errors.forEach((err) => {
        console.error(`  - ${err.path.join('.')}: ${err.message}`);
      });
    }
  } catch (error) {
    invalidCount++;
    errors.push({ file, errors: [error.message] });
    console.error(`✗ ${file}: JSON parse error`);
  }
});

console.log(`\n${'='.repeat(50)}`);
console.log(`Valid pages: ${validCount}`);
console.log(`Invalid pages: ${invalidCount}`);

if (invalidCount > 0) {
  const reportPath = path.join(pagesDir, 'validation-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(errors, null, 2));
  console.log(`\nValidation errors saved to: validation-report.json`);
  process.exit(1);
}

console.log(`\n✅ All pages validated successfully!`);
