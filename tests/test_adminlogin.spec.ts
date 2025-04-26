import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
});
test.describe("Admin management", () => {
  test("Admin Login", async ({ page }) => {
    await expect(page).toHaveURL(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    await page.locator(".oxd-userdropdown-name").waitFor({ state: "visible" });
    await page.locator(".oxd-userdropdown-name").click();
    await page.getByRole("menuitem", { name: "Logout" }).click();
    await expect(page).toHaveURL(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
});
