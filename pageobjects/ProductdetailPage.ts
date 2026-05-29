import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class ProductdetailPage {
  private static readonly L = {
    profile: { strategy: 'text' as const, value: 'Profile', actionKind: 'text' as const },
    hIGHLANDER: { strategy: 'text' as const, value: 'HIGHLANDER', actionKind: 'text' as const },
    menSlimFitShirt: { strategy: 'text' as const, value: 'Men Slim Fit Shirt', actionKind: 'text' as const },
    PriceDetailsMaximum: { strategy: 'text' as const, value: '₹479 Price Details Maximum Retail Price Rs. 1599', actionKind: 'text' as const },
    rs1599: { strategy: 'text' as const, value: 'Rs. 1599', actionKind: 'text' as const },
    OFF: { strategy: 'text' as const, value: '70% OFF', actionKind: 'text' as const },
    rs479: { strategy: 'text' as const, value: 'Rs. 479', actionKind: 'text' as const },
    mRP: { strategy: 'text' as const, value: 'MRP', actionKind: 'text' as const },
    OFF2: { strategy: 'text' as const, value: '(70% OFF)', actionKind: 'text' as const },
    inclusiveOfAllTaxes: { strategy: 'text' as const, value: 'inclusive of all taxes', actionKind: 'text' as const },
    inclusiveOfAllTaxes2: { strategy: 'text' as const, value: 'inclusive of all taxes', actionKind: 'text' as const },
    mORECOLORS: { strategy: 'text' as const, value: 'MORE COLORS', actionKind: 'text' as const },
    sELECTSIZE: { strategy: 'text' as const, value: 'SELECT SIZE', actionKind: 'text' as const },
    sIZECHART: { strategy: 'role' as const, value: 'SIZE CHART', role: 'button', actionKind: 'button' as const },
    button: { strategy: 'role' as const, value: '39', role: 'button', actionKind: 'button' as const },
    button2: { strategy: 'role' as const, value: '40', role: 'button', actionKind: 'button' as const },
    button3: { strategy: 'role' as const, value: '42', role: 'button', actionKind: 'button' as const },
    button4: { strategy: 'role' as const, value: '44', role: 'button', actionKind: 'button' as const },
    aDDTOBAG: { strategy: 'text' as const, value: 'ADD TO BAG', actionKind: 'text' as const },
    buyNowWithVIP: { strategy: 'text' as const, value: 'Buy Now with VIP Access', actionKind: 'text' as const },
    wISHLIST: { strategy: 'text' as const, value: 'WISHLIST', actionKind: 'text' as const },
    dELIVERYOPTIONS: { strategy: 'text' as const, value: 'DELIVERY OPTIONS', actionKind: 'text' as const },
    pincode: { strategy: 'css' as const, value: '[name="pincode"]', actionKind: 'textbox' as const },
    pleaseEnterPINCode: { strategy: 'text' as const, value: 'Please enter PIN code to check delivery time & Pay', actionKind: 'text' as const },
    bESTOFFERS: { strategy: 'text' as const, value: 'BEST OFFERS', actionKind: 'text' as const },
    rs359: { strategy: 'text' as const, value: 'Rs. 359', actionKind: 'text' as const },
    applicableOnOrdersAbove: { strategy: 'text' as const, value: 'Applicable on: Orders above Rs. 700 (only on first', actionKind: 'text' as const },
    ordersAboveRs700: { strategy: 'text' as const, value: 'Orders above Rs. 700 (only on first purchase)', actionKind: 'text' as const },
    couponCodeMYNSAVE: { strategy: 'text' as const, value: 'Coupon code: MYNSAVE', actionKind: 'text' as const },
    mYNSAVE: { strategy: 'text' as const, value: 'MYNSAVE', actionKind: 'text' as const },
    couponDiscount25Off: { strategy: 'text' as const, value: 'Coupon Discount: 25% off upto Rs. 200 (check cart', actionKind: 'text' as const },
    OffUptoRs: { strategy: 'text' as const, value: '25% off upto Rs. 200 (check cart for final', actionKind: 'text' as const },
    minSpend3500Max: { strategy: 'text' as const, value: 'Min Spend ₹3,500 Max Discount ₹800', actionKind: 'text' as const },
    minSpend3500Max2: { strategy: 'text' as const, value: 'Min Spend ₹3,500 Max Discount ₹1,250', actionKind: 'text' as const },
    flat75CashbackOn: { strategy: 'text' as const, value: 'Flat 7.5% Cashback on Flipkart Axis Bank & SBI', actionKind: 'text' as const },
    eMIStartingFromRs23Month: { strategy: 'text' as const, value: 'EMI starting from Rs.23/month', actionKind: 'text' as const },
    viewPlan: { strategy: 'text' as const, value: 'View Plan', actionKind: 'text' as const },
    pRODUCTDETAILS: { strategy: 'text' as const, value: 'PRODUCT DETAILS', actionKind: 'text' as const },
    blackSolidOpaqueCasual: { strategy: 'text' as const, value: 'Black solid opaque Casual shirt ,has a spread', actionKind: 'text' as const },
    sizeFit: { strategy: 'text' as const, value: 'Size & Fit', actionKind: 'text' as const },
    brandFitFitSlim: { strategy: 'text' as const, value: 'Brand Fit: Fit: Slim Fit The model (height 6\') is', actionKind: 'text' as const },
    materialCare: { strategy: 'text' as const, value: 'Material & Care', actionKind: 'text' as const },
    Polyester40Cotton: { strategy: 'text' as const, value: '60% Polyester 40% Cotton Machine wash', actionKind: 'text' as const },
    specifications: { strategy: 'text' as const, value: 'Specifications', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '4.2', actionKind: 'text' as const },
    gouthamPatil: { strategy: 'text' as const, value: 'Goutham Patil', actionKind: 'text' as const },
    Sept2025: { strategy: 'text' as const, value: '24 Sept 2025', actionKind: 'text' as const },
    mohEajaz: { strategy: 'text' as const, value: 'Moh Eajaz', actionKind: 'text' as const },
    Jan2026: { strategy: 'text' as const, value: '2 Jan 2026', actionKind: 'text' as const },
    vishalKhanavkar: { strategy: 'text' as const, value: 'Vishal Khanavkar', actionKind: 'text' as const },
    Apr2026: { strategy: 'text' as const, value: '5 Apr 2026', actionKind: 'text' as const },
    productCode: { strategy: 'text' as const, value: 'Product Code:', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '29684214', actionKind: 'text' as const },
    seller: { strategy: 'text' as const, value: 'Seller:', actionKind: 'text' as const },
    flashstarCommerce: { strategy: 'text' as const, value: 'Flashstar Commerce', actionKind: 'text' as const },
    sIMILARPRODUCTS: { strategy: 'text' as const, value: 'SIMILAR PRODUCTS', actionKind: 'text' as const },
    sHOPTHELOOK: { strategy: 'text' as const, value: 'SHOP THE LOOK', actionKind: 'text' as const },
    cUSTOMERSALSOLIKED: { strategy: 'text' as const, value: 'CUSTOMERS ALSO LIKED', actionKind: 'text' as const },
    uSEFULLINKS: { strategy: 'text' as const, value: 'USEFUL LINKS', actionKind: 'text' as const },
    cUSTOMERPOLICIES: { strategy: 'text' as const, value: 'CUSTOMER POLICIES', actionKind: 'text' as const },
    eXPERIENCEMYNTRAAPPON: { strategy: 'text' as const, value: 'EXPERIENCE MYNTRA APP ON MOBILE', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextProfile(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.profile));
  }

  async expectProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.profile), timeoutMs);
  }

  async expectProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.profile), timeoutMs);
  }

  async expectProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.profile), expected, timeoutMs);
  }

  async expectProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.profile), substring, timeoutMs);
  }

  async scrollProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.profile));
  }

  async getInnerTextHIGHLANDER(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.hIGHLANDER));
  }

  async expectHIGHLANDERVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.hIGHLANDER), timeoutMs);
  }

  async expectHIGHLANDERHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.hIGHLANDER), timeoutMs);
  }

  async expectHIGHLANDERText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.hIGHLANDER), expected, timeoutMs);
  }

  async expectHIGHLANDERContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.hIGHLANDER), substring, timeoutMs);
  }

  async scrollHIGHLANDERIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.hIGHLANDER));
  }

  async getInnerTextMenSlimFitShirt(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt));
  }

  async expectMenSlimFitShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt), timeoutMs);
  }

  async expectMenSlimFitShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt), timeoutMs);
  }

  async expectMenSlimFitShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt), expected, timeoutMs);
  }

  async expectMenSlimFitShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt), substring, timeoutMs);
  }

  async scrollMenSlimFitShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt));
  }

  async getInnerTextPriceDetailsMaximum(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum));
  }

  async expectPriceDetailsMaximumVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum), timeoutMs);
  }

  async expectPriceDetailsMaximumHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum), timeoutMs);
  }

  async expectPriceDetailsMaximumText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum), expected, timeoutMs);
  }

  async expectPriceDetailsMaximumContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum), substring, timeoutMs);
  }

  async scrollPriceDetailsMaximumIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum));
  }

  async getInnerTextRs1599(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.rs1599));
  }

  async expectRs1599Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.rs1599), timeoutMs);
  }

  async expectRs1599Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.rs1599), timeoutMs);
  }

  async expectRs1599Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.rs1599), expected, timeoutMs);
  }

  async expectRs1599ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.rs1599), substring, timeoutMs);
  }

  async scrollRs1599IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.rs1599));
  }

  async getInnerTextOFF(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.OFF));
  }

  async expectOFFVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.OFF), timeoutMs);
  }

  async expectOFFHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.OFF), timeoutMs);
  }

  async expectOFFText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.OFF), expected, timeoutMs);
  }

  async expectOFFContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.OFF), substring, timeoutMs);
  }

  async scrollOFFIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.OFF));
  }

  async getInnerTextRs479(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.rs479));
  }

  async expectRs479Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.rs479), timeoutMs);
  }

  async expectRs479Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.rs479), timeoutMs);
  }

  async expectRs479Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.rs479), expected, timeoutMs);
  }

  async expectRs479ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.rs479), substring, timeoutMs);
  }

  async scrollRs479IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.rs479));
  }

  async getInnerTextMRP(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.mRP));
  }

  async expectMRPVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.mRP), timeoutMs);
  }

  async expectMRPHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.mRP), timeoutMs);
  }

  async expectMRPText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.mRP), expected, timeoutMs);
  }

  async expectMRPContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.mRP), substring, timeoutMs);
  }

  async scrollMRPIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.mRP));
  }

  async getInnerTextOFF2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.OFF2));
  }

  async expectOFF2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.OFF2), timeoutMs);
  }

  async expectOFF2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.OFF2), timeoutMs);
  }

  async expectOFF2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.OFF2), expected, timeoutMs);
  }

  async expectOFF2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.OFF2), substring, timeoutMs);
  }

  async scrollOFF2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.OFF2));
  }

  async getInnerTextInclusiveOfAllTaxes(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes));
  }

  async expectInclusiveOfAllTaxesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes), timeoutMs);
  }

  async expectInclusiveOfAllTaxesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes), timeoutMs);
  }

  async expectInclusiveOfAllTaxesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes), expected, timeoutMs);
  }

  async expectInclusiveOfAllTaxesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes), substring, timeoutMs);
  }

  async scrollInclusiveOfAllTaxesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes));
  }

  async getInnerTextInclusiveOfAllTaxes2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2));
  }

  async expectInclusiveOfAllTaxes2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2), timeoutMs);
  }

  async expectInclusiveOfAllTaxes2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2), timeoutMs);
  }

  async expectInclusiveOfAllTaxes2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2), expected, timeoutMs);
  }

  async expectInclusiveOfAllTaxes2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2), substring, timeoutMs);
  }

  async scrollInclusiveOfAllTaxes2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2));
  }

  async getInnerTextMORECOLORS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.mORECOLORS));
  }

  async expectMORECOLORSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.mORECOLORS), timeoutMs);
  }

  async expectMORECOLORSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.mORECOLORS), timeoutMs);
  }

  async expectMORECOLORSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.mORECOLORS), expected, timeoutMs);
  }

  async expectMORECOLORSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.mORECOLORS), substring, timeoutMs);
  }

  async scrollMORECOLORSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.mORECOLORS));
  }

  async getInnerTextSELECTSIZE(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.sELECTSIZE));
  }

  async expectSELECTSIZEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.sELECTSIZE), timeoutMs);
  }

  async expectSELECTSIZEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.sELECTSIZE), timeoutMs);
  }

  async expectSELECTSIZEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.sELECTSIZE), expected, timeoutMs);
  }

  async expectSELECTSIZEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.sELECTSIZE), substring, timeoutMs);
  }

  async scrollSELECTSIZEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.sELECTSIZE));
  }

  async clickSIZECHART(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.sIZECHART));
  }

  async doubleClickSIZECHART(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.sIZECHART));
  }

  async expectSIZECHARTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.sIZECHART), expected, timeoutMs);
  }

  async expectSIZECHARTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.sIZECHART), substring, timeoutMs);
  }

  async scrollSIZECHARTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.sIZECHART));
  }

  async clickButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.button));
  }

  async doubleClickButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.button));
  }

  async expectButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.button), timeoutMs);
  }

  async expectButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.button), timeoutMs);
  }

  async expectButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.button), timeoutMs);
  }

  async expectButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.button), timeoutMs);
  }

  async expectButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.button), expected, timeoutMs);
  }

  async expectButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.button), substring, timeoutMs);
  }

  async scrollButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.button));
  }

  async clickButton2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.button2));
  }

  async doubleClickButton2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.button2));
  }

  async expectButton2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.button2), timeoutMs);
  }

  async expectButton2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.button2), timeoutMs);
  }

  async expectButton2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.button2), timeoutMs);
  }

  async expectButton2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.button2), timeoutMs);
  }

  async expectButton2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.button2), expected, timeoutMs);
  }

  async expectButton2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.button2), substring, timeoutMs);
  }

  async scrollButton2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.button2));
  }

  async clickButton3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.button3));
  }

  async doubleClickButton3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.button3));
  }

  async expectButton3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.button3), timeoutMs);
  }

  async expectButton3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.button3), timeoutMs);
  }

  async expectButton3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.button3), timeoutMs);
  }

  async expectButton3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.button3), timeoutMs);
  }

  async expectButton3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.button3), expected, timeoutMs);
  }

  async expectButton3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.button3), substring, timeoutMs);
  }

  async scrollButton3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.button3));
  }

  async clickButton4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.button4));
  }

  async doubleClickButton4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.button4));
  }

  async expectButton4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.button4), timeoutMs);
  }

  async expectButton4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.button4), timeoutMs);
  }

  async expectButton4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.button4), timeoutMs);
  }

  async expectButton4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.button4), timeoutMs);
  }

  async expectButton4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.button4), expected, timeoutMs);
  }

  async expectButton4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.button4), substring, timeoutMs);
  }

  async scrollButton4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.button4));
  }

  async getInnerTextADDTOBAG(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.aDDTOBAG));
  }

  async expectADDTOBAGVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.aDDTOBAG), expected, timeoutMs);
  }

  async expectADDTOBAGContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.aDDTOBAG), substring, timeoutMs);
  }

  async scrollADDTOBAGIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.aDDTOBAG));
  }

  async getInnerTextBuyNowWithVIP(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP));
  }

  async expectBuyNowWithVIPVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP), expected, timeoutMs);
  }

  async expectBuyNowWithVIPContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP), substring, timeoutMs);
  }

  async scrollBuyNowWithVIPIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP));
  }

  async getInnerTextWISHLIST(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.wISHLIST));
  }

  async expectWISHLISTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.wISHLIST), expected, timeoutMs);
  }

  async expectWISHLISTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.wISHLIST), substring, timeoutMs);
  }

  async scrollWISHLISTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.wISHLIST));
  }

  async getInnerTextDELIVERYOPTIONS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS));
  }

  async expectDELIVERYOPTIONSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS), expected, timeoutMs);
  }

  async expectDELIVERYOPTIONSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS), substring, timeoutMs);
  }

  async scrollDELIVERYOPTIONSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS));
  }

  async fillPincode(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, ProductdetailPage.L.pincode), value);
  }

  async clearPincode(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, ProductdetailPage.L.pincode));
  }

  async typeTextPincode(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, ProductdetailPage.L.pincode), value);
  }

  async expectPincodeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.pincode), timeoutMs);
  }

  async expectPincodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.pincode), timeoutMs);
  }

  async expectPincodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.pincode), timeoutMs);
  }

  async expectPincodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.pincode), timeoutMs);
  }

  async expectPincodeValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.pincode), expected, timeoutMs);
  }

  async expectPincodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.pincode), timeoutMs);
  }

  async scrollPincodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.pincode));
  }

  async getInnerTextPleaseEnterPINCode(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode));
  }

  async expectPleaseEnterPINCodeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode), expected, timeoutMs);
  }

  async expectPleaseEnterPINCodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode), substring, timeoutMs);
  }

  async scrollPleaseEnterPINCodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode));
  }

  async getInnerTextBESTOFFERS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.bESTOFFERS));
  }

  async expectBESTOFFERSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.bESTOFFERS), timeoutMs);
  }

  async expectBESTOFFERSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.bESTOFFERS), timeoutMs);
  }

  async expectBESTOFFERSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.bESTOFFERS), expected, timeoutMs);
  }

  async expectBESTOFFERSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.bESTOFFERS), substring, timeoutMs);
  }

  async scrollBESTOFFERSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.bESTOFFERS));
  }

  async getInnerTextRs359(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.rs359));
  }

  async expectRs359Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.rs359), timeoutMs);
  }

  async expectRs359Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.rs359), timeoutMs);
  }

  async expectRs359Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.rs359), expected, timeoutMs);
  }

  async expectRs359ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.rs359), substring, timeoutMs);
  }

  async scrollRs359IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.rs359));
  }

  async getInnerTextApplicableOnOrdersAbove(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove));
  }

  async expectApplicableOnOrdersAboveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove), timeoutMs);
  }

  async expectApplicableOnOrdersAboveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove), timeoutMs);
  }

  async expectApplicableOnOrdersAboveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove), expected, timeoutMs);
  }

  async expectApplicableOnOrdersAboveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove), substring, timeoutMs);
  }

  async scrollApplicableOnOrdersAboveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove));
  }

  async getInnerTextOrdersAboveRs700(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700));
  }

  async expectOrdersAboveRs700Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700), timeoutMs);
  }

  async expectOrdersAboveRs700Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700), timeoutMs);
  }

  async expectOrdersAboveRs700Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700), expected, timeoutMs);
  }

  async expectOrdersAboveRs700ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700), substring, timeoutMs);
  }

  async scrollOrdersAboveRs700IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700));
  }

  async getInnerTextCouponCodeMYNSAVE(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE));
  }

  async expectCouponCodeMYNSAVEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE), timeoutMs);
  }

  async expectCouponCodeMYNSAVEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE), timeoutMs);
  }

  async expectCouponCodeMYNSAVEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE), expected, timeoutMs);
  }

  async expectCouponCodeMYNSAVEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE), substring, timeoutMs);
  }

  async scrollCouponCodeMYNSAVEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE));
  }

  async getInnerTextMYNSAVE(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.mYNSAVE));
  }

  async expectMYNSAVEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.mYNSAVE), timeoutMs);
  }

  async expectMYNSAVEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.mYNSAVE), timeoutMs);
  }

  async expectMYNSAVEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.mYNSAVE), expected, timeoutMs);
  }

  async expectMYNSAVEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.mYNSAVE), substring, timeoutMs);
  }

  async scrollMYNSAVEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.mYNSAVE));
  }

  async getInnerTextCouponDiscount25Off(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off));
  }

  async expectCouponDiscount25OffVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off), timeoutMs);
  }

  async expectCouponDiscount25OffHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off), timeoutMs);
  }

  async expectCouponDiscount25OffText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off), expected, timeoutMs);
  }

  async expectCouponDiscount25OffContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off), substring, timeoutMs);
  }

  async scrollCouponDiscount25OffIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off));
  }

  async getInnerTextOffUptoRs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.OffUptoRs));
  }

  async expectOffUptoRsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.OffUptoRs), timeoutMs);
  }

  async expectOffUptoRsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.OffUptoRs), timeoutMs);
  }

  async expectOffUptoRsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.OffUptoRs), expected, timeoutMs);
  }

  async expectOffUptoRsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.OffUptoRs), substring, timeoutMs);
  }

  async scrollOffUptoRsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.OffUptoRs));
  }

  async getInnerTextMinSpend3500Max(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.minSpend3500Max));
  }

  async expectMinSpend3500MaxVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.minSpend3500Max), timeoutMs);
  }

  async expectMinSpend3500MaxHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.minSpend3500Max), timeoutMs);
  }

  async expectMinSpend3500MaxText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.minSpend3500Max), expected, timeoutMs);
  }

  async expectMinSpend3500MaxContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.minSpend3500Max), substring, timeoutMs);
  }

  async scrollMinSpend3500MaxIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.minSpend3500Max));
  }

  async getInnerTextMinSpend3500Max2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2));
  }

  async expectMinSpend3500Max2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2), timeoutMs);
  }

  async expectMinSpend3500Max2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2), timeoutMs);
  }

  async expectMinSpend3500Max2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2), expected, timeoutMs);
  }

  async expectMinSpend3500Max2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2), substring, timeoutMs);
  }

  async scrollMinSpend3500Max2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2));
  }

  async getInnerTextFlat75CashbackOn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn));
  }

  async expectFlat75CashbackOnVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn), timeoutMs);
  }

  async expectFlat75CashbackOnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn), timeoutMs);
  }

  async expectFlat75CashbackOnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn), expected, timeoutMs);
  }

  async expectFlat75CashbackOnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn), substring, timeoutMs);
  }

  async scrollFlat75CashbackOnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn));
  }

  async getInnerTextEMIStartingFromRs23Month(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month));
  }

  async expectEMIStartingFromRs23MonthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month), timeoutMs);
  }

  async expectEMIStartingFromRs23MonthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month), timeoutMs);
  }

  async expectEMIStartingFromRs23MonthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month), expected, timeoutMs);
  }

  async expectEMIStartingFromRs23MonthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month), substring, timeoutMs);
  }

  async scrollEMIStartingFromRs23MonthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month));
  }

  async getInnerTextViewPlan(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.viewPlan));
  }

  async expectViewPlanVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.viewPlan), timeoutMs);
  }

  async expectViewPlanHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.viewPlan), timeoutMs);
  }

  async expectViewPlanText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.viewPlan), expected, timeoutMs);
  }

  async expectViewPlanContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.viewPlan), substring, timeoutMs);
  }

  async scrollViewPlanIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.viewPlan));
  }

  async getInnerTextPRODUCTDETAILS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS));
  }

  async expectPRODUCTDETAILSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS), timeoutMs);
  }

  async expectPRODUCTDETAILSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS), timeoutMs);
  }

  async expectPRODUCTDETAILSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS), expected, timeoutMs);
  }

  async expectPRODUCTDETAILSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS), substring, timeoutMs);
  }

  async scrollPRODUCTDETAILSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS));
  }

  async getInnerTextBlackSolidOpaqueCasual(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual));
  }

  async expectBlackSolidOpaqueCasualVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual), timeoutMs);
  }

  async expectBlackSolidOpaqueCasualHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual), timeoutMs);
  }

  async expectBlackSolidOpaqueCasualText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual), expected, timeoutMs);
  }

  async expectBlackSolidOpaqueCasualContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual), substring, timeoutMs);
  }

  async scrollBlackSolidOpaqueCasualIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual));
  }

  async getInnerTextSizeFit(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.sizeFit));
  }

  async expectSizeFitVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.sizeFit), timeoutMs);
  }

  async expectSizeFitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.sizeFit), timeoutMs);
  }

  async expectSizeFitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.sizeFit), expected, timeoutMs);
  }

  async expectSizeFitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.sizeFit), substring, timeoutMs);
  }

  async scrollSizeFitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.sizeFit));
  }

  async getInnerTextBrandFitFitSlim(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim));
  }

  async expectBrandFitFitSlimVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim), timeoutMs);
  }

  async expectBrandFitFitSlimHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim), timeoutMs);
  }

  async expectBrandFitFitSlimText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim), expected, timeoutMs);
  }

  async expectBrandFitFitSlimContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim), substring, timeoutMs);
  }

  async scrollBrandFitFitSlimIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim));
  }

  async getInnerTextMaterialCare(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.materialCare));
  }

  async expectMaterialCareVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.materialCare), timeoutMs);
  }

  async expectMaterialCareHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.materialCare), timeoutMs);
  }

  async expectMaterialCareText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.materialCare), expected, timeoutMs);
  }

  async expectMaterialCareContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.materialCare), substring, timeoutMs);
  }

  async scrollMaterialCareIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.materialCare));
  }

  async getInnerTextPolyester40Cotton(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton));
  }

  async expectPolyester40CottonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton), timeoutMs);
  }

  async expectPolyester40CottonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton), timeoutMs);
  }

  async expectPolyester40CottonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton), expected, timeoutMs);
  }

  async expectPolyester40CottonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton), substring, timeoutMs);
  }

  async scrollPolyester40CottonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton));
  }

  async getInnerTextSpecifications(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.specifications));
  }

  async expectSpecificationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.specifications), timeoutMs);
  }

  async expectSpecificationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.specifications), timeoutMs);
  }

  async expectSpecificationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.specifications), expected, timeoutMs);
  }

  async expectSpecificationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.specifications), substring, timeoutMs);
  }

  async scrollSpecificationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.specifications));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.element));
  }

  async getInnerTextGouthamPatil(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.gouthamPatil));
  }

  async expectGouthamPatilVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.gouthamPatil), timeoutMs);
  }

  async expectGouthamPatilHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.gouthamPatil), timeoutMs);
  }

  async expectGouthamPatilText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.gouthamPatil), expected, timeoutMs);
  }

  async expectGouthamPatilContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.gouthamPatil), substring, timeoutMs);
  }

  async scrollGouthamPatilIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.gouthamPatil));
  }

  async getInnerTextSept2025(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.Sept2025));
  }

  async expectSept2025Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.Sept2025), timeoutMs);
  }

  async expectSept2025Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.Sept2025), timeoutMs);
  }

  async expectSept2025Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.Sept2025), expected, timeoutMs);
  }

  async expectSept2025ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.Sept2025), substring, timeoutMs);
  }

  async scrollSept2025IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.Sept2025));
  }

  async getInnerTextMohEajaz(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.mohEajaz));
  }

  async expectMohEajazVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.mohEajaz), timeoutMs);
  }

  async expectMohEajazHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.mohEajaz), timeoutMs);
  }

  async expectMohEajazText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.mohEajaz), expected, timeoutMs);
  }

  async expectMohEajazContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.mohEajaz), substring, timeoutMs);
  }

  async scrollMohEajazIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.mohEajaz));
  }

  async getInnerTextJan2026(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.Jan2026));
  }

  async expectJan2026Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.Jan2026), timeoutMs);
  }

  async expectJan2026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.Jan2026), timeoutMs);
  }

  async expectJan2026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.Jan2026), expected, timeoutMs);
  }

  async expectJan2026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.Jan2026), substring, timeoutMs);
  }

  async scrollJan2026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.Jan2026));
  }

  async getInnerTextVishalKhanavkar(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar));
  }

  async expectVishalKhanavkarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar), timeoutMs);
  }

  async expectVishalKhanavkarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar), timeoutMs);
  }

  async expectVishalKhanavkarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar), expected, timeoutMs);
  }

  async expectVishalKhanavkarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar), substring, timeoutMs);
  }

  async scrollVishalKhanavkarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar));
  }

  async getInnerTextApr2026(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.Apr2026));
  }

  async expectApr2026Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.Apr2026), timeoutMs);
  }

  async expectApr2026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.Apr2026), timeoutMs);
  }

  async expectApr2026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.Apr2026), expected, timeoutMs);
  }

  async expectApr2026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.Apr2026), substring, timeoutMs);
  }

  async scrollApr2026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.Apr2026));
  }

  async getInnerTextProductCode(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.productCode));
  }

  async expectProductCodeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.productCode), timeoutMs);
  }

  async expectProductCodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.productCode), timeoutMs);
  }

  async expectProductCodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.productCode), expected, timeoutMs);
  }

  async expectProductCodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.productCode), substring, timeoutMs);
  }

  async scrollProductCodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.productCode));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.element2));
  }

  async getInnerTextSeller(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.seller));
  }

  async expectSellerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.seller), timeoutMs);
  }

  async expectSellerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.seller), timeoutMs);
  }

  async expectSellerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.seller), expected, timeoutMs);
  }

  async expectSellerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.seller), substring, timeoutMs);
  }

  async scrollSellerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.seller));
  }

  async getInnerTextFlashstarCommerce(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.flashstarCommerce));
  }

  async expectFlashstarCommerceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.flashstarCommerce), timeoutMs);
  }

  async expectFlashstarCommerceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.flashstarCommerce), timeoutMs);
  }

  async expectFlashstarCommerceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.flashstarCommerce), expected, timeoutMs);
  }

  async expectFlashstarCommerceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.flashstarCommerce), substring, timeoutMs);
  }

  async scrollFlashstarCommerceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.flashstarCommerce));
  }

  async getInnerTextSIMILARPRODUCTS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS));
  }

  async expectSIMILARPRODUCTSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS), timeoutMs);
  }

  async expectSIMILARPRODUCTSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS), timeoutMs);
  }

  async expectSIMILARPRODUCTSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS), expected, timeoutMs);
  }

  async expectSIMILARPRODUCTSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS), substring, timeoutMs);
  }

  async scrollSIMILARPRODUCTSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS));
  }

  async getInnerTextSHOPTHELOOK(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK));
  }

  async expectSHOPTHELOOKVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK), timeoutMs);
  }

  async expectSHOPTHELOOKHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK), timeoutMs);
  }

  async expectSHOPTHELOOKText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK), expected, timeoutMs);
  }

  async expectSHOPTHELOOKContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK), substring, timeoutMs);
  }

  async scrollSHOPTHELOOKIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK));
  }

  async getInnerTextCUSTOMERSALSOLIKED(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED));
  }

  async expectCUSTOMERSALSOLIKEDVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED), timeoutMs);
  }

  async expectCUSTOMERSALSOLIKEDHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED), timeoutMs);
  }

  async expectCUSTOMERSALSOLIKEDText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED), expected, timeoutMs);
  }

  async expectCUSTOMERSALSOLIKEDContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED), substring, timeoutMs);
  }

  async scrollCUSTOMERSALSOLIKEDIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED));
  }

  async getInnerTextUSEFULLINKS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS));
  }

  async expectUSEFULLINKSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS), timeoutMs);
  }

  async expectUSEFULLINKSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS), timeoutMs);
  }

  async expectUSEFULLINKSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS), expected, timeoutMs);
  }

  async expectUSEFULLINKSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS), substring, timeoutMs);
  }

  async scrollUSEFULLINKSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS));
  }

  async getInnerTextCUSTOMERPOLICIES(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES));
  }

  async expectCUSTOMERPOLICIESVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES), timeoutMs);
  }

  async expectCUSTOMERPOLICIESHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES), timeoutMs);
  }

  async expectCUSTOMERPOLICIESText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES), expected, timeoutMs);
  }

  async expectCUSTOMERPOLICIESContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES), substring, timeoutMs);
  }

  async scrollCUSTOMERPOLICIESIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES));
  }

  async getInnerTextEXPERIENCEMYNTRAAPPON(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON));
  }

  async expectEXPERIENCEMYNTRAAPPONVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON), timeoutMs);
  }

  async expectEXPERIENCEMYNTRAAPPONHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON), timeoutMs);
  }

  async expectEXPERIENCEMYNTRAAPPONText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON), expected, timeoutMs);
  }

  async expectEXPERIENCEMYNTRAAPPONContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON), substring, timeoutMs);
  }

  async scrollEXPERIENCEMYNTRAAPPONIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON));
  }


  async clickProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.profile));
  }

  async doubleClickProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.profile));
  }

  async longPressProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.profile));
  }

  async expectProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.profile), value, timeoutMs);
  }

  async expectProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.profile), timeoutMs);
  }

  async expectProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.profile), timeoutMs);
  }

  async expectProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.profile), timeoutMs);
  }

  async expectProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.profile), timeoutMs);
  }

  async expectProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.profile), timeoutMs);
  }

  async expectProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.profile), count, timeoutMs);
  }

  async clickHIGHLANDER(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.hIGHLANDER));
  }

  async doubleClickHIGHLANDER(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.hIGHLANDER));
  }

  async longPressHIGHLANDER(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.hIGHLANDER));
  }

  async expectHIGHLANDERValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.hIGHLANDER), value, timeoutMs);
  }

  async expectHIGHLANDEREnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.hIGHLANDER), timeoutMs);
  }

  async expectHIGHLANDERDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.hIGHLANDER), timeoutMs);
  }

  async expectHIGHLANDERChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.hIGHLANDER), timeoutMs);
  }

  async expectHIGHLANDERUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.hIGHLANDER), timeoutMs);
  }

  async expectHIGHLANDERFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.hIGHLANDER), timeoutMs);
  }

  async expectHIGHLANDERCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.hIGHLANDER), count, timeoutMs);
  }

  async clickMenSlimFitShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt));
  }

  async doubleClickMenSlimFitShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt));
  }

  async longPressMenSlimFitShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt));
  }

  async expectMenSlimFitShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt), value, timeoutMs);
  }

  async expectMenSlimFitShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt), timeoutMs);
  }

  async expectMenSlimFitShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt), timeoutMs);
  }

  async expectMenSlimFitShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt), timeoutMs);
  }

  async expectMenSlimFitShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt), timeoutMs);
  }

  async expectMenSlimFitShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt), timeoutMs);
  }

  async expectMenSlimFitShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.menSlimFitShirt), count, timeoutMs);
  }

  async clickPriceDetailsMaximum(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum));
  }

  async doubleClickPriceDetailsMaximum(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum));
  }

  async longPressPriceDetailsMaximum(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum));
  }

  async expectPriceDetailsMaximumValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum), value, timeoutMs);
  }

  async expectPriceDetailsMaximumEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum), timeoutMs);
  }

  async expectPriceDetailsMaximumDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum), timeoutMs);
  }

  async expectPriceDetailsMaximumChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum), timeoutMs);
  }

  async expectPriceDetailsMaximumUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum), timeoutMs);
  }

  async expectPriceDetailsMaximumFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum), timeoutMs);
  }

  async expectPriceDetailsMaximumCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.PriceDetailsMaximum), count, timeoutMs);
  }

  async clickRs1599(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.rs1599));
  }

  async doubleClickRs1599(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.rs1599));
  }

  async longPressRs1599(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.rs1599));
  }

  async expectRs1599Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.rs1599), value, timeoutMs);
  }

  async expectRs1599Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.rs1599), timeoutMs);
  }

  async expectRs1599Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.rs1599), timeoutMs);
  }

  async expectRs1599Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.rs1599), timeoutMs);
  }

  async expectRs1599Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.rs1599), timeoutMs);
  }

  async expectRs1599Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.rs1599), timeoutMs);
  }

  async expectRs1599Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.rs1599), count, timeoutMs);
  }

  async clickOFF(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.OFF));
  }

  async doubleClickOFF(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.OFF));
  }

  async longPressOFF(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.OFF));
  }

  async expectOFFValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.OFF), value, timeoutMs);
  }

  async expectOFFEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.OFF), timeoutMs);
  }

  async expectOFFDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.OFF), timeoutMs);
  }

  async expectOFFChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.OFF), timeoutMs);
  }

  async expectOFFUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.OFF), timeoutMs);
  }

  async expectOFFFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.OFF), timeoutMs);
  }

  async expectOFFCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.OFF), count, timeoutMs);
  }

  async clickRs479(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.rs479));
  }

  async doubleClickRs479(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.rs479));
  }

  async longPressRs479(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.rs479));
  }

  async expectRs479Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.rs479), value, timeoutMs);
  }

  async expectRs479Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.rs479), timeoutMs);
  }

  async expectRs479Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.rs479), timeoutMs);
  }

  async expectRs479Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.rs479), timeoutMs);
  }

  async expectRs479Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.rs479), timeoutMs);
  }

  async expectRs479Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.rs479), timeoutMs);
  }

  async expectRs479Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.rs479), count, timeoutMs);
  }

  async clickMRP(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.mRP));
  }

  async doubleClickMRP(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.mRP));
  }

  async longPressMRP(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.mRP));
  }

  async expectMRPValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.mRP), value, timeoutMs);
  }

  async expectMRPEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.mRP), timeoutMs);
  }

  async expectMRPDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.mRP), timeoutMs);
  }

  async expectMRPChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.mRP), timeoutMs);
  }

  async expectMRPUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.mRP), timeoutMs);
  }

  async expectMRPFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.mRP), timeoutMs);
  }

  async expectMRPCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.mRP), count, timeoutMs);
  }

  async clickOFF2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.OFF2));
  }

  async doubleClickOFF2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.OFF2));
  }

  async longPressOFF2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.OFF2));
  }

  async expectOFF2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.OFF2), value, timeoutMs);
  }

  async expectOFF2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.OFF2), timeoutMs);
  }

  async expectOFF2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.OFF2), timeoutMs);
  }

  async expectOFF2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.OFF2), timeoutMs);
  }

  async expectOFF2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.OFF2), timeoutMs);
  }

  async expectOFF2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.OFF2), timeoutMs);
  }

  async expectOFF2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.OFF2), count, timeoutMs);
  }

  async clickInclusiveOfAllTaxes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes));
  }

  async doubleClickInclusiveOfAllTaxes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes));
  }

  async longPressInclusiveOfAllTaxes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes));
  }

  async expectInclusiveOfAllTaxesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes), value, timeoutMs);
  }

  async expectInclusiveOfAllTaxesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes), timeoutMs);
  }

  async expectInclusiveOfAllTaxesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes), timeoutMs);
  }

  async expectInclusiveOfAllTaxesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes), timeoutMs);
  }

  async expectInclusiveOfAllTaxesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes), timeoutMs);
  }

  async expectInclusiveOfAllTaxesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes), timeoutMs);
  }

  async expectInclusiveOfAllTaxesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes), count, timeoutMs);
  }

  async clickInclusiveOfAllTaxes2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2));
  }

  async doubleClickInclusiveOfAllTaxes2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2));
  }

  async longPressInclusiveOfAllTaxes2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2));
  }

  async expectInclusiveOfAllTaxes2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2), value, timeoutMs);
  }

  async expectInclusiveOfAllTaxes2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2), timeoutMs);
  }

  async expectInclusiveOfAllTaxes2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2), timeoutMs);
  }

  async expectInclusiveOfAllTaxes2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2), timeoutMs);
  }

  async expectInclusiveOfAllTaxes2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2), timeoutMs);
  }

  async expectInclusiveOfAllTaxes2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2), timeoutMs);
  }

  async expectInclusiveOfAllTaxes2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.inclusiveOfAllTaxes2), count, timeoutMs);
  }

  async clickMORECOLORS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.mORECOLORS));
  }

  async doubleClickMORECOLORS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.mORECOLORS));
  }

  async longPressMORECOLORS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.mORECOLORS));
  }

  async expectMORECOLORSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.mORECOLORS), value, timeoutMs);
  }

  async expectMORECOLORSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.mORECOLORS), timeoutMs);
  }

  async expectMORECOLORSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.mORECOLORS), timeoutMs);
  }

  async expectMORECOLORSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.mORECOLORS), timeoutMs);
  }

  async expectMORECOLORSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.mORECOLORS), timeoutMs);
  }

  async expectMORECOLORSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.mORECOLORS), timeoutMs);
  }

  async expectMORECOLORSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.mORECOLORS), count, timeoutMs);
  }

  async clickSELECTSIZE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.sELECTSIZE));
  }

  async doubleClickSELECTSIZE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.sELECTSIZE));
  }

  async longPressSELECTSIZE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.sELECTSIZE));
  }

  async expectSELECTSIZEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.sELECTSIZE), value, timeoutMs);
  }

  async expectSELECTSIZEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.sELECTSIZE), timeoutMs);
  }

  async expectSELECTSIZEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.sELECTSIZE), timeoutMs);
  }

  async expectSELECTSIZEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.sELECTSIZE), timeoutMs);
  }

  async expectSELECTSIZEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.sELECTSIZE), timeoutMs);
  }

  async expectSELECTSIZEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.sELECTSIZE), timeoutMs);
  }

  async expectSELECTSIZECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.sELECTSIZE), count, timeoutMs);
  }

  async longPressSIZECHART(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.sIZECHART));
  }

  async expectSIZECHARTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.sIZECHART), value, timeoutMs);
  }

  async expectSIZECHARTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.sIZECHART), count, timeoutMs);
  }

  async longPressButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.button));
  }

  async expectButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.button), value, timeoutMs);
  }

  async expectButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.button), timeoutMs);
  }

  async expectButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.button), timeoutMs);
  }

  async expectButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.button), timeoutMs);
  }

  async expectButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.button), count, timeoutMs);
  }

  async longPressButton2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.button2));
  }

  async expectButton2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.button2), value, timeoutMs);
  }

  async expectButton2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.button2), timeoutMs);
  }

  async expectButton2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.button2), timeoutMs);
  }

  async expectButton2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.button2), timeoutMs);
  }

  async expectButton2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.button2), count, timeoutMs);
  }

  async longPressButton3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.button3));
  }

  async expectButton3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.button3), value, timeoutMs);
  }

  async expectButton3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.button3), timeoutMs);
  }

  async expectButton3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.button3), timeoutMs);
  }

  async expectButton3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.button3), timeoutMs);
  }

  async expectButton3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.button3), count, timeoutMs);
  }

  async longPressButton4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.button4));
  }

  async expectButton4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.button4), value, timeoutMs);
  }

  async expectButton4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.button4), timeoutMs);
  }

  async expectButton4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.button4), timeoutMs);
  }

  async expectButton4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.button4), timeoutMs);
  }

  async expectButton4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.button4), count, timeoutMs);
  }

  async clickADDTOBAG(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.aDDTOBAG));
  }

  async doubleClickADDTOBAG(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.aDDTOBAG));
  }

  async longPressADDTOBAG(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.aDDTOBAG));
  }

  async expectADDTOBAGValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.aDDTOBAG), value, timeoutMs);
  }

  async expectADDTOBAGEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.aDDTOBAG), count, timeoutMs);
  }

  async clickBuyNowWithVIP(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP));
  }

  async doubleClickBuyNowWithVIP(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP));
  }

  async longPressBuyNowWithVIP(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP));
  }

  async expectBuyNowWithVIPValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP), value, timeoutMs);
  }

  async expectBuyNowWithVIPEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.buyNowWithVIP), count, timeoutMs);
  }

  async clickWISHLIST(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.wISHLIST));
  }

  async doubleClickWISHLIST(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.wISHLIST));
  }

  async longPressWISHLIST(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.wISHLIST));
  }

  async expectWISHLISTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.wISHLIST), value, timeoutMs);
  }

  async expectWISHLISTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.wISHLIST), count, timeoutMs);
  }

  async clickDELIVERYOPTIONS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS));
  }

  async doubleClickDELIVERYOPTIONS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS));
  }

  async longPressDELIVERYOPTIONS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS));
  }

  async expectDELIVERYOPTIONSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS), value, timeoutMs);
  }

  async expectDELIVERYOPTIONSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.dELIVERYOPTIONS), count, timeoutMs);
  }

  async expectPincodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductdetailPage.L.pincode), expected, timeoutMs);
  }

  async expectPincodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductdetailPage.L.pincode), substring, timeoutMs);
  }

  async expectPincodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.pincode), timeoutMs);
  }

  async expectPincodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.pincode), timeoutMs);
  }

  async expectPincodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.pincode), count, timeoutMs);
  }

  async clickPleaseEnterPINCode(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode));
  }

  async doubleClickPleaseEnterPINCode(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode));
  }

  async longPressPleaseEnterPINCode(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode));
  }

  async expectPleaseEnterPINCodeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode), value, timeoutMs);
  }

  async expectPleaseEnterPINCodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.pleaseEnterPINCode), count, timeoutMs);
  }

  async clickBESTOFFERS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.bESTOFFERS));
  }

  async doubleClickBESTOFFERS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.bESTOFFERS));
  }

  async longPressBESTOFFERS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.bESTOFFERS));
  }

  async expectBESTOFFERSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.bESTOFFERS), value, timeoutMs);
  }

  async expectBESTOFFERSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.bESTOFFERS), timeoutMs);
  }

  async expectBESTOFFERSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.bESTOFFERS), timeoutMs);
  }

  async expectBESTOFFERSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.bESTOFFERS), timeoutMs);
  }

  async expectBESTOFFERSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.bESTOFFERS), timeoutMs);
  }

  async expectBESTOFFERSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.bESTOFFERS), timeoutMs);
  }

  async expectBESTOFFERSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.bESTOFFERS), count, timeoutMs);
  }

  async clickRs359(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.rs359));
  }

  async doubleClickRs359(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.rs359));
  }

  async longPressRs359(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.rs359));
  }

  async expectRs359Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.rs359), value, timeoutMs);
  }

  async expectRs359Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.rs359), timeoutMs);
  }

  async expectRs359Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.rs359), timeoutMs);
  }

  async expectRs359Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.rs359), timeoutMs);
  }

  async expectRs359Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.rs359), timeoutMs);
  }

  async expectRs359Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.rs359), timeoutMs);
  }

  async expectRs359Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.rs359), count, timeoutMs);
  }

  async clickApplicableOnOrdersAbove(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove));
  }

  async doubleClickApplicableOnOrdersAbove(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove));
  }

  async longPressApplicableOnOrdersAbove(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove));
  }

  async expectApplicableOnOrdersAboveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove), value, timeoutMs);
  }

  async expectApplicableOnOrdersAboveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove), timeoutMs);
  }

  async expectApplicableOnOrdersAboveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove), timeoutMs);
  }

  async expectApplicableOnOrdersAboveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove), timeoutMs);
  }

  async expectApplicableOnOrdersAboveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove), timeoutMs);
  }

  async expectApplicableOnOrdersAboveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove), timeoutMs);
  }

  async expectApplicableOnOrdersAboveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.applicableOnOrdersAbove), count, timeoutMs);
  }

  async clickOrdersAboveRs700(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700));
  }

  async doubleClickOrdersAboveRs700(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700));
  }

  async longPressOrdersAboveRs700(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700));
  }

  async expectOrdersAboveRs700Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700), value, timeoutMs);
  }

  async expectOrdersAboveRs700Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700), timeoutMs);
  }

  async expectOrdersAboveRs700Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700), timeoutMs);
  }

  async expectOrdersAboveRs700Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700), timeoutMs);
  }

  async expectOrdersAboveRs700Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700), timeoutMs);
  }

  async expectOrdersAboveRs700Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700), timeoutMs);
  }

  async expectOrdersAboveRs700Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.ordersAboveRs700), count, timeoutMs);
  }

  async clickCouponCodeMYNSAVE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE));
  }

  async doubleClickCouponCodeMYNSAVE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE));
  }

  async longPressCouponCodeMYNSAVE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE));
  }

  async expectCouponCodeMYNSAVEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE), value, timeoutMs);
  }

  async expectCouponCodeMYNSAVEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE), timeoutMs);
  }

  async expectCouponCodeMYNSAVEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE), timeoutMs);
  }

  async expectCouponCodeMYNSAVEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE), timeoutMs);
  }

  async expectCouponCodeMYNSAVEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE), timeoutMs);
  }

  async expectCouponCodeMYNSAVEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE), timeoutMs);
  }

  async expectCouponCodeMYNSAVECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.couponCodeMYNSAVE), count, timeoutMs);
  }

  async clickMYNSAVE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.mYNSAVE));
  }

  async doubleClickMYNSAVE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.mYNSAVE));
  }

  async longPressMYNSAVE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.mYNSAVE));
  }

  async expectMYNSAVEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.mYNSAVE), value, timeoutMs);
  }

  async expectMYNSAVEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.mYNSAVE), timeoutMs);
  }

  async expectMYNSAVEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.mYNSAVE), timeoutMs);
  }

  async expectMYNSAVEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.mYNSAVE), timeoutMs);
  }

  async expectMYNSAVEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.mYNSAVE), timeoutMs);
  }

  async expectMYNSAVEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.mYNSAVE), timeoutMs);
  }

  async expectMYNSAVECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.mYNSAVE), count, timeoutMs);
  }

  async clickCouponDiscount25Off(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off));
  }

  async doubleClickCouponDiscount25Off(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off));
  }

  async longPressCouponDiscount25Off(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off));
  }

  async expectCouponDiscount25OffValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off), value, timeoutMs);
  }

  async expectCouponDiscount25OffEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off), timeoutMs);
  }

  async expectCouponDiscount25OffDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off), timeoutMs);
  }

  async expectCouponDiscount25OffChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off), timeoutMs);
  }

  async expectCouponDiscount25OffUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off), timeoutMs);
  }

  async expectCouponDiscount25OffFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off), timeoutMs);
  }

  async expectCouponDiscount25OffCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.couponDiscount25Off), count, timeoutMs);
  }

  async clickOffUptoRs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.OffUptoRs));
  }

  async doubleClickOffUptoRs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.OffUptoRs));
  }

  async longPressOffUptoRs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.OffUptoRs));
  }

  async expectOffUptoRsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.OffUptoRs), value, timeoutMs);
  }

  async expectOffUptoRsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.OffUptoRs), timeoutMs);
  }

  async expectOffUptoRsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.OffUptoRs), timeoutMs);
  }

  async expectOffUptoRsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.OffUptoRs), timeoutMs);
  }

  async expectOffUptoRsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.OffUptoRs), timeoutMs);
  }

  async expectOffUptoRsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.OffUptoRs), timeoutMs);
  }

  async expectOffUptoRsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.OffUptoRs), count, timeoutMs);
  }

  async clickMinSpend3500Max(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.minSpend3500Max));
  }

  async doubleClickMinSpend3500Max(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.minSpend3500Max));
  }

  async longPressMinSpend3500Max(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.minSpend3500Max));
  }

  async expectMinSpend3500MaxValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.minSpend3500Max), value, timeoutMs);
  }

  async expectMinSpend3500MaxEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.minSpend3500Max), timeoutMs);
  }

  async expectMinSpend3500MaxDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.minSpend3500Max), timeoutMs);
  }

  async expectMinSpend3500MaxChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.minSpend3500Max), timeoutMs);
  }

  async expectMinSpend3500MaxUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.minSpend3500Max), timeoutMs);
  }

  async expectMinSpend3500MaxFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.minSpend3500Max), timeoutMs);
  }

  async expectMinSpend3500MaxCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.minSpend3500Max), count, timeoutMs);
  }

  async clickMinSpend3500Max2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2));
  }

  async doubleClickMinSpend3500Max2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2));
  }

  async longPressMinSpend3500Max2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2));
  }

  async expectMinSpend3500Max2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2), value, timeoutMs);
  }

  async expectMinSpend3500Max2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2), timeoutMs);
  }

  async expectMinSpend3500Max2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2), timeoutMs);
  }

  async expectMinSpend3500Max2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2), timeoutMs);
  }

  async expectMinSpend3500Max2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2), timeoutMs);
  }

  async expectMinSpend3500Max2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2), timeoutMs);
  }

  async expectMinSpend3500Max2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.minSpend3500Max2), count, timeoutMs);
  }

  async clickFlat75CashbackOn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn));
  }

  async doubleClickFlat75CashbackOn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn));
  }

  async longPressFlat75CashbackOn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn));
  }

  async expectFlat75CashbackOnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn), value, timeoutMs);
  }

  async expectFlat75CashbackOnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn), timeoutMs);
  }

  async expectFlat75CashbackOnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn), timeoutMs);
  }

  async expectFlat75CashbackOnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn), timeoutMs);
  }

  async expectFlat75CashbackOnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn), timeoutMs);
  }

  async expectFlat75CashbackOnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn), timeoutMs);
  }

  async expectFlat75CashbackOnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.flat75CashbackOn), count, timeoutMs);
  }

  async clickEMIStartingFromRs23Month(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month));
  }

  async doubleClickEMIStartingFromRs23Month(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month));
  }

  async longPressEMIStartingFromRs23Month(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month));
  }

  async expectEMIStartingFromRs23MonthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month), value, timeoutMs);
  }

  async expectEMIStartingFromRs23MonthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month), timeoutMs);
  }

  async expectEMIStartingFromRs23MonthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month), timeoutMs);
  }

  async expectEMIStartingFromRs23MonthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month), timeoutMs);
  }

  async expectEMIStartingFromRs23MonthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month), timeoutMs);
  }

  async expectEMIStartingFromRs23MonthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month), timeoutMs);
  }

  async expectEMIStartingFromRs23MonthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.eMIStartingFromRs23Month), count, timeoutMs);
  }

  async clickViewPlan(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.viewPlan));
  }

  async doubleClickViewPlan(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.viewPlan));
  }

  async longPressViewPlan(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.viewPlan));
  }

  async expectViewPlanValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.viewPlan), value, timeoutMs);
  }

  async expectViewPlanEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.viewPlan), timeoutMs);
  }

  async expectViewPlanDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.viewPlan), timeoutMs);
  }

  async expectViewPlanChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.viewPlan), timeoutMs);
  }

  async expectViewPlanUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.viewPlan), timeoutMs);
  }

  async expectViewPlanFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.viewPlan), timeoutMs);
  }

  async expectViewPlanCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.viewPlan), count, timeoutMs);
  }

  async clickPRODUCTDETAILS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS));
  }

  async doubleClickPRODUCTDETAILS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS));
  }

  async longPressPRODUCTDETAILS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS));
  }

  async expectPRODUCTDETAILSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS), value, timeoutMs);
  }

  async expectPRODUCTDETAILSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS), timeoutMs);
  }

  async expectPRODUCTDETAILSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS), timeoutMs);
  }

  async expectPRODUCTDETAILSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS), timeoutMs);
  }

  async expectPRODUCTDETAILSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS), timeoutMs);
  }

  async expectPRODUCTDETAILSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS), timeoutMs);
  }

  async expectPRODUCTDETAILSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.pRODUCTDETAILS), count, timeoutMs);
  }

  async clickBlackSolidOpaqueCasual(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual));
  }

  async doubleClickBlackSolidOpaqueCasual(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual));
  }

  async longPressBlackSolidOpaqueCasual(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual));
  }

  async expectBlackSolidOpaqueCasualValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual), value, timeoutMs);
  }

  async expectBlackSolidOpaqueCasualEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual), timeoutMs);
  }

  async expectBlackSolidOpaqueCasualDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual), timeoutMs);
  }

  async expectBlackSolidOpaqueCasualChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual), timeoutMs);
  }

  async expectBlackSolidOpaqueCasualUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual), timeoutMs);
  }

  async expectBlackSolidOpaqueCasualFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual), timeoutMs);
  }

  async expectBlackSolidOpaqueCasualCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.blackSolidOpaqueCasual), count, timeoutMs);
  }

  async clickSizeFit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.sizeFit));
  }

  async doubleClickSizeFit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.sizeFit));
  }

  async longPressSizeFit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.sizeFit));
  }

  async expectSizeFitValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.sizeFit), value, timeoutMs);
  }

  async expectSizeFitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.sizeFit), timeoutMs);
  }

  async expectSizeFitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.sizeFit), timeoutMs);
  }

  async expectSizeFitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.sizeFit), timeoutMs);
  }

  async expectSizeFitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.sizeFit), timeoutMs);
  }

  async expectSizeFitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.sizeFit), timeoutMs);
  }

  async expectSizeFitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.sizeFit), count, timeoutMs);
  }

  async clickBrandFitFitSlim(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim));
  }

  async doubleClickBrandFitFitSlim(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim));
  }

  async longPressBrandFitFitSlim(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim));
  }

  async expectBrandFitFitSlimValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim), value, timeoutMs);
  }

  async expectBrandFitFitSlimEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim), timeoutMs);
  }

  async expectBrandFitFitSlimDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim), timeoutMs);
  }

  async expectBrandFitFitSlimChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim), timeoutMs);
  }

  async expectBrandFitFitSlimUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim), timeoutMs);
  }

  async expectBrandFitFitSlimFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim), timeoutMs);
  }

  async expectBrandFitFitSlimCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.brandFitFitSlim), count, timeoutMs);
  }

  async clickMaterialCare(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.materialCare));
  }

  async doubleClickMaterialCare(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.materialCare));
  }

  async longPressMaterialCare(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.materialCare));
  }

  async expectMaterialCareValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.materialCare), value, timeoutMs);
  }

  async expectMaterialCareEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.materialCare), timeoutMs);
  }

  async expectMaterialCareDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.materialCare), timeoutMs);
  }

  async expectMaterialCareChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.materialCare), timeoutMs);
  }

  async expectMaterialCareUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.materialCare), timeoutMs);
  }

  async expectMaterialCareFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.materialCare), timeoutMs);
  }

  async expectMaterialCareCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.materialCare), count, timeoutMs);
  }

  async clickPolyester40Cotton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton));
  }

  async doubleClickPolyester40Cotton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton));
  }

  async longPressPolyester40Cotton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton));
  }

  async expectPolyester40CottonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton), value, timeoutMs);
  }

  async expectPolyester40CottonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton), timeoutMs);
  }

  async expectPolyester40CottonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton), timeoutMs);
  }

  async expectPolyester40CottonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton), timeoutMs);
  }

  async expectPolyester40CottonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton), timeoutMs);
  }

  async expectPolyester40CottonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton), timeoutMs);
  }

  async expectPolyester40CottonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.Polyester40Cotton), count, timeoutMs);
  }

  async clickSpecifications(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.specifications));
  }

  async doubleClickSpecifications(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.specifications));
  }

  async longPressSpecifications(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.specifications));
  }

  async expectSpecificationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.specifications), value, timeoutMs);
  }

  async expectSpecificationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.specifications), timeoutMs);
  }

  async expectSpecificationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.specifications), timeoutMs);
  }

  async expectSpecificationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.specifications), timeoutMs);
  }

  async expectSpecificationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.specifications), timeoutMs);
  }

  async expectSpecificationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.specifications), timeoutMs);
  }

  async expectSpecificationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.specifications), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.element), count, timeoutMs);
  }

  async clickGouthamPatil(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.gouthamPatil));
  }

  async doubleClickGouthamPatil(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.gouthamPatil));
  }

  async longPressGouthamPatil(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.gouthamPatil));
  }

  async expectGouthamPatilValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.gouthamPatil), value, timeoutMs);
  }

  async expectGouthamPatilEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.gouthamPatil), timeoutMs);
  }

  async expectGouthamPatilDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.gouthamPatil), timeoutMs);
  }

  async expectGouthamPatilChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.gouthamPatil), timeoutMs);
  }

  async expectGouthamPatilUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.gouthamPatil), timeoutMs);
  }

  async expectGouthamPatilFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.gouthamPatil), timeoutMs);
  }

  async expectGouthamPatilCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.gouthamPatil), count, timeoutMs);
  }

  async clickSept2025(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.Sept2025));
  }

  async doubleClickSept2025(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.Sept2025));
  }

  async longPressSept2025(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.Sept2025));
  }

  async expectSept2025Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.Sept2025), value, timeoutMs);
  }

  async expectSept2025Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.Sept2025), timeoutMs);
  }

  async expectSept2025Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.Sept2025), timeoutMs);
  }

  async expectSept2025Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.Sept2025), timeoutMs);
  }

  async expectSept2025Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.Sept2025), timeoutMs);
  }

  async expectSept2025Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.Sept2025), timeoutMs);
  }

  async expectSept2025Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.Sept2025), count, timeoutMs);
  }

  async clickMohEajaz(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.mohEajaz));
  }

  async doubleClickMohEajaz(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.mohEajaz));
  }

  async longPressMohEajaz(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.mohEajaz));
  }

  async expectMohEajazValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.mohEajaz), value, timeoutMs);
  }

  async expectMohEajazEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.mohEajaz), timeoutMs);
  }

  async expectMohEajazDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.mohEajaz), timeoutMs);
  }

  async expectMohEajazChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.mohEajaz), timeoutMs);
  }

  async expectMohEajazUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.mohEajaz), timeoutMs);
  }

  async expectMohEajazFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.mohEajaz), timeoutMs);
  }

  async expectMohEajazCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.mohEajaz), count, timeoutMs);
  }

  async clickJan2026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.Jan2026));
  }

  async doubleClickJan2026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.Jan2026));
  }

  async longPressJan2026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.Jan2026));
  }

  async expectJan2026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.Jan2026), value, timeoutMs);
  }

  async expectJan2026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.Jan2026), timeoutMs);
  }

  async expectJan2026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.Jan2026), timeoutMs);
  }

  async expectJan2026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.Jan2026), timeoutMs);
  }

  async expectJan2026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.Jan2026), timeoutMs);
  }

  async expectJan2026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.Jan2026), timeoutMs);
  }

  async expectJan2026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.Jan2026), count, timeoutMs);
  }

  async clickVishalKhanavkar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar));
  }

  async doubleClickVishalKhanavkar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar));
  }

  async longPressVishalKhanavkar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar));
  }

  async expectVishalKhanavkarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar), value, timeoutMs);
  }

  async expectVishalKhanavkarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar), timeoutMs);
  }

  async expectVishalKhanavkarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar), timeoutMs);
  }

  async expectVishalKhanavkarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar), timeoutMs);
  }

  async expectVishalKhanavkarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar), timeoutMs);
  }

  async expectVishalKhanavkarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar), timeoutMs);
  }

  async expectVishalKhanavkarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.vishalKhanavkar), count, timeoutMs);
  }

  async clickApr2026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.Apr2026));
  }

  async doubleClickApr2026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.Apr2026));
  }

  async longPressApr2026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.Apr2026));
  }

  async expectApr2026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.Apr2026), value, timeoutMs);
  }

  async expectApr2026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.Apr2026), timeoutMs);
  }

  async expectApr2026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.Apr2026), timeoutMs);
  }

  async expectApr2026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.Apr2026), timeoutMs);
  }

  async expectApr2026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.Apr2026), timeoutMs);
  }

  async expectApr2026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.Apr2026), timeoutMs);
  }

  async expectApr2026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.Apr2026), count, timeoutMs);
  }

  async clickProductCode(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.productCode));
  }

  async doubleClickProductCode(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.productCode));
  }

  async longPressProductCode(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.productCode));
  }

  async expectProductCodeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.productCode), value, timeoutMs);
  }

  async expectProductCodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.productCode), timeoutMs);
  }

  async expectProductCodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.productCode), timeoutMs);
  }

  async expectProductCodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.productCode), timeoutMs);
  }

  async expectProductCodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.productCode), timeoutMs);
  }

  async expectProductCodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.productCode), timeoutMs);
  }

  async expectProductCodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.productCode), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.element2), count, timeoutMs);
  }

  async clickSeller(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.seller));
  }

  async doubleClickSeller(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.seller));
  }

  async longPressSeller(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.seller));
  }

  async expectSellerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.seller), value, timeoutMs);
  }

  async expectSellerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.seller), timeoutMs);
  }

  async expectSellerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.seller), timeoutMs);
  }

  async expectSellerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.seller), timeoutMs);
  }

  async expectSellerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.seller), timeoutMs);
  }

  async expectSellerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.seller), timeoutMs);
  }

  async expectSellerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.seller), count, timeoutMs);
  }

  async clickFlashstarCommerce(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.flashstarCommerce));
  }

  async doubleClickFlashstarCommerce(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.flashstarCommerce));
  }

  async longPressFlashstarCommerce(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.flashstarCommerce));
  }

  async expectFlashstarCommerceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.flashstarCommerce), value, timeoutMs);
  }

  async expectFlashstarCommerceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.flashstarCommerce), timeoutMs);
  }

  async expectFlashstarCommerceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.flashstarCommerce), timeoutMs);
  }

  async expectFlashstarCommerceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.flashstarCommerce), timeoutMs);
  }

  async expectFlashstarCommerceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.flashstarCommerce), timeoutMs);
  }

  async expectFlashstarCommerceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.flashstarCommerce), timeoutMs);
  }

  async expectFlashstarCommerceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.flashstarCommerce), count, timeoutMs);
  }

  async clickSIMILARPRODUCTS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS));
  }

  async doubleClickSIMILARPRODUCTS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS));
  }

  async longPressSIMILARPRODUCTS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS));
  }

  async expectSIMILARPRODUCTSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS), value, timeoutMs);
  }

  async expectSIMILARPRODUCTSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS), timeoutMs);
  }

  async expectSIMILARPRODUCTSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS), timeoutMs);
  }

  async expectSIMILARPRODUCTSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS), timeoutMs);
  }

  async expectSIMILARPRODUCTSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS), timeoutMs);
  }

  async expectSIMILARPRODUCTSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS), timeoutMs);
  }

  async expectSIMILARPRODUCTSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.sIMILARPRODUCTS), count, timeoutMs);
  }

  async clickSHOPTHELOOK(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK));
  }

  async doubleClickSHOPTHELOOK(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK));
  }

  async longPressSHOPTHELOOK(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK));
  }

  async expectSHOPTHELOOKValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK), value, timeoutMs);
  }

  async expectSHOPTHELOOKEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK), timeoutMs);
  }

  async expectSHOPTHELOOKDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK), timeoutMs);
  }

  async expectSHOPTHELOOKChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK), timeoutMs);
  }

  async expectSHOPTHELOOKUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK), timeoutMs);
  }

  async expectSHOPTHELOOKFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK), timeoutMs);
  }

  async expectSHOPTHELOOKCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.sHOPTHELOOK), count, timeoutMs);
  }

  async clickCUSTOMERSALSOLIKED(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED));
  }

  async doubleClickCUSTOMERSALSOLIKED(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED));
  }

  async longPressCUSTOMERSALSOLIKED(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED));
  }

  async expectCUSTOMERSALSOLIKEDValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED), value, timeoutMs);
  }

  async expectCUSTOMERSALSOLIKEDEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED), timeoutMs);
  }

  async expectCUSTOMERSALSOLIKEDDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED), timeoutMs);
  }

  async expectCUSTOMERSALSOLIKEDChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED), timeoutMs);
  }

  async expectCUSTOMERSALSOLIKEDUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED), timeoutMs);
  }

  async expectCUSTOMERSALSOLIKEDFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED), timeoutMs);
  }

  async expectCUSTOMERSALSOLIKEDCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.cUSTOMERSALSOLIKED), count, timeoutMs);
  }

  async clickUSEFULLINKS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS));
  }

  async doubleClickUSEFULLINKS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS));
  }

  async longPressUSEFULLINKS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS));
  }

  async expectUSEFULLINKSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS), value, timeoutMs);
  }

  async expectUSEFULLINKSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS), timeoutMs);
  }

  async expectUSEFULLINKSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS), timeoutMs);
  }

  async expectUSEFULLINKSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS), timeoutMs);
  }

  async expectUSEFULLINKSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS), timeoutMs);
  }

  async expectUSEFULLINKSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS), timeoutMs);
  }

  async expectUSEFULLINKSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.uSEFULLINKS), count, timeoutMs);
  }

  async clickCUSTOMERPOLICIES(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES));
  }

  async doubleClickCUSTOMERPOLICIES(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES));
  }

  async longPressCUSTOMERPOLICIES(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES));
  }

  async expectCUSTOMERPOLICIESValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES), value, timeoutMs);
  }

  async expectCUSTOMERPOLICIESEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES), timeoutMs);
  }

  async expectCUSTOMERPOLICIESDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES), timeoutMs);
  }

  async expectCUSTOMERPOLICIESChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES), timeoutMs);
  }

  async expectCUSTOMERPOLICIESUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES), timeoutMs);
  }

  async expectCUSTOMERPOLICIESFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES), timeoutMs);
  }

  async expectCUSTOMERPOLICIESCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.cUSTOMERPOLICIES), count, timeoutMs);
  }

  async clickEXPERIENCEMYNTRAAPPON(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON));
  }

  async doubleClickEXPERIENCEMYNTRAAPPON(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON));
  }

  async longPressEXPERIENCEMYNTRAAPPON(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON));
  }

  async expectEXPERIENCEMYNTRAAPPONValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON), value, timeoutMs);
  }

  async expectEXPERIENCEMYNTRAAPPONEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON), timeoutMs);
  }

  async expectEXPERIENCEMYNTRAAPPONDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON), timeoutMs);
  }

  async expectEXPERIENCEMYNTRAAPPONChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON), timeoutMs);
  }

  async expectEXPERIENCEMYNTRAAPPONUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON), timeoutMs);
  }

  async expectEXPERIENCEMYNTRAAPPONFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON), timeoutMs);
  }

  async expectEXPERIENCEMYNTRAAPPONCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductdetailPage.L.eXPERIENCEMYNTRAAPPON), count, timeoutMs);
  }

}
