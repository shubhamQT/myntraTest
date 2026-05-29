import { test, expect } from '../support/fixtures';

test('User can browse Men’s T-Shirts listing and see product info', { tag: ["@e2e","@regression","@P0","@browse-mens-tshirts-listing"] }, async ({ page, homePage, menTshirtsPage }) => {
  await test.step('Open — Open Myntra homepage', async () => {
    await page.goto('https://www.myntra.com/');
    await expect(page).not.toHaveTitle(/404|Error|Not Found/i);
  });
  await test.step('Hover — Hover over \'Men\' in main navigation', async () => {
    await homePage.clickMEN();
  });
  await test.step('Click — Click on \'T-Shirts\' under Men’s category', async () => {
    await menTshirtsPage.clickTshirts();
  });
  await test.step('Assert visible — Assert product listing grid is visible', async () => {
    await menTshirtsPage.expectTshirtsVisible();
  });
  await test.step('Assert visible — Assert first product shows name, price, and image', async () => {
    await menTshirtsPage.expectJockeySuperCombedCottonVisible();
  });
});

test('User can open first product detail page from listing', { tag: ["@e2e","@regression","@P0","@open-product-detail-page"] }, async ({ page, homePage, menTshirtsPage, productdetailPage }) => {
  await test.step('Open — Open Myntra homepage', async () => {
    await page.goto('https://www.myntra.com/');
    await expect(page).not.toHaveTitle(/404|Error|Not Found/i);
  });
  await test.step('Hover — Hover over \'Men\' in main navigation', async () => {
    await homePage.clickMEN();
  });
  await test.step('Click — Click on \'T-Shirts\' under Men’s category', async () => {
    await menTshirtsPage.clickTshirts();
  });
  await test.step('Click — Click on first product in listing', async () => {
    await menTshirtsPage.clickJockeySuperCombedCotton();
  });
  await test.step('Assert visible — Assert product detail page is displayed', async () => {
    await productdetailPage.expectMenSlimFitShirtVisible();
  });
});

test('User can select size and add product to bag', { tag: ["@e2e","@regression","@P0","@select-size-and-add-to-bag"] }, async ({ page, homePage, menTshirtsPage, productdetailPage, buyPage }) => {
  await test.step('Open — Open Myntra homepage', async () => {
    await page.goto('https://www.myntra.com/');
    await expect(page).not.toHaveTitle(/404|Error|Not Found/i);
  });
  await test.step('Hover — Hover over \'Men\' in main navigation', async () => {
    await homePage.clickMEN();
  });
  await test.step('Click — Click on \'T-Shirts\' under Men’s category', async () => {
    await menTshirtsPage.clickTshirts();
  });
  await test.step('Click — Click on first product in listing', async () => {
    await menTshirtsPage.clickJockeySuperCombedCotton();
  });
  await test.step('Click — Select available size (e.g., M)', async () => {
    await buyPage.clickM();
  });
  await test.step('Click — Click \'Add to Bag\' button', async () => {
    await buyPage.clickADDTOBAG();
  });
  await test.step('Assert visible — Assert confirmation that item is added to bag', async () => {
    await buyPage.expectADDTOBAGVisible();
  });
});

test('User sees bag icon updated after adding product', { tag: ["@e2e","@regression","@P1","@verify-bag-icon-updated"] }, async ({ page, homePage, menTshirtsPage, productdetailPage, buyPage, cartPage }) => {
  await test.step('Open — Open Myntra homepage', async () => {
    await page.goto('https://www.myntra.com/');
    await expect(page).not.toHaveTitle(/404|Error|Not Found/i);
  });
  await test.step('Hover — Hover over \'Men\' in main navigation', async () => {
    await homePage.clickMEN();
  });
  await test.step('Click — Click on \'T-Shirts\' under Men’s category', async () => {
    await menTshirtsPage.clickTshirts();
  });
  await test.step('Click — Click on first product in listing', async () => {
    await menTshirtsPage.clickJockeySuperCombedCotton();
  });
  await test.step('Click — Select available size', async () => {
    await buyPage.clickM();
  });
  await test.step('Click — Click \'Add to Bag\' button', async () => {
    await buyPage.clickADDTOBAG();
  });
  await test.step('Assert contains — Assert bag icon shows item count', async () => {
    await cartPage.expectBAGContainsText('1');
  });
});

test('User can open bag and verify added product is present', { tag: ["@e2e","@regression","@P0","@verify-product-in-bag"] }, async ({ page, homePage, menTshirtsPage, productdetailPage, buyPage, cartPage }) => {
  await test.step('Open — Open Myntra homepage', async () => {
    await page.goto('https://www.myntra.com/');
    await expect(page).not.toHaveTitle(/404|Error|Not Found/i);
  });
  await test.step('Hover — Hover over \'Men\' in main navigation', async () => {
    await homePage.clickMEN();
  });
  await test.step('Click — Click on \'T-Shirts\' under Men’s category', async () => {
    await menTshirtsPage.clickTshirts();
  });
  await test.step('Click — Click on first product in listing', async () => {
    await menTshirtsPage.clickJockeySuperCombedCotton();
  });
  await test.step('Click — Select available size', async () => {
    await buyPage.clickM();
  });
  await test.step('Click — Click \'Add to Bag\' button', async () => {
    await buyPage.clickADDTOBAG();
  });
  await test.step('Click — Click on bag/cart icon', async () => {
    await cartPage.clickBAG();
  });
  await test.step('Assert visible — Assert selected product is present in bag', async () => {
    await cartPage.expectMenColourblockedPoloCollarVisible();
  });
});
