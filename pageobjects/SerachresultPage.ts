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

export class SerachresultPage {
  private static readonly L = {
    home: { strategy: 'role' as const, value: 'Home', role: 'link', actionKind: 'link' as const },
    clothing: { strategy: 'role' as const, value: 'Clothing', role: 'link', actionKind: 'link' as const },
    shirts: { strategy: 'role' as const, value: 'Shirts', role: 'link', actionKind: 'link' as const },
    rootrailthumbleft: { strategy: 'css' as const, value: '#rootRailThumbLeft', actionKind: 'generic' as const },
    rootrailthumbright: { strategy: 'css' as const, value: '#rootRailThumbRight', actionKind: 'generic' as const },
    hIGHLANDERSlimFitOpaque: { strategy: 'text' as const, value: 'HIGHLANDER Slim Fit Opaque Casual Shirt Rs. 479Rs. 1599(70% OFF)', actionKind: 'link' as const },
    peterEnglandMenFormal: { strategy: 'text' as const, value: 'Peter England Men Formal Shirt Rs. 467Rs. 1199(61% OFF) Only Few Left!', actionKind: 'link' as const },
    marksSpencerMen: { strategy: 'text' as const, value: 'Marks & Spencer Men Solid Formal Shirt Rs. 935Rs. 1799(48% OFF) Only Few Left!', actionKind: 'link' as const },
    blackberrysOpaqueFormalShirt: { strategy: 'role' as const, value: 'Blackberrys Opaque Formal Shirt Rs. 1027Rs. 2055(50% OFF)', role: 'link', actionKind: 'link' as const },
    iNVICTUSEasyCareMen: { strategy: 'role' as const, value: 'INVICTUS Easy Care Men Formal Shirt Rs. 559Rs. 1199(53% OFF)', role: 'link', actionKind: 'link' as const },
    nEWThomasScottFormal: { strategy: 'role' as const, value: 'NEW Thomas Scott Formal Shirt Rs. 809Rs. 3999(80% OFF)', role: 'link', actionKind: 'link' as const },
    aDByArvindFormal: { strategy: 'role' as const, value: 'AD By Arvind Formal Shirt Rs. 927Rs. 1599(42% OFF)', role: 'link', actionKind: 'link' as const },
    mISCHIEFMONKEYClassicCotton: { strategy: 'text' as const, value: 'MISCHIEF MONKEY Classic Cotton Formal Shirt Rs. 584Rs. 2088(Rs. 1504 OFF)', actionKind: 'link' as const },
    arrowPureCottonFormal: { strategy: 'role' as const, value: 'Arrow Pure Cotton Formal Shirt Rs. 702Rs. 1899(63% OFF)', role: 'link', actionKind: 'link' as const },
    peterEnglandSlimFit: { strategy: 'text' as const, value: 'Peter England Slim Fit Formal Shirt Rs. 1079Rs. 1199(10% OFF)', actionKind: 'link' as const },
    peterEnglandSlimFit2: { strategy: 'text' as const, value: 'Peter England Slim Fit Checked Formal Shirt Rs. 1039Rs. 1599(35% OFF)', actionKind: 'link' as const },
    nEWThomasScottFormal2: { strategy: 'role' as const, value: 'NEW Thomas Scott Formal Shirt Rs. 809Rs. 3999(80% OFF)', role: 'link', actionKind: 'link' as const },
    aDByArvindFormal2: { strategy: 'role' as const, value: 'AD By Arvind Formal Shirt Rs. 927Rs. 1599(42% OFF)', role: 'link', actionKind: 'link' as const },
    mISCHIEFMONKEYSpreadCollar: { strategy: 'text' as const, value: 'MISCHIEF MONKEY Spread Collar Formal Shirt Rs. 584Rs. 2088(72% OFF)', actionKind: 'link' as const },
    parkAvenuePureCotton: { strategy: 'text' as const, value: 'Park Avenue Pure Cotton Slim Formal Shirt Rs. 643Rs. 2299(72% OFF)', actionKind: 'link' as const },
    snitchKingOfHearts: { strategy: 'role' as const, value: 'Snitch King Of Hearts Formal Shirt Rs. 720Rs. 1699(58% OFF)', role: 'link', actionKind: 'link' as const },
    parkAvenueSlimFit: { strategy: 'role' as const, value: 'Park Avenue Slim Fit Formal Shirt Rs. 679Rs. 1999(66% OFF)', role: 'link', actionKind: 'link' as const },
    nEWSuoSlimFit: { strategy: 'role' as const, value: 'NEW Suo Slim Fit Formal Shirt Rs. 725Rs. 2199(67% OFF)', role: 'link', actionKind: 'link' as const },
    hIGHLANDERSlimFitOpaque2: { strategy: 'text' as const, value: 'HIGHLANDER Slim Fit Opaque Casual Shirt Rs. 463Rs. 1599(71% OFF)', actionKind: 'link' as const },
    englishNavyMenStriped: { strategy: 'text' as const, value: 'English Navy Men Striped Formal Shirt Rs. 687Rs. 1599(Rs. 912 OFF)', actionKind: 'link' as const },
    mISCHIEFMONKEYMenSolid: { strategy: 'text' as const, value: 'MISCHIEF MONKEY Men Solid Cotton Formal Shirt Rs. 584Rs. 2088(72% OFF)', actionKind: 'link' as const },
    snitchSlimFitFormal: { strategy: 'role' as const, value: 'Snitch Slim Fit Formal Shirt Rs. 821Rs. 1399(41% OFF)', role: 'link', actionKind: 'link' as const },
    mISCHIEFMONKEYMenSolid2: { strategy: 'text' as const, value: 'MISCHIEF MONKEY Men Solid Cotton Formal Shirt Rs. 584Rs. 2088(Rs. 1504 OFF)', actionKind: 'link' as const },
    nEWSuoSlimFit2: { strategy: 'role' as const, value: 'NEW Suo Slim Fit Formal Shirt Rs. 791Rs. 2399(67% OFF)', role: 'link', actionKind: 'link' as const },
    snitchSlimFitCotton: { strategy: 'text' as const, value: 'Snitch Slim Fit Cotton Formal Shirt Rs. 1199Rs. 1499(20% OFF) Only Few Left!', actionKind: 'link' as const },
    mISCHIEFMONKEYMenSolid3: { strategy: 'text' as const, value: 'MISCHIEF MONKEY Men Solid Cotton Formal Shirt Rs. 584Rs. 2088(72% OFF)', actionKind: 'link' as const },
    raymondPureCottonSlim: { strategy: 'role' as const, value: 'Raymond Pure Cotton Slim Fit Shirt Rs. 944Rs. 2199(57% OFF)', role: 'link', actionKind: 'link' as const },
    arrowPureCottonFormal2: { strategy: 'text' as const, value: 'Arrow Pure Cotton Formal Shirt Rs. 919Rs. 1999(54% OFF) Only Few Left!', actionKind: 'link' as const },
    parkAvenueSlimFit2: { strategy: 'role' as const, value: 'Park Avenue Slim Fit Formal Shirt Rs. 594Rs. 1699(65% OFF)', role: 'link', actionKind: 'link' as const },
    parkAvenueFormalShirt: { strategy: 'role' as const, value: 'Park Avenue Formal Shirt Rs. 631Rs. 1217(48% OFF)', role: 'link', actionKind: 'link' as const },
    arrowSlimFitFormal: { strategy: 'text' as const, value: 'Arrow Slim Fit Formal Shirt Rs. 873Rs. 1899(54% OFF) Only Few Left!', actionKind: 'link' as const },
    sWAZSlimFitSolid: { strategy: 'role' as const, value: 'SWAZ Slim Fit Solid Formal Shirt Rs. 487Rs. 1599(70% OFF)', role: 'link', actionKind: 'link' as const },
    aDByArvindMen: { strategy: 'text' as const, value: 'AD By Arvind Men Checked Formal Shirt Rs. 959Rs. 1599(40% OFF)', actionKind: 'link' as const },
    uRBANICESlimFitCotton: { strategy: 'text' as const, value: 'URBANICE Slim Fit Cotton Formal Shirt Rs. 791Rs. 1799(56% OFF)', actionKind: 'link' as const },
    fUNKYRICHMenShirt: { strategy: 'role' as const, value: 'FUNKY RICH Men Shirt Rs. 558Rs. 1499(63% OFF)', role: 'link', actionKind: 'link' as const },
    redTapeMenSolid: { strategy: 'text' as const, value: 'Red Tape Men Solid Cotton Formal Shirt Rs. 662Rs. 3399(81% OFF)', actionKind: 'link' as const },
    raymondSlimFitCotton: { strategy: 'text' as const, value: 'Raymond Slim Fit Cotton Formal Shirt Rs. 858Rs. 1999(57% OFF)', actionKind: 'link' as const },
    parkAvenueSlimFit3: { strategy: 'role' as const, value: 'Park Avenue Slim Fit Formal Shirt Rs. 574Rs. 2299(75% OFF)', role: 'link', actionKind: 'link' as const },
    snitchSlimFitFormal2: { strategy: 'role' as const, value: 'Snitch Slim Fit Formal Shirt Rs. 1022Rs. 1799(43% OFF)', role: 'link', actionKind: 'link' as const },
    parkAvenueMenSolid: { strategy: 'role' as const, value: 'Park Avenue Men Solid Formal Shirt Rs. 938Rs. 1999(53% OFF)', role: 'link', actionKind: 'link' as const },
    fUNKYRICHSpreadCollar: { strategy: 'text' as const, value: 'FUNKY RICH Spread Collar Formal Shirt Rs. 558Rs. 1499(63% OFF)', actionKind: 'link' as const },
    sztoriPureCottonFormal: { strategy: 'text' as const, value: 'Sztori Pure Cotton Formal Shirt Rs. 1087Rs. 3199(Rs. 2112 OFF)', actionKind: 'link' as const },
    parkAvenuePureCotton2: { strategy: 'text' as const, value: 'Park Avenue Pure Cotton Formal Shirt Rs. 779Rs. 2599(70% OFF)', actionKind: 'link' as const },
    parkAvenueSlimFit4: { strategy: 'text' as const, value: 'Park Avenue Slim Fit Opaque Formal Shirt Rs. 628Rs. 1699(63% OFF) Only Few Left!', actionKind: 'link' as const },
    arrowPureCottonFormal3: { strategy: 'role' as const, value: 'Arrow Pure Cotton Formal Shirt Rs. 879Rs. 2199(60% OFF)', role: 'link', actionKind: 'link' as const },
    parkAvenueSlimFit5: { strategy: 'role' as const, value: 'Park Avenue Slim Fit Formal Shirt Rs. 492Rs. 1699(71% OFF)', role: 'link', actionKind: 'link' as const },
    fUNKYRICHMenShirt2: { strategy: 'role' as const, value: 'FUNKY RICH Men Shirt Rs. 558Rs. 1499(63% OFF)', role: 'link', actionKind: 'link' as const },
    peterEnglandSlimFit3: { strategy: 'role' as const, value: 'Peter England Slim Fit Formal Shirt Rs. 591Rs. 1599(63% OFF)', role: 'link', actionKind: 'link' as const },
    oNLINESHOPPING: { strategy: 'role' as const, value: 'ONLINE SHOPPING', role: 'link', actionKind: 'link' as const },
    men: { strategy: 'role' as const, value: 'Men', role: 'link', actionKind: 'link' as const },
    women: { strategy: 'role' as const, value: 'Women', role: 'link', actionKind: 'link' as const },
    kids: { strategy: 'role' as const, value: 'Kids', role: 'link', actionKind: 'link' as const },
    home2: { strategy: 'role' as const, value: 'Home', role: 'link', actionKind: 'link' as const },
    beauty: { strategy: 'role' as const, value: 'Beauty', role: 'link', actionKind: 'link' as const },
    genz: { strategy: 'role' as const, value: 'Genz', role: 'link', actionKind: 'link' as const },
    giftCards: { strategy: 'role' as const, value: 'Gift Cards', role: 'link', actionKind: 'link' as const },
    myntraInsider: { strategy: 'role' as const, value: 'Myntra Insider', role: 'link', actionKind: 'link' as const },
    blog: { strategy: 'role' as const, value: 'Blog', role: 'link', actionKind: 'link' as const },
    careers: { strategy: 'role' as const, value: 'Careers', role: 'link', actionKind: 'link' as const },
    siteMap: { strategy: 'role' as const, value: 'Site Map', role: 'link', actionKind: 'link' as const },
    corporateInformation: { strategy: 'role' as const, value: 'Corporate Information', role: 'link', actionKind: 'link' as const },
    whitehat: { strategy: 'role' as const, value: 'Whitehat', role: 'link', actionKind: 'link' as const },
    cleartrip: { strategy: 'role' as const, value: 'Cleartrip', role: 'link', actionKind: 'link' as const },
    myntraGlobal: { strategy: 'role' as const, value: 'Myntra Global', role: 'link', actionKind: 'link' as const },
    contactUs: { strategy: 'role' as const, value: 'Contact Us', role: 'link', actionKind: 'link' as const },
    fAQ: { strategy: 'role' as const, value: 'FAQ', role: 'link', actionKind: 'link' as const },
    tC: { strategy: 'role' as const, value: 'T&C', role: 'link', actionKind: 'link' as const },
    termsOfUse: { strategy: 'role' as const, value: 'Terms Of Use', role: 'link', actionKind: 'link' as const },
    trackOrders: { strategy: 'role' as const, value: 'Track Orders', role: 'link', actionKind: 'link' as const },
    shipping: { strategy: 'role' as const, value: 'Shipping', role: 'link', actionKind: 'link' as const },
    cancellation: { strategy: 'role' as const, value: 'Cancellation', role: 'link', actionKind: 'link' as const },
    privacyPolicy: { strategy: 'role' as const, value: 'Privacy policy', role: 'link', actionKind: 'link' as const },
    grievanceRedressal: { strategy: 'role' as const, value: 'Grievance Redressal', role: 'link', actionKind: 'link' as const },
    fSSAIFoodSafetyConnect: { strategy: 'role' as const, value: 'FSSAI Food Safety Connect app', role: 'link', actionKind: 'link' as const },
    adidas: { strategy: 'role' as const, value: 'Adidas', role: 'link', actionKind: 'link' as const },
    arrow: { strategy: 'role' as const, value: 'Arrow', role: 'link', actionKind: 'link' as const },
    fila: { strategy: 'role' as const, value: 'Fila', role: 'link', actionKind: 'link' as const },
    onlineShopping: { strategy: 'role' as const, value: 'Online Shopping', role: 'link', actionKind: 'link' as const },
    nike: { strategy: 'role' as const, value: 'Nike', role: 'link', actionKind: 'link' as const },
    pepeJeans: { strategy: 'role' as const, value: 'Pepe Jeans', role: 'link', actionKind: 'link' as const },
    puma: { strategy: 'role' as const, value: 'Puma', role: 'link', actionKind: 'link' as const },
    unitedColorsOfBenetton: { strategy: 'role' as const, value: 'United Colors of Benetton', role: 'link', actionKind: 'link' as const },
    fastrack: { strategy: 'role' as const, value: 'Fastrack', role: 'link', actionKind: 'link' as const },
    shorts: { strategy: 'role' as const, value: 'Shorts', role: 'link', actionKind: 'link' as const },
    beingHuman: { strategy: 'role' as const, value: 'Being Human', role: 'link', actionKind: 'link' as const },
    skirts: { strategy: 'role' as const, value: 'Skirts', role: 'link', actionKind: 'link' as const },
    woodland: { strategy: 'role' as const, value: 'Woodland', role: 'link', actionKind: 'link' as const },
    supra: { strategy: 'role' as const, value: 'Supra', role: 'link', actionKind: 'link' as const },
    dresses: { strategy: 'role' as const, value: 'Dresses', role: 'link', actionKind: 'link' as const },
    clothing2: { strategy: 'role' as const, value: 'Clothing', role: 'link', actionKind: 'link' as const },
    jewellery: { strategy: 'role' as const, value: 'Jewellery', role: 'link', actionKind: 'link' as const },
    tShirts: { strategy: 'role' as const, value: 'T-shirts', role: 'link', actionKind: 'link' as const },
    shoes: { strategy: 'role' as const, value: 'Shoes', role: 'link', actionKind: 'link' as const },
    bags: { strategy: 'role' as const, value: 'Bags', role: 'link', actionKind: 'link' as const },
    watches: { strategy: 'role' as const, value: 'Watches', role: 'link', actionKind: 'link' as const },
    caps: { strategy: 'role' as const, value: 'Caps', role: 'link', actionKind: 'link' as const },
    shirts2: { strategy: 'role' as const, value: 'Shirts', role: 'link', actionKind: 'link' as const },
    backpacks: { strategy: 'role' as const, value: 'Backpacks', role: 'link', actionKind: 'link' as const },
    flipFlops: { strategy: 'role' as const, value: 'Flip Flops', role: 'link', actionKind: 'link' as const },
    sunglasses: { strategy: 'role' as const, value: 'Sunglasses', role: 'link', actionKind: 'link' as const },
    kurtas: { strategy: 'role' as const, value: 'Kurtas', role: 'link', actionKind: 'link' as const },
    lingerie: { strategy: 'role' as const, value: 'Lingerie', role: 'link', actionKind: 'link' as const },
    jackets: { strategy: 'role' as const, value: 'Jackets', role: 'link', actionKind: 'link' as const },
    skechers: { strategy: 'role' as const, value: 'Skechers', role: 'link', actionKind: 'link' as const },
    saree: { strategy: 'role' as const, value: 'Saree', role: 'link', actionKind: 'link' as const },
    sandals: { strategy: 'role' as const, value: 'Sandals', role: 'link', actionKind: 'link' as const },
    pumaTshirts: { strategy: 'role' as const, value: 'Puma Tshirts', role: 'link', actionKind: 'link' as const },
    woodlandShoes: { strategy: 'role' as const, value: 'Woodland Shoes', role: 'link', actionKind: 'link' as const },
    titanWatches: { strategy: 'role' as const, value: 'Titan Watches', role: 'link', actionKind: 'link' as const },
    fastrackWatches: { strategy: 'role' as const, value: 'Fastrack Watches', role: 'link', actionKind: 'link' as const },
    wranglerShirts: { strategy: 'role' as const, value: 'Wrangler Shirts', role: 'link', actionKind: 'link' as const },
    adidasTshirts: { strategy: 'role' as const, value: 'Adidas Tshirts', role: 'link', actionKind: 'link' as const },
    nikeShoes: { strategy: 'role' as const, value: 'Nike Shoes', role: 'link', actionKind: 'link' as const },
    roadsterShirts: { strategy: 'role' as const, value: 'Roadster Shirts', role: 'link', actionKind: 'link' as const },
    casualShoes: { strategy: 'role' as const, value: 'Casual Shoes', role: 'link', actionKind: 'link' as const },
    runningShoes: { strategy: 'role' as const, value: 'Running Shoes', role: 'link', actionKind: 'link' as const },
    nikeSportsShoes: { strategy: 'role' as const, value: 'Nike Sports Shoes', role: 'link', actionKind: 'link' as const },
    jeans: { strategy: 'role' as const, value: 'Jeans', role: 'link', actionKind: 'link' as const },
    beingHumanTshirts: { strategy: 'role' as const, value: 'Being Human Tshirts', role: 'link', actionKind: 'link' as const },
    converseShoes: { strategy: 'role' as const, value: 'Converse Shoes', role: 'link', actionKind: 'link' as const },
    cricketShoes: { strategy: 'role' as const, value: 'Cricket Shoes', role: 'link', actionKind: 'link' as const },
    contactUs2: { strategy: 'role' as const, value: 'Contact Us', role: 'link', actionKind: 'link' as const },
    aFlipkartCompany: { strategy: 'role' as const, value: 'A Flipkart company', role: 'link', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.home));
  }

  async doubleClickHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.home));
  }

  async expectHomeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.home), timeoutMs);
  }

  async expectHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.home), timeoutMs);
  }

  async expectHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.home), expected, timeoutMs);
  }

  async expectHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.home), substring, timeoutMs);
  }

  async scrollHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.home));
  }

  async clickClothing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.clothing));
  }

  async doubleClickClothing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.clothing));
  }

  async expectClothingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.clothing), timeoutMs);
  }

  async expectClothingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.clothing), timeoutMs);
  }

  async expectClothingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.clothing), expected, timeoutMs);
  }

  async expectClothingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.clothing), substring, timeoutMs);
  }

  async scrollClothingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.clothing));
  }

  async clickShirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.shirts));
  }

  async doubleClickShirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.shirts));
  }

  async expectShirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.shirts), timeoutMs);
  }

  async expectShirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.shirts), timeoutMs);
  }

  async expectShirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.shirts), expected, timeoutMs);
  }

  async expectShirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.shirts), substring, timeoutMs);
  }

  async scrollShirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.shirts));
  }

  async clickRootrailthumbleft(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.rootrailthumbleft));
  }

  async doubleClickRootrailthumbleft(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.rootrailthumbleft));
  }

  async expectRootrailthumbleftVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.rootrailthumbleft), timeoutMs);
  }

  async expectRootrailthumbleftHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.rootrailthumbleft), timeoutMs);
  }

  async expectRootrailthumbleftEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.rootrailthumbleft), timeoutMs);
  }

  async expectRootrailthumbleftDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.rootrailthumbleft), timeoutMs);
  }

  async expectRootrailthumbleftText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.rootrailthumbleft), expected, timeoutMs);
  }

  async expectRootrailthumbleftContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.rootrailthumbleft), substring, timeoutMs);
  }

  async scrollRootrailthumbleftIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.rootrailthumbleft));
  }

  async clickRootrailthumbright(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.rootrailthumbright));
  }

  async doubleClickRootrailthumbright(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.rootrailthumbright));
  }

  async expectRootrailthumbrightVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.rootrailthumbright), timeoutMs);
  }

  async expectRootrailthumbrightHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.rootrailthumbright), timeoutMs);
  }

  async expectRootrailthumbrightEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.rootrailthumbright), timeoutMs);
  }

  async expectRootrailthumbrightDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.rootrailthumbright), timeoutMs);
  }

  async expectRootrailthumbrightText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.rootrailthumbright), expected, timeoutMs);
  }

  async expectRootrailthumbrightContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.rootrailthumbright), substring, timeoutMs);
  }

  async scrollRootrailthumbrightIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.rootrailthumbright));
  }

  async clickHIGHLANDERSlimFitOpaque(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque));
  }

  async doubleClickHIGHLANDERSlimFitOpaque(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque));
  }

  async expectHIGHLANDERSlimFitOpaqueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaqueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaqueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque), expected, timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaqueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque), substring, timeoutMs);
  }

  async scrollHIGHLANDERSlimFitOpaqueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque));
  }

  async clickPeterEnglandMenFormal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal));
  }

  async doubleClickPeterEnglandMenFormal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal));
  }

  async expectPeterEnglandMenFormalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal), timeoutMs);
  }

  async expectPeterEnglandMenFormalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal), timeoutMs);
  }

  async expectPeterEnglandMenFormalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal), expected, timeoutMs);
  }

  async expectPeterEnglandMenFormalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal), substring, timeoutMs);
  }

  async scrollPeterEnglandMenFormalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal));
  }

  async clickMarksSpencerMen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.marksSpencerMen));
  }

  async doubleClickMarksSpencerMen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.marksSpencerMen));
  }

  async expectMarksSpencerMenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.marksSpencerMen), timeoutMs);
  }

  async expectMarksSpencerMenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.marksSpencerMen), timeoutMs);
  }

  async expectMarksSpencerMenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.marksSpencerMen), expected, timeoutMs);
  }

  async expectMarksSpencerMenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.marksSpencerMen), substring, timeoutMs);
  }

  async scrollMarksSpencerMenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.marksSpencerMen));
  }

  async clickBlackberrysOpaqueFormalShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt));
  }

  async doubleClickBlackberrysOpaqueFormalShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt));
  }

  async expectBlackberrysOpaqueFormalShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt), timeoutMs);
  }

  async expectBlackberrysOpaqueFormalShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt), timeoutMs);
  }

  async expectBlackberrysOpaqueFormalShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt), expected, timeoutMs);
  }

  async expectBlackberrysOpaqueFormalShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt), substring, timeoutMs);
  }

  async scrollBlackberrysOpaqueFormalShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt));
  }

  async clickINVICTUSEasyCareMen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen));
  }

  async doubleClickINVICTUSEasyCareMen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen));
  }

  async expectINVICTUSEasyCareMenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen), timeoutMs);
  }

  async expectINVICTUSEasyCareMenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen), timeoutMs);
  }

  async expectINVICTUSEasyCareMenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen), expected, timeoutMs);
  }

  async expectINVICTUSEasyCareMenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen), substring, timeoutMs);
  }

  async scrollINVICTUSEasyCareMenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen));
  }

  async clickNEWThomasScottFormal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal));
  }

  async doubleClickNEWThomasScottFormal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal));
  }

  async expectNEWThomasScottFormalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal), timeoutMs);
  }

  async expectNEWThomasScottFormalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal), timeoutMs);
  }

  async expectNEWThomasScottFormalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal), expected, timeoutMs);
  }

  async expectNEWThomasScottFormalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal), substring, timeoutMs);
  }

  async scrollNEWThomasScottFormalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal));
  }

  async clickADByArvindFormal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.aDByArvindFormal));
  }

  async doubleClickADByArvindFormal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.aDByArvindFormal));
  }

  async expectADByArvindFormalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.aDByArvindFormal), timeoutMs);
  }

  async expectADByArvindFormalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.aDByArvindFormal), timeoutMs);
  }

  async expectADByArvindFormalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.aDByArvindFormal), expected, timeoutMs);
  }

  async expectADByArvindFormalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.aDByArvindFormal), substring, timeoutMs);
  }

  async scrollADByArvindFormalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.aDByArvindFormal));
  }

  async clickMISCHIEFMONKEYClassicCotton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton));
  }

  async doubleClickMISCHIEFMONKEYClassicCotton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton));
  }

  async expectMISCHIEFMONKEYClassicCottonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton), timeoutMs);
  }

  async expectMISCHIEFMONKEYClassicCottonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton), timeoutMs);
  }

  async expectMISCHIEFMONKEYClassicCottonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton), expected, timeoutMs);
  }

  async expectMISCHIEFMONKEYClassicCottonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton), substring, timeoutMs);
  }

  async scrollMISCHIEFMONKEYClassicCottonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton));
  }

  async clickArrowPureCottonFormal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal));
  }

  async doubleClickArrowPureCottonFormal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal));
  }

  async expectArrowPureCottonFormalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal), timeoutMs);
  }

  async expectArrowPureCottonFormalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal), timeoutMs);
  }

  async expectArrowPureCottonFormalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal), expected, timeoutMs);
  }

  async expectArrowPureCottonFormalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal), substring, timeoutMs);
  }

  async scrollArrowPureCottonFormalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal));
  }

  async clickPeterEnglandSlimFit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit));
  }

  async doubleClickPeterEnglandSlimFit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit));
  }

  async expectPeterEnglandSlimFitVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit), timeoutMs);
  }

  async expectPeterEnglandSlimFitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit), timeoutMs);
  }

  async expectPeterEnglandSlimFitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit), expected, timeoutMs);
  }

  async expectPeterEnglandSlimFitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit), substring, timeoutMs);
  }

  async scrollPeterEnglandSlimFitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit));
  }

  async clickPeterEnglandSlimFit2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2));
  }

  async doubleClickPeterEnglandSlimFit2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2));
  }

  async expectPeterEnglandSlimFit2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2), timeoutMs);
  }

  async expectPeterEnglandSlimFit2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2), timeoutMs);
  }

  async expectPeterEnglandSlimFit2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2), expected, timeoutMs);
  }

  async expectPeterEnglandSlimFit2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2), substring, timeoutMs);
  }

  async scrollPeterEnglandSlimFit2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2));
  }

  async clickNEWThomasScottFormal2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2));
  }

  async doubleClickNEWThomasScottFormal2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2));
  }

  async expectNEWThomasScottFormal2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2), timeoutMs);
  }

  async expectNEWThomasScottFormal2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2), timeoutMs);
  }

  async expectNEWThomasScottFormal2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2), expected, timeoutMs);
  }

  async expectNEWThomasScottFormal2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2), substring, timeoutMs);
  }

  async scrollNEWThomasScottFormal2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2));
  }

  async clickADByArvindFormal2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2));
  }

  async doubleClickADByArvindFormal2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2));
  }

  async expectADByArvindFormal2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2), timeoutMs);
  }

  async expectADByArvindFormal2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2), timeoutMs);
  }

  async expectADByArvindFormal2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2), expected, timeoutMs);
  }

  async expectADByArvindFormal2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2), substring, timeoutMs);
  }

  async scrollADByArvindFormal2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2));
  }

  async clickMISCHIEFMONKEYSpreadCollar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar));
  }

  async doubleClickMISCHIEFMONKEYSpreadCollar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar));
  }

  async expectMISCHIEFMONKEYSpreadCollarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar), timeoutMs);
  }

  async expectMISCHIEFMONKEYSpreadCollarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar), timeoutMs);
  }

  async expectMISCHIEFMONKEYSpreadCollarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar), expected, timeoutMs);
  }

  async expectMISCHIEFMONKEYSpreadCollarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar), substring, timeoutMs);
  }

  async scrollMISCHIEFMONKEYSpreadCollarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar));
  }

  async clickParkAvenuePureCotton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton));
  }

  async doubleClickParkAvenuePureCotton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton));
  }

  async expectParkAvenuePureCottonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton), timeoutMs);
  }

  async expectParkAvenuePureCottonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton), timeoutMs);
  }

  async expectParkAvenuePureCottonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton), expected, timeoutMs);
  }

  async expectParkAvenuePureCottonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton), substring, timeoutMs);
  }

  async scrollParkAvenuePureCottonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton));
  }

  async clickSnitchKingOfHearts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts));
  }

  async doubleClickSnitchKingOfHearts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts));
  }

  async expectSnitchKingOfHeartsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts), timeoutMs);
  }

  async expectSnitchKingOfHeartsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts), timeoutMs);
  }

  async expectSnitchKingOfHeartsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts), expected, timeoutMs);
  }

  async expectSnitchKingOfHeartsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts), substring, timeoutMs);
  }

  async scrollSnitchKingOfHeartsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts));
  }

  async clickParkAvenueSlimFit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit));
  }

  async doubleClickParkAvenueSlimFit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit));
  }

  async expectParkAvenueSlimFitVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit), timeoutMs);
  }

  async expectParkAvenueSlimFitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit), timeoutMs);
  }

  async expectParkAvenueSlimFitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit), expected, timeoutMs);
  }

  async expectParkAvenueSlimFitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit), substring, timeoutMs);
  }

  async scrollParkAvenueSlimFitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit));
  }

  async clickNEWSuoSlimFit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit));
  }

  async doubleClickNEWSuoSlimFit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit));
  }

  async expectNEWSuoSlimFitVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit), timeoutMs);
  }

  async expectNEWSuoSlimFitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit), timeoutMs);
  }

  async expectNEWSuoSlimFitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit), expected, timeoutMs);
  }

  async expectNEWSuoSlimFitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit), substring, timeoutMs);
  }

  async scrollNEWSuoSlimFitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit));
  }

  async clickHIGHLANDERSlimFitOpaque2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2));
  }

  async doubleClickHIGHLANDERSlimFitOpaque2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2));
  }

  async expectHIGHLANDERSlimFitOpaque2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaque2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaque2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2), expected, timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaque2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2), substring, timeoutMs);
  }

  async scrollHIGHLANDERSlimFitOpaque2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2));
  }

  async clickEnglishNavyMenStriped(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped));
  }

  async doubleClickEnglishNavyMenStriped(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped));
  }

  async expectEnglishNavyMenStripedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped), timeoutMs);
  }

  async expectEnglishNavyMenStripedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped), timeoutMs);
  }

  async expectEnglishNavyMenStripedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped), expected, timeoutMs);
  }

  async expectEnglishNavyMenStripedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped), substring, timeoutMs);
  }

  async scrollEnglishNavyMenStripedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped));
  }

  async clickMISCHIEFMONKEYMenSolid(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid));
  }

  async doubleClickMISCHIEFMONKEYMenSolid(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid));
  }

  async expectMISCHIEFMONKEYMenSolidVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolidHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolidText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid), expected, timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolidContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid), substring, timeoutMs);
  }

  async scrollMISCHIEFMONKEYMenSolidIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid));
  }

  async clickSnitchSlimFitFormal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal));
  }

  async doubleClickSnitchSlimFitFormal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal));
  }

  async expectSnitchSlimFitFormalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal), timeoutMs);
  }

  async expectSnitchSlimFitFormalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal), timeoutMs);
  }

  async expectSnitchSlimFitFormalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal), expected, timeoutMs);
  }

  async expectSnitchSlimFitFormalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal), substring, timeoutMs);
  }

  async scrollSnitchSlimFitFormalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal));
  }

  async clickMISCHIEFMONKEYMenSolid2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2));
  }

  async doubleClickMISCHIEFMONKEYMenSolid2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2));
  }

  async expectMISCHIEFMONKEYMenSolid2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2), expected, timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2), substring, timeoutMs);
  }

  async scrollMISCHIEFMONKEYMenSolid2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2));
  }

  async clickNEWSuoSlimFit2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2));
  }

  async doubleClickNEWSuoSlimFit2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2));
  }

  async expectNEWSuoSlimFit2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2), timeoutMs);
  }

  async expectNEWSuoSlimFit2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2), timeoutMs);
  }

  async expectNEWSuoSlimFit2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2), expected, timeoutMs);
  }

  async expectNEWSuoSlimFit2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2), substring, timeoutMs);
  }

  async scrollNEWSuoSlimFit2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2));
  }

  async clickSnitchSlimFitCotton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton));
  }

  async doubleClickSnitchSlimFitCotton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton));
  }

  async expectSnitchSlimFitCottonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton), timeoutMs);
  }

  async expectSnitchSlimFitCottonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton), timeoutMs);
  }

  async expectSnitchSlimFitCottonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton), expected, timeoutMs);
  }

  async expectSnitchSlimFitCottonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton), substring, timeoutMs);
  }

  async scrollSnitchSlimFitCottonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton));
  }

  async clickMISCHIEFMONKEYMenSolid3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3));
  }

  async doubleClickMISCHIEFMONKEYMenSolid3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3));
  }

  async expectMISCHIEFMONKEYMenSolid3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3), expected, timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3), substring, timeoutMs);
  }

  async scrollMISCHIEFMONKEYMenSolid3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3));
  }

  async clickRaymondPureCottonSlim(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim));
  }

  async doubleClickRaymondPureCottonSlim(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim));
  }

  async expectRaymondPureCottonSlimVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim), timeoutMs);
  }

  async expectRaymondPureCottonSlimHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim), timeoutMs);
  }

  async expectRaymondPureCottonSlimText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim), expected, timeoutMs);
  }

  async expectRaymondPureCottonSlimContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim), substring, timeoutMs);
  }

  async scrollRaymondPureCottonSlimIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim));
  }

  async clickArrowPureCottonFormal2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2));
  }

  async doubleClickArrowPureCottonFormal2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2));
  }

  async expectArrowPureCottonFormal2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2), timeoutMs);
  }

  async expectArrowPureCottonFormal2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2), timeoutMs);
  }

  async expectArrowPureCottonFormal2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2), expected, timeoutMs);
  }

  async expectArrowPureCottonFormal2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2), substring, timeoutMs);
  }

  async scrollArrowPureCottonFormal2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2));
  }

  async clickParkAvenueSlimFit2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2));
  }

  async doubleClickParkAvenueSlimFit2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2));
  }

  async expectParkAvenueSlimFit2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2), timeoutMs);
  }

  async expectParkAvenueSlimFit2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2), timeoutMs);
  }

  async expectParkAvenueSlimFit2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2), expected, timeoutMs);
  }

  async expectParkAvenueSlimFit2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2), substring, timeoutMs);
  }

  async scrollParkAvenueSlimFit2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2));
  }

  async clickParkAvenueFormalShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt));
  }

  async doubleClickParkAvenueFormalShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt));
  }

  async expectParkAvenueFormalShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt), timeoutMs);
  }

  async expectParkAvenueFormalShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt), timeoutMs);
  }

  async expectParkAvenueFormalShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt), expected, timeoutMs);
  }

  async expectParkAvenueFormalShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt), substring, timeoutMs);
  }

  async scrollParkAvenueFormalShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt));
  }

  async clickArrowSlimFitFormal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal));
  }

  async doubleClickArrowSlimFitFormal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal));
  }

  async expectArrowSlimFitFormalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal), timeoutMs);
  }

  async expectArrowSlimFitFormalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal), timeoutMs);
  }

  async expectArrowSlimFitFormalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal), expected, timeoutMs);
  }

  async expectArrowSlimFitFormalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal), substring, timeoutMs);
  }

  async scrollArrowSlimFitFormalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal));
  }

  async clickSWAZSlimFitSolid(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid));
  }

  async doubleClickSWAZSlimFitSolid(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid));
  }

  async expectSWAZSlimFitSolidVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid), timeoutMs);
  }

  async expectSWAZSlimFitSolidHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid), timeoutMs);
  }

  async expectSWAZSlimFitSolidText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid), expected, timeoutMs);
  }

  async expectSWAZSlimFitSolidContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid), substring, timeoutMs);
  }

  async scrollSWAZSlimFitSolidIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid));
  }

  async clickADByArvindMen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.aDByArvindMen));
  }

  async doubleClickADByArvindMen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.aDByArvindMen));
  }

  async expectADByArvindMenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.aDByArvindMen), timeoutMs);
  }

  async expectADByArvindMenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.aDByArvindMen), timeoutMs);
  }

  async expectADByArvindMenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.aDByArvindMen), expected, timeoutMs);
  }

  async expectADByArvindMenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.aDByArvindMen), substring, timeoutMs);
  }

  async scrollADByArvindMenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.aDByArvindMen));
  }

  async clickURBANICESlimFitCotton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton));
  }

  async doubleClickURBANICESlimFitCotton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton));
  }

  async expectURBANICESlimFitCottonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton), timeoutMs);
  }

  async expectURBANICESlimFitCottonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton), timeoutMs);
  }

  async expectURBANICESlimFitCottonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton), expected, timeoutMs);
  }

  async expectURBANICESlimFitCottonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton), substring, timeoutMs);
  }

  async scrollURBANICESlimFitCottonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton));
  }

  async clickFUNKYRICHMenShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt));
  }

  async doubleClickFUNKYRICHMenShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt));
  }

  async expectFUNKYRICHMenShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt), timeoutMs);
  }

  async expectFUNKYRICHMenShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt), timeoutMs);
  }

  async expectFUNKYRICHMenShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt), expected, timeoutMs);
  }

  async expectFUNKYRICHMenShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt), substring, timeoutMs);
  }

  async scrollFUNKYRICHMenShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt));
  }

  async clickRedTapeMenSolid(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.redTapeMenSolid));
  }

  async doubleClickRedTapeMenSolid(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.redTapeMenSolid));
  }

  async expectRedTapeMenSolidVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.redTapeMenSolid), timeoutMs);
  }

  async expectRedTapeMenSolidHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.redTapeMenSolid), timeoutMs);
  }

  async expectRedTapeMenSolidText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.redTapeMenSolid), expected, timeoutMs);
  }

  async expectRedTapeMenSolidContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.redTapeMenSolid), substring, timeoutMs);
  }

  async scrollRedTapeMenSolidIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.redTapeMenSolid));
  }

  async clickRaymondSlimFitCotton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton));
  }

  async doubleClickRaymondSlimFitCotton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton));
  }

  async expectRaymondSlimFitCottonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton), timeoutMs);
  }

  async expectRaymondSlimFitCottonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton), timeoutMs);
  }

  async expectRaymondSlimFitCottonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton), expected, timeoutMs);
  }

  async expectRaymondSlimFitCottonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton), substring, timeoutMs);
  }

  async scrollRaymondSlimFitCottonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton));
  }

  async clickParkAvenueSlimFit3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3));
  }

  async doubleClickParkAvenueSlimFit3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3));
  }

  async expectParkAvenueSlimFit3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3), timeoutMs);
  }

  async expectParkAvenueSlimFit3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3), timeoutMs);
  }

  async expectParkAvenueSlimFit3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3), expected, timeoutMs);
  }

  async expectParkAvenueSlimFit3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3), substring, timeoutMs);
  }

  async scrollParkAvenueSlimFit3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3));
  }

  async clickSnitchSlimFitFormal2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2));
  }

  async doubleClickSnitchSlimFitFormal2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2));
  }

  async expectSnitchSlimFitFormal2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2), timeoutMs);
  }

  async expectSnitchSlimFitFormal2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2), timeoutMs);
  }

  async expectSnitchSlimFitFormal2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2), expected, timeoutMs);
  }

  async expectSnitchSlimFitFormal2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2), substring, timeoutMs);
  }

  async scrollSnitchSlimFitFormal2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2));
  }

  async clickParkAvenueMenSolid(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid));
  }

  async doubleClickParkAvenueMenSolid(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid));
  }

  async expectParkAvenueMenSolidVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid), timeoutMs);
  }

  async expectParkAvenueMenSolidHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid), timeoutMs);
  }

  async expectParkAvenueMenSolidText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid), expected, timeoutMs);
  }

  async expectParkAvenueMenSolidContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid), substring, timeoutMs);
  }

  async scrollParkAvenueMenSolidIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid));
  }

  async clickFUNKYRICHSpreadCollar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar));
  }

  async doubleClickFUNKYRICHSpreadCollar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar));
  }

  async expectFUNKYRICHSpreadCollarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar), timeoutMs);
  }

  async expectFUNKYRICHSpreadCollarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar), timeoutMs);
  }

  async expectFUNKYRICHSpreadCollarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar), expected, timeoutMs);
  }

  async expectFUNKYRICHSpreadCollarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar), substring, timeoutMs);
  }

  async scrollFUNKYRICHSpreadCollarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar));
  }

  async clickSztoriPureCottonFormal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal));
  }

  async doubleClickSztoriPureCottonFormal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal));
  }

  async expectSztoriPureCottonFormalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal), timeoutMs);
  }

  async expectSztoriPureCottonFormalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal), timeoutMs);
  }

  async expectSztoriPureCottonFormalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal), expected, timeoutMs);
  }

  async expectSztoriPureCottonFormalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal), substring, timeoutMs);
  }

  async scrollSztoriPureCottonFormalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal));
  }

  async clickParkAvenuePureCotton2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2));
  }

  async doubleClickParkAvenuePureCotton2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2));
  }

  async expectParkAvenuePureCotton2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2), timeoutMs);
  }

  async expectParkAvenuePureCotton2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2), timeoutMs);
  }

  async expectParkAvenuePureCotton2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2), expected, timeoutMs);
  }

  async expectParkAvenuePureCotton2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2), substring, timeoutMs);
  }

  async scrollParkAvenuePureCotton2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2));
  }

  async clickParkAvenueSlimFit4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4));
  }

  async doubleClickParkAvenueSlimFit4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4));
  }

  async expectParkAvenueSlimFit4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4), timeoutMs);
  }

  async expectParkAvenueSlimFit4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4), timeoutMs);
  }

  async expectParkAvenueSlimFit4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4), expected, timeoutMs);
  }

  async expectParkAvenueSlimFit4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4), substring, timeoutMs);
  }

  async scrollParkAvenueSlimFit4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4));
  }

  async clickArrowPureCottonFormal3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3));
  }

  async doubleClickArrowPureCottonFormal3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3));
  }

  async expectArrowPureCottonFormal3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3), timeoutMs);
  }

  async expectArrowPureCottonFormal3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3), timeoutMs);
  }

  async expectArrowPureCottonFormal3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3), expected, timeoutMs);
  }

  async expectArrowPureCottonFormal3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3), substring, timeoutMs);
  }

  async scrollArrowPureCottonFormal3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3));
  }

  async clickParkAvenueSlimFit5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5));
  }

  async doubleClickParkAvenueSlimFit5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5));
  }

  async expectParkAvenueSlimFit5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5), timeoutMs);
  }

  async expectParkAvenueSlimFit5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5), timeoutMs);
  }

  async expectParkAvenueSlimFit5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5), expected, timeoutMs);
  }

  async expectParkAvenueSlimFit5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5), substring, timeoutMs);
  }

  async scrollParkAvenueSlimFit5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5));
  }

  async clickFUNKYRICHMenShirt2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2));
  }

  async doubleClickFUNKYRICHMenShirt2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2));
  }

  async expectFUNKYRICHMenShirt2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2), timeoutMs);
  }

  async expectFUNKYRICHMenShirt2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2), timeoutMs);
  }

  async expectFUNKYRICHMenShirt2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2), expected, timeoutMs);
  }

  async expectFUNKYRICHMenShirt2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2), substring, timeoutMs);
  }

  async scrollFUNKYRICHMenShirt2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2));
  }

  async clickPeterEnglandSlimFit3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3));
  }

  async doubleClickPeterEnglandSlimFit3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3));
  }

  async expectPeterEnglandSlimFit3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3), timeoutMs);
  }

  async expectPeterEnglandSlimFit3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3), timeoutMs);
  }

  async expectPeterEnglandSlimFit3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3), expected, timeoutMs);
  }

  async expectPeterEnglandSlimFit3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3), substring, timeoutMs);
  }

  async scrollPeterEnglandSlimFit3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3));
  }

  async clickONLINESHOPPING(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING));
  }

  async doubleClickONLINESHOPPING(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING));
  }

  async expectONLINESHOPPINGVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING), expected, timeoutMs);
  }

  async expectONLINESHOPPINGContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING), substring, timeoutMs);
  }

  async scrollONLINESHOPPINGIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING));
  }

  async clickMen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.men));
  }

  async doubleClickMen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.men));
  }

  async expectMenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.men), timeoutMs);
  }

  async expectMenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.men), timeoutMs);
  }

  async expectMenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.men), expected, timeoutMs);
  }

  async expectMenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.men), substring, timeoutMs);
  }

  async scrollMenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.men));
  }

  async clickWomen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.women));
  }

  async doubleClickWomen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.women));
  }

  async expectWomenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.women), timeoutMs);
  }

  async expectWomenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.women), timeoutMs);
  }

  async expectWomenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.women), expected, timeoutMs);
  }

  async expectWomenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.women), substring, timeoutMs);
  }

  async scrollWomenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.women));
  }

  async clickKids(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.kids));
  }

  async doubleClickKids(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.kids));
  }

  async expectKidsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.kids), timeoutMs);
  }

  async expectKidsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.kids), timeoutMs);
  }

  async expectKidsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.kids), expected, timeoutMs);
  }

  async expectKidsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.kids), substring, timeoutMs);
  }

  async scrollKidsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.kids));
  }

  async clickHome2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.home2));
  }

  async doubleClickHome2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.home2));
  }

  async expectHome2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.home2), timeoutMs);
  }

  async expectHome2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.home2), timeoutMs);
  }

  async expectHome2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.home2), expected, timeoutMs);
  }

  async expectHome2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.home2), substring, timeoutMs);
  }

  async scrollHome2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.home2));
  }

  async clickBeauty(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.beauty));
  }

  async doubleClickBeauty(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.beauty));
  }

  async expectBeautyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.beauty), timeoutMs);
  }

  async expectBeautyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.beauty), timeoutMs);
  }

  async expectBeautyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.beauty), expected, timeoutMs);
  }

  async expectBeautyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.beauty), substring, timeoutMs);
  }

  async scrollBeautyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.beauty));
  }

  async clickGenz(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.genz));
  }

  async doubleClickGenz(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.genz));
  }

  async expectGenzVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.genz), timeoutMs);
  }

  async expectGenzHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.genz), timeoutMs);
  }

  async expectGenzText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.genz), expected, timeoutMs);
  }

  async expectGenzContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.genz), substring, timeoutMs);
  }

  async scrollGenzIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.genz));
  }

  async clickGiftCards(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.giftCards));
  }

  async doubleClickGiftCards(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.giftCards));
  }

  async expectGiftCardsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.giftCards), expected, timeoutMs);
  }

  async expectGiftCardsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.giftCards), substring, timeoutMs);
  }

  async scrollGiftCardsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.giftCards));
  }

  async clickMyntraInsider(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.myntraInsider));
  }

  async doubleClickMyntraInsider(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.myntraInsider));
  }

  async expectMyntraInsiderVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.myntraInsider), expected, timeoutMs);
  }

  async expectMyntraInsiderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.myntraInsider), substring, timeoutMs);
  }

  async scrollMyntraInsiderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.myntraInsider));
  }

  async clickBlog(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.blog));
  }

  async doubleClickBlog(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.blog));
  }

  async expectBlogVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.blog), timeoutMs);
  }

  async expectBlogHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.blog), timeoutMs);
  }

  async expectBlogText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.blog), expected, timeoutMs);
  }

  async expectBlogContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.blog), substring, timeoutMs);
  }

  async scrollBlogIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.blog));
  }

  async clickCareers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.careers));
  }

  async doubleClickCareers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.careers));
  }

  async expectCareersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.careers), timeoutMs);
  }

  async expectCareersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.careers), timeoutMs);
  }

  async expectCareersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.careers), expected, timeoutMs);
  }

  async expectCareersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.careers), substring, timeoutMs);
  }

  async scrollCareersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.careers));
  }

  async clickSiteMap(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.siteMap));
  }

  async doubleClickSiteMap(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.siteMap));
  }

  async expectSiteMapVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.siteMap), expected, timeoutMs);
  }

  async expectSiteMapContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.siteMap), substring, timeoutMs);
  }

  async scrollSiteMapIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.siteMap));
  }

  async clickCorporateInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.corporateInformation));
  }

  async doubleClickCorporateInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.corporateInformation));
  }

  async expectCorporateInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.corporateInformation), expected, timeoutMs);
  }

  async expectCorporateInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.corporateInformation), substring, timeoutMs);
  }

  async scrollCorporateInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.corporateInformation));
  }

  async clickWhitehat(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.whitehat));
  }

  async doubleClickWhitehat(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.whitehat));
  }

  async expectWhitehatVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.whitehat), expected, timeoutMs);
  }

  async expectWhitehatContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.whitehat), substring, timeoutMs);
  }

  async scrollWhitehatIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.whitehat));
  }

  async clickCleartrip(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.cleartrip));
  }

  async doubleClickCleartrip(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.cleartrip));
  }

  async expectCleartripVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.cleartrip), expected, timeoutMs);
  }

  async expectCleartripContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.cleartrip), substring, timeoutMs);
  }

  async scrollCleartripIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.cleartrip));
  }

  async clickMyntraGlobal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.myntraGlobal));
  }

  async doubleClickMyntraGlobal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.myntraGlobal));
  }

  async expectMyntraGlobalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.myntraGlobal), expected, timeoutMs);
  }

  async expectMyntraGlobalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.myntraGlobal), substring, timeoutMs);
  }

  async scrollMyntraGlobalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.myntraGlobal));
  }

  async clickContactUs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.contactUs));
  }

  async doubleClickContactUs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.contactUs));
  }

  async expectContactUsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.contactUs), timeoutMs);
  }

  async expectContactUsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.contactUs), timeoutMs);
  }

  async expectContactUsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.contactUs), expected, timeoutMs);
  }

  async expectContactUsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.contactUs), substring, timeoutMs);
  }

  async scrollContactUsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.contactUs));
  }

  async clickFAQ(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.fAQ));
  }

  async doubleClickFAQ(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.fAQ));
  }

  async expectFAQVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.fAQ), timeoutMs);
  }

  async expectFAQHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.fAQ), timeoutMs);
  }

  async expectFAQText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.fAQ), expected, timeoutMs);
  }

  async expectFAQContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.fAQ), substring, timeoutMs);
  }

  async scrollFAQIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.fAQ));
  }

  async clickTC(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.tC));
  }

  async doubleClickTC(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.tC));
  }

  async expectTCVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.tC), timeoutMs);
  }

  async expectTCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.tC), timeoutMs);
  }

  async expectTCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.tC), expected, timeoutMs);
  }

  async expectTCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.tC), substring, timeoutMs);
  }

  async scrollTCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.tC));
  }

  async clickTermsOfUse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.termsOfUse));
  }

  async doubleClickTermsOfUse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.termsOfUse));
  }

  async expectTermsOfUseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.termsOfUse), expected, timeoutMs);
  }

  async expectTermsOfUseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.termsOfUse), substring, timeoutMs);
  }

  async scrollTermsOfUseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.termsOfUse));
  }

  async clickTrackOrders(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.trackOrders));
  }

  async doubleClickTrackOrders(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.trackOrders));
  }

  async expectTrackOrdersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.trackOrders), expected, timeoutMs);
  }

  async expectTrackOrdersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.trackOrders), substring, timeoutMs);
  }

  async scrollTrackOrdersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.trackOrders));
  }

  async clickShipping(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.shipping));
  }

  async doubleClickShipping(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.shipping));
  }

  async expectShippingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.shipping), timeoutMs);
  }

  async expectShippingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.shipping), timeoutMs);
  }

  async expectShippingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.shipping), expected, timeoutMs);
  }

  async expectShippingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.shipping), substring, timeoutMs);
  }

  async scrollShippingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.shipping));
  }

  async clickCancellation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.cancellation));
  }

  async doubleClickCancellation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.cancellation));
  }

  async expectCancellationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.cancellation), timeoutMs);
  }

  async expectCancellationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.cancellation), timeoutMs);
  }

  async expectCancellationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.cancellation), expected, timeoutMs);
  }

  async expectCancellationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.cancellation), substring, timeoutMs);
  }

  async scrollCancellationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.cancellation));
  }

  async clickPrivacyPolicy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.privacyPolicy));
  }

  async doubleClickPrivacyPolicy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.privacyPolicy));
  }

  async expectPrivacyPolicyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.privacyPolicy), expected, timeoutMs);
  }

  async expectPrivacyPolicyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.privacyPolicy), substring, timeoutMs);
  }

  async scrollPrivacyPolicyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.privacyPolicy));
  }

  async clickGrievanceRedressal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.grievanceRedressal));
  }

  async doubleClickGrievanceRedressal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.grievanceRedressal));
  }

  async expectGrievanceRedressalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.grievanceRedressal), expected, timeoutMs);
  }

  async expectGrievanceRedressalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.grievanceRedressal), substring, timeoutMs);
  }

  async scrollGrievanceRedressalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.grievanceRedressal));
  }

  async clickFSSAIFoodSafetyConnect(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect));
  }

  async doubleClickFSSAIFoodSafetyConnect(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect));
  }

  async expectFSSAIFoodSafetyConnectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect), expected, timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect), substring, timeoutMs);
  }

  async scrollFSSAIFoodSafetyConnectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect));
  }

  async clickAdidas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.adidas));
  }

  async doubleClickAdidas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.adidas));
  }

  async expectAdidasVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.adidas), timeoutMs);
  }

  async expectAdidasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.adidas), timeoutMs);
  }

  async expectAdidasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.adidas), expected, timeoutMs);
  }

  async expectAdidasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.adidas), substring, timeoutMs);
  }

  async scrollAdidasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.adidas));
  }

  async clickArrow(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.arrow));
  }

  async doubleClickArrow(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.arrow));
  }

  async expectArrowVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.arrow), timeoutMs);
  }

  async expectArrowHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.arrow), timeoutMs);
  }

  async expectArrowText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.arrow), expected, timeoutMs);
  }

  async expectArrowContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.arrow), substring, timeoutMs);
  }

  async scrollArrowIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.arrow));
  }

  async clickFila(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.fila));
  }

  async doubleClickFila(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.fila));
  }

  async expectFilaVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.fila), timeoutMs);
  }

  async expectFilaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.fila), timeoutMs);
  }

  async expectFilaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.fila), expected, timeoutMs);
  }

  async expectFilaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.fila), substring, timeoutMs);
  }

  async scrollFilaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.fila));
  }

  async clickOnlineShopping(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.onlineShopping));
  }

  async doubleClickOnlineShopping(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.onlineShopping));
  }

  async expectOnlineShoppingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.onlineShopping), expected, timeoutMs);
  }

  async expectOnlineShoppingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.onlineShopping), substring, timeoutMs);
  }

  async scrollOnlineShoppingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.onlineShopping));
  }

  async clickNike(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.nike));
  }

  async doubleClickNike(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.nike));
  }

  async expectNikeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.nike), timeoutMs);
  }

  async expectNikeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.nike), timeoutMs);
  }

  async expectNikeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.nike), expected, timeoutMs);
  }

  async expectNikeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.nike), substring, timeoutMs);
  }

  async scrollNikeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.nike));
  }

  async clickPepeJeans(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.pepeJeans));
  }

  async doubleClickPepeJeans(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.pepeJeans));
  }

  async expectPepeJeansVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.pepeJeans), expected, timeoutMs);
  }

  async expectPepeJeansContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.pepeJeans), substring, timeoutMs);
  }

  async scrollPepeJeansIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.pepeJeans));
  }

  async clickPuma(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.puma));
  }

  async doubleClickPuma(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.puma));
  }

  async expectPumaVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.puma), timeoutMs);
  }

  async expectPumaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.puma), timeoutMs);
  }

  async expectPumaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.puma), expected, timeoutMs);
  }

  async expectPumaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.puma), substring, timeoutMs);
  }

  async scrollPumaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.puma));
  }

  async clickUnitedColorsOfBenetton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton));
  }

  async doubleClickUnitedColorsOfBenetton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton));
  }

  async expectUnitedColorsOfBenettonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton), expected, timeoutMs);
  }

  async expectUnitedColorsOfBenettonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton), substring, timeoutMs);
  }

  async scrollUnitedColorsOfBenettonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton));
  }

  async clickFastrack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.fastrack));
  }

  async doubleClickFastrack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.fastrack));
  }

  async expectFastrackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.fastrack), timeoutMs);
  }

  async expectFastrackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.fastrack), timeoutMs);
  }

  async expectFastrackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.fastrack), expected, timeoutMs);
  }

  async expectFastrackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.fastrack), substring, timeoutMs);
  }

  async scrollFastrackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.fastrack));
  }

  async clickShorts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.shorts));
  }

  async doubleClickShorts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.shorts));
  }

  async expectShortsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.shorts), timeoutMs);
  }

  async expectShortsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.shorts), timeoutMs);
  }

  async expectShortsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.shorts), expected, timeoutMs);
  }

  async expectShortsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.shorts), substring, timeoutMs);
  }

  async scrollShortsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.shorts));
  }

  async clickBeingHuman(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.beingHuman));
  }

  async doubleClickBeingHuman(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.beingHuman));
  }

  async expectBeingHumanVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.beingHuman), expected, timeoutMs);
  }

  async expectBeingHumanContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.beingHuman), substring, timeoutMs);
  }

  async scrollBeingHumanIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.beingHuman));
  }

  async clickSkirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.skirts));
  }

  async doubleClickSkirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.skirts));
  }

  async expectSkirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.skirts), timeoutMs);
  }

  async expectSkirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.skirts), timeoutMs);
  }

  async expectSkirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.skirts), expected, timeoutMs);
  }

  async expectSkirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.skirts), substring, timeoutMs);
  }

  async scrollSkirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.skirts));
  }

  async clickWoodland(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.woodland));
  }

  async doubleClickWoodland(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.woodland));
  }

  async expectWoodlandVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.woodland), timeoutMs);
  }

  async expectWoodlandHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.woodland), timeoutMs);
  }

  async expectWoodlandText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.woodland), expected, timeoutMs);
  }

  async expectWoodlandContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.woodland), substring, timeoutMs);
  }

  async scrollWoodlandIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.woodland));
  }

  async clickSupra(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.supra));
  }

  async doubleClickSupra(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.supra));
  }

  async expectSupraVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.supra), timeoutMs);
  }

  async expectSupraHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.supra), timeoutMs);
  }

  async expectSupraText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.supra), expected, timeoutMs);
  }

  async expectSupraContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.supra), substring, timeoutMs);
  }

  async scrollSupraIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.supra));
  }

  async clickDresses(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.dresses));
  }

  async doubleClickDresses(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.dresses));
  }

  async expectDressesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.dresses), timeoutMs);
  }

  async expectDressesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.dresses), timeoutMs);
  }

  async expectDressesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.dresses), expected, timeoutMs);
  }

  async expectDressesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.dresses), substring, timeoutMs);
  }

  async scrollDressesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.dresses));
  }

  async clickClothing2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.clothing2));
  }

  async doubleClickClothing2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.clothing2));
  }

  async expectClothing2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.clothing2), expected, timeoutMs);
  }

  async expectClothing2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.clothing2), substring, timeoutMs);
  }

  async scrollClothing2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.clothing2));
  }

  async clickJewellery(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.jewellery));
  }

  async doubleClickJewellery(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.jewellery));
  }

  async expectJewelleryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.jewellery), expected, timeoutMs);
  }

  async expectJewelleryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.jewellery), substring, timeoutMs);
  }

  async scrollJewelleryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.jewellery));
  }

  async clickTShirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.tShirts));
  }

  async doubleClickTShirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.tShirts));
  }

  async expectTShirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.tShirts), expected, timeoutMs);
  }

  async expectTShirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.tShirts), substring, timeoutMs);
  }

  async scrollTShirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.tShirts));
  }

  async clickShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.shoes));
  }

  async doubleClickShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.shoes));
  }

  async expectShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.shoes), timeoutMs);
  }

  async expectShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.shoes), timeoutMs);
  }

  async expectShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.shoes), expected, timeoutMs);
  }

  async expectShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.shoes), substring, timeoutMs);
  }

  async scrollShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.shoes));
  }

  async clickBags(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.bags));
  }

  async doubleClickBags(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.bags));
  }

  async expectBagsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.bags), timeoutMs);
  }

  async expectBagsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.bags), timeoutMs);
  }

  async expectBagsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.bags), expected, timeoutMs);
  }

  async expectBagsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.bags), substring, timeoutMs);
  }

  async scrollBagsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.bags));
  }

  async clickWatches(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.watches));
  }

  async doubleClickWatches(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.watches));
  }

  async expectWatchesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.watches), timeoutMs);
  }

  async expectWatchesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.watches), timeoutMs);
  }

  async expectWatchesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.watches), expected, timeoutMs);
  }

  async expectWatchesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.watches), substring, timeoutMs);
  }

  async scrollWatchesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.watches));
  }

  async clickCaps(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.caps));
  }

  async doubleClickCaps(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.caps));
  }

  async expectCapsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.caps), timeoutMs);
  }

  async expectCapsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.caps), timeoutMs);
  }

  async expectCapsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.caps), expected, timeoutMs);
  }

  async expectCapsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.caps), substring, timeoutMs);
  }

  async scrollCapsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.caps));
  }

  async clickShirts2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.shirts2));
  }

  async doubleClickShirts2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.shirts2));
  }

  async expectShirts2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.shirts2), timeoutMs);
  }

  async expectShirts2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.shirts2), timeoutMs);
  }

  async expectShirts2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.shirts2), expected, timeoutMs);
  }

  async expectShirts2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.shirts2), substring, timeoutMs);
  }

  async scrollShirts2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.shirts2));
  }

  async clickBackpacks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.backpacks));
  }

  async doubleClickBackpacks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.backpacks));
  }

  async expectBackpacksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.backpacks), expected, timeoutMs);
  }

  async expectBackpacksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.backpacks), substring, timeoutMs);
  }

  async scrollBackpacksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.backpacks));
  }

  async clickFlipFlops(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.flipFlops));
  }

  async doubleClickFlipFlops(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.flipFlops));
  }

  async expectFlipFlopsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.flipFlops), timeoutMs);
  }

  async expectFlipFlopsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.flipFlops), timeoutMs);
  }

  async expectFlipFlopsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.flipFlops), expected, timeoutMs);
  }

  async expectFlipFlopsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.flipFlops), substring, timeoutMs);
  }

  async scrollFlipFlopsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.flipFlops));
  }

  async clickSunglasses(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.sunglasses));
  }

  async doubleClickSunglasses(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.sunglasses));
  }

  async expectSunglassesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.sunglasses), timeoutMs);
  }

  async expectSunglassesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.sunglasses), timeoutMs);
  }

  async expectSunglassesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.sunglasses), expected, timeoutMs);
  }

  async expectSunglassesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.sunglasses), substring, timeoutMs);
  }

  async scrollSunglassesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.sunglasses));
  }

  async clickKurtas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.kurtas));
  }

  async doubleClickKurtas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.kurtas));
  }

  async expectKurtasVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.kurtas), timeoutMs);
  }

  async expectKurtasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.kurtas), timeoutMs);
  }

  async expectKurtasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.kurtas), expected, timeoutMs);
  }

  async expectKurtasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.kurtas), substring, timeoutMs);
  }

  async scrollKurtasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.kurtas));
  }

  async clickLingerie(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.lingerie));
  }

  async doubleClickLingerie(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.lingerie));
  }

  async expectLingerieVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.lingerie), timeoutMs);
  }

  async expectLingerieHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.lingerie), timeoutMs);
  }

  async expectLingerieText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.lingerie), expected, timeoutMs);
  }

  async expectLingerieContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.lingerie), substring, timeoutMs);
  }

  async scrollLingerieIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.lingerie));
  }

  async clickJackets(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.jackets));
  }

  async doubleClickJackets(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.jackets));
  }

  async expectJacketsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.jackets), timeoutMs);
  }

  async expectJacketsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.jackets), timeoutMs);
  }

  async expectJacketsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.jackets), expected, timeoutMs);
  }

  async expectJacketsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.jackets), substring, timeoutMs);
  }

  async scrollJacketsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.jackets));
  }

  async clickSkechers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.skechers));
  }

  async doubleClickSkechers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.skechers));
  }

  async expectSkechersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.skechers), timeoutMs);
  }

  async expectSkechersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.skechers), timeoutMs);
  }

  async expectSkechersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.skechers), expected, timeoutMs);
  }

  async expectSkechersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.skechers), substring, timeoutMs);
  }

  async scrollSkechersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.skechers));
  }

  async clickSaree(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.saree));
  }

  async doubleClickSaree(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.saree));
  }

  async expectSareeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.saree), timeoutMs);
  }

  async expectSareeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.saree), timeoutMs);
  }

  async expectSareeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.saree), expected, timeoutMs);
  }

  async expectSareeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.saree), substring, timeoutMs);
  }

  async scrollSareeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.saree));
  }

  async clickSandals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.sandals));
  }

  async doubleClickSandals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.sandals));
  }

  async expectSandalsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.sandals), timeoutMs);
  }

  async expectSandalsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.sandals), timeoutMs);
  }

  async expectSandalsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.sandals), expected, timeoutMs);
  }

  async expectSandalsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.sandals), substring, timeoutMs);
  }

  async scrollSandalsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.sandals));
  }

  async clickPumaTshirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.pumaTshirts));
  }

  async doubleClickPumaTshirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.pumaTshirts));
  }

  async expectPumaTshirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.pumaTshirts), expected, timeoutMs);
  }

  async expectPumaTshirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.pumaTshirts), substring, timeoutMs);
  }

  async scrollPumaTshirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.pumaTshirts));
  }

  async clickWoodlandShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.woodlandShoes));
  }

  async doubleClickWoodlandShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.woodlandShoes));
  }

  async expectWoodlandShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.woodlandShoes), expected, timeoutMs);
  }

  async expectWoodlandShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.woodlandShoes), substring, timeoutMs);
  }

  async scrollWoodlandShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.woodlandShoes));
  }

  async clickTitanWatches(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.titanWatches));
  }

  async doubleClickTitanWatches(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.titanWatches));
  }

  async expectTitanWatchesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.titanWatches), expected, timeoutMs);
  }

  async expectTitanWatchesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.titanWatches), substring, timeoutMs);
  }

  async scrollTitanWatchesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.titanWatches));
  }

  async clickFastrackWatches(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.fastrackWatches));
  }

  async doubleClickFastrackWatches(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.fastrackWatches));
  }

  async expectFastrackWatchesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.fastrackWatches), expected, timeoutMs);
  }

  async expectFastrackWatchesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.fastrackWatches), substring, timeoutMs);
  }

  async scrollFastrackWatchesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.fastrackWatches));
  }

  async clickWranglerShirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.wranglerShirts));
  }

  async doubleClickWranglerShirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.wranglerShirts));
  }

  async expectWranglerShirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.wranglerShirts), expected, timeoutMs);
  }

  async expectWranglerShirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.wranglerShirts), substring, timeoutMs);
  }

  async scrollWranglerShirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.wranglerShirts));
  }

  async clickAdidasTshirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.adidasTshirts));
  }

  async doubleClickAdidasTshirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.adidasTshirts));
  }

  async expectAdidasTshirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.adidasTshirts), expected, timeoutMs);
  }

  async expectAdidasTshirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.adidasTshirts), substring, timeoutMs);
  }

  async scrollAdidasTshirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.adidasTshirts));
  }

  async clickNikeShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.nikeShoes));
  }

  async doubleClickNikeShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.nikeShoes));
  }

  async expectNikeShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.nikeShoes), expected, timeoutMs);
  }

  async expectNikeShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.nikeShoes), substring, timeoutMs);
  }

  async scrollNikeShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.nikeShoes));
  }

  async clickRoadsterShirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.roadsterShirts));
  }

  async doubleClickRoadsterShirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.roadsterShirts));
  }

  async expectRoadsterShirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.roadsterShirts), expected, timeoutMs);
  }

  async expectRoadsterShirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.roadsterShirts), substring, timeoutMs);
  }

  async scrollRoadsterShirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.roadsterShirts));
  }

  async clickCasualShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.casualShoes));
  }

  async doubleClickCasualShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.casualShoes));
  }

  async expectCasualShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.casualShoes), expected, timeoutMs);
  }

  async expectCasualShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.casualShoes), substring, timeoutMs);
  }

  async scrollCasualShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.casualShoes));
  }

  async clickRunningShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.runningShoes));
  }

  async doubleClickRunningShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.runningShoes));
  }

  async expectRunningShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.runningShoes), expected, timeoutMs);
  }

  async expectRunningShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.runningShoes), substring, timeoutMs);
  }

  async scrollRunningShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.runningShoes));
  }

  async clickNikeSportsShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.nikeSportsShoes));
  }

  async doubleClickNikeSportsShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.nikeSportsShoes));
  }

  async expectNikeSportsShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.nikeSportsShoes), expected, timeoutMs);
  }

  async expectNikeSportsShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.nikeSportsShoes), substring, timeoutMs);
  }

  async scrollNikeSportsShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.nikeSportsShoes));
  }

  async clickJeans(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.jeans));
  }

  async doubleClickJeans(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.jeans));
  }

  async expectJeansVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.jeans), timeoutMs);
  }

  async expectJeansHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.jeans), timeoutMs);
  }

  async expectJeansText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.jeans), expected, timeoutMs);
  }

  async expectJeansContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.jeans), substring, timeoutMs);
  }

  async scrollJeansIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.jeans));
  }

  async clickBeingHumanTshirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.beingHumanTshirts));
  }

  async doubleClickBeingHumanTshirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.beingHumanTshirts));
  }

  async expectBeingHumanTshirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.beingHumanTshirts), expected, timeoutMs);
  }

  async expectBeingHumanTshirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.beingHumanTshirts), substring, timeoutMs);
  }

  async scrollBeingHumanTshirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.beingHumanTshirts));
  }

  async clickConverseShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.converseShoes));
  }

  async doubleClickConverseShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.converseShoes));
  }

  async expectConverseShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.converseShoes), expected, timeoutMs);
  }

  async expectConverseShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.converseShoes), substring, timeoutMs);
  }

  async scrollConverseShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.converseShoes));
  }

  async clickCricketShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.cricketShoes));
  }

  async doubleClickCricketShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.cricketShoes));
  }

  async expectCricketShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.cricketShoes), expected, timeoutMs);
  }

  async expectCricketShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.cricketShoes), substring, timeoutMs);
  }

  async scrollCricketShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.cricketShoes));
  }

  async clickContactUs2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.contactUs2));
  }

  async doubleClickContactUs2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.contactUs2));
  }

  async expectContactUs2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.contactUs2), expected, timeoutMs);
  }

  async expectContactUs2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.contactUs2), substring, timeoutMs);
  }

  async scrollContactUs2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.contactUs2));
  }

  async clickAFlipkartCompany(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SerachresultPage.L.aFlipkartCompany));
  }

  async doubleClickAFlipkartCompany(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SerachresultPage.L.aFlipkartCompany));
  }

  async expectAFlipkartCompanyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, SerachresultPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SerachresultPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SerachresultPage.L.aFlipkartCompany), expected, timeoutMs);
  }

  async expectAFlipkartCompanyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SerachresultPage.L.aFlipkartCompany), substring, timeoutMs);
  }

  async scrollAFlipkartCompanyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SerachresultPage.L.aFlipkartCompany));
  }


  async longPressHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.home));
  }

  async expectHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.home), value, timeoutMs);
  }

  async expectHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.home), timeoutMs);
  }

  async expectHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.home), timeoutMs);
  }

  async expectHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.home), timeoutMs);
  }

  async expectHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.home), timeoutMs);
  }

  async expectHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.home), timeoutMs);
  }

  async expectHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.home), count, timeoutMs);
  }

  async longPressClothing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.clothing));
  }

  async expectClothingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.clothing), value, timeoutMs);
  }

  async expectClothingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.clothing), timeoutMs);
  }

  async expectClothingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.clothing), timeoutMs);
  }

  async expectClothingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.clothing), timeoutMs);
  }

  async expectClothingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.clothing), timeoutMs);
  }

  async expectClothingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.clothing), timeoutMs);
  }

  async expectClothingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.clothing), count, timeoutMs);
  }

  async longPressShirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.shirts));
  }

  async expectShirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.shirts), value, timeoutMs);
  }

  async expectShirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.shirts), timeoutMs);
  }

  async expectShirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.shirts), timeoutMs);
  }

  async expectShirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.shirts), timeoutMs);
  }

  async expectShirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.shirts), timeoutMs);
  }

  async expectShirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.shirts), timeoutMs);
  }

  async expectShirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.shirts), count, timeoutMs);
  }

  async longPressRootrailthumbleft(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.rootrailthumbleft));
  }

  async expectRootrailthumbleftValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.rootrailthumbleft), value, timeoutMs);
  }

  async expectRootrailthumbleftChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.rootrailthumbleft), timeoutMs);
  }

  async expectRootrailthumbleftUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.rootrailthumbleft), timeoutMs);
  }

  async expectRootrailthumbleftFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.rootrailthumbleft), timeoutMs);
  }

  async expectRootrailthumbleftCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.rootrailthumbleft), count, timeoutMs);
  }

  async longPressRootrailthumbright(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.rootrailthumbright));
  }

  async expectRootrailthumbrightValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.rootrailthumbright), value, timeoutMs);
  }

  async expectRootrailthumbrightChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.rootrailthumbright), timeoutMs);
  }

  async expectRootrailthumbrightUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.rootrailthumbright), timeoutMs);
  }

  async expectRootrailthumbrightFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.rootrailthumbright), timeoutMs);
  }

  async expectRootrailthumbrightCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.rootrailthumbright), count, timeoutMs);
  }

  async longPressHIGHLANDERSlimFitOpaque(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque));
  }

  async expectHIGHLANDERSlimFitOpaqueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque), value, timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaqueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaqueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaqueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaqueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaqueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaqueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque), count, timeoutMs);
  }

  async longPressPeterEnglandMenFormal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal));
  }

  async expectPeterEnglandMenFormalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal), value, timeoutMs);
  }

  async expectPeterEnglandMenFormalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal), timeoutMs);
  }

  async expectPeterEnglandMenFormalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal), timeoutMs);
  }

  async expectPeterEnglandMenFormalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal), timeoutMs);
  }

  async expectPeterEnglandMenFormalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal), timeoutMs);
  }

  async expectPeterEnglandMenFormalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal), timeoutMs);
  }

  async expectPeterEnglandMenFormalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.peterEnglandMenFormal), count, timeoutMs);
  }

  async longPressMarksSpencerMen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.marksSpencerMen));
  }

  async expectMarksSpencerMenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.marksSpencerMen), value, timeoutMs);
  }

  async expectMarksSpencerMenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.marksSpencerMen), timeoutMs);
  }

  async expectMarksSpencerMenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.marksSpencerMen), timeoutMs);
  }

  async expectMarksSpencerMenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.marksSpencerMen), timeoutMs);
  }

  async expectMarksSpencerMenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.marksSpencerMen), timeoutMs);
  }

  async expectMarksSpencerMenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.marksSpencerMen), timeoutMs);
  }

  async expectMarksSpencerMenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.marksSpencerMen), count, timeoutMs);
  }

  async longPressBlackberrysOpaqueFormalShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt));
  }

  async expectBlackberrysOpaqueFormalShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt), value, timeoutMs);
  }

  async expectBlackberrysOpaqueFormalShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt), timeoutMs);
  }

  async expectBlackberrysOpaqueFormalShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt), timeoutMs);
  }

  async expectBlackberrysOpaqueFormalShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt), timeoutMs);
  }

  async expectBlackberrysOpaqueFormalShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt), timeoutMs);
  }

  async expectBlackberrysOpaqueFormalShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt), timeoutMs);
  }

  async expectBlackberrysOpaqueFormalShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.blackberrysOpaqueFormalShirt), count, timeoutMs);
  }

  async longPressINVICTUSEasyCareMen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen));
  }

  async expectINVICTUSEasyCareMenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen), value, timeoutMs);
  }

  async expectINVICTUSEasyCareMenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen), timeoutMs);
  }

  async expectINVICTUSEasyCareMenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen), timeoutMs);
  }

  async expectINVICTUSEasyCareMenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen), timeoutMs);
  }

  async expectINVICTUSEasyCareMenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen), timeoutMs);
  }

  async expectINVICTUSEasyCareMenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen), timeoutMs);
  }

  async expectINVICTUSEasyCareMenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.iNVICTUSEasyCareMen), count, timeoutMs);
  }

  async longPressNEWThomasScottFormal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal));
  }

  async expectNEWThomasScottFormalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal), value, timeoutMs);
  }

  async expectNEWThomasScottFormalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal), timeoutMs);
  }

  async expectNEWThomasScottFormalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal), timeoutMs);
  }

  async expectNEWThomasScottFormalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal), timeoutMs);
  }

  async expectNEWThomasScottFormalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal), timeoutMs);
  }

  async expectNEWThomasScottFormalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal), timeoutMs);
  }

  async expectNEWThomasScottFormalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal), count, timeoutMs);
  }

  async longPressADByArvindFormal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.aDByArvindFormal));
  }

  async expectADByArvindFormalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.aDByArvindFormal), value, timeoutMs);
  }

  async expectADByArvindFormalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.aDByArvindFormal), timeoutMs);
  }

  async expectADByArvindFormalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.aDByArvindFormal), timeoutMs);
  }

  async expectADByArvindFormalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.aDByArvindFormal), timeoutMs);
  }

  async expectADByArvindFormalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.aDByArvindFormal), timeoutMs);
  }

  async expectADByArvindFormalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.aDByArvindFormal), timeoutMs);
  }

  async expectADByArvindFormalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.aDByArvindFormal), count, timeoutMs);
  }

  async longPressMISCHIEFMONKEYClassicCotton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton));
  }

  async expectMISCHIEFMONKEYClassicCottonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton), value, timeoutMs);
  }

  async expectMISCHIEFMONKEYClassicCottonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton), timeoutMs);
  }

  async expectMISCHIEFMONKEYClassicCottonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton), timeoutMs);
  }

  async expectMISCHIEFMONKEYClassicCottonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton), timeoutMs);
  }

  async expectMISCHIEFMONKEYClassicCottonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton), timeoutMs);
  }

  async expectMISCHIEFMONKEYClassicCottonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton), timeoutMs);
  }

  async expectMISCHIEFMONKEYClassicCottonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYClassicCotton), count, timeoutMs);
  }

  async longPressArrowPureCottonFormal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal));
  }

  async expectArrowPureCottonFormalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal), value, timeoutMs);
  }

  async expectArrowPureCottonFormalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal), timeoutMs);
  }

  async expectArrowPureCottonFormalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal), timeoutMs);
  }

  async expectArrowPureCottonFormalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal), timeoutMs);
  }

  async expectArrowPureCottonFormalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal), timeoutMs);
  }

  async expectArrowPureCottonFormalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal), timeoutMs);
  }

  async expectArrowPureCottonFormalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal), count, timeoutMs);
  }

  async longPressPeterEnglandSlimFit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit));
  }

  async expectPeterEnglandSlimFitValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit), value, timeoutMs);
  }

  async expectPeterEnglandSlimFitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit), timeoutMs);
  }

  async expectPeterEnglandSlimFitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit), timeoutMs);
  }

  async expectPeterEnglandSlimFitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit), timeoutMs);
  }

  async expectPeterEnglandSlimFitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit), timeoutMs);
  }

  async expectPeterEnglandSlimFitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit), timeoutMs);
  }

  async expectPeterEnglandSlimFitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit), count, timeoutMs);
  }

  async longPressPeterEnglandSlimFit2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2));
  }

  async expectPeterEnglandSlimFit2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2), value, timeoutMs);
  }

  async expectPeterEnglandSlimFit2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2), timeoutMs);
  }

  async expectPeterEnglandSlimFit2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2), timeoutMs);
  }

  async expectPeterEnglandSlimFit2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2), timeoutMs);
  }

  async expectPeterEnglandSlimFit2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2), timeoutMs);
  }

  async expectPeterEnglandSlimFit2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2), timeoutMs);
  }

  async expectPeterEnglandSlimFit2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit2), count, timeoutMs);
  }

  async longPressNEWThomasScottFormal2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2));
  }

  async expectNEWThomasScottFormal2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2), value, timeoutMs);
  }

  async expectNEWThomasScottFormal2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2), timeoutMs);
  }

  async expectNEWThomasScottFormal2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2), timeoutMs);
  }

  async expectNEWThomasScottFormal2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2), timeoutMs);
  }

  async expectNEWThomasScottFormal2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2), timeoutMs);
  }

  async expectNEWThomasScottFormal2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2), timeoutMs);
  }

  async expectNEWThomasScottFormal2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.nEWThomasScottFormal2), count, timeoutMs);
  }

  async longPressADByArvindFormal2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2));
  }

  async expectADByArvindFormal2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2), value, timeoutMs);
  }

  async expectADByArvindFormal2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2), timeoutMs);
  }

  async expectADByArvindFormal2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2), timeoutMs);
  }

  async expectADByArvindFormal2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2), timeoutMs);
  }

  async expectADByArvindFormal2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2), timeoutMs);
  }

  async expectADByArvindFormal2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2), timeoutMs);
  }

  async expectADByArvindFormal2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.aDByArvindFormal2), count, timeoutMs);
  }

  async longPressMISCHIEFMONKEYSpreadCollar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar));
  }

  async expectMISCHIEFMONKEYSpreadCollarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar), value, timeoutMs);
  }

  async expectMISCHIEFMONKEYSpreadCollarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar), timeoutMs);
  }

  async expectMISCHIEFMONKEYSpreadCollarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar), timeoutMs);
  }

  async expectMISCHIEFMONKEYSpreadCollarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar), timeoutMs);
  }

  async expectMISCHIEFMONKEYSpreadCollarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar), timeoutMs);
  }

  async expectMISCHIEFMONKEYSpreadCollarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar), timeoutMs);
  }

  async expectMISCHIEFMONKEYSpreadCollarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYSpreadCollar), count, timeoutMs);
  }

  async longPressParkAvenuePureCotton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton));
  }

  async expectParkAvenuePureCottonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton), value, timeoutMs);
  }

  async expectParkAvenuePureCottonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton), timeoutMs);
  }

  async expectParkAvenuePureCottonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton), timeoutMs);
  }

  async expectParkAvenuePureCottonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton), timeoutMs);
  }

  async expectParkAvenuePureCottonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton), timeoutMs);
  }

  async expectParkAvenuePureCottonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton), timeoutMs);
  }

  async expectParkAvenuePureCottonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton), count, timeoutMs);
  }

  async longPressSnitchKingOfHearts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts));
  }

  async expectSnitchKingOfHeartsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts), value, timeoutMs);
  }

  async expectSnitchKingOfHeartsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts), timeoutMs);
  }

  async expectSnitchKingOfHeartsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts), timeoutMs);
  }

  async expectSnitchKingOfHeartsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts), timeoutMs);
  }

  async expectSnitchKingOfHeartsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts), timeoutMs);
  }

  async expectSnitchKingOfHeartsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts), timeoutMs);
  }

  async expectSnitchKingOfHeartsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.snitchKingOfHearts), count, timeoutMs);
  }

  async longPressParkAvenueSlimFit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit));
  }

  async expectParkAvenueSlimFitValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit), value, timeoutMs);
  }

  async expectParkAvenueSlimFitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit), timeoutMs);
  }

  async expectParkAvenueSlimFitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit), timeoutMs);
  }

  async expectParkAvenueSlimFitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit), timeoutMs);
  }

  async expectParkAvenueSlimFitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit), timeoutMs);
  }

  async expectParkAvenueSlimFitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit), timeoutMs);
  }

  async expectParkAvenueSlimFitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit), count, timeoutMs);
  }

  async longPressNEWSuoSlimFit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit));
  }

  async expectNEWSuoSlimFitValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit), value, timeoutMs);
  }

  async expectNEWSuoSlimFitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit), timeoutMs);
  }

  async expectNEWSuoSlimFitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit), timeoutMs);
  }

  async expectNEWSuoSlimFitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit), timeoutMs);
  }

  async expectNEWSuoSlimFitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit), timeoutMs);
  }

  async expectNEWSuoSlimFitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit), timeoutMs);
  }

  async expectNEWSuoSlimFitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit), count, timeoutMs);
  }

  async longPressHIGHLANDERSlimFitOpaque2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2));
  }

  async expectHIGHLANDERSlimFitOpaque2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2), value, timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaque2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaque2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaque2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaque2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaque2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2), timeoutMs);
  }

  async expectHIGHLANDERSlimFitOpaque2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.hIGHLANDERSlimFitOpaque2), count, timeoutMs);
  }

  async longPressEnglishNavyMenStriped(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped));
  }

  async expectEnglishNavyMenStripedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped), value, timeoutMs);
  }

  async expectEnglishNavyMenStripedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped), timeoutMs);
  }

  async expectEnglishNavyMenStripedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped), timeoutMs);
  }

  async expectEnglishNavyMenStripedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped), timeoutMs);
  }

  async expectEnglishNavyMenStripedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped), timeoutMs);
  }

  async expectEnglishNavyMenStripedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped), timeoutMs);
  }

  async expectEnglishNavyMenStripedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.englishNavyMenStriped), count, timeoutMs);
  }

  async longPressMISCHIEFMONKEYMenSolid(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid));
  }

  async expectMISCHIEFMONKEYMenSolidValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid), value, timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolidEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolidDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolidChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolidUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolidFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolidCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid), count, timeoutMs);
  }

  async longPressSnitchSlimFitFormal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal));
  }

  async expectSnitchSlimFitFormalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal), value, timeoutMs);
  }

  async expectSnitchSlimFitFormalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal), timeoutMs);
  }

  async expectSnitchSlimFitFormalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal), timeoutMs);
  }

  async expectSnitchSlimFitFormalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal), timeoutMs);
  }

  async expectSnitchSlimFitFormalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal), timeoutMs);
  }

  async expectSnitchSlimFitFormalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal), timeoutMs);
  }

  async expectSnitchSlimFitFormalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal), count, timeoutMs);
  }

  async longPressMISCHIEFMONKEYMenSolid2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2));
  }

  async expectMISCHIEFMONKEYMenSolid2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2), value, timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid2), count, timeoutMs);
  }

  async longPressNEWSuoSlimFit2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2));
  }

  async expectNEWSuoSlimFit2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2), value, timeoutMs);
  }

  async expectNEWSuoSlimFit2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2), timeoutMs);
  }

  async expectNEWSuoSlimFit2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2), timeoutMs);
  }

  async expectNEWSuoSlimFit2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2), timeoutMs);
  }

  async expectNEWSuoSlimFit2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2), timeoutMs);
  }

  async expectNEWSuoSlimFit2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2), timeoutMs);
  }

  async expectNEWSuoSlimFit2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.nEWSuoSlimFit2), count, timeoutMs);
  }

  async longPressSnitchSlimFitCotton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton));
  }

  async expectSnitchSlimFitCottonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton), value, timeoutMs);
  }

  async expectSnitchSlimFitCottonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton), timeoutMs);
  }

  async expectSnitchSlimFitCottonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton), timeoutMs);
  }

  async expectSnitchSlimFitCottonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton), timeoutMs);
  }

  async expectSnitchSlimFitCottonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton), timeoutMs);
  }

  async expectSnitchSlimFitCottonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton), timeoutMs);
  }

  async expectSnitchSlimFitCottonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.snitchSlimFitCotton), count, timeoutMs);
  }

  async longPressMISCHIEFMONKEYMenSolid3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3));
  }

  async expectMISCHIEFMONKEYMenSolid3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3), value, timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3), timeoutMs);
  }

  async expectMISCHIEFMONKEYMenSolid3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.mISCHIEFMONKEYMenSolid3), count, timeoutMs);
  }

  async longPressRaymondPureCottonSlim(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim));
  }

  async expectRaymondPureCottonSlimValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim), value, timeoutMs);
  }

  async expectRaymondPureCottonSlimEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim), timeoutMs);
  }

  async expectRaymondPureCottonSlimDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim), timeoutMs);
  }

  async expectRaymondPureCottonSlimChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim), timeoutMs);
  }

  async expectRaymondPureCottonSlimUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim), timeoutMs);
  }

  async expectRaymondPureCottonSlimFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim), timeoutMs);
  }

  async expectRaymondPureCottonSlimCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.raymondPureCottonSlim), count, timeoutMs);
  }

  async longPressArrowPureCottonFormal2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2));
  }

  async expectArrowPureCottonFormal2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2), value, timeoutMs);
  }

  async expectArrowPureCottonFormal2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2), timeoutMs);
  }

  async expectArrowPureCottonFormal2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2), timeoutMs);
  }

  async expectArrowPureCottonFormal2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2), timeoutMs);
  }

  async expectArrowPureCottonFormal2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2), timeoutMs);
  }

  async expectArrowPureCottonFormal2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2), timeoutMs);
  }

  async expectArrowPureCottonFormal2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal2), count, timeoutMs);
  }

  async longPressParkAvenueSlimFit2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2));
  }

  async expectParkAvenueSlimFit2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2), value, timeoutMs);
  }

  async expectParkAvenueSlimFit2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2), timeoutMs);
  }

  async expectParkAvenueSlimFit2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2), timeoutMs);
  }

  async expectParkAvenueSlimFit2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2), timeoutMs);
  }

  async expectParkAvenueSlimFit2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2), timeoutMs);
  }

  async expectParkAvenueSlimFit2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2), timeoutMs);
  }

  async expectParkAvenueSlimFit2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit2), count, timeoutMs);
  }

  async longPressParkAvenueFormalShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt));
  }

  async expectParkAvenueFormalShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt), value, timeoutMs);
  }

  async expectParkAvenueFormalShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt), timeoutMs);
  }

  async expectParkAvenueFormalShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt), timeoutMs);
  }

  async expectParkAvenueFormalShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt), timeoutMs);
  }

  async expectParkAvenueFormalShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt), timeoutMs);
  }

  async expectParkAvenueFormalShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt), timeoutMs);
  }

  async expectParkAvenueFormalShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.parkAvenueFormalShirt), count, timeoutMs);
  }

  async longPressArrowSlimFitFormal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal));
  }

  async expectArrowSlimFitFormalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal), value, timeoutMs);
  }

  async expectArrowSlimFitFormalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal), timeoutMs);
  }

  async expectArrowSlimFitFormalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal), timeoutMs);
  }

  async expectArrowSlimFitFormalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal), timeoutMs);
  }

  async expectArrowSlimFitFormalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal), timeoutMs);
  }

  async expectArrowSlimFitFormalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal), timeoutMs);
  }

  async expectArrowSlimFitFormalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.arrowSlimFitFormal), count, timeoutMs);
  }

  async longPressSWAZSlimFitSolid(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid));
  }

  async expectSWAZSlimFitSolidValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid), value, timeoutMs);
  }

  async expectSWAZSlimFitSolidEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid), timeoutMs);
  }

  async expectSWAZSlimFitSolidDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid), timeoutMs);
  }

  async expectSWAZSlimFitSolidChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid), timeoutMs);
  }

  async expectSWAZSlimFitSolidUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid), timeoutMs);
  }

  async expectSWAZSlimFitSolidFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid), timeoutMs);
  }

  async expectSWAZSlimFitSolidCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.sWAZSlimFitSolid), count, timeoutMs);
  }

  async longPressADByArvindMen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.aDByArvindMen));
  }

  async expectADByArvindMenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.aDByArvindMen), value, timeoutMs);
  }

  async expectADByArvindMenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.aDByArvindMen), timeoutMs);
  }

  async expectADByArvindMenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.aDByArvindMen), timeoutMs);
  }

  async expectADByArvindMenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.aDByArvindMen), timeoutMs);
  }

  async expectADByArvindMenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.aDByArvindMen), timeoutMs);
  }

  async expectADByArvindMenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.aDByArvindMen), timeoutMs);
  }

  async expectADByArvindMenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.aDByArvindMen), count, timeoutMs);
  }

  async longPressURBANICESlimFitCotton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton));
  }

  async expectURBANICESlimFitCottonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton), value, timeoutMs);
  }

  async expectURBANICESlimFitCottonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton), timeoutMs);
  }

  async expectURBANICESlimFitCottonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton), timeoutMs);
  }

  async expectURBANICESlimFitCottonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton), timeoutMs);
  }

  async expectURBANICESlimFitCottonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton), timeoutMs);
  }

  async expectURBANICESlimFitCottonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton), timeoutMs);
  }

  async expectURBANICESlimFitCottonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.uRBANICESlimFitCotton), count, timeoutMs);
  }

  async longPressFUNKYRICHMenShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt));
  }

  async expectFUNKYRICHMenShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt), value, timeoutMs);
  }

  async expectFUNKYRICHMenShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt), timeoutMs);
  }

  async expectFUNKYRICHMenShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt), timeoutMs);
  }

  async expectFUNKYRICHMenShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt), timeoutMs);
  }

  async expectFUNKYRICHMenShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt), timeoutMs);
  }

  async expectFUNKYRICHMenShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt), timeoutMs);
  }

  async expectFUNKYRICHMenShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt), count, timeoutMs);
  }

  async longPressRedTapeMenSolid(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.redTapeMenSolid));
  }

  async expectRedTapeMenSolidValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.redTapeMenSolid), value, timeoutMs);
  }

  async expectRedTapeMenSolidEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.redTapeMenSolid), timeoutMs);
  }

  async expectRedTapeMenSolidDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.redTapeMenSolid), timeoutMs);
  }

  async expectRedTapeMenSolidChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.redTapeMenSolid), timeoutMs);
  }

  async expectRedTapeMenSolidUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.redTapeMenSolid), timeoutMs);
  }

  async expectRedTapeMenSolidFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.redTapeMenSolid), timeoutMs);
  }

  async expectRedTapeMenSolidCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.redTapeMenSolid), count, timeoutMs);
  }

  async longPressRaymondSlimFitCotton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton));
  }

  async expectRaymondSlimFitCottonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton), value, timeoutMs);
  }

  async expectRaymondSlimFitCottonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton), timeoutMs);
  }

  async expectRaymondSlimFitCottonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton), timeoutMs);
  }

  async expectRaymondSlimFitCottonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton), timeoutMs);
  }

  async expectRaymondSlimFitCottonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton), timeoutMs);
  }

  async expectRaymondSlimFitCottonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton), timeoutMs);
  }

  async expectRaymondSlimFitCottonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.raymondSlimFitCotton), count, timeoutMs);
  }

  async longPressParkAvenueSlimFit3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3));
  }

  async expectParkAvenueSlimFit3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3), value, timeoutMs);
  }

  async expectParkAvenueSlimFit3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3), timeoutMs);
  }

  async expectParkAvenueSlimFit3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3), timeoutMs);
  }

  async expectParkAvenueSlimFit3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3), timeoutMs);
  }

  async expectParkAvenueSlimFit3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3), timeoutMs);
  }

  async expectParkAvenueSlimFit3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3), timeoutMs);
  }

  async expectParkAvenueSlimFit3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit3), count, timeoutMs);
  }

  async longPressSnitchSlimFitFormal2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2));
  }

  async expectSnitchSlimFitFormal2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2), value, timeoutMs);
  }

  async expectSnitchSlimFitFormal2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2), timeoutMs);
  }

  async expectSnitchSlimFitFormal2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2), timeoutMs);
  }

  async expectSnitchSlimFitFormal2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2), timeoutMs);
  }

  async expectSnitchSlimFitFormal2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2), timeoutMs);
  }

  async expectSnitchSlimFitFormal2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2), timeoutMs);
  }

  async expectSnitchSlimFitFormal2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.snitchSlimFitFormal2), count, timeoutMs);
  }

  async longPressParkAvenueMenSolid(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid));
  }

  async expectParkAvenueMenSolidValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid), value, timeoutMs);
  }

  async expectParkAvenueMenSolidEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid), timeoutMs);
  }

  async expectParkAvenueMenSolidDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid), timeoutMs);
  }

  async expectParkAvenueMenSolidChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid), timeoutMs);
  }

  async expectParkAvenueMenSolidUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid), timeoutMs);
  }

  async expectParkAvenueMenSolidFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid), timeoutMs);
  }

  async expectParkAvenueMenSolidCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.parkAvenueMenSolid), count, timeoutMs);
  }

  async longPressFUNKYRICHSpreadCollar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar));
  }

  async expectFUNKYRICHSpreadCollarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar), value, timeoutMs);
  }

  async expectFUNKYRICHSpreadCollarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar), timeoutMs);
  }

  async expectFUNKYRICHSpreadCollarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar), timeoutMs);
  }

  async expectFUNKYRICHSpreadCollarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar), timeoutMs);
  }

  async expectFUNKYRICHSpreadCollarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar), timeoutMs);
  }

  async expectFUNKYRICHSpreadCollarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar), timeoutMs);
  }

  async expectFUNKYRICHSpreadCollarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.fUNKYRICHSpreadCollar), count, timeoutMs);
  }

  async longPressSztoriPureCottonFormal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal));
  }

  async expectSztoriPureCottonFormalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal), value, timeoutMs);
  }

  async expectSztoriPureCottonFormalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal), timeoutMs);
  }

  async expectSztoriPureCottonFormalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal), timeoutMs);
  }

  async expectSztoriPureCottonFormalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal), timeoutMs);
  }

  async expectSztoriPureCottonFormalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal), timeoutMs);
  }

  async expectSztoriPureCottonFormalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal), timeoutMs);
  }

  async expectSztoriPureCottonFormalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.sztoriPureCottonFormal), count, timeoutMs);
  }

  async longPressParkAvenuePureCotton2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2));
  }

  async expectParkAvenuePureCotton2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2), value, timeoutMs);
  }

  async expectParkAvenuePureCotton2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2), timeoutMs);
  }

  async expectParkAvenuePureCotton2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2), timeoutMs);
  }

  async expectParkAvenuePureCotton2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2), timeoutMs);
  }

  async expectParkAvenuePureCotton2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2), timeoutMs);
  }

  async expectParkAvenuePureCotton2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2), timeoutMs);
  }

  async expectParkAvenuePureCotton2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.parkAvenuePureCotton2), count, timeoutMs);
  }

  async longPressParkAvenueSlimFit4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4));
  }

  async expectParkAvenueSlimFit4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4), value, timeoutMs);
  }

  async expectParkAvenueSlimFit4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4), timeoutMs);
  }

  async expectParkAvenueSlimFit4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4), timeoutMs);
  }

  async expectParkAvenueSlimFit4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4), timeoutMs);
  }

  async expectParkAvenueSlimFit4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4), timeoutMs);
  }

  async expectParkAvenueSlimFit4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4), timeoutMs);
  }

  async expectParkAvenueSlimFit4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit4), count, timeoutMs);
  }

  async longPressArrowPureCottonFormal3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3));
  }

  async expectArrowPureCottonFormal3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3), value, timeoutMs);
  }

  async expectArrowPureCottonFormal3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3), timeoutMs);
  }

  async expectArrowPureCottonFormal3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3), timeoutMs);
  }

  async expectArrowPureCottonFormal3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3), timeoutMs);
  }

  async expectArrowPureCottonFormal3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3), timeoutMs);
  }

  async expectArrowPureCottonFormal3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3), timeoutMs);
  }

  async expectArrowPureCottonFormal3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.arrowPureCottonFormal3), count, timeoutMs);
  }

  async longPressParkAvenueSlimFit5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5));
  }

  async expectParkAvenueSlimFit5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5), value, timeoutMs);
  }

  async expectParkAvenueSlimFit5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5), timeoutMs);
  }

  async expectParkAvenueSlimFit5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5), timeoutMs);
  }

  async expectParkAvenueSlimFit5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5), timeoutMs);
  }

  async expectParkAvenueSlimFit5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5), timeoutMs);
  }

  async expectParkAvenueSlimFit5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5), timeoutMs);
  }

  async expectParkAvenueSlimFit5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.parkAvenueSlimFit5), count, timeoutMs);
  }

  async longPressFUNKYRICHMenShirt2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2));
  }

  async expectFUNKYRICHMenShirt2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2), value, timeoutMs);
  }

  async expectFUNKYRICHMenShirt2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2), timeoutMs);
  }

  async expectFUNKYRICHMenShirt2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2), timeoutMs);
  }

  async expectFUNKYRICHMenShirt2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2), timeoutMs);
  }

  async expectFUNKYRICHMenShirt2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2), timeoutMs);
  }

  async expectFUNKYRICHMenShirt2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2), timeoutMs);
  }

  async expectFUNKYRICHMenShirt2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.fUNKYRICHMenShirt2), count, timeoutMs);
  }

  async longPressPeterEnglandSlimFit3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3));
  }

  async expectPeterEnglandSlimFit3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3), value, timeoutMs);
  }

  async expectPeterEnglandSlimFit3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3), timeoutMs);
  }

  async expectPeterEnglandSlimFit3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3), timeoutMs);
  }

  async expectPeterEnglandSlimFit3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3), timeoutMs);
  }

  async expectPeterEnglandSlimFit3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3), timeoutMs);
  }

  async expectPeterEnglandSlimFit3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3), timeoutMs);
  }

  async expectPeterEnglandSlimFit3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.peterEnglandSlimFit3), count, timeoutMs);
  }

  async longPressONLINESHOPPING(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING));
  }

  async expectONLINESHOPPINGValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING), value, timeoutMs);
  }

  async expectONLINESHOPPINGEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.oNLINESHOPPING), count, timeoutMs);
  }

  async longPressMen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.men));
  }

  async expectMenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.men), value, timeoutMs);
  }

  async expectMenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.men), timeoutMs);
  }

  async expectMenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.men), timeoutMs);
  }

  async expectMenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.men), timeoutMs);
  }

  async expectMenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.men), timeoutMs);
  }

  async expectMenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.men), timeoutMs);
  }

  async expectMenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.men), count, timeoutMs);
  }

  async longPressWomen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.women));
  }

  async expectWomenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.women), value, timeoutMs);
  }

  async expectWomenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.women), timeoutMs);
  }

  async expectWomenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.women), timeoutMs);
  }

  async expectWomenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.women), timeoutMs);
  }

  async expectWomenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.women), timeoutMs);
  }

  async expectWomenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.women), timeoutMs);
  }

  async expectWomenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.women), count, timeoutMs);
  }

  async longPressKids(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.kids));
  }

  async expectKidsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.kids), value, timeoutMs);
  }

  async expectKidsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.kids), timeoutMs);
  }

  async expectKidsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.kids), timeoutMs);
  }

  async expectKidsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.kids), timeoutMs);
  }

  async expectKidsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.kids), timeoutMs);
  }

  async expectKidsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.kids), timeoutMs);
  }

  async expectKidsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.kids), count, timeoutMs);
  }

  async longPressHome2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.home2));
  }

  async expectHome2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.home2), value, timeoutMs);
  }

  async expectHome2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.home2), timeoutMs);
  }

  async expectHome2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.home2), timeoutMs);
  }

  async expectHome2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.home2), timeoutMs);
  }

  async expectHome2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.home2), timeoutMs);
  }

  async expectHome2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.home2), timeoutMs);
  }

  async expectHome2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.home2), count, timeoutMs);
  }

  async longPressBeauty(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.beauty));
  }

  async expectBeautyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.beauty), value, timeoutMs);
  }

  async expectBeautyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.beauty), timeoutMs);
  }

  async expectBeautyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.beauty), timeoutMs);
  }

  async expectBeautyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.beauty), timeoutMs);
  }

  async expectBeautyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.beauty), timeoutMs);
  }

  async expectBeautyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.beauty), timeoutMs);
  }

  async expectBeautyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.beauty), count, timeoutMs);
  }

  async longPressGenz(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.genz));
  }

  async expectGenzValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.genz), value, timeoutMs);
  }

  async expectGenzEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.genz), timeoutMs);
  }

  async expectGenzDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.genz), timeoutMs);
  }

  async expectGenzChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.genz), timeoutMs);
  }

  async expectGenzUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.genz), timeoutMs);
  }

  async expectGenzFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.genz), timeoutMs);
  }

  async expectGenzCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.genz), count, timeoutMs);
  }

  async longPressGiftCards(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.giftCards));
  }

  async expectGiftCardsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.giftCards), value, timeoutMs);
  }

  async expectGiftCardsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.giftCards), count, timeoutMs);
  }

  async longPressMyntraInsider(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.myntraInsider));
  }

  async expectMyntraInsiderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.myntraInsider), value, timeoutMs);
  }

  async expectMyntraInsiderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.myntraInsider), count, timeoutMs);
  }

  async longPressBlog(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.blog));
  }

  async expectBlogValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.blog), value, timeoutMs);
  }

  async expectBlogEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.blog), timeoutMs);
  }

  async expectBlogDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.blog), timeoutMs);
  }

  async expectBlogChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.blog), timeoutMs);
  }

  async expectBlogUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.blog), timeoutMs);
  }

  async expectBlogFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.blog), timeoutMs);
  }

  async expectBlogCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.blog), count, timeoutMs);
  }

  async longPressCareers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.careers));
  }

  async expectCareersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.careers), value, timeoutMs);
  }

  async expectCareersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.careers), timeoutMs);
  }

  async expectCareersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.careers), timeoutMs);
  }

  async expectCareersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.careers), timeoutMs);
  }

  async expectCareersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.careers), timeoutMs);
  }

  async expectCareersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.careers), timeoutMs);
  }

  async expectCareersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.careers), count, timeoutMs);
  }

  async longPressSiteMap(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.siteMap));
  }

  async expectSiteMapValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.siteMap), value, timeoutMs);
  }

  async expectSiteMapEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.siteMap), count, timeoutMs);
  }

  async longPressCorporateInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.corporateInformation));
  }

  async expectCorporateInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.corporateInformation), value, timeoutMs);
  }

  async expectCorporateInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.corporateInformation), count, timeoutMs);
  }

  async longPressWhitehat(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.whitehat));
  }

  async expectWhitehatValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.whitehat), value, timeoutMs);
  }

  async expectWhitehatEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.whitehat), count, timeoutMs);
  }

  async longPressCleartrip(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.cleartrip));
  }

  async expectCleartripValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.cleartrip), value, timeoutMs);
  }

  async expectCleartripEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.cleartrip), count, timeoutMs);
  }

  async longPressMyntraGlobal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.myntraGlobal));
  }

  async expectMyntraGlobalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.myntraGlobal), value, timeoutMs);
  }

  async expectMyntraGlobalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.myntraGlobal), count, timeoutMs);
  }

  async longPressContactUs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.contactUs));
  }

  async expectContactUsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.contactUs), value, timeoutMs);
  }

  async expectContactUsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.contactUs), timeoutMs);
  }

  async expectContactUsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.contactUs), timeoutMs);
  }

  async expectContactUsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.contactUs), timeoutMs);
  }

  async expectContactUsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.contactUs), timeoutMs);
  }

  async expectContactUsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.contactUs), timeoutMs);
  }

  async expectContactUsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.contactUs), count, timeoutMs);
  }

  async longPressFAQ(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.fAQ));
  }

  async expectFAQValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.fAQ), value, timeoutMs);
  }

  async expectFAQEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.fAQ), timeoutMs);
  }

  async expectFAQDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.fAQ), timeoutMs);
  }

  async expectFAQChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.fAQ), timeoutMs);
  }

  async expectFAQUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.fAQ), timeoutMs);
  }

  async expectFAQFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.fAQ), timeoutMs);
  }

  async expectFAQCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.fAQ), count, timeoutMs);
  }

  async longPressTC(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.tC));
  }

  async expectTCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.tC), value, timeoutMs);
  }

  async expectTCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.tC), timeoutMs);
  }

  async expectTCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.tC), timeoutMs);
  }

  async expectTCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.tC), timeoutMs);
  }

  async expectTCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.tC), timeoutMs);
  }

  async expectTCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.tC), timeoutMs);
  }

  async expectTCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.tC), count, timeoutMs);
  }

  async longPressTermsOfUse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.termsOfUse));
  }

  async expectTermsOfUseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.termsOfUse), value, timeoutMs);
  }

  async expectTermsOfUseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.termsOfUse), count, timeoutMs);
  }

  async longPressTrackOrders(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.trackOrders));
  }

  async expectTrackOrdersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.trackOrders), value, timeoutMs);
  }

  async expectTrackOrdersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.trackOrders), count, timeoutMs);
  }

  async longPressShipping(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.shipping));
  }

  async expectShippingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.shipping), value, timeoutMs);
  }

  async expectShippingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.shipping), timeoutMs);
  }

  async expectShippingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.shipping), timeoutMs);
  }

  async expectShippingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.shipping), timeoutMs);
  }

  async expectShippingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.shipping), timeoutMs);
  }

  async expectShippingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.shipping), timeoutMs);
  }

  async expectShippingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.shipping), count, timeoutMs);
  }

  async longPressCancellation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.cancellation));
  }

  async expectCancellationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.cancellation), value, timeoutMs);
  }

  async expectCancellationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.cancellation), timeoutMs);
  }

  async expectCancellationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.cancellation), timeoutMs);
  }

  async expectCancellationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.cancellation), timeoutMs);
  }

  async expectCancellationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.cancellation), timeoutMs);
  }

  async expectCancellationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.cancellation), timeoutMs);
  }

  async expectCancellationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.cancellation), count, timeoutMs);
  }

  async longPressPrivacyPolicy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.privacyPolicy));
  }

  async expectPrivacyPolicyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.privacyPolicy), value, timeoutMs);
  }

  async expectPrivacyPolicyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.privacyPolicy), count, timeoutMs);
  }

  async longPressGrievanceRedressal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.grievanceRedressal));
  }

  async expectGrievanceRedressalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.grievanceRedressal), value, timeoutMs);
  }

  async expectGrievanceRedressalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.grievanceRedressal), count, timeoutMs);
  }

  async longPressFSSAIFoodSafetyConnect(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect));
  }

  async expectFSSAIFoodSafetyConnectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect), value, timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.fSSAIFoodSafetyConnect), count, timeoutMs);
  }

  async longPressAdidas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.adidas));
  }

  async expectAdidasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.adidas), value, timeoutMs);
  }

  async expectAdidasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.adidas), timeoutMs);
  }

  async expectAdidasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.adidas), timeoutMs);
  }

  async expectAdidasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.adidas), timeoutMs);
  }

  async expectAdidasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.adidas), timeoutMs);
  }

  async expectAdidasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.adidas), timeoutMs);
  }

  async expectAdidasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.adidas), count, timeoutMs);
  }

  async longPressArrow(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.arrow));
  }

  async expectArrowValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.arrow), value, timeoutMs);
  }

  async expectArrowEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.arrow), timeoutMs);
  }

  async expectArrowDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.arrow), timeoutMs);
  }

  async expectArrowChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.arrow), timeoutMs);
  }

  async expectArrowUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.arrow), timeoutMs);
  }

  async expectArrowFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.arrow), timeoutMs);
  }

  async expectArrowCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.arrow), count, timeoutMs);
  }

  async longPressFila(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.fila));
  }

  async expectFilaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.fila), value, timeoutMs);
  }

  async expectFilaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.fila), timeoutMs);
  }

  async expectFilaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.fila), timeoutMs);
  }

  async expectFilaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.fila), timeoutMs);
  }

  async expectFilaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.fila), timeoutMs);
  }

  async expectFilaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.fila), timeoutMs);
  }

  async expectFilaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.fila), count, timeoutMs);
  }

  async longPressOnlineShopping(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.onlineShopping));
  }

  async expectOnlineShoppingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.onlineShopping), value, timeoutMs);
  }

  async expectOnlineShoppingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.onlineShopping), count, timeoutMs);
  }

  async longPressNike(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.nike));
  }

  async expectNikeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.nike), value, timeoutMs);
  }

  async expectNikeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.nike), timeoutMs);
  }

  async expectNikeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.nike), timeoutMs);
  }

  async expectNikeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.nike), timeoutMs);
  }

  async expectNikeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.nike), timeoutMs);
  }

  async expectNikeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.nike), timeoutMs);
  }

  async expectNikeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.nike), count, timeoutMs);
  }

  async longPressPepeJeans(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.pepeJeans));
  }

  async expectPepeJeansValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.pepeJeans), value, timeoutMs);
  }

  async expectPepeJeansEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.pepeJeans), count, timeoutMs);
  }

  async longPressPuma(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.puma));
  }

  async expectPumaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.puma), value, timeoutMs);
  }

  async expectPumaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.puma), timeoutMs);
  }

  async expectPumaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.puma), timeoutMs);
  }

  async expectPumaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.puma), timeoutMs);
  }

  async expectPumaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.puma), timeoutMs);
  }

  async expectPumaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.puma), timeoutMs);
  }

  async expectPumaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.puma), count, timeoutMs);
  }

  async longPressUnitedColorsOfBenetton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton));
  }

  async expectUnitedColorsOfBenettonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton), value, timeoutMs);
  }

  async expectUnitedColorsOfBenettonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.unitedColorsOfBenetton), count, timeoutMs);
  }

  async longPressFastrack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.fastrack));
  }

  async expectFastrackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.fastrack), value, timeoutMs);
  }

  async expectFastrackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.fastrack), timeoutMs);
  }

  async expectFastrackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.fastrack), timeoutMs);
  }

  async expectFastrackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.fastrack), timeoutMs);
  }

  async expectFastrackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.fastrack), timeoutMs);
  }

  async expectFastrackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.fastrack), timeoutMs);
  }

  async expectFastrackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.fastrack), count, timeoutMs);
  }

  async longPressShorts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.shorts));
  }

  async expectShortsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.shorts), value, timeoutMs);
  }

  async expectShortsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.shorts), timeoutMs);
  }

  async expectShortsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.shorts), timeoutMs);
  }

  async expectShortsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.shorts), timeoutMs);
  }

  async expectShortsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.shorts), timeoutMs);
  }

  async expectShortsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.shorts), timeoutMs);
  }

  async expectShortsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.shorts), count, timeoutMs);
  }

  async longPressBeingHuman(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.beingHuman));
  }

  async expectBeingHumanValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.beingHuman), value, timeoutMs);
  }

  async expectBeingHumanEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.beingHuman), count, timeoutMs);
  }

  async longPressSkirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.skirts));
  }

  async expectSkirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.skirts), value, timeoutMs);
  }

  async expectSkirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.skirts), timeoutMs);
  }

  async expectSkirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.skirts), timeoutMs);
  }

  async expectSkirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.skirts), timeoutMs);
  }

  async expectSkirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.skirts), timeoutMs);
  }

  async expectSkirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.skirts), timeoutMs);
  }

  async expectSkirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.skirts), count, timeoutMs);
  }

  async longPressWoodland(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.woodland));
  }

  async expectWoodlandValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.woodland), value, timeoutMs);
  }

  async expectWoodlandEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.woodland), timeoutMs);
  }

  async expectWoodlandDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.woodland), timeoutMs);
  }

  async expectWoodlandChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.woodland), timeoutMs);
  }

  async expectWoodlandUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.woodland), timeoutMs);
  }

  async expectWoodlandFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.woodland), timeoutMs);
  }

  async expectWoodlandCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.woodland), count, timeoutMs);
  }

  async longPressSupra(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.supra));
  }

  async expectSupraValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.supra), value, timeoutMs);
  }

  async expectSupraEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.supra), timeoutMs);
  }

  async expectSupraDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.supra), timeoutMs);
  }

  async expectSupraChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.supra), timeoutMs);
  }

  async expectSupraUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.supra), timeoutMs);
  }

  async expectSupraFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.supra), timeoutMs);
  }

  async expectSupraCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.supra), count, timeoutMs);
  }

  async longPressDresses(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.dresses));
  }

  async expectDressesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.dresses), value, timeoutMs);
  }

  async expectDressesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.dresses), timeoutMs);
  }

  async expectDressesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.dresses), timeoutMs);
  }

  async expectDressesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.dresses), timeoutMs);
  }

  async expectDressesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.dresses), timeoutMs);
  }

  async expectDressesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.dresses), timeoutMs);
  }

  async expectDressesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.dresses), count, timeoutMs);
  }

  async longPressClothing2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.clothing2));
  }

  async expectClothing2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.clothing2), value, timeoutMs);
  }

  async expectClothing2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.clothing2), count, timeoutMs);
  }

  async longPressJewellery(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.jewellery));
  }

  async expectJewelleryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.jewellery), value, timeoutMs);
  }

  async expectJewelleryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.jewellery), count, timeoutMs);
  }

  async longPressTShirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.tShirts));
  }

  async expectTShirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.tShirts), value, timeoutMs);
  }

  async expectTShirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.tShirts), count, timeoutMs);
  }

  async longPressShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.shoes));
  }

  async expectShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.shoes), value, timeoutMs);
  }

  async expectShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.shoes), timeoutMs);
  }

  async expectShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.shoes), timeoutMs);
  }

  async expectShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.shoes), timeoutMs);
  }

  async expectShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.shoes), timeoutMs);
  }

  async expectShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.shoes), timeoutMs);
  }

  async expectShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.shoes), count, timeoutMs);
  }

  async longPressBags(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.bags));
  }

  async expectBagsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.bags), value, timeoutMs);
  }

  async expectBagsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.bags), timeoutMs);
  }

  async expectBagsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.bags), timeoutMs);
  }

  async expectBagsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.bags), timeoutMs);
  }

  async expectBagsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.bags), timeoutMs);
  }

  async expectBagsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.bags), timeoutMs);
  }

  async expectBagsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.bags), count, timeoutMs);
  }

  async longPressWatches(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.watches));
  }

  async expectWatchesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.watches), value, timeoutMs);
  }

  async expectWatchesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.watches), timeoutMs);
  }

  async expectWatchesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.watches), timeoutMs);
  }

  async expectWatchesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.watches), timeoutMs);
  }

  async expectWatchesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.watches), timeoutMs);
  }

  async expectWatchesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.watches), timeoutMs);
  }

  async expectWatchesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.watches), count, timeoutMs);
  }

  async longPressCaps(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.caps));
  }

  async expectCapsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.caps), value, timeoutMs);
  }

  async expectCapsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.caps), timeoutMs);
  }

  async expectCapsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.caps), timeoutMs);
  }

  async expectCapsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.caps), timeoutMs);
  }

  async expectCapsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.caps), timeoutMs);
  }

  async expectCapsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.caps), timeoutMs);
  }

  async expectCapsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.caps), count, timeoutMs);
  }

  async longPressShirts2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.shirts2));
  }

  async expectShirts2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.shirts2), value, timeoutMs);
  }

  async expectShirts2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.shirts2), timeoutMs);
  }

  async expectShirts2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.shirts2), timeoutMs);
  }

  async expectShirts2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.shirts2), timeoutMs);
  }

  async expectShirts2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.shirts2), timeoutMs);
  }

  async expectShirts2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.shirts2), timeoutMs);
  }

  async expectShirts2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.shirts2), count, timeoutMs);
  }

  async longPressBackpacks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.backpacks));
  }

  async expectBackpacksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.backpacks), value, timeoutMs);
  }

  async expectBackpacksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.backpacks), count, timeoutMs);
  }

  async longPressFlipFlops(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.flipFlops));
  }

  async expectFlipFlopsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.flipFlops), value, timeoutMs);
  }

  async expectFlipFlopsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.flipFlops), timeoutMs);
  }

  async expectFlipFlopsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.flipFlops), timeoutMs);
  }

  async expectFlipFlopsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.flipFlops), timeoutMs);
  }

  async expectFlipFlopsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.flipFlops), timeoutMs);
  }

  async expectFlipFlopsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.flipFlops), timeoutMs);
  }

  async expectFlipFlopsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.flipFlops), count, timeoutMs);
  }

  async longPressSunglasses(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.sunglasses));
  }

  async expectSunglassesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.sunglasses), value, timeoutMs);
  }

  async expectSunglassesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.sunglasses), timeoutMs);
  }

  async expectSunglassesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.sunglasses), timeoutMs);
  }

  async expectSunglassesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.sunglasses), timeoutMs);
  }

  async expectSunglassesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.sunglasses), timeoutMs);
  }

  async expectSunglassesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.sunglasses), timeoutMs);
  }

  async expectSunglassesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.sunglasses), count, timeoutMs);
  }

  async longPressKurtas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.kurtas));
  }

  async expectKurtasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.kurtas), value, timeoutMs);
  }

  async expectKurtasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.kurtas), timeoutMs);
  }

  async expectKurtasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.kurtas), timeoutMs);
  }

  async expectKurtasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.kurtas), timeoutMs);
  }

  async expectKurtasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.kurtas), timeoutMs);
  }

  async expectKurtasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.kurtas), timeoutMs);
  }

  async expectKurtasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.kurtas), count, timeoutMs);
  }

  async longPressLingerie(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.lingerie));
  }

  async expectLingerieValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.lingerie), value, timeoutMs);
  }

  async expectLingerieEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.lingerie), timeoutMs);
  }

  async expectLingerieDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.lingerie), timeoutMs);
  }

  async expectLingerieChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.lingerie), timeoutMs);
  }

  async expectLingerieUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.lingerie), timeoutMs);
  }

  async expectLingerieFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.lingerie), timeoutMs);
  }

  async expectLingerieCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.lingerie), count, timeoutMs);
  }

  async longPressJackets(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.jackets));
  }

  async expectJacketsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.jackets), value, timeoutMs);
  }

  async expectJacketsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.jackets), timeoutMs);
  }

  async expectJacketsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.jackets), timeoutMs);
  }

  async expectJacketsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.jackets), timeoutMs);
  }

  async expectJacketsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.jackets), timeoutMs);
  }

  async expectJacketsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.jackets), timeoutMs);
  }

  async expectJacketsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.jackets), count, timeoutMs);
  }

  async longPressSkechers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.skechers));
  }

  async expectSkechersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.skechers), value, timeoutMs);
  }

  async expectSkechersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.skechers), timeoutMs);
  }

  async expectSkechersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.skechers), timeoutMs);
  }

  async expectSkechersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.skechers), timeoutMs);
  }

  async expectSkechersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.skechers), timeoutMs);
  }

  async expectSkechersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.skechers), timeoutMs);
  }

  async expectSkechersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.skechers), count, timeoutMs);
  }

  async longPressSaree(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.saree));
  }

  async expectSareeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.saree), value, timeoutMs);
  }

  async expectSareeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.saree), timeoutMs);
  }

  async expectSareeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.saree), timeoutMs);
  }

  async expectSareeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.saree), timeoutMs);
  }

  async expectSareeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.saree), timeoutMs);
  }

  async expectSareeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.saree), timeoutMs);
  }

  async expectSareeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.saree), count, timeoutMs);
  }

  async longPressSandals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.sandals));
  }

  async expectSandalsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.sandals), value, timeoutMs);
  }

  async expectSandalsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.sandals), timeoutMs);
  }

  async expectSandalsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.sandals), timeoutMs);
  }

  async expectSandalsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.sandals), timeoutMs);
  }

  async expectSandalsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.sandals), timeoutMs);
  }

  async expectSandalsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.sandals), timeoutMs);
  }

  async expectSandalsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.sandals), count, timeoutMs);
  }

  async longPressPumaTshirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.pumaTshirts));
  }

  async expectPumaTshirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.pumaTshirts), value, timeoutMs);
  }

  async expectPumaTshirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.pumaTshirts), count, timeoutMs);
  }

  async longPressWoodlandShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.woodlandShoes));
  }

  async expectWoodlandShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.woodlandShoes), value, timeoutMs);
  }

  async expectWoodlandShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.woodlandShoes), count, timeoutMs);
  }

  async longPressTitanWatches(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.titanWatches));
  }

  async expectTitanWatchesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.titanWatches), value, timeoutMs);
  }

  async expectTitanWatchesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.titanWatches), count, timeoutMs);
  }

  async longPressFastrackWatches(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.fastrackWatches));
  }

  async expectFastrackWatchesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.fastrackWatches), value, timeoutMs);
  }

  async expectFastrackWatchesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.fastrackWatches), count, timeoutMs);
  }

  async longPressWranglerShirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.wranglerShirts));
  }

  async expectWranglerShirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.wranglerShirts), value, timeoutMs);
  }

  async expectWranglerShirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.wranglerShirts), count, timeoutMs);
  }

  async longPressAdidasTshirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.adidasTshirts));
  }

  async expectAdidasTshirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.adidasTshirts), value, timeoutMs);
  }

  async expectAdidasTshirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.adidasTshirts), count, timeoutMs);
  }

  async longPressNikeShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.nikeShoes));
  }

  async expectNikeShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.nikeShoes), value, timeoutMs);
  }

  async expectNikeShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.nikeShoes), count, timeoutMs);
  }

  async longPressRoadsterShirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.roadsterShirts));
  }

  async expectRoadsterShirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.roadsterShirts), value, timeoutMs);
  }

  async expectRoadsterShirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.roadsterShirts), count, timeoutMs);
  }

  async longPressCasualShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.casualShoes));
  }

  async expectCasualShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.casualShoes), value, timeoutMs);
  }

  async expectCasualShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.casualShoes), count, timeoutMs);
  }

  async longPressRunningShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.runningShoes));
  }

  async expectRunningShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.runningShoes), value, timeoutMs);
  }

  async expectRunningShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.runningShoes), count, timeoutMs);
  }

  async longPressNikeSportsShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.nikeSportsShoes));
  }

  async expectNikeSportsShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.nikeSportsShoes), value, timeoutMs);
  }

  async expectNikeSportsShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.nikeSportsShoes), count, timeoutMs);
  }

  async longPressJeans(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.jeans));
  }

  async expectJeansValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.jeans), value, timeoutMs);
  }

  async expectJeansEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.jeans), timeoutMs);
  }

  async expectJeansDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.jeans), timeoutMs);
  }

  async expectJeansChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.jeans), timeoutMs);
  }

  async expectJeansUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.jeans), timeoutMs);
  }

  async expectJeansFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.jeans), timeoutMs);
  }

  async expectJeansCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.jeans), count, timeoutMs);
  }

  async longPressBeingHumanTshirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.beingHumanTshirts));
  }

  async expectBeingHumanTshirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.beingHumanTshirts), value, timeoutMs);
  }

  async expectBeingHumanTshirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.beingHumanTshirts), count, timeoutMs);
  }

  async longPressConverseShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.converseShoes));
  }

  async expectConverseShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.converseShoes), value, timeoutMs);
  }

  async expectConverseShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.converseShoes), count, timeoutMs);
  }

  async longPressCricketShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.cricketShoes));
  }

  async expectCricketShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.cricketShoes), value, timeoutMs);
  }

  async expectCricketShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.cricketShoes), count, timeoutMs);
  }

  async longPressContactUs2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.contactUs2));
  }

  async expectContactUs2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.contactUs2), value, timeoutMs);
  }

  async expectContactUs2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.contactUs2), count, timeoutMs);
  }

  async longPressAFlipkartCompany(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SerachresultPage.L.aFlipkartCompany));
  }

  async expectAFlipkartCompanyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SerachresultPage.L.aFlipkartCompany), value, timeoutMs);
  }

  async expectAFlipkartCompanyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SerachresultPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SerachresultPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SerachresultPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SerachresultPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SerachresultPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SerachresultPage.L.aFlipkartCompany), count, timeoutMs);
  }

}
