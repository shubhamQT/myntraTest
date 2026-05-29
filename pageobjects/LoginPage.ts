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

export class LoginPage {
  private static readonly L = {
    header: { strategy: 'css' as const, value: '#headerInput', actionKind: 'textbox' as const },
    or: { strategy: 'text' as const, value: 'or', actionKind: 'text' as const },
    termsOfUse: { strategy: 'role' as const, value: 'Terms of Use', role: 'link', actionKind: 'link' as const },
    privacyPolicy: { strategy: 'role' as const, value: 'Privacy Policy', role: 'link', actionKind: 'link' as const },
    getHelp: { strategy: 'text' as const, value: 'Get help', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async fillHeader(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.header), value);
  }

  async clearHeader(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.header));
  }

  async typeTextHeader(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.header), value);
  }

  async expectHeaderVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.header), timeoutMs);
  }

  async expectHeaderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.header), timeoutMs);
  }

  async expectHeaderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.header), timeoutMs);
  }

  async expectHeaderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.header), timeoutMs);
  }

  async expectHeaderValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.header), expected, timeoutMs);
  }

  async expectHeaderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.header), timeoutMs);
  }

  async scrollHeaderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.header));
  }

  async getInnerTextOr(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.or));
  }

  async expectOrVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.or), expected, timeoutMs);
  }

  async expectOrContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.or), substring, timeoutMs);
  }

  async scrollOrIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.or));
  }

  async clickTermsOfUse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.termsOfUse));
  }

  async doubleClickTermsOfUse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.termsOfUse));
  }

  async expectTermsOfUseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.termsOfUse), expected, timeoutMs);
  }

  async expectTermsOfUseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.termsOfUse), substring, timeoutMs);
  }

  async scrollTermsOfUseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.termsOfUse));
  }

  async clickPrivacyPolicy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.privacyPolicy));
  }

  async doubleClickPrivacyPolicy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.privacyPolicy));
  }

  async expectPrivacyPolicyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.privacyPolicy), expected, timeoutMs);
  }

  async expectPrivacyPolicyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.privacyPolicy), substring, timeoutMs);
  }

  async scrollPrivacyPolicyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.privacyPolicy));
  }

  async getInnerTextGetHelp(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.getHelp));
  }

  async expectGetHelpVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.getHelp), timeoutMs);
  }

  async expectGetHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.getHelp), timeoutMs);
  }

  async expectGetHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.getHelp), expected, timeoutMs);
  }

  async expectGetHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.getHelp), substring, timeoutMs);
  }

  async scrollGetHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.getHelp));
  }


  async expectHeaderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.header), expected, timeoutMs);
  }

  async expectHeaderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.header), substring, timeoutMs);
  }

  async expectHeaderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.header), timeoutMs);
  }

  async expectHeaderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.header), timeoutMs);
  }

  async expectHeaderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.header), count, timeoutMs);
  }

  async clickOr(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.or));
  }

  async doubleClickOr(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.or));
  }

  async longPressOr(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.or));
  }

  async expectOrValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.or), value, timeoutMs);
  }

  async expectOrEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.or), timeoutMs);
  }

  async expectOrCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.or), count, timeoutMs);
  }

  async longPressTermsOfUse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.termsOfUse));
  }

  async expectTermsOfUseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.termsOfUse), value, timeoutMs);
  }

  async expectTermsOfUseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.termsOfUse), count, timeoutMs);
  }

  async longPressPrivacyPolicy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.privacyPolicy));
  }

  async expectPrivacyPolicyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.privacyPolicy), value, timeoutMs);
  }

  async expectPrivacyPolicyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.privacyPolicy), count, timeoutMs);
  }

  async clickGetHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.getHelp));
  }

  async doubleClickGetHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.getHelp));
  }

  async longPressGetHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.getHelp));
  }

  async expectGetHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.getHelp), value, timeoutMs);
  }

  async expectGetHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.getHelp), timeoutMs);
  }

  async expectGetHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.getHelp), timeoutMs);
  }

  async expectGetHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.getHelp), timeoutMs);
  }

  async expectGetHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.getHelp), timeoutMs);
  }

  async expectGetHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.getHelp), timeoutMs);
  }

  async expectGetHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.getHelp), count, timeoutMs);
  }

}
