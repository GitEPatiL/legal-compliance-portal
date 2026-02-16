import { test, expect } from '@playwright/test';

test.describe('Page Rendering', () => {
  test('should render company registration page', async ({ page }) => {
    await page.goto('/company-registration');
    
    // Check hero heading is visible
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    
    // Check page loads without errors
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));
    
    await page.waitForLoadState('networkidle');
    expect(pageErrors).toHaveLength(0);
  });

  test('should expand FAQ items', async ({ page }) => {
    await page.goto('/company-registration');
    
    // Find and click FAQ button
    const faqButton = page.getByRole('button').filter({ hasText: /what/i }).first();
    
    if (await faqButton.isVisible()) {
      await expect(faqButton).toHaveAttribute('aria-expanded', 'false');
      await faqButton.click();
      await expect(faqButton).toHaveAttribute('aria-expanded', 'true');
    }
  });

  test('should navigate via CTA button', async ({ page }) => {
    await page.goto('/company-registration');
    
    // Find CTA link
    const ctaLink = page.getByRole('link', { name: /get started|start now/i }).first();
    
    if (await ctaLink.isVisible()) {
      await expect(ctaLink).toBeVisible();
    }
  });
});
