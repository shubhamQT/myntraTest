import { test as base, expect } from "@playwright/test";
import { BuyPage } from "../pageobjects/BuyPage";
import { CartPage } from "../pageobjects/CartPage";
import { HomePage } from "../pageobjects/HomePage";
import { LoginPage } from "../pageobjects/LoginPage";
import { MenTshirtsPage } from "../pageobjects/MenTshirtsPage";
import { ProductdetailPage } from "../pageobjects/ProductdetailPage";
import { SerachresultPage } from "../pageobjects/SerachresultPage";

type AppFixtures = {
  buyPage: BuyPage;
  cartPage: CartPage;
  homePage: HomePage;
  loginPage: LoginPage;
  menTshirtsPage: MenTshirtsPage;
  productdetailPage: ProductdetailPage;
  serachresultPage: SerachresultPage;
};

export const test = base.extend<AppFixtures>({
  buyPage: async ({ page }, use) => {
    await use(new BuyPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  menTshirtsPage: async ({ page }, use) => {
    await use(new MenTshirtsPage(page));
  },
  productdetailPage: async ({ page }, use) => {
    await use(new ProductdetailPage(page));
  },
  serachresultPage: async ({ page }, use) => {
    await use(new SerachresultPage(page));
  },
});

export { expect };
