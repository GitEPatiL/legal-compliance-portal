# Antigravity Pages Site

Production-ready Next.js application rendering 1000+ dynamic pages from JSON manifest.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Write page JSONs from manifest
npm run write-pages

# Run validation
npm run validate-pages

# Start development server
npm run dev
```

Visit [http://localhost:3000/company-registration](http://localhost:3000/company-registration)

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── [slug]/page.tsx      # Dynamic page route (ISR enabled)
│   │   ├── layout.tsx            # Root layout
│   │   └── not-found.tsx         # 404 page
│   ├── components/
│   │   ├── BlockRenderer.tsx     # Maps JSON blocks to components
│   │   ├── Seo.tsx               # SEO & JSON-LD
│   │   └── blocks/               # Individual block components
│   ├── types/page.ts             # TypeScript + Zod schemas
│   ├── styles/                   # Global CSS & theme tokens
│   └── stories/                  # Storybook stories
├── public/pages/                 # Generated page JSONs
├── data/pages_manifest.json      # Source manifest
├── scripts/                      # Build & validation scripts
└── e2e/                          # Playwright tests
```

## 📝 Commands

| Command                  | Description                                   |
| ------------------------ | --------------------------------------------- |
| `npm run dev`            | Start development server                      |
| `npm run build`          | Production build                              |
| `npm run start`          | Start production server                       |
| `npm run lint`           | Run ESLint                                    |
| `npm run typecheck`      | TypeScript validation                         |
| `npm test`               | Run Jest unit tests                           |
| `npm run test:e2e`       | Run Playwright E2E tests                      |
| `npm run storybook`      | Start Storybook                               |
| `npm run validate-pages` | Validate all page JSONs                       |
| `npm run write-pages`    | Generate page JSONs from manifest             |
| `npm run upload-pages`   | Upload pages to S3 (requires AWS credentials) |

## 🎨 Block Components

All blocks support `style` variants and dynamic theming:

- **Hero** - `image-background`, `split`, `text-only`
- **TextBlock** - Rich content with alignment options
- **TwoColumn** - Side-by-side layout with optional images
- **FAQ** - Accordion with expand/collapse
- **CTA** - Call-to-action with primary/secondary buttons
- **TableBlock** - Data tables with headers
- **Process** - Step-by-step workflows
- **GridCards** - Feature cards in grid layout
- **Testimonial** - Customer reviews
- **Gallery** - Image grid

## 🔧 Configuration

### Environment Variables

```env
# Optional: for S3 upload
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
S3_BUCKET=your-bucket
AWS_REGION=us-east-1
```

### ISR (Incremental Static Regeneration)

Pages revalidate every 60 seconds. Configured in `src/app/[slug]/page.tsx`:

```typescript
export const revalidate = 60;
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Manual Deployment

```bash
npm run build
npm start
```

## 🐛 Troubleshooting

### JSON Parse Errors

**Error**: `Unexpected token` or `JSON.parse failed`

**Fix**:

```bash
npm run validate-pages
```

Check the generated `validation-report.json` for details.

### Missing Fields

**Error**: Page renders blank or crashes

**Fix**: BlockRenderer includes defensive fallbacks. Check browser console for warnings about missing content fields. Verify your page JSON matches the schema in `src/types/page.ts`.

### Slug Collisions

**Error**: Pages overwriting each other

**Fix**: Check `public/pages/manifest-duplicates.json`. The `writePages` script auto-appends `-1`, `-2` to duplicates.

### Large Build Memory Limits

**Error**: `JavaScript heap out of memory`

**Fix**:

```bash
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

For 1000+ pages, consider batching:

```bash
# Split manifest into batches of 200 pages
node scripts/writePages.js --batch-size=200
```

### Page Not Found in Development

**Issue**: Dynamic route not working

**Fix**: Ensure `write-pages` script has run and `public/pages/{slug}.json` exists. Check `public/pages/manifest.json` contains the slug.

## 🔍 Page Schema

All pages must conform to this structure:

```typescript
{
  slug: string;                    // URL slug
  page_name: string;               // Display name
  title: string;                   // Page title
  meta: {
    description: string;           // Meta description
    keywords: string[];            // SEO keywords
    canonical: string;             // Canonical URL
  };
  theme?: {
    color_palette: string[];       // Theme colors
    font_pair: string;             // Font combination
    card_style: string;            // Card styling
  };
  content_blocks: ContentBlock[];  // Page blocks
  published?: boolean;
  last_generated_at?: string;
}
```

## 📊 Testing

### Unit Tests

```bash
npm test
```

Tests are located in `src/components/blocks/__tests__/`.

### E2E Tests

```bash
npm run test:e2e
```

Playwright tests validate page rendering and interactions.

### Storybook

```bash
npm run storybook
```

View component library at [http://localhost:6006](http://localhost:6006).

## Re-generating Single Page

To update a specific page:

1. Edit `data/pages_manifest.json` for the target slug
2. Run:

```bash
node scripts/writePages.js
npm run validate-pages
```

## 🎯 Performance

- **ISR**: 60s revalidation reduces build times
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Dynamic imports per block type
- **Lazy Loading**: Images lazy-loaded except hero blocks

## 📄 License

MIT

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Run `npm run lint && npm test`
4. Submit PR

---

**Built with Next.js 14, TypeScript, Tailwind CSS, and ❤️**
