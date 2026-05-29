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

export class HomePage {
  private static readonly L = {
    mEN: { strategy: 'role' as const, value: 'MEN', role: 'link', actionKind: 'link' as const },
    wOMEN: { strategy: 'role' as const, value: 'WOMEN', role: 'link', actionKind: 'link' as const },
    kIDS: { strategy: 'role' as const, value: 'KIDS', role: 'link', actionKind: 'link' as const },
    hOME: { strategy: 'role' as const, value: 'HOME', role: 'link', actionKind: 'link' as const },
    bEAUTY: { strategy: 'role' as const, value: 'BEAUTY', role: 'link', actionKind: 'link' as const },
    gENZ: { strategy: 'role' as const, value: 'GENZ', role: 'link', actionKind: 'link' as const },
    sTUDIO: { strategy: 'role' as const, value: 'STUDIO', role: 'link', actionKind: 'link' as const },
    profile: { strategy: 'text' as const, value: 'Profile', actionKind: 'text' as const },
    input: { strategy: 'placeholder' as const, value: 'Search for products, brands and more', actionKind: 'textbox' as const },
    button: { strategy: 'role' as const, value: '1', role: 'button', actionKind: 'button' as const },
    button2: { strategy: 'role' as const, value: '2', role: 'button', actionKind: 'button' as const },
    button3: { strategy: 'role' as const, value: '3', role: 'button', actionKind: 'button' as const },
    button4: { strategy: 'role' as const, value: '4', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickMEN(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.mEN));
  }

  async doubleClickMEN(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.mEN));
  }

  async expectMENVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.mEN), timeoutMs);
  }

  async expectMENHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.mEN), timeoutMs);
  }

  async expectMENText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.mEN), expected, timeoutMs);
  }

  async expectMENContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.mEN), substring, timeoutMs);
  }

  async scrollMENIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.mEN));
  }

  async clickWOMEN(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.wOMEN));
  }

  async doubleClickWOMEN(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.wOMEN));
  }

  async expectWOMENVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.wOMEN), timeoutMs);
  }

  async expectWOMENHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.wOMEN), timeoutMs);
  }

  async expectWOMENText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.wOMEN), expected, timeoutMs);
  }

  async expectWOMENContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.wOMEN), substring, timeoutMs);
  }

  async scrollWOMENIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.wOMEN));
  }

  async clickKIDS(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.kIDS));
  }

  async doubleClickKIDS(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.kIDS));
  }

  async expectKIDSVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.kIDS), timeoutMs);
  }

  async expectKIDSHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.kIDS), timeoutMs);
  }

  async expectKIDSText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.kIDS), expected, timeoutMs);
  }

  async expectKIDSContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.kIDS), substring, timeoutMs);
  }

  async scrollKIDSIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.kIDS));
  }

  async clickHOME(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.hOME));
  }

  async doubleClickHOME(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.hOME));
  }

  async expectHOMEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.hOME), timeoutMs);
  }

  async expectHOMEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.hOME), timeoutMs);
  }

  async expectHOMEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.hOME), expected, timeoutMs);
  }

  async expectHOMEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.hOME), substring, timeoutMs);
  }

  async scrollHOMEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.hOME));
  }

  async clickBEAUTY(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.bEAUTY));
  }

  async doubleClickBEAUTY(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.bEAUTY));
  }

  async expectBEAUTYVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.bEAUTY), timeoutMs);
  }

  async expectBEAUTYHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.bEAUTY), timeoutMs);
  }

  async expectBEAUTYText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.bEAUTY), expected, timeoutMs);
  }

  async expectBEAUTYContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.bEAUTY), substring, timeoutMs);
  }

  async scrollBEAUTYIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.bEAUTY));
  }

  async clickGENZ(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.gENZ));
  }

  async doubleClickGENZ(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.gENZ));
  }

  async expectGENZVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.gENZ), timeoutMs);
  }

  async expectGENZHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.gENZ), timeoutMs);
  }

  async expectGENZText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.gENZ), expected, timeoutMs);
  }

  async expectGENZContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.gENZ), substring, timeoutMs);
  }

  async scrollGENZIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.gENZ));
  }

  async clickSTUDIO(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.sTUDIO));
  }

  async doubleClickSTUDIO(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.sTUDIO));
  }

  async expectSTUDIOVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.sTUDIO), timeoutMs);
  }

  async expectSTUDIOHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.sTUDIO), timeoutMs);
  }

  async expectSTUDIOText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.sTUDIO), expected, timeoutMs);
  }

  async expectSTUDIOContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.sTUDIO), substring, timeoutMs);
  }

  async scrollSTUDIOIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.sTUDIO));
  }

  async getInnerTextProfile(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, HomePage.L.profile));
  }

  async expectProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.profile), timeoutMs);
  }

  async expectProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.profile), timeoutMs);
  }

  async expectProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.profile), expected, timeoutMs);
  }

  async expectProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.profile), substring, timeoutMs);
  }

  async scrollProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.profile));
  }

  async fillInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, HomePage.L.input), value);
  }

  async clearInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, HomePage.L.input));
  }

  async typeTextInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, HomePage.L.input), value);
  }

  async expectInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.input), timeoutMs);
  }

  async expectInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.input), timeoutMs);
  }

  async expectInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.input), timeoutMs);
  }

  async expectInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.input), timeoutMs);
  }

  async expectInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.input), expected, timeoutMs);
  }

  async expectInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.input), timeoutMs);
  }

  async scrollInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.input));
  }

  async clickButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.button));
  }

  async doubleClickButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.button));
  }

  async expectButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.button), timeoutMs);
  }

  async expectButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.button), timeoutMs);
  }

  async expectButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.button), timeoutMs);
  }

  async expectButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.button), timeoutMs);
  }

  async expectButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.button), expected, timeoutMs);
  }

  async expectButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.button), substring, timeoutMs);
  }

  async scrollButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.button));
  }

  async clickButton2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.button2));
  }

  async doubleClickButton2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.button2));
  }

  async expectButton2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.button2), timeoutMs);
  }

  async expectButton2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.button2), timeoutMs);
  }

  async expectButton2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.button2), timeoutMs);
  }

  async expectButton2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.button2), timeoutMs);
  }

  async expectButton2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.button2), expected, timeoutMs);
  }

  async expectButton2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.button2), substring, timeoutMs);
  }

  async scrollButton2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.button2));
  }

  async clickButton3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.button3));
  }

  async doubleClickButton3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.button3));
  }

  async expectButton3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.button3), timeoutMs);
  }

  async expectButton3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.button3), timeoutMs);
  }

  async expectButton3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.button3), timeoutMs);
  }

  async expectButton3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.button3), timeoutMs);
  }

  async expectButton3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.button3), expected, timeoutMs);
  }

  async expectButton3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.button3), substring, timeoutMs);
  }

  async scrollButton3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.button3));
  }

  async clickButton4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.button4));
  }

  async doubleClickButton4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.button4));
  }

  async expectButton4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, HomePage.L.button4), timeoutMs);
  }

  async expectButton4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, HomePage.L.button4), timeoutMs);
  }

  async expectButton4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.button4), timeoutMs);
  }

  async expectButton4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.button4), timeoutMs);
  }

  async expectButton4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.button4), expected, timeoutMs);
  }

  async expectButton4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.button4), substring, timeoutMs);
  }

  async scrollButton4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, HomePage.L.button4));
  }


  async longPressMEN(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.mEN));
  }

  async expectMENValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.mEN), value, timeoutMs);
  }

  async expectMENEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.mEN), timeoutMs);
  }

  async expectMENDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.mEN), timeoutMs);
  }

  async expectMENChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.mEN), timeoutMs);
  }

  async expectMENUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.mEN), timeoutMs);
  }

  async expectMENFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.mEN), timeoutMs);
  }

  async expectMENCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.mEN), count, timeoutMs);
  }

  async longPressWOMEN(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.wOMEN));
  }

  async expectWOMENValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.wOMEN), value, timeoutMs);
  }

  async expectWOMENEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.wOMEN), timeoutMs);
  }

  async expectWOMENDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.wOMEN), timeoutMs);
  }

  async expectWOMENChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.wOMEN), timeoutMs);
  }

  async expectWOMENUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.wOMEN), timeoutMs);
  }

  async expectWOMENFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.wOMEN), timeoutMs);
  }

  async expectWOMENCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.wOMEN), count, timeoutMs);
  }

  async longPressKIDS(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.kIDS));
  }

  async expectKIDSValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.kIDS), value, timeoutMs);
  }

  async expectKIDSEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.kIDS), timeoutMs);
  }

  async expectKIDSDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.kIDS), timeoutMs);
  }

  async expectKIDSChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.kIDS), timeoutMs);
  }

  async expectKIDSUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.kIDS), timeoutMs);
  }

  async expectKIDSFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.kIDS), timeoutMs);
  }

  async expectKIDSCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.kIDS), count, timeoutMs);
  }

  async longPressHOME(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.hOME));
  }

  async expectHOMEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.hOME), value, timeoutMs);
  }

  async expectHOMEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.hOME), timeoutMs);
  }

  async expectHOMEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.hOME), timeoutMs);
  }

  async expectHOMEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.hOME), timeoutMs);
  }

  async expectHOMEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.hOME), timeoutMs);
  }

  async expectHOMEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.hOME), timeoutMs);
  }

  async expectHOMECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.hOME), count, timeoutMs);
  }

  async longPressBEAUTY(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.bEAUTY));
  }

  async expectBEAUTYValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.bEAUTY), value, timeoutMs);
  }

  async expectBEAUTYEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.bEAUTY), timeoutMs);
  }

  async expectBEAUTYDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.bEAUTY), timeoutMs);
  }

  async expectBEAUTYChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.bEAUTY), timeoutMs);
  }

  async expectBEAUTYUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.bEAUTY), timeoutMs);
  }

  async expectBEAUTYFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.bEAUTY), timeoutMs);
  }

  async expectBEAUTYCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.bEAUTY), count, timeoutMs);
  }

  async longPressGENZ(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.gENZ));
  }

  async expectGENZValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.gENZ), value, timeoutMs);
  }

  async expectGENZEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.gENZ), timeoutMs);
  }

  async expectGENZDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.gENZ), timeoutMs);
  }

  async expectGENZChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.gENZ), timeoutMs);
  }

  async expectGENZUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.gENZ), timeoutMs);
  }

  async expectGENZFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.gENZ), timeoutMs);
  }

  async expectGENZCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.gENZ), count, timeoutMs);
  }

  async longPressSTUDIO(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.sTUDIO));
  }

  async expectSTUDIOValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.sTUDIO), value, timeoutMs);
  }

  async expectSTUDIOEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.sTUDIO), timeoutMs);
  }

  async expectSTUDIODisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.sTUDIO), timeoutMs);
  }

  async expectSTUDIOChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.sTUDIO), timeoutMs);
  }

  async expectSTUDIOUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.sTUDIO), timeoutMs);
  }

  async expectSTUDIOFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.sTUDIO), timeoutMs);
  }

  async expectSTUDIOCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.sTUDIO), count, timeoutMs);
  }

  async clickProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, HomePage.L.profile));
  }

  async doubleClickProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, HomePage.L.profile));
  }

  async longPressProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.profile));
  }

  async expectProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.profile), value, timeoutMs);
  }

  async expectProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, HomePage.L.profile), timeoutMs);
  }

  async expectProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, HomePage.L.profile), timeoutMs);
  }

  async expectProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.profile), timeoutMs);
  }

  async expectProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.profile), timeoutMs);
  }

  async expectProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.profile), timeoutMs);
  }

  async expectProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.profile), count, timeoutMs);
  }

  async expectInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, HomePage.L.input), expected, timeoutMs);
  }

  async expectInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, HomePage.L.input), substring, timeoutMs);
  }

  async expectInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.input), timeoutMs);
  }

  async expectInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.input), timeoutMs);
  }

  async expectInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.input), count, timeoutMs);
  }

  async longPressButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.button));
  }

  async expectButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.button), value, timeoutMs);
  }

  async expectButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.button), timeoutMs);
  }

  async expectButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.button), timeoutMs);
  }

  async expectButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.button), timeoutMs);
  }

  async expectButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.button), count, timeoutMs);
  }

  async longPressButton2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.button2));
  }

  async expectButton2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.button2), value, timeoutMs);
  }

  async expectButton2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.button2), timeoutMs);
  }

  async expectButton2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.button2), timeoutMs);
  }

  async expectButton2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.button2), timeoutMs);
  }

  async expectButton2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.button2), count, timeoutMs);
  }

  async longPressButton3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.button3));
  }

  async expectButton3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.button3), value, timeoutMs);
  }

  async expectButton3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.button3), timeoutMs);
  }

  async expectButton3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.button3), timeoutMs);
  }

  async expectButton3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.button3), timeoutMs);
  }

  async expectButton3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.button3), count, timeoutMs);
  }

  async longPressButton4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, HomePage.L.button4));
  }

  async expectButton4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, HomePage.L.button4), value, timeoutMs);
  }

  async expectButton4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, HomePage.L.button4), timeoutMs);
  }

  async expectButton4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, HomePage.L.button4), timeoutMs);
  }

  async expectButton4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, HomePage.L.button4), timeoutMs);
  }

  async expectButton4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, HomePage.L.button4), count, timeoutMs);
  }

}
