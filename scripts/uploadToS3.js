const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

const s3 = new AWS.S3({
  region: process.env.AWS_REGION || 'us-east-1',
});

const bucket = process.env.S3_BUCKET;
const pagesDir = path.join(__dirname, '..', 'public', 'pages');

if (!bucket) {
  console.error('Error: S3_BUCKET environment variable not set');
  process.exit(1);
}

async function uploadFile(filePath, key) {
  const content = fs.readFileSync(filePath);

  const params = {
    Bucket: bucket,
    Key: key,
    Body: content,
    ContentType: 'application/json',
    CacheControl: 'public, max-age=3600',
  };

  try {
    await s3.putObject(params).promise();
    console.log(`✓ Uploaded: ${key}`);
  } catch (error) {
    console.error(`✗ Failed to upload ${key}:`, error.message);
  }
}

async function main() {
  console.log(`Uploading pages to S3 bucket: ${bucket}\n`);

  const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.json'));

  for (const file of files) {
    const filePath = path.join(pagesDir, file);
    const key = `pages/${file}`;
    await uploadFile(filePath, key);
  }

  console.log(`\n✅ Upload complete!`);
}

main().catch(console.error);
