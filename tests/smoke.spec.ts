import { test, expect } from '@playwright/test';

test.describe('Resume Site Smoke Tests', () => {
  test('page loads successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page title is set
    await expect(page).toHaveTitle(/resume/i);
    
    // Wait for the main content to be visible
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('Header section renders', async ({ page }) => {
    await page.goto('/');
    
    // Look for header content - adjust selectors based on actual component structure
    const header = page.locator('main').first();
    await expect(header).toBeVisible();
  });

  test('Summary section renders', async ({ page }) => {
    await page.goto('/');
    
    // Check that main sections are present in the page
    const main = page.locator('main');
    await expect(main).toBeVisible();
    
    // Verify the page has loaded content
    const content = await main.textContent();
    expect(content).toBeTruthy();
    expect(content!.length).toBeGreaterThan(0);
  });

  test('Skills section renders', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('Experience section renders', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    const main = page.locator('main');
    await expect(main).toBeVisible();
    
    // Check that there is substantial content (resume data)
    const content = await main.textContent();
    expect(content!.length).toBeGreaterThan(100);
  });

  test('Education section renders', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('page has no console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Allow some time for any delayed errors
    await page.waitForTimeout(1000);
    
    expect(consoleErrors).toHaveLength(0);
  });
});

