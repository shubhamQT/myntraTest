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

export class BuyPage {
  private static readonly L = {
    sIZECHART: { strategy: 'role' as const, value: 'SIZE CHART', role: 'button', actionKind: 'button' as const },
    s: { strategy: 'role' as const, value: 'S', role: 'button', actionKind: 'button' as const },
    m: { strategy: 'role' as const, value: 'M', role: 'button', actionKind: 'button' as const },
    l: { strategy: 'role' as const, value: 'L', role: 'button', actionKind: 'button' as const },
    xL: { strategy: 'role' as const, value: 'XL', role: 'button', actionKind: 'button' as const },
    xXL: { strategy: 'role' as const, value: 'XXL', role: 'button', actionKind: 'button' as const },
    aDDTOBAG: { strategy: 'text' as const, value: 'ADD TO BAG', actionKind: 'text' as const },
    buyNowWithVIP: { strategy: 'text' as const, value: 'Buy Now with VIP Access', actionKind: 'text' as const },
    wISHLIST: { strategy: 'text' as const, value: 'WISHLIST', actionKind: 'text' as const },
    dELIVERYOPTIONS: { strategy: 'text' as const, value: 'DELIVERY OPTIONS', actionKind: 'text' as const },
    pincode: { strategy: 'css' as const, value: '[name="pincode"]', actionKind: 'textbox' as const },
    pleaseEnterPINCode: { strategy: 'text' as const, value: 'Please enter PIN code to check delivery time & Pay', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickSIZECHART(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BuyPage.L.sIZECHART));
  }

  async doubleClickSIZECHART(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BuyPage.L.sIZECHART));
  }

  async expectSIZECHARTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BuyPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BuyPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BuyPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BuyPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BuyPage.L.sIZECHART), expected, timeoutMs);
  }

  async expectSIZECHARTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BuyPage.L.sIZECHART), substring, timeoutMs);
  }

  async scrollSIZECHARTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BuyPage.L.sIZECHART));
  }

  async clickS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BuyPage.L.s));
  }

  async doubleClickS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BuyPage.L.s));
  }

  async expectSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BuyPage.L.s), timeoutMs);
  }

  async expectSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BuyPage.L.s), timeoutMs);
  }

  async expectSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BuyPage.L.s), timeoutMs);
  }

  async expectSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BuyPage.L.s), timeoutMs);
  }

  async expectSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BuyPage.L.s), expected, timeoutMs);
  }

  async expectSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BuyPage.L.s), substring, timeoutMs);
  }

  async scrollSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BuyPage.L.s));
  }

  async clickM(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BuyPage.L.m));
  }

  async doubleClickM(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BuyPage.L.m));
  }

  async expectMVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BuyPage.L.m), timeoutMs);
  }

  async expectMHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BuyPage.L.m), timeoutMs);
  }

  async expectMEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BuyPage.L.m), timeoutMs);
  }

  async expectMDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BuyPage.L.m), timeoutMs);
  }

  async expectMText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BuyPage.L.m), expected, timeoutMs);
  }

  async expectMContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BuyPage.L.m), substring, timeoutMs);
  }

  async scrollMIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BuyPage.L.m));
  }

  async clickL(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BuyPage.L.l));
  }

  async doubleClickL(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BuyPage.L.l));
  }

  async expectLVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BuyPage.L.l), timeoutMs);
  }

  async expectLHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BuyPage.L.l), timeoutMs);
  }

  async expectLEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BuyPage.L.l), timeoutMs);
  }

  async expectLDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BuyPage.L.l), timeoutMs);
  }

  async expectLText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BuyPage.L.l), expected, timeoutMs);
  }

  async expectLContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BuyPage.L.l), substring, timeoutMs);
  }

  async scrollLIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BuyPage.L.l));
  }

  async clickXL(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BuyPage.L.xL));
  }

  async doubleClickXL(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BuyPage.L.xL));
  }

  async expectXLVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BuyPage.L.xL), timeoutMs);
  }

  async expectXLHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BuyPage.L.xL), timeoutMs);
  }

  async expectXLEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BuyPage.L.xL), timeoutMs);
  }

  async expectXLDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BuyPage.L.xL), timeoutMs);
  }

  async expectXLText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BuyPage.L.xL), expected, timeoutMs);
  }

  async expectXLContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BuyPage.L.xL), substring, timeoutMs);
  }

  async scrollXLIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BuyPage.L.xL));
  }

  async clickXXL(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BuyPage.L.xXL));
  }

  async doubleClickXXL(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BuyPage.L.xXL));
  }

  async expectXXLVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BuyPage.L.xXL), timeoutMs);
  }

  async expectXXLHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BuyPage.L.xXL), timeoutMs);
  }

  async expectXXLEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BuyPage.L.xXL), timeoutMs);
  }

  async expectXXLDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BuyPage.L.xXL), timeoutMs);
  }

  async expectXXLText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BuyPage.L.xXL), expected, timeoutMs);
  }

  async expectXXLContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BuyPage.L.xXL), substring, timeoutMs);
  }

  async scrollXXLIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BuyPage.L.xXL));
  }

  async getInnerTextADDTOBAG(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BuyPage.L.aDDTOBAG));
  }

  async expectADDTOBAGVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BuyPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BuyPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BuyPage.L.aDDTOBAG), expected, timeoutMs);
  }

  async expectADDTOBAGContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BuyPage.L.aDDTOBAG), substring, timeoutMs);
  }

  async scrollADDTOBAGIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BuyPage.L.aDDTOBAG));
  }

  async getInnerTextBuyNowWithVIP(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BuyPage.L.buyNowWithVIP));
  }

  async expectBuyNowWithVIPVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BuyPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BuyPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BuyPage.L.buyNowWithVIP), expected, timeoutMs);
  }

  async expectBuyNowWithVIPContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BuyPage.L.buyNowWithVIP), substring, timeoutMs);
  }

  async scrollBuyNowWithVIPIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BuyPage.L.buyNowWithVIP));
  }

  async getInnerTextWISHLIST(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BuyPage.L.wISHLIST));
  }

  async expectWISHLISTVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BuyPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BuyPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BuyPage.L.wISHLIST), expected, timeoutMs);
  }

  async expectWISHLISTContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BuyPage.L.wISHLIST), substring, timeoutMs);
  }

  async scrollWISHLISTIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BuyPage.L.wISHLIST));
  }

  async getInnerTextDELIVERYOPTIONS(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS));
  }

  async expectDELIVERYOPTIONSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS), expected, timeoutMs);
  }

  async expectDELIVERYOPTIONSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS), substring, timeoutMs);
  }

  async scrollDELIVERYOPTIONSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS));
  }

  async fillPincode(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, BuyPage.L.pincode), value);
  }

  async clearPincode(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, BuyPage.L.pincode));
  }

  async typeTextPincode(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, BuyPage.L.pincode), value);
  }

  async expectPincodeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BuyPage.L.pincode), timeoutMs);
  }

  async expectPincodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BuyPage.L.pincode), timeoutMs);
  }

  async expectPincodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BuyPage.L.pincode), timeoutMs);
  }

  async expectPincodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BuyPage.L.pincode), timeoutMs);
  }

  async expectPincodeValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BuyPage.L.pincode), expected, timeoutMs);
  }

  async expectPincodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BuyPage.L.pincode), timeoutMs);
  }

  async scrollPincodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BuyPage.L.pincode));
  }

  async getInnerTextPleaseEnterPINCode(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, BuyPage.L.pleaseEnterPINCode));
  }

  async expectPleaseEnterPINCodeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, BuyPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, BuyPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BuyPage.L.pleaseEnterPINCode), expected, timeoutMs);
  }

  async expectPleaseEnterPINCodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BuyPage.L.pleaseEnterPINCode), substring, timeoutMs);
  }

  async scrollPleaseEnterPINCodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, BuyPage.L.pleaseEnterPINCode));
  }


  async longPressSIZECHART(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BuyPage.L.sIZECHART));
  }

  async expectSIZECHARTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BuyPage.L.sIZECHART), value, timeoutMs);
  }

  async expectSIZECHARTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BuyPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BuyPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BuyPage.L.sIZECHART), timeoutMs);
  }

  async expectSIZECHARTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BuyPage.L.sIZECHART), count, timeoutMs);
  }

  async longPressS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BuyPage.L.s));
  }

  async expectSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BuyPage.L.s), value, timeoutMs);
  }

  async expectSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BuyPage.L.s), timeoutMs);
  }

  async expectSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BuyPage.L.s), timeoutMs);
  }

  async expectSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BuyPage.L.s), timeoutMs);
  }

  async expectSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BuyPage.L.s), count, timeoutMs);
  }

  async longPressM(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BuyPage.L.m));
  }

  async expectMValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BuyPage.L.m), value, timeoutMs);
  }

  async expectMChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BuyPage.L.m), timeoutMs);
  }

  async expectMUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BuyPage.L.m), timeoutMs);
  }

  async expectMFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BuyPage.L.m), timeoutMs);
  }

  async expectMCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BuyPage.L.m), count, timeoutMs);
  }

  async longPressL(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BuyPage.L.l));
  }

  async expectLValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BuyPage.L.l), value, timeoutMs);
  }

  async expectLChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BuyPage.L.l), timeoutMs);
  }

  async expectLUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BuyPage.L.l), timeoutMs);
  }

  async expectLFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BuyPage.L.l), timeoutMs);
  }

  async expectLCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BuyPage.L.l), count, timeoutMs);
  }

  async longPressXL(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BuyPage.L.xL));
  }

  async expectXLValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BuyPage.L.xL), value, timeoutMs);
  }

  async expectXLChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BuyPage.L.xL), timeoutMs);
  }

  async expectXLUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BuyPage.L.xL), timeoutMs);
  }

  async expectXLFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BuyPage.L.xL), timeoutMs);
  }

  async expectXLCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BuyPage.L.xL), count, timeoutMs);
  }

  async longPressXXL(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BuyPage.L.xXL));
  }

  async expectXXLValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BuyPage.L.xXL), value, timeoutMs);
  }

  async expectXXLChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BuyPage.L.xXL), timeoutMs);
  }

  async expectXXLUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BuyPage.L.xXL), timeoutMs);
  }

  async expectXXLFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BuyPage.L.xXL), timeoutMs);
  }

  async expectXXLCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BuyPage.L.xXL), count, timeoutMs);
  }

  async clickADDTOBAG(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BuyPage.L.aDDTOBAG));
  }

  async doubleClickADDTOBAG(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BuyPage.L.aDDTOBAG));
  }

  async longPressADDTOBAG(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BuyPage.L.aDDTOBAG));
  }

  async expectADDTOBAGValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BuyPage.L.aDDTOBAG), value, timeoutMs);
  }

  async expectADDTOBAGEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BuyPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BuyPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BuyPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BuyPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BuyPage.L.aDDTOBAG), timeoutMs);
  }

  async expectADDTOBAGCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BuyPage.L.aDDTOBAG), count, timeoutMs);
  }

  async clickBuyNowWithVIP(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BuyPage.L.buyNowWithVIP));
  }

  async doubleClickBuyNowWithVIP(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BuyPage.L.buyNowWithVIP));
  }

  async longPressBuyNowWithVIP(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BuyPage.L.buyNowWithVIP));
  }

  async expectBuyNowWithVIPValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BuyPage.L.buyNowWithVIP), value, timeoutMs);
  }

  async expectBuyNowWithVIPEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BuyPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BuyPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BuyPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BuyPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BuyPage.L.buyNowWithVIP), timeoutMs);
  }

  async expectBuyNowWithVIPCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BuyPage.L.buyNowWithVIP), count, timeoutMs);
  }

  async clickWISHLIST(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BuyPage.L.wISHLIST));
  }

  async doubleClickWISHLIST(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BuyPage.L.wISHLIST));
  }

  async longPressWISHLIST(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BuyPage.L.wISHLIST));
  }

  async expectWISHLISTValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BuyPage.L.wISHLIST), value, timeoutMs);
  }

  async expectWISHLISTEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BuyPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BuyPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BuyPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BuyPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BuyPage.L.wISHLIST), timeoutMs);
  }

  async expectWISHLISTCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BuyPage.L.wISHLIST), count, timeoutMs);
  }

  async clickDELIVERYOPTIONS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS));
  }

  async doubleClickDELIVERYOPTIONS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS));
  }

  async longPressDELIVERYOPTIONS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS));
  }

  async expectDELIVERYOPTIONSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS), value, timeoutMs);
  }

  async expectDELIVERYOPTIONSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS), timeoutMs);
  }

  async expectDELIVERYOPTIONSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BuyPage.L.dELIVERYOPTIONS), count, timeoutMs);
  }

  async expectPincodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, BuyPage.L.pincode), expected, timeoutMs);
  }

  async expectPincodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, BuyPage.L.pincode), substring, timeoutMs);
  }

  async expectPincodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BuyPage.L.pincode), timeoutMs);
  }

  async expectPincodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BuyPage.L.pincode), timeoutMs);
  }

  async expectPincodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BuyPage.L.pincode), count, timeoutMs);
  }

  async clickPleaseEnterPINCode(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, BuyPage.L.pleaseEnterPINCode));
  }

  async doubleClickPleaseEnterPINCode(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, BuyPage.L.pleaseEnterPINCode));
  }

  async longPressPleaseEnterPINCode(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, BuyPage.L.pleaseEnterPINCode));
  }

  async expectPleaseEnterPINCodeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, BuyPage.L.pleaseEnterPINCode), value, timeoutMs);
  }

  async expectPleaseEnterPINCodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, BuyPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, BuyPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, BuyPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, BuyPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, BuyPage.L.pleaseEnterPINCode), timeoutMs);
  }

  async expectPleaseEnterPINCodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, BuyPage.L.pleaseEnterPINCode), count, timeoutMs);
  }

}
