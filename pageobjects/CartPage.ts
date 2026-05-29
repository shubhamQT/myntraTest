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

export class CartPage {
  private static readonly L = {
    bAG: { strategy: 'text' as const, value: 'BAG', actionKind: 'text' as const },
    aDDRESS: { strategy: 'text' as const, value: 'ADDRESS', actionKind: 'text' as const },
    pAYMENT: { strategy: 'text' as const, value: 'PAYMENT', actionKind: 'text' as const },
    ItemsSelected: { strategy: 'text' as const, value: '1/1 Items Selected', actionKind: 'text' as const },
    rEMOVE: { strategy: 'role' as const, value: 'REMOVE', role: 'button', actionKind: 'button' as const },
    mOVETOWISHLIST: { strategy: 'role' as const, value: 'MOVE TO WISHLIST', role: 'button', actionKind: 'button' as const },
    itemimagecomponent: { strategy: 'testId' as const, value: 'itemImageComponent', actionKind: 'generic' as const },
    menColourblockedPoloCollar: { strategy: 'role' as const, value: 'Men Colourblocked Polo Collar T-shirt', role: 'link', actionKind: 'link' as const },
    sizeM: { strategy: 'text' as const, value: 'Size: M', actionKind: 'text' as const },
    qty1: { strategy: 'text' as const, value: 'Qty: 1', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '₹1,499', actionKind: 'text' as const },
    Off: { strategy: 'text' as const, value: '1,277 Off', actionKind: 'text' as const },
    Days: { strategy: 'text' as const, value: '7 days', actionKind: 'text' as const },
    lOGINNOW: { strategy: 'role' as const, value: 'LOGIN NOW', role: 'link', actionKind: 'link' as const },
    aPPLY: { strategy: 'role' as const, value: 'APPLY', role: 'button', actionKind: 'button' as const },
    login: { strategy: 'role' as const, value: 'Login', role: 'link', actionKind: 'link' as const },
    toGetUpto300: { strategy: 'text' as const, value: 'to get upto ₹300 OFF on first order', actionKind: 'text' as const },
    totalMRP: { strategy: 'text' as const, value: 'Total MRP', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '1,499', actionKind: 'text' as const },
    discountOnMRP: { strategy: 'text' as const, value: 'Discount on MRP', actionKind: 'text' as const },
    element3: { strategy: 'text' as const, value: '1,277', actionKind: 'text' as const },
    couponDiscount: { strategy: 'text' as const, value: 'Coupon Discount', actionKind: 'text' as const },
    applyCoupon: { strategy: 'text' as const, value: 'Apply Coupon', actionKind: 'text' as const },
    platformFee: { strategy: 'text' as const, value: 'Platform Fee', actionKind: 'text' as const },
    knowMore: { strategy: 'text' as const, value: 'Know More', actionKind: 'text' as const },
    element4: { strategy: 'text' as const, value: '23', actionKind: 'text' as const },
    totalAmount: { strategy: 'text' as const, value: 'Total Amount', actionKind: 'text' as const },
    element5: { strategy: 'text' as const, value: '245', actionKind: 'text' as const },
    termsOfUse: { strategy: 'role' as const, value: 'Terms of Use', role: 'link', actionKind: 'link' as const },
    privacyPolicy: { strategy: 'role' as const, value: 'Privacy Policy', role: 'link', actionKind: 'link' as const },
    bUYNOWWITHVIP: { strategy: 'role' as const, value: 'BUY NOW WITH VIP ACCESS', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextBAG(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.bAG));
  }

  async expectBAGVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.bAG), timeoutMs);
  }

  async expectBAGHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.bAG), timeoutMs);
  }

  async expectBAGText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.bAG), expected, timeoutMs);
  }

  async expectBAGContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.bAG), substring, timeoutMs);
  }

  async scrollBAGIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.bAG));
  }

  async getInnerTextADDRESS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.aDDRESS));
  }

  async expectADDRESSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.aDDRESS), timeoutMs);
  }

  async expectADDRESSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.aDDRESS), timeoutMs);
  }

  async expectADDRESSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.aDDRESS), expected, timeoutMs);
  }

  async expectADDRESSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.aDDRESS), substring, timeoutMs);
  }

  async scrollADDRESSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.aDDRESS));
  }

  async getInnerTextPAYMENT(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.pAYMENT));
  }

  async expectPAYMENTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.pAYMENT), timeoutMs);
  }

  async expectPAYMENTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.pAYMENT), timeoutMs);
  }

  async expectPAYMENTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.pAYMENT), expected, timeoutMs);
  }

  async expectPAYMENTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.pAYMENT), substring, timeoutMs);
  }

  async scrollPAYMENTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.pAYMENT));
  }

  async getInnerTextItemsSelected(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.ItemsSelected));
  }

  async expectItemsSelectedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.ItemsSelected), timeoutMs);
  }

  async expectItemsSelectedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.ItemsSelected), timeoutMs);
  }

  async expectItemsSelectedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.ItemsSelected), expected, timeoutMs);
  }

  async expectItemsSelectedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.ItemsSelected), substring, timeoutMs);
  }

  async scrollItemsSelectedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.ItemsSelected));
  }

  async clickREMOVE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.rEMOVE));
  }

  async doubleClickREMOVE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.rEMOVE));
  }

  async expectREMOVEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.rEMOVE), timeoutMs);
  }

  async expectREMOVEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.rEMOVE), timeoutMs);
  }

  async expectREMOVEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.rEMOVE), timeoutMs);
  }

  async expectREMOVEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.rEMOVE), timeoutMs);
  }

  async expectREMOVEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.rEMOVE), expected, timeoutMs);
  }

  async expectREMOVEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.rEMOVE), substring, timeoutMs);
  }

  async scrollREMOVEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.rEMOVE));
  }

  async clickMOVETOWISHLIST(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.mOVETOWISHLIST));
  }

  async doubleClickMOVETOWISHLIST(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.mOVETOWISHLIST));
  }

  async expectMOVETOWISHLISTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.mOVETOWISHLIST), timeoutMs);
  }

  async expectMOVETOWISHLISTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.mOVETOWISHLIST), timeoutMs);
  }

  async expectMOVETOWISHLISTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.mOVETOWISHLIST), timeoutMs);
  }

  async expectMOVETOWISHLISTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.mOVETOWISHLIST), timeoutMs);
  }

  async expectMOVETOWISHLISTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.mOVETOWISHLIST), expected, timeoutMs);
  }

  async expectMOVETOWISHLISTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.mOVETOWISHLIST), substring, timeoutMs);
  }

  async scrollMOVETOWISHLISTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.mOVETOWISHLIST));
  }

  async clickItemimagecomponent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.itemimagecomponent));
  }

  async doubleClickItemimagecomponent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.itemimagecomponent));
  }

  async expectItemimagecomponentVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.itemimagecomponent), timeoutMs);
  }

  async expectItemimagecomponentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.itemimagecomponent), timeoutMs);
  }

  async expectItemimagecomponentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.itemimagecomponent), timeoutMs);
  }

  async expectItemimagecomponentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.itemimagecomponent), timeoutMs);
  }

  async expectItemimagecomponentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.itemimagecomponent), expected, timeoutMs);
  }

  async expectItemimagecomponentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.itemimagecomponent), substring, timeoutMs);
  }

  async scrollItemimagecomponentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.itemimagecomponent));
  }

  async clickMenColourblockedPoloCollar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.menColourblockedPoloCollar));
  }

  async doubleClickMenColourblockedPoloCollar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.menColourblockedPoloCollar));
  }

  async expectMenColourblockedPoloCollarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.menColourblockedPoloCollar), timeoutMs);
  }

  async expectMenColourblockedPoloCollarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.menColourblockedPoloCollar), timeoutMs);
  }

  async expectMenColourblockedPoloCollarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.menColourblockedPoloCollar), expected, timeoutMs);
  }

  async expectMenColourblockedPoloCollarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.menColourblockedPoloCollar), substring, timeoutMs);
  }

  async scrollMenColourblockedPoloCollarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.menColourblockedPoloCollar));
  }

  async getInnerTextSizeM(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.sizeM));
  }

  async expectSizeMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.sizeM), timeoutMs);
  }

  async expectSizeMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.sizeM), timeoutMs);
  }

  async expectSizeMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.sizeM), expected, timeoutMs);
  }

  async expectSizeMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.sizeM), substring, timeoutMs);
  }

  async scrollSizeMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.sizeM));
  }

  async getInnerTextQty1(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.qty1));
  }

  async expectQty1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.qty1), timeoutMs);
  }

  async expectQty1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.qty1), timeoutMs);
  }

  async expectQty1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.qty1), expected, timeoutMs);
  }

  async expectQty1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.qty1), substring, timeoutMs);
  }

  async scrollQty1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.qty1));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.element));
  }

  async getInnerTextOff(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.Off));
  }

  async expectOffVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.Off), timeoutMs);
  }

  async expectOffHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.Off), timeoutMs);
  }

  async expectOffText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.Off), expected, timeoutMs);
  }

  async expectOffContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.Off), substring, timeoutMs);
  }

  async scrollOffIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.Off));
  }

  async getInnerTextDays(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.Days));
  }

  async expectDaysVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.Days), timeoutMs);
  }

  async expectDaysHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.Days), timeoutMs);
  }

  async expectDaysText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.Days), expected, timeoutMs);
  }

  async expectDaysContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.Days), substring, timeoutMs);
  }

  async scrollDaysIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.Days));
  }

  async clickLOGINNOW(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.lOGINNOW));
  }

  async doubleClickLOGINNOW(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.lOGINNOW));
  }

  async expectLOGINNOWVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.lOGINNOW), timeoutMs);
  }

  async expectLOGINNOWHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.lOGINNOW), timeoutMs);
  }

  async expectLOGINNOWText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.lOGINNOW), expected, timeoutMs);
  }

  async expectLOGINNOWContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.lOGINNOW), substring, timeoutMs);
  }

  async scrollLOGINNOWIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.lOGINNOW));
  }

  async clickAPPLY(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.aPPLY));
  }

  async doubleClickAPPLY(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.aPPLY));
  }

  async expectAPPLYVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.aPPLY), timeoutMs);
  }

  async expectAPPLYHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.aPPLY), timeoutMs);
  }

  async expectAPPLYEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.aPPLY), timeoutMs);
  }

  async expectAPPLYDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.aPPLY), timeoutMs);
  }

  async expectAPPLYText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.aPPLY), expected, timeoutMs);
  }

  async expectAPPLYContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.aPPLY), substring, timeoutMs);
  }

  async scrollAPPLYIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.aPPLY));
  }

  async clickLogin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.login));
  }

  async doubleClickLogin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.login));
  }

  async expectLoginVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.login), timeoutMs);
  }

  async expectLoginHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.login), timeoutMs);
  }

  async expectLoginText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.login), expected, timeoutMs);
  }

  async expectLoginContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.login), substring, timeoutMs);
  }

  async scrollLoginIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.login));
  }

  async getInnerTextToGetUpto300(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.toGetUpto300));
  }

  async expectToGetUpto300Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.toGetUpto300), timeoutMs);
  }

  async expectToGetUpto300Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.toGetUpto300), timeoutMs);
  }

  async expectToGetUpto300Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.toGetUpto300), expected, timeoutMs);
  }

  async expectToGetUpto300ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.toGetUpto300), substring, timeoutMs);
  }

  async scrollToGetUpto300IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.toGetUpto300));
  }

  async getInnerTextTotalMRP(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.totalMRP));
  }

  async expectTotalMRPVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.totalMRP), timeoutMs);
  }

  async expectTotalMRPHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.totalMRP), timeoutMs);
  }

  async expectTotalMRPText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.totalMRP), expected, timeoutMs);
  }

  async expectTotalMRPContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.totalMRP), substring, timeoutMs);
  }

  async scrollTotalMRPIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.totalMRP));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.element2));
  }

  async getInnerTextDiscountOnMRP(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.discountOnMRP));
  }

  async expectDiscountOnMRPVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.discountOnMRP), timeoutMs);
  }

  async expectDiscountOnMRPHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.discountOnMRP), timeoutMs);
  }

  async expectDiscountOnMRPText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.discountOnMRP), expected, timeoutMs);
  }

  async expectDiscountOnMRPContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.discountOnMRP), substring, timeoutMs);
  }

  async scrollDiscountOnMRPIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.discountOnMRP));
  }

  async getInnerTextElement3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.element3));
  }

  async expectElement3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.element3), timeoutMs);
  }

  async expectElement3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.element3), timeoutMs);
  }

  async expectElement3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.element3), expected, timeoutMs);
  }

  async expectElement3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.element3), substring, timeoutMs);
  }

  async scrollElement3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.element3));
  }

  async getInnerTextCouponDiscount(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.couponDiscount));
  }

  async expectCouponDiscountVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.couponDiscount), timeoutMs);
  }

  async expectCouponDiscountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.couponDiscount), timeoutMs);
  }

  async expectCouponDiscountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.couponDiscount), expected, timeoutMs);
  }

  async expectCouponDiscountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.couponDiscount), substring, timeoutMs);
  }

  async scrollCouponDiscountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.couponDiscount));
  }

  async getInnerTextApplyCoupon(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.applyCoupon));
  }

  async expectApplyCouponVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.applyCoupon), timeoutMs);
  }

  async expectApplyCouponHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.applyCoupon), timeoutMs);
  }

  async expectApplyCouponText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.applyCoupon), expected, timeoutMs);
  }

  async expectApplyCouponContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.applyCoupon), substring, timeoutMs);
  }

  async scrollApplyCouponIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.applyCoupon));
  }

  async getInnerTextPlatformFee(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.platformFee));
  }

  async expectPlatformFeeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.platformFee), timeoutMs);
  }

  async expectPlatformFeeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.platformFee), timeoutMs);
  }

  async expectPlatformFeeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.platformFee), expected, timeoutMs);
  }

  async expectPlatformFeeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.platformFee), substring, timeoutMs);
  }

  async scrollPlatformFeeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.platformFee));
  }

  async getInnerTextKnowMore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.knowMore));
  }

  async expectKnowMoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.knowMore), timeoutMs);
  }

  async expectKnowMoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.knowMore), timeoutMs);
  }

  async expectKnowMoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.knowMore), expected, timeoutMs);
  }

  async expectKnowMoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.knowMore), substring, timeoutMs);
  }

  async scrollKnowMoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.knowMore));
  }

  async getInnerTextElement4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.element4));
  }

  async expectElement4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.element4), timeoutMs);
  }

  async expectElement4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.element4), timeoutMs);
  }

  async expectElement4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.element4), expected, timeoutMs);
  }

  async expectElement4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.element4), substring, timeoutMs);
  }

  async scrollElement4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.element4));
  }

  async getInnerTextTotalAmount(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.totalAmount));
  }

  async expectTotalAmountVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.totalAmount), timeoutMs);
  }

  async expectTotalAmountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.totalAmount), timeoutMs);
  }

  async expectTotalAmountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.totalAmount), expected, timeoutMs);
  }

  async expectTotalAmountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.totalAmount), substring, timeoutMs);
  }

  async scrollTotalAmountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.totalAmount));
  }

  async getInnerTextElement5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.element5));
  }

  async expectElement5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.element5), timeoutMs);
  }

  async expectElement5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.element5), timeoutMs);
  }

  async expectElement5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.element5), expected, timeoutMs);
  }

  async expectElement5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.element5), substring, timeoutMs);
  }

  async scrollElement5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.element5));
  }

  async clickTermsOfUse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.termsOfUse));
  }

  async doubleClickTermsOfUse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.termsOfUse));
  }

  async expectTermsOfUseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.termsOfUse), expected, timeoutMs);
  }

  async expectTermsOfUseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.termsOfUse), substring, timeoutMs);
  }

  async scrollTermsOfUseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.termsOfUse));
  }

  async clickPrivacyPolicy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.privacyPolicy));
  }

  async doubleClickPrivacyPolicy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.privacyPolicy));
  }

  async expectPrivacyPolicyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.privacyPolicy), expected, timeoutMs);
  }

  async expectPrivacyPolicyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.privacyPolicy), substring, timeoutMs);
  }

  async scrollPrivacyPolicyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.privacyPolicy));
  }

  async clickBUYNOWWITHVIP(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.bUYNOWWITHVIP));
  }

  async doubleClickBUYNOWWITHVIP(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.bUYNOWWITHVIP));
  }

  async expectBUYNOWWITHVIPVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.bUYNOWWITHVIP), timeoutMs);
  }

  async expectBUYNOWWITHVIPHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.bUYNOWWITHVIP), timeoutMs);
  }

  async expectBUYNOWWITHVIPEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.bUYNOWWITHVIP), timeoutMs);
  }

  async expectBUYNOWWITHVIPDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.bUYNOWWITHVIP), timeoutMs);
  }

  async expectBUYNOWWITHVIPText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.bUYNOWWITHVIP), expected, timeoutMs);
  }

  async expectBUYNOWWITHVIPContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.bUYNOWWITHVIP), substring, timeoutMs);
  }

  async scrollBUYNOWWITHVIPIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.bUYNOWWITHVIP));
  }


  async clickBAG(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.bAG));
  }

  async doubleClickBAG(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.bAG));
  }

  async longPressBAG(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.bAG));
  }

  async expectBAGValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.bAG), value, timeoutMs);
  }

  async expectBAGEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.bAG), timeoutMs);
  }

  async expectBAGDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.bAG), timeoutMs);
  }

  async expectBAGChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.bAG), timeoutMs);
  }

  async expectBAGUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.bAG), timeoutMs);
  }

  async expectBAGFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.bAG), timeoutMs);
  }

  async expectBAGCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.bAG), count, timeoutMs);
  }

  async clickADDRESS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.aDDRESS));
  }

  async doubleClickADDRESS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.aDDRESS));
  }

  async longPressADDRESS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.aDDRESS));
  }

  async expectADDRESSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.aDDRESS), value, timeoutMs);
  }

  async expectADDRESSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.aDDRESS), timeoutMs);
  }

  async expectADDRESSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.aDDRESS), timeoutMs);
  }

  async expectADDRESSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.aDDRESS), timeoutMs);
  }

  async expectADDRESSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.aDDRESS), timeoutMs);
  }

  async expectADDRESSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.aDDRESS), timeoutMs);
  }

  async expectADDRESSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.aDDRESS), count, timeoutMs);
  }

  async clickPAYMENT(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.pAYMENT));
  }

  async doubleClickPAYMENT(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.pAYMENT));
  }

  async longPressPAYMENT(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.pAYMENT));
  }

  async expectPAYMENTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.pAYMENT), value, timeoutMs);
  }

  async expectPAYMENTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.pAYMENT), timeoutMs);
  }

  async expectPAYMENTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.pAYMENT), timeoutMs);
  }

  async expectPAYMENTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.pAYMENT), timeoutMs);
  }

  async expectPAYMENTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.pAYMENT), timeoutMs);
  }

  async expectPAYMENTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.pAYMENT), timeoutMs);
  }

  async expectPAYMENTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.pAYMENT), count, timeoutMs);
  }

  async clickItemsSelected(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.ItemsSelected));
  }

  async doubleClickItemsSelected(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.ItemsSelected));
  }

  async longPressItemsSelected(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.ItemsSelected));
  }

  async expectItemsSelectedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.ItemsSelected), value, timeoutMs);
  }

  async expectItemsSelectedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.ItemsSelected), timeoutMs);
  }

  async expectItemsSelectedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.ItemsSelected), timeoutMs);
  }

  async expectItemsSelectedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.ItemsSelected), timeoutMs);
  }

  async expectItemsSelectedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.ItemsSelected), timeoutMs);
  }

  async expectItemsSelectedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.ItemsSelected), timeoutMs);
  }

  async expectItemsSelectedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.ItemsSelected), count, timeoutMs);
  }

  async longPressREMOVE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.rEMOVE));
  }

  async expectREMOVEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.rEMOVE), value, timeoutMs);
  }

  async expectREMOVEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.rEMOVE), timeoutMs);
  }

  async expectREMOVEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.rEMOVE), timeoutMs);
  }

  async expectREMOVEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.rEMOVE), timeoutMs);
  }

  async expectREMOVECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.rEMOVE), count, timeoutMs);
  }

  async longPressMOVETOWISHLIST(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.mOVETOWISHLIST));
  }

  async expectMOVETOWISHLISTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.mOVETOWISHLIST), value, timeoutMs);
  }

  async expectMOVETOWISHLISTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.mOVETOWISHLIST), timeoutMs);
  }

  async expectMOVETOWISHLISTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.mOVETOWISHLIST), timeoutMs);
  }

  async expectMOVETOWISHLISTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.mOVETOWISHLIST), timeoutMs);
  }

  async expectMOVETOWISHLISTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.mOVETOWISHLIST), count, timeoutMs);
  }

  async longPressItemimagecomponent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.itemimagecomponent));
  }

  async expectItemimagecomponentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.itemimagecomponent), value, timeoutMs);
  }

  async expectItemimagecomponentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.itemimagecomponent), timeoutMs);
  }

  async expectItemimagecomponentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.itemimagecomponent), timeoutMs);
  }

  async expectItemimagecomponentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.itemimagecomponent), timeoutMs);
  }

  async expectItemimagecomponentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.itemimagecomponent), count, timeoutMs);
  }

  async longPressMenColourblockedPoloCollar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.menColourblockedPoloCollar));
  }

  async expectMenColourblockedPoloCollarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.menColourblockedPoloCollar), value, timeoutMs);
  }

  async expectMenColourblockedPoloCollarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.menColourblockedPoloCollar), timeoutMs);
  }

  async expectMenColourblockedPoloCollarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.menColourblockedPoloCollar), timeoutMs);
  }

  async expectMenColourblockedPoloCollarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.menColourblockedPoloCollar), timeoutMs);
  }

  async expectMenColourblockedPoloCollarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.menColourblockedPoloCollar), timeoutMs);
  }

  async expectMenColourblockedPoloCollarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.menColourblockedPoloCollar), timeoutMs);
  }

  async expectMenColourblockedPoloCollarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.menColourblockedPoloCollar), count, timeoutMs);
  }

  async clickSizeM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.sizeM));
  }

  async doubleClickSizeM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.sizeM));
  }

  async longPressSizeM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.sizeM));
  }

  async expectSizeMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.sizeM), value, timeoutMs);
  }

  async expectSizeMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.sizeM), timeoutMs);
  }

  async expectSizeMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.sizeM), timeoutMs);
  }

  async expectSizeMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.sizeM), timeoutMs);
  }

  async expectSizeMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.sizeM), timeoutMs);
  }

  async expectSizeMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.sizeM), timeoutMs);
  }

  async expectSizeMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.sizeM), count, timeoutMs);
  }

  async clickQty1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.qty1));
  }

  async doubleClickQty1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.qty1));
  }

  async longPressQty1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.qty1));
  }

  async expectQty1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.qty1), value, timeoutMs);
  }

  async expectQty1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.qty1), timeoutMs);
  }

  async expectQty1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.qty1), timeoutMs);
  }

  async expectQty1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.qty1), timeoutMs);
  }

  async expectQty1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.qty1), timeoutMs);
  }

  async expectQty1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.qty1), timeoutMs);
  }

  async expectQty1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.qty1), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.element), count, timeoutMs);
  }

  async clickOff(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.Off));
  }

  async doubleClickOff(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.Off));
  }

  async longPressOff(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.Off));
  }

  async expectOffValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.Off), value, timeoutMs);
  }

  async expectOffEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.Off), timeoutMs);
  }

  async expectOffDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.Off), timeoutMs);
  }

  async expectOffChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.Off), timeoutMs);
  }

  async expectOffUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.Off), timeoutMs);
  }

  async expectOffFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.Off), timeoutMs);
  }

  async expectOffCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.Off), count, timeoutMs);
  }

  async clickDays(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.Days));
  }

  async doubleClickDays(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.Days));
  }

  async longPressDays(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.Days));
  }

  async expectDaysValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.Days), value, timeoutMs);
  }

  async expectDaysEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.Days), timeoutMs);
  }

  async expectDaysDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.Days), timeoutMs);
  }

  async expectDaysChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.Days), timeoutMs);
  }

  async expectDaysUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.Days), timeoutMs);
  }

  async expectDaysFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.Days), timeoutMs);
  }

  async expectDaysCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.Days), count, timeoutMs);
  }

  async longPressLOGINNOW(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.lOGINNOW));
  }

  async expectLOGINNOWValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.lOGINNOW), value, timeoutMs);
  }

  async expectLOGINNOWEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.lOGINNOW), timeoutMs);
  }

  async expectLOGINNOWDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.lOGINNOW), timeoutMs);
  }

  async expectLOGINNOWChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.lOGINNOW), timeoutMs);
  }

  async expectLOGINNOWUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.lOGINNOW), timeoutMs);
  }

  async expectLOGINNOWFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.lOGINNOW), timeoutMs);
  }

  async expectLOGINNOWCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.lOGINNOW), count, timeoutMs);
  }

  async longPressAPPLY(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.aPPLY));
  }

  async expectAPPLYValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.aPPLY), value, timeoutMs);
  }

  async expectAPPLYChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.aPPLY), timeoutMs);
  }

  async expectAPPLYUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.aPPLY), timeoutMs);
  }

  async expectAPPLYFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.aPPLY), timeoutMs);
  }

  async expectAPPLYCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.aPPLY), count, timeoutMs);
  }

  async longPressLogin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.login));
  }

  async expectLoginValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.login), value, timeoutMs);
  }

  async expectLoginEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.login), timeoutMs);
  }

  async expectLoginDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.login), timeoutMs);
  }

  async expectLoginChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.login), timeoutMs);
  }

  async expectLoginUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.login), timeoutMs);
  }

  async expectLoginFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.login), timeoutMs);
  }

  async expectLoginCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.login), count, timeoutMs);
  }

  async clickToGetUpto300(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.toGetUpto300));
  }

  async doubleClickToGetUpto300(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.toGetUpto300));
  }

  async longPressToGetUpto300(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.toGetUpto300));
  }

  async expectToGetUpto300Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.toGetUpto300), value, timeoutMs);
  }

  async expectToGetUpto300Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.toGetUpto300), timeoutMs);
  }

  async expectToGetUpto300Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.toGetUpto300), timeoutMs);
  }

  async expectToGetUpto300Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.toGetUpto300), timeoutMs);
  }

  async expectToGetUpto300Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.toGetUpto300), timeoutMs);
  }

  async expectToGetUpto300Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.toGetUpto300), timeoutMs);
  }

  async expectToGetUpto300Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.toGetUpto300), count, timeoutMs);
  }

  async clickTotalMRP(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.totalMRP));
  }

  async doubleClickTotalMRP(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.totalMRP));
  }

  async longPressTotalMRP(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.totalMRP));
  }

  async expectTotalMRPValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.totalMRP), value, timeoutMs);
  }

  async expectTotalMRPEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.totalMRP), timeoutMs);
  }

  async expectTotalMRPDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.totalMRP), timeoutMs);
  }

  async expectTotalMRPChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.totalMRP), timeoutMs);
  }

  async expectTotalMRPUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.totalMRP), timeoutMs);
  }

  async expectTotalMRPFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.totalMRP), timeoutMs);
  }

  async expectTotalMRPCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.totalMRP), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.element2), count, timeoutMs);
  }

  async clickDiscountOnMRP(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.discountOnMRP));
  }

  async doubleClickDiscountOnMRP(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.discountOnMRP));
  }

  async longPressDiscountOnMRP(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.discountOnMRP));
  }

  async expectDiscountOnMRPValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.discountOnMRP), value, timeoutMs);
  }

  async expectDiscountOnMRPEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.discountOnMRP), timeoutMs);
  }

  async expectDiscountOnMRPDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.discountOnMRP), timeoutMs);
  }

  async expectDiscountOnMRPChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.discountOnMRP), timeoutMs);
  }

  async expectDiscountOnMRPUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.discountOnMRP), timeoutMs);
  }

  async expectDiscountOnMRPFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.discountOnMRP), timeoutMs);
  }

  async expectDiscountOnMRPCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.discountOnMRP), count, timeoutMs);
  }

  async clickElement3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.element3));
  }

  async doubleClickElement3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.element3));
  }

  async longPressElement3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.element3));
  }

  async expectElement3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.element3), value, timeoutMs);
  }

  async expectElement3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.element3), timeoutMs);
  }

  async expectElement3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.element3), timeoutMs);
  }

  async expectElement3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.element3), timeoutMs);
  }

  async expectElement3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.element3), timeoutMs);
  }

  async expectElement3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.element3), timeoutMs);
  }

  async expectElement3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.element3), count, timeoutMs);
  }

  async clickCouponDiscount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.couponDiscount));
  }

  async doubleClickCouponDiscount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.couponDiscount));
  }

  async longPressCouponDiscount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.couponDiscount));
  }

  async expectCouponDiscountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.couponDiscount), value, timeoutMs);
  }

  async expectCouponDiscountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.couponDiscount), timeoutMs);
  }

  async expectCouponDiscountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.couponDiscount), timeoutMs);
  }

  async expectCouponDiscountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.couponDiscount), timeoutMs);
  }

  async expectCouponDiscountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.couponDiscount), timeoutMs);
  }

  async expectCouponDiscountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.couponDiscount), timeoutMs);
  }

  async expectCouponDiscountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.couponDiscount), count, timeoutMs);
  }

  async clickApplyCoupon(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.applyCoupon));
  }

  async doubleClickApplyCoupon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.applyCoupon));
  }

  async longPressApplyCoupon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.applyCoupon));
  }

  async expectApplyCouponValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.applyCoupon), value, timeoutMs);
  }

  async expectApplyCouponEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.applyCoupon), timeoutMs);
  }

  async expectApplyCouponDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.applyCoupon), timeoutMs);
  }

  async expectApplyCouponChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.applyCoupon), timeoutMs);
  }

  async expectApplyCouponUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.applyCoupon), timeoutMs);
  }

  async expectApplyCouponFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.applyCoupon), timeoutMs);
  }

  async expectApplyCouponCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.applyCoupon), count, timeoutMs);
  }

  async clickPlatformFee(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.platformFee));
  }

  async doubleClickPlatformFee(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.platformFee));
  }

  async longPressPlatformFee(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.platformFee));
  }

  async expectPlatformFeeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.platformFee), value, timeoutMs);
  }

  async expectPlatformFeeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.platformFee), timeoutMs);
  }

  async expectPlatformFeeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.platformFee), timeoutMs);
  }

  async expectPlatformFeeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.platformFee), timeoutMs);
  }

  async expectPlatformFeeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.platformFee), timeoutMs);
  }

  async expectPlatformFeeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.platformFee), timeoutMs);
  }

  async expectPlatformFeeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.platformFee), count, timeoutMs);
  }

  async clickKnowMore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.knowMore));
  }

  async doubleClickKnowMore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.knowMore));
  }

  async longPressKnowMore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.knowMore));
  }

  async expectKnowMoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.knowMore), value, timeoutMs);
  }

  async expectKnowMoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.knowMore), timeoutMs);
  }

  async expectKnowMoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.knowMore), timeoutMs);
  }

  async expectKnowMoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.knowMore), timeoutMs);
  }

  async expectKnowMoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.knowMore), timeoutMs);
  }

  async expectKnowMoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.knowMore), timeoutMs);
  }

  async expectKnowMoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.knowMore), count, timeoutMs);
  }

  async clickElement4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.element4));
  }

  async doubleClickElement4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.element4));
  }

  async longPressElement4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.element4));
  }

  async expectElement4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.element4), value, timeoutMs);
  }

  async expectElement4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.element4), timeoutMs);
  }

  async expectElement4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.element4), timeoutMs);
  }

  async expectElement4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.element4), timeoutMs);
  }

  async expectElement4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.element4), timeoutMs);
  }

  async expectElement4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.element4), timeoutMs);
  }

  async expectElement4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.element4), count, timeoutMs);
  }

  async clickTotalAmount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.totalAmount));
  }

  async doubleClickTotalAmount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.totalAmount));
  }

  async longPressTotalAmount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.totalAmount));
  }

  async expectTotalAmountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.totalAmount), value, timeoutMs);
  }

  async expectTotalAmountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.totalAmount), timeoutMs);
  }

  async expectTotalAmountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.totalAmount), timeoutMs);
  }

  async expectTotalAmountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.totalAmount), timeoutMs);
  }

  async expectTotalAmountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.totalAmount), timeoutMs);
  }

  async expectTotalAmountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.totalAmount), timeoutMs);
  }

  async expectTotalAmountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.totalAmount), count, timeoutMs);
  }

  async clickElement5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.element5));
  }

  async doubleClickElement5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.element5));
  }

  async longPressElement5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.element5));
  }

  async expectElement5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.element5), value, timeoutMs);
  }

  async expectElement5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.element5), timeoutMs);
  }

  async expectElement5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.element5), timeoutMs);
  }

  async expectElement5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.element5), timeoutMs);
  }

  async expectElement5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.element5), timeoutMs);
  }

  async expectElement5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.element5), timeoutMs);
  }

  async expectElement5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.element5), count, timeoutMs);
  }

  async longPressTermsOfUse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.termsOfUse));
  }

  async expectTermsOfUseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.termsOfUse), value, timeoutMs);
  }

  async expectTermsOfUseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.termsOfUse), count, timeoutMs);
  }

  async longPressPrivacyPolicy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.privacyPolicy));
  }

  async expectPrivacyPolicyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.privacyPolicy), value, timeoutMs);
  }

  async expectPrivacyPolicyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.privacyPolicy), count, timeoutMs);
  }

  async longPressBUYNOWWITHVIP(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.bUYNOWWITHVIP));
  }

  async expectBUYNOWWITHVIPValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.bUYNOWWITHVIP), value, timeoutMs);
  }

  async expectBUYNOWWITHVIPChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.bUYNOWWITHVIP), timeoutMs);
  }

  async expectBUYNOWWITHVIPUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.bUYNOWWITHVIP), timeoutMs);
  }

  async expectBUYNOWWITHVIPFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.bUYNOWWITHVIP), timeoutMs);
  }

  async expectBUYNOWWITHVIPCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.bUYNOWWITHVIP), count, timeoutMs);
  }

}
