import { test, expect } from '@playwright/test';

test.describe('Kanban Board E2E', () => {
  test.beforeEach(async ({ page }) => {
    // Assuming the app is running via the new Docker proxy on port 80
    // or locally on the default Vite port during dev
    await page.goto('http://localhost:5173'); 
  });

  test('should display the kanban board with columns', async ({ page }) => {
    await expect(page.locator('.board-container')).toBeVisible();
    await expect(page.locator('.board-column')).toHaveCount(3);
    await expect(page.getByText('To Do')).toBeVisible();
    await expect(page.getByText('In Progress')).toBeVisible();
    await expect(page.getByText('Done')).toBeVisible();
  });

  test('should allow creating a new ticket', async ({ page }) => {
    const todoColumn = page.locator('.board-column').filter({ hasText: 'To Do' });
    
    await todoColumn.getByRole('button', { name: '+ Add a card' }).click();
    await page.locator('textarea').fill('E2E Test Ticket');
    await page.keyboard.press('Enter');

    await expect(page.getByText('E2E Test Ticket')).toBeVisible();
  });

  test('should allow dragging a ticket between columns', async ({ page }) => {
    // This is a simplified check for drag and drop visibility
    // Actual drag implementation in Playwright requires specific mouse movements
    const ticket = page.locator('.task-card').first();
    const targetColumn = page.locator('.board-column').filter({ hasText: 'In Progress' });

    await ticket.hover();
    await page.mouse.down();
    await targetColumn.hover();
    await page.mouse.up();

    // Verify movement (optimistic UI or refetch)
    await expect(targetColumn.locator('.task-card')).toContainText(await ticket.innerText());
  });
});
