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

export class MenTshirtsPage {
  private static readonly L = {
    input: { strategy: 'placeholder' as const, value: 'Search for products, brands and more', actionKind: 'textbox' as const },
    home: { strategy: 'role' as const, value: 'Home', role: 'link', actionKind: 'link' as const },
    clothing: { strategy: 'role' as const, value: 'Clothing', role: 'link', actionKind: 'link' as const },
    tshirts: { strategy: 'role' as const, value: 'Tshirts', role: 'link', actionKind: 'link' as const },
    jockeySuperCombedCotton: { strategy: 'role' as const, value: 'Jockey Super Combed Cotton T-shirt Rs. 599', role: 'link', actionKind: 'link' as const },
    jockeySolidVNeckTShirt: { strategy: 'role' as const, value: 'Jockey Solid V-Neck T-shirt Rs. 599', role: 'link', actionKind: 'link' as const },
    nEWTHEBEETELHOUSE: { strategy: 'text' as const, value: 'NEW THE BEETEL HOUSE Men Polo Collar T-shirt Rs. 222Rs. 1499(85% OFF)', actionKind: 'link' as const },
    rigoUnisexPrintedCotton: { strategy: 'role' as const, value: 'Rigo Unisex Printed Cotton T-shirt Rs. 511Rs. 1599(68% OFF)', role: 'link', actionKind: 'link' as const },
    jockeyMenSolidCotton: { strategy: 'role' as const, value: 'Jockey Men Solid Cotton T-shirt Rs. 599', role: 'link', actionKind: 'link' as const },
    nEWSeekbuyloveRoundNeck: { strategy: 'text' as const, value: 'NEW Seekbuylove Round Neck Cotton T-shirt Rs. 495Rs. 799(38% OFF)', actionKind: 'link' as const },
    nEWHIORPureCotton: { strategy: 'text' as const, value: 'NEW HIOR Pure Cotton Oversized T-shirt Rs. 879Rs. 999(12% OFF)', actionKind: 'link' as const },
    nauticaPureCottonTShirt: { strategy: 'role' as const, value: 'Nautica Pure Cotton T-shirt Rs. 461Rs. 1099(58% OFF)', role: 'link', actionKind: 'link' as const },
    eNRIZZMenTShirtRs: { strategy: 'role' as const, value: 'ENRIZZ Men T-shirt Rs. 304Rs. 1499(80% OFF)', role: 'link', actionKind: 'link' as const },
    bAESDPackOf2: { strategy: 'role' as const, value: 'BAESD Pack Of 2 Cotton T-shirts Rs. 699Rs. 1500(53% OFF)', role: 'link', actionKind: 'link' as const },
    maniacMenStripedRound: { strategy: 'text' as const, value: 'Maniac Men Striped Round Neck T-shirt Rs. 550Rs. 1719(Rs. 1169 OFF)', actionKind: 'link' as const },
    nEWTHEBEETELHOUSE2: { strategy: 'text' as const, value: 'NEW THE BEETEL HOUSE Men Brand Logo Polo Collar T-shirt Rs. 334Rs. 1499(78% OFF)', actionKind: 'link' as const },
    nEWTHEBEETLEHOUSE: { strategy: 'role' as const, value: 'NEW THE BEETLE HOUSE Tshirt Rs. 342Rs. 999(66% OFF)', role: 'link', actionKind: 'link' as const },
    nEXTPureCottonTShirt: { strategy: 'text' as const, value: 'NEXT Pure Cotton T-shirt Rs. 599Rs. 999(40% OFF) Only Few Left!', actionKind: 'link' as const },
    nEWDostitchPrintedRegular: { strategy: 'text' as const, value: 'NEW dostitch Printed Regular Fit T-shirt Rs. 490Rs. 999(51% OFF)', actionKind: 'link' as const },
    sTARTONUnisexCottonOversized: { strategy: 'text' as const, value: 'STARTON Unisex Cotton Oversized Tshirt Rs. 490Rs. 1499(67% OFF)', actionKind: 'link' as const },
    uSPoloAssnPrinted: { strategy: 'text' as const, value: 'U.S. Polo Assn. Printed Cotton Lounge T-shirt Rs. 426Rs. 749(43% OFF)', actionKind: 'link' as const },
    nEWTheModernSoul: { strategy: 'text' as const, value: 'NEW The Modern Soul Men Henley Neck T-shirt Rs. 399Rs. 1499(73% OFF)', actionKind: 'link' as const },
    maverIQTshirtRs244Rs: { strategy: 'role' as const, value: 'MaverIQ Tshirt Rs. 244Rs. 999(76% OFF)', role: 'link', actionKind: 'link' as const },
    jockeyModernSolidLounge: { strategy: 'role' as const, value: 'Jockey Modern Solid Lounge T-shirt Rs. 599', role: 'link', actionKind: 'link' as const },
    nEWENITORMenPolo: { strategy: 'role' as const, value: 'NEW ENITOR Men Polo Collar T-shirt Rs. 339Rs. 1499(77% OFF)', role: 'link', actionKind: 'link' as const },
    glitchezTypographyRegularTShirt: { strategy: 'role' as const, value: 'glitchez Typography Regular T-shirt Rs. 395Rs. 1099(64% OFF)', role: 'link', actionKind: 'link' as const },
    jockeyMenRoundNeck: { strategy: 'role' as const, value: 'Jockey Men Round Neck Pure Cotton T-shirt Rs. 599', role: 'link', actionKind: 'link' as const },
    modaRapidoMenPolo: { strategy: 'text' as const, value: 'Moda Rapido Men Polo Collar T-shirt Rs. 239Rs. 999(Rs. 760 OFF)', actionKind: 'link' as const },
    maverIQMenRegularFit: { strategy: 'role' as const, value: 'MaverIQ Men Regular Fit T-shirt Rs. 244Rs. 999(76% OFF)', role: 'link', actionKind: 'link' as const },
    maniacMenTypographyPrinted: { strategy: 'text' as const, value: 'Maniac Men Typography Printed T-shirt Rs. 533Rs. 1569(Rs. 1036 OFF)', actionKind: 'link' as const },
    rigoUnisexPrintedCotton2: { strategy: 'role' as const, value: 'Rigo Unisex Printed Cotton T-shirt Rs. 511Rs. 1599(68% OFF)', role: 'link', actionKind: 'link' as const },
    glitchezPoloCollarOversized: { strategy: 'text' as const, value: 'glitchez Polo Collar Oversized T-shirt Rs. 360Rs. 1399(74% OFF)', actionKind: 'link' as const },
    uSPoloAssnPure: { strategy: 'text' as const, value: 'U.S. Polo Assn. Pure Cotton Lounge T-shirts Rs. 399Rs. 799(50% OFF)', actionKind: 'link' as const },
    bAESDPackOf22: { strategy: 'role' as const, value: 'BAESD Pack Of 2 Cotton T-shirts Rs. 699Rs. 1500(53% OFF)', role: 'link', actionKind: 'link' as const },
    nEWMaverIQTshirtRs: { strategy: 'role' as const, value: 'NEW MaverIQ Tshirt Rs. 244Rs. 999(76% OFF)', role: 'link', actionKind: 'link' as const },
    jockeyMenRoundNeck2: { strategy: 'role' as const, value: 'Jockey Men Round Neck T-shirt Rs. 589', role: 'link', actionKind: 'link' as const },
    hRXByHrithikRoshan: { strategy: 'text' as const, value: 'HRX by Hrithik Roshan Rapid-Dry Training T-shirt Rs. 376Rs. 1299(Rs. 923 OFF)', actionKind: 'link' as const },
    hMMenCottonPure: { strategy: 'text' as const, value: 'H&M Men Cotton Pure Cotton T-shirt Regular Fit Rs. 449Rs. 499(10% OFF)', actionKind: 'link' as const },
    uSPoloAssnLounge: { strategy: 'role' as const, value: 'U.S. Polo Assn. Lounge T-Shirt Rs. 454Rs. 699(35% OFF)', role: 'link', actionKind: 'link' as const },
    nEWLeotudeMenTypography: { strategy: 'text' as const, value: 'NEW Leotude Men Typography Printed T-shirt Rs. 699Rs. 1099(36% OFF)', actionKind: 'link' as const },
    nEWMaverIQTshirtRs2: { strategy: 'role' as const, value: 'NEW MaverIQ Tshirt Rs. 244Rs. 999(76% OFF)', role: 'link', actionKind: 'link' as const },
    jockeyMenSolidSports: { strategy: 'role' as const, value: 'Jockey Men Solid Sports T-shirt Rs. 599', role: 'link', actionKind: 'link' as const },
    pRONKMenPrintedRaw: { strategy: 'role' as const, value: 'PRONK Men Printed Raw Edge T-shirt Rs. 374Rs. 1499(75% OFF)', role: 'link', actionKind: 'link' as const },
    nEWAUSTIVOMenStriped: { strategy: 'text' as const, value: 'NEW AUSTIVO Men Striped Polo Collar T-shirt Rs. 466Rs. 1799(74% OFF)', actionKind: 'link' as const },
    dAMENSCHMenLoungeTShirts: { strategy: 'role' as const, value: 'DAMENSCH Men Lounge T-Shirts Rs. 699', role: 'link', actionKind: 'link' as const },
    veBNoRMenSelfDesign: { strategy: 'role' as const, value: 'VeBNoR Men Self Design T-shirt Rs. 299Rs. 999(70% OFF)', role: 'link', actionKind: 'link' as const },
    tHEBEETLEHOUSETshirt: { strategy: 'role' as const, value: 'THE BEETLE HOUSE Tshirt Rs. 342Rs. 999(66% OFF)', role: 'link', actionKind: 'link' as const },
    maniacPrintedCottonTShirt: { strategy: 'role' as const, value: 'Maniac Printed Cotton T-Shirt Rs. 550Rs. 1719(Rs. 1169 OFF)', role: 'link', actionKind: 'link' as const },
    playRChennaiSuperKings: { strategy: 'text' as const, value: 'playR Chennai Super Kings Cricket IPL Jersey Rs. 599Rs. 1199(50% OFF)', actionKind: 'link' as const },
    playRChennaiSuperKings2: { strategy: 'text' as const, value: 'playR Chennai Super Kings Fan Jersey Rs. 599Rs. 1199(50% OFF)', actionKind: 'link' as const },
    uSPoloAssnMen: { strategy: 'text' as const, value: 'U.S. Polo Assn. Men Pure Cotton Lounge T-Shirt Rs. 419Rs. 699(40% OFF)', actionKind: 'link' as const },
    glitchezPrintedRelaxedTShirt: { strategy: 'text' as const, value: 'glitchez Printed Relaxed T-shirt Rs. 223Rs. 699(68% OFF) Only Few Left!', actionKind: 'link' as const },
    tHEBEETLEHOUSETshirt2: { strategy: 'role' as const, value: 'THE BEETLE HOUSE Tshirt Rs. 342Rs. 999(66% OFF)', role: 'link', actionKind: 'link' as const },
    nEWPeterEnglandPolo: { strategy: 'text' as const, value: 'NEW Peter England Polo Collar T-Shirt Rs. 419Rs. 999(58% OFF)', actionKind: 'link' as const },
    tHEBEETELHOUSEMen: { strategy: 'role' as const, value: 'THE BEETEL HOUSE Men Colourblocked Polo Collar T-shirt', role: 'link', actionKind: 'link' as const },
    rigoUnisexGraphicPrinted: { strategy: 'text' as const, value: 'Rigo Unisex Graphic Printed Drop-Shoulder Sleeves Cotton Oversized T-shirt', actionKind: 'link' as const },
    seekbuyloveUnisexGraphicPrinted: { strategy: 'text' as const, value: 'Seekbuylove Unisex Graphic Printed Round Neck Cotton Bio Finish T-shirt', actionKind: 'link' as const },
    eNRIZZMenTShirt: { strategy: 'role' as const, value: 'ENRIZZ Men T-shirt', role: 'link', actionKind: 'link' as const },
    tHEBEETELHOUSEMen2: { strategy: 'role' as const, value: 'THE BEETEL HOUSE Men Brand Logo Polo Collar T-shirt', role: 'link', actionKind: 'link' as const },
    tHEBEETLEHOUSEMen: { strategy: 'role' as const, value: 'THE BEETLE HOUSE Men Printed T-shirt', role: 'link', actionKind: 'link' as const },
    dostitchGraphicRealMadrid: { strategy: 'text' as const, value: 'dostitch Graphic Real Madrid Printed Round Neck Regular Fit T-shirt', actionKind: 'link' as const },
    tShirts: { strategy: 'role' as const, value: 't-shirts', role: 'link', actionKind: 'link' as const },
    trackPants: { strategy: 'role' as const, value: 'track pants', role: 'link', actionKind: 'link' as const },
    loungeShorts: { strategy: 'role' as const, value: 'lounge shorts', role: 'link', actionKind: 'link' as const },
    innerwear: { strategy: 'role' as const, value: 'innerwear', role: 'link', actionKind: 'link' as const },
    men: { strategy: 'role' as const, value: 'men', role: 'link', actionKind: 'link' as const },
    joggers: { strategy: 'role' as const, value: 'joggers', role: 'link', actionKind: 'link' as const },
    tracksuits: { strategy: 'role' as const, value: 'tracksuits', role: 'link', actionKind: 'link' as const },
    roundNeckTShirt: { strategy: 'role' as const, value: 'Round Neck T-shirt', role: 'link', actionKind: 'link' as const },
    jeans: { strategy: 'role' as const, value: 'jeans', role: 'link', actionKind: 'link' as const },
    roadsterMenWhitePure: { strategy: 'role' as const, value: 'Roadster Men White Pure Cotton T-shirt', role: 'link', actionKind: 'link' as const },
    hRXByHrithikRoshan2: { strategy: 'text' as const, value: 'HRX by Hrithik Roshan Men Yellow Printed Cotton Pure Cotton T-shirt', actionKind: 'link' as const },
    urbanoFashionMenTeal: { strategy: 'text' as const, value: 'Urbano Fashion Men Teal Green Slim Fit Tropical Printed Pure Cotton T-shirt', actionKind: 'link' as const },
    huetrapMenBeige: { strategy: 'text' as const, value: 'Huetrap Men Beige & Black Typography Printed Sustainable T-shirt', actionKind: 'link' as const },
    roadsterMenBlackCotton: { strategy: 'role' as const, value: 'Roadster Men Black Cotton Pure Cotton T-shirt', role: 'link', actionKind: 'link' as const },
    hRXByHrithikRoshan3: { strategy: 'text' as const, value: 'HRX by Hrithik Roshan Men Olive Green Solid Bio-Wash Running Tshirt', actionKind: 'link' as const },
    bewakoof: { strategy: 'role' as const, value: 'Bewakoof', role: 'link', actionKind: 'link' as const },
    zivame: { strategy: 'role' as const, value: 'Zivame', role: 'link', actionKind: 'link' as const },
    levis: { strategy: 'role' as const, value: 'Levis', role: 'link', actionKind: 'link' as const },
    manyavar: { strategy: 'role' as const, value: 'Manyavar', role: 'link', actionKind: 'link' as const },
    selected: { strategy: 'role' as const, value: 'Selected', role: 'link', actionKind: 'link' as const },
    skechers: { strategy: 'role' as const, value: 'Skechers', role: 'link', actionKind: 'link' as const },
    hopscotch: { strategy: 'role' as const, value: 'Hopscotch', role: 'link', actionKind: 'link' as const },
    jockey: { strategy: 'role' as const, value: 'Jockey', role: 'link', actionKind: 'link' as const },
    marksSpencer: { strategy: 'role' as const, value: 'Marks & Spencer', role: 'link', actionKind: 'link' as const },
    louisPhilippe: { strategy: 'role' as const, value: 'Louis Philippe', role: 'link', actionKind: 'link' as const },
    andamen: { strategy: 'role' as const, value: 'Andamen', role: 'link', actionKind: 'link' as const },
    tommyHilfiger: { strategy: 'role' as const, value: 'Tommy Hilfiger', role: 'link', actionKind: 'link' as const },
    theSouledStore: { strategy: 'role' as const, value: 'The Souled Store', role: 'link', actionKind: 'link' as const },
    wineRed: { strategy: 'role' as const, value: 'WineRed', role: 'link', actionKind: 'link' as const },
    asics: { strategy: 'role' as const, value: 'Asics', role: 'link', actionKind: 'link' as const },
    monteCarlo: { strategy: 'role' as const, value: 'Monte Carlo', role: 'link', actionKind: 'link' as const },
    underArmour: { strategy: 'role' as const, value: 'Under Armour', role: 'link', actionKind: 'link' as const },
    basics: { strategy: 'role' as const, value: 'Basics', role: 'link', actionKind: 'link' as const },
    chumbak: { strategy: 'role' as const, value: 'Chumbak', role: 'link', actionKind: 'link' as const },
    frenchCrown: { strategy: 'role' as const, value: 'French Crown', role: 'link', actionKind: 'link' as const },
    lacoste: { strategy: 'role' as const, value: 'Lacoste', role: 'link', actionKind: 'link' as const },
    leeCooper: { strategy: 'role' as const, value: 'Lee Cooper', role: 'link', actionKind: 'link' as const },
    rituKumar: { strategy: 'role' as const, value: 'Ritu Kumar', role: 'link', actionKind: 'link' as const },
    blackTShirtForMen2: { strategy: 'role' as const, value: 'Black T-Shirt For Men', role: 'link', actionKind: 'link' as const },
    whiteTShirtForMen: { strategy: 'role' as const, value: 'White T-Shirt For Men', role: 'link', actionKind: 'link' as const },
    whiteTShirtForGirls: { strategy: 'role' as const, value: 'White T-shirt For Girls', role: 'link', actionKind: 'link' as const },
    whiteTShirtForBoys: { strategy: 'role' as const, value: 'White T-Shirt For Boys', role: 'link', actionKind: 'link' as const },
    brownTShirtForMen: { strategy: 'role' as const, value: 'Brown T-shirt For Men', role: 'link', actionKind: 'link' as const },
    oNLINESHOPPING: { strategy: 'role' as const, value: 'ONLINE SHOPPING', role: 'link', actionKind: 'link' as const },
    men2: { strategy: 'role' as const, value: 'Men', role: 'link', actionKind: 'link' as const },
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
    dishantPatel: { strategy: 'role' as const, value: 'Dishant Patel', role: 'link', actionKind: 'link' as const },
    menSportsShoes: { strategy: 'role' as const, value: 'Men Sports Shoes', role: 'link', actionKind: 'link' as const },
    adidas: { strategy: 'role' as const, value: 'Adidas', role: 'link', actionKind: 'link' as const },
    arrow: { strategy: 'role' as const, value: 'Arrow', role: 'link', actionKind: 'link' as const },
    fila: { strategy: 'role' as const, value: 'Fila', role: 'link', actionKind: 'link' as const },
    onlineShopping: { strategy: 'role' as const, value: 'Online Shopping', role: 'link', actionKind: 'link' as const },
    nike: { strategy: 'role' as const, value: 'Nike', role: 'link', actionKind: 'link' as const },
    pepeJeans: { strategy: 'role' as const, value: 'Pepe Jeans', role: 'link', actionKind: 'link' as const },
    puma: { strategy: 'role' as const, value: 'Puma', role: 'link', actionKind: 'link' as const },
    unitedColorsOfBenetton: { strategy: 'role' as const, value: 'United Colors Of Benetton', role: 'link', actionKind: 'link' as const },
    fastrack: { strategy: 'role' as const, value: 'Fastrack', role: 'link', actionKind: 'link' as const },
    shorts: { strategy: 'role' as const, value: 'Shorts', role: 'link', actionKind: 'link' as const },
    beingHuman: { strategy: 'role' as const, value: 'Being Human', role: 'link', actionKind: 'link' as const },
    skirts: { strategy: 'role' as const, value: 'Skirts', role: 'link', actionKind: 'link' as const },
    woodland: { strategy: 'role' as const, value: 'Woodland', role: 'link', actionKind: 'link' as const },
    supra: { strategy: 'role' as const, value: 'Supra', role: 'link', actionKind: 'link' as const },
    dresses: { strategy: 'role' as const, value: 'Dresses', role: 'link', actionKind: 'link' as const },
    menShopping: { strategy: 'role' as const, value: 'Men Shopping', role: 'link', actionKind: 'link' as const },
    womenShopping: { strategy: 'role' as const, value: 'Women Shopping', role: 'link', actionKind: 'link' as const },
    blazers: { strategy: 'role' as const, value: 'Blazers', role: 'link', actionKind: 'link' as const },
    sherwani: { strategy: 'role' as const, value: 'Sherwani', role: 'link', actionKind: 'link' as const },
    onlineShopping2: { strategy: 'role' as const, value: 'Online Shopping', role: 'link', actionKind: 'link' as const },
    menOliveGreen: { strategy: 'role' as const, value: 'Men Olive Green & Cream Coloured St', role: 'link', actionKind: 'link' as const },
    rahulRaina: { strategy: 'role' as const, value: 'Rahul Raina', role: 'link', actionKind: 'link' as const },
    saurabhSharma: { strategy: 'role' as const, value: 'Saurabh Sharma', role: 'link', actionKind: 'link' as const },
    clothing2: { strategy: 'role' as const, value: 'Clothing', role: 'link', actionKind: 'link' as const },
    jewellery: { strategy: 'role' as const, value: 'Jewellery', role: 'link', actionKind: 'link' as const },
    tShirts2: { strategy: 'role' as const, value: 'T Shirts', role: 'link', actionKind: 'link' as const },
    shoes: { strategy: 'role' as const, value: 'Shoes', role: 'link', actionKind: 'link' as const },
    bags: { strategy: 'role' as const, value: 'Bags', role: 'link', actionKind: 'link' as const },
    watches: { strategy: 'role' as const, value: 'Watches', role: 'link', actionKind: 'link' as const },
    caps: { strategy: 'role' as const, value: 'Caps', role: 'link', actionKind: 'link' as const },
    shirts: { strategy: 'role' as const, value: 'Shirts', role: 'link', actionKind: 'link' as const },
    backpacks: { strategy: 'role' as const, value: 'Backpacks', role: 'link', actionKind: 'link' as const },
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
    jeans2: { strategy: 'role' as const, value: 'Jeans', role: 'link', actionKind: 'link' as const },
    beingHumanTshirts: { strategy: 'role' as const, value: 'Being Human Tshirts', role: 'link', actionKind: 'link' as const },
    converseShoes: { strategy: 'role' as const, value: 'Converse Shoes', role: 'link', actionKind: 'link' as const },
    cricketShoes: { strategy: 'role' as const, value: 'Cricket Shoes', role: 'link', actionKind: 'link' as const },
    contactUs2: { strategy: 'role' as const, value: 'Contact Us', role: 'link', actionKind: 'link' as const },
    aFlipkartCompany: { strategy: 'role' as const, value: 'A Flipkart company', role: 'link', actionKind: 'link' as const },
    playVideo: { strategy: 'label' as const, value: 'Play video', frame: 'iframe[src*="embed/cbeJWezqKiM"]', actionKind: 'button' as const },
    hidePlayerControls: { strategy: 'css' as const, value: '#player-controls-a11y-toggle', frame: 'iframe[src*="embed/cbeJWezqKiM"]', actionKind: 'button' as const },
    top5TShirtHacks: { strategy: 'text' as const, value: 'Top 5 T-shirt Hacks for Men | Fashion Hacks At Home - Myntra Studio', frame: 'iframe[src*="embed/cbeJWezqKiM"]', actionKind: 'link' as const },
    myntra: { strategy: 'role' as const, value: 'Myntra', role: 'link', frame: 'iframe[src*="embed/cbeJWezqKiM"]', actionKind: 'link' as const },
    share: { strategy: 'label' as const, value: 'Share', frame: 'iframe[src*="embed/cbeJWezqKiM"]', actionKind: 'button' as const },
    watchOnYouTube: { strategy: 'label' as const, value: 'Watch on YouTube', frame: 'iframe[src*="embed/cbeJWezqKiM"]', actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async fillInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, MenTshirtsPage.L.input), value);
  }

  async clearInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, MenTshirtsPage.L.input));
  }

  async typeTextInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, MenTshirtsPage.L.input), value);
  }

  async expectInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.input), timeoutMs);
  }

  async expectInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.input), timeoutMs);
  }

  async expectInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.input), timeoutMs);
  }

  async expectInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.input), timeoutMs);
  }

  async expectInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.input), expected, timeoutMs);
  }

  async expectInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.input), timeoutMs);
  }

  async scrollInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.input));
  }

  async clickHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.home));
  }

  async doubleClickHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.home));
  }

  async expectHomeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.home), timeoutMs);
  }

  async expectHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.home), timeoutMs);
  }

  async expectHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.home), expected, timeoutMs);
  }

  async expectHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.home), substring, timeoutMs);
  }

  async scrollHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.home));
  }

  async clickClothing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.clothing));
  }

  async doubleClickClothing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.clothing));
  }

  async expectClothingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.clothing), timeoutMs);
  }

  async expectClothingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.clothing), timeoutMs);
  }

  async expectClothingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.clothing), expected, timeoutMs);
  }

  async expectClothingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.clothing), substring, timeoutMs);
  }

  async scrollClothingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.clothing));
  }

  async clickTshirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tshirts));
  }

  async doubleClickTshirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tshirts));
  }

  async expectTshirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.tshirts), timeoutMs);
  }

  async expectTshirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.tshirts), timeoutMs);
  }

  async expectTshirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.tshirts), expected, timeoutMs);
  }

  async expectTshirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.tshirts), substring, timeoutMs);
  }

  async scrollTshirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.tshirts));
  }

  async clickJockeySuperCombedCotton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton));
  }

  async doubleClickJockeySuperCombedCotton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton));
  }

  async expectJockeySuperCombedCottonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton), timeoutMs);
  }

  async expectJockeySuperCombedCottonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton), timeoutMs);
  }

  async expectJockeySuperCombedCottonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton), expected, timeoutMs);
  }

  async expectJockeySuperCombedCottonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton), substring, timeoutMs);
  }

  async scrollJockeySuperCombedCottonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton));
  }

  async clickJockeySolidVNeckTShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt));
  }

  async doubleClickJockeySolidVNeckTShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt));
  }

  async expectJockeySolidVNeckTShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt), timeoutMs);
  }

  async expectJockeySolidVNeckTShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt), timeoutMs);
  }

  async expectJockeySolidVNeckTShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt), expected, timeoutMs);
  }

  async expectJockeySolidVNeckTShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt), substring, timeoutMs);
  }

  async scrollJockeySolidVNeckTShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt));
  }

  async clickNEWTHEBEETELHOUSE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE));
  }

  async doubleClickNEWTHEBEETELHOUSE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE));
  }

  async expectNEWTHEBEETELHOUSEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE), expected, timeoutMs);
  }

  async expectNEWTHEBEETELHOUSEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE), substring, timeoutMs);
  }

  async scrollNEWTHEBEETELHOUSEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE));
  }

  async clickRigoUnisexPrintedCotton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton));
  }

  async doubleClickRigoUnisexPrintedCotton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton));
  }

  async expectRigoUnisexPrintedCottonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton), timeoutMs);
  }

  async expectRigoUnisexPrintedCottonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton), timeoutMs);
  }

  async expectRigoUnisexPrintedCottonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton), expected, timeoutMs);
  }

  async expectRigoUnisexPrintedCottonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton), substring, timeoutMs);
  }

  async scrollRigoUnisexPrintedCottonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton));
  }

  async clickJockeyMenSolidCotton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton));
  }

  async doubleClickJockeyMenSolidCotton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton));
  }

  async expectJockeyMenSolidCottonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton), timeoutMs);
  }

  async expectJockeyMenSolidCottonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton), timeoutMs);
  }

  async expectJockeyMenSolidCottonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton), expected, timeoutMs);
  }

  async expectJockeyMenSolidCottonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton), substring, timeoutMs);
  }

  async scrollJockeyMenSolidCottonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton));
  }

  async clickNEWSeekbuyloveRoundNeck(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck));
  }

  async doubleClickNEWSeekbuyloveRoundNeck(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck));
  }

  async expectNEWSeekbuyloveRoundNeckVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck), timeoutMs);
  }

  async expectNEWSeekbuyloveRoundNeckHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck), timeoutMs);
  }

  async expectNEWSeekbuyloveRoundNeckText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck), expected, timeoutMs);
  }

  async expectNEWSeekbuyloveRoundNeckContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck), substring, timeoutMs);
  }

  async scrollNEWSeekbuyloveRoundNeckIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck));
  }

  async clickNEWHIORPureCotton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton));
  }

  async doubleClickNEWHIORPureCotton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton));
  }

  async expectNEWHIORPureCottonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton), timeoutMs);
  }

  async expectNEWHIORPureCottonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton), timeoutMs);
  }

  async expectNEWHIORPureCottonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton), expected, timeoutMs);
  }

  async expectNEWHIORPureCottonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton), substring, timeoutMs);
  }

  async scrollNEWHIORPureCottonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton));
  }

  async clickNauticaPureCottonTShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt));
  }

  async doubleClickNauticaPureCottonTShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt));
  }

  async expectNauticaPureCottonTShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt), timeoutMs);
  }

  async expectNauticaPureCottonTShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt), timeoutMs);
  }

  async expectNauticaPureCottonTShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt), expected, timeoutMs);
  }

  async expectNauticaPureCottonTShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt), substring, timeoutMs);
  }

  async scrollNauticaPureCottonTShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt));
  }

  async clickENRIZZMenTShirtRs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs));
  }

  async doubleClickENRIZZMenTShirtRs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs));
  }

  async expectENRIZZMenTShirtRsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs), timeoutMs);
  }

  async expectENRIZZMenTShirtRsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs), timeoutMs);
  }

  async expectENRIZZMenTShirtRsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs), expected, timeoutMs);
  }

  async expectENRIZZMenTShirtRsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs), substring, timeoutMs);
  }

  async scrollENRIZZMenTShirtRsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs));
  }

  async clickBAESDPackOf2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2));
  }

  async doubleClickBAESDPackOf2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2));
  }

  async expectBAESDPackOf2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2), timeoutMs);
  }

  async expectBAESDPackOf2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2), timeoutMs);
  }

  async expectBAESDPackOf2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2), expected, timeoutMs);
  }

  async expectBAESDPackOf2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2), substring, timeoutMs);
  }

  async scrollBAESDPackOf2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2));
  }

  async clickManiacMenStripedRound(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound));
  }

  async doubleClickManiacMenStripedRound(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound));
  }

  async expectManiacMenStripedRoundVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound), timeoutMs);
  }

  async expectManiacMenStripedRoundHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound), timeoutMs);
  }

  async expectManiacMenStripedRoundText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound), expected, timeoutMs);
  }

  async expectManiacMenStripedRoundContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound), substring, timeoutMs);
  }

  async scrollManiacMenStripedRoundIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound));
  }

  async clickNEWTHEBEETELHOUSE2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2));
  }

  async doubleClickNEWTHEBEETELHOUSE2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2));
  }

  async expectNEWTHEBEETELHOUSE2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSE2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSE2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2), expected, timeoutMs);
  }

  async expectNEWTHEBEETELHOUSE2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2), substring, timeoutMs);
  }

  async scrollNEWTHEBEETELHOUSE2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2));
  }

  async clickNEWTHEBEETLEHOUSE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE));
  }

  async doubleClickNEWTHEBEETLEHOUSE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE));
  }

  async expectNEWTHEBEETLEHOUSEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETLEHOUSEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETLEHOUSEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE), expected, timeoutMs);
  }

  async expectNEWTHEBEETLEHOUSEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE), substring, timeoutMs);
  }

  async scrollNEWTHEBEETLEHOUSEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE));
  }

  async clickNEXTPureCottonTShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt));
  }

  async doubleClickNEXTPureCottonTShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt));
  }

  async expectNEXTPureCottonTShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt), timeoutMs);
  }

  async expectNEXTPureCottonTShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt), timeoutMs);
  }

  async expectNEXTPureCottonTShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt), expected, timeoutMs);
  }

  async expectNEXTPureCottonTShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt), substring, timeoutMs);
  }

  async scrollNEXTPureCottonTShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt));
  }

  async clickNEWDostitchPrintedRegular(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular));
  }

  async doubleClickNEWDostitchPrintedRegular(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular));
  }

  async expectNEWDostitchPrintedRegularVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular), timeoutMs);
  }

  async expectNEWDostitchPrintedRegularHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular), timeoutMs);
  }

  async expectNEWDostitchPrintedRegularText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular), expected, timeoutMs);
  }

  async expectNEWDostitchPrintedRegularContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular), substring, timeoutMs);
  }

  async scrollNEWDostitchPrintedRegularIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular));
  }

  async clickSTARTONUnisexCottonOversized(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized));
  }

  async doubleClickSTARTONUnisexCottonOversized(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized));
  }

  async expectSTARTONUnisexCottonOversizedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized), timeoutMs);
  }

  async expectSTARTONUnisexCottonOversizedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized), timeoutMs);
  }

  async expectSTARTONUnisexCottonOversizedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized), expected, timeoutMs);
  }

  async expectSTARTONUnisexCottonOversizedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized), substring, timeoutMs);
  }

  async scrollSTARTONUnisexCottonOversizedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized));
  }

  async clickUSPoloAssnPrinted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted));
  }

  async doubleClickUSPoloAssnPrinted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted));
  }

  async expectUSPoloAssnPrintedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted), timeoutMs);
  }

  async expectUSPoloAssnPrintedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted), timeoutMs);
  }

  async expectUSPoloAssnPrintedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted), expected, timeoutMs);
  }

  async expectUSPoloAssnPrintedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted), substring, timeoutMs);
  }

  async scrollUSPoloAssnPrintedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted));
  }

  async clickNEWTheModernSoul(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul));
  }

  async doubleClickNEWTheModernSoul(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul));
  }

  async expectNEWTheModernSoulVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul), timeoutMs);
  }

  async expectNEWTheModernSoulHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul), timeoutMs);
  }

  async expectNEWTheModernSoulText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul), expected, timeoutMs);
  }

  async expectNEWTheModernSoulContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul), substring, timeoutMs);
  }

  async scrollNEWTheModernSoulIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul));
  }

  async clickMaverIQTshirtRs244Rs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs));
  }

  async doubleClickMaverIQTshirtRs244Rs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs));
  }

  async expectMaverIQTshirtRs244RsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs), timeoutMs);
  }

  async expectMaverIQTshirtRs244RsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs), timeoutMs);
  }

  async expectMaverIQTshirtRs244RsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs), expected, timeoutMs);
  }

  async expectMaverIQTshirtRs244RsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs), substring, timeoutMs);
  }

  async scrollMaverIQTshirtRs244RsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs));
  }

  async clickJockeyModernSolidLounge(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge));
  }

  async doubleClickJockeyModernSolidLounge(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge));
  }

  async expectJockeyModernSolidLoungeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge), timeoutMs);
  }

  async expectJockeyModernSolidLoungeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge), timeoutMs);
  }

  async expectJockeyModernSolidLoungeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge), expected, timeoutMs);
  }

  async expectJockeyModernSolidLoungeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge), substring, timeoutMs);
  }

  async scrollJockeyModernSolidLoungeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge));
  }

  async clickNEWENITORMenPolo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo));
  }

  async doubleClickNEWENITORMenPolo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo));
  }

  async expectNEWENITORMenPoloVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo), timeoutMs);
  }

  async expectNEWENITORMenPoloHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo), timeoutMs);
  }

  async expectNEWENITORMenPoloText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo), expected, timeoutMs);
  }

  async expectNEWENITORMenPoloContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo), substring, timeoutMs);
  }

  async scrollNEWENITORMenPoloIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo));
  }

  async clickGlitchezTypographyRegularTShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt));
  }

  async doubleClickGlitchezTypographyRegularTShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt));
  }

  async expectGlitchezTypographyRegularTShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt), timeoutMs);
  }

  async expectGlitchezTypographyRegularTShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt), timeoutMs);
  }

  async expectGlitchezTypographyRegularTShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt), expected, timeoutMs);
  }

  async expectGlitchezTypographyRegularTShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt), substring, timeoutMs);
  }

  async scrollGlitchezTypographyRegularTShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt));
  }

  async clickJockeyMenRoundNeck(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck));
  }

  async doubleClickJockeyMenRoundNeck(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck));
  }

  async expectJockeyMenRoundNeckVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck), timeoutMs);
  }

  async expectJockeyMenRoundNeckHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck), timeoutMs);
  }

  async expectJockeyMenRoundNeckText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck), expected, timeoutMs);
  }

  async expectJockeyMenRoundNeckContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck), substring, timeoutMs);
  }

  async scrollJockeyMenRoundNeckIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck));
  }

  async clickModaRapidoMenPolo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo));
  }

  async doubleClickModaRapidoMenPolo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo));
  }

  async expectModaRapidoMenPoloVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo), timeoutMs);
  }

  async expectModaRapidoMenPoloHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo), timeoutMs);
  }

  async expectModaRapidoMenPoloText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo), expected, timeoutMs);
  }

  async expectModaRapidoMenPoloContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo), substring, timeoutMs);
  }

  async scrollModaRapidoMenPoloIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo));
  }

  async clickMaverIQMenRegularFit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit));
  }

  async doubleClickMaverIQMenRegularFit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit));
  }

  async expectMaverIQMenRegularFitVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit), timeoutMs);
  }

  async expectMaverIQMenRegularFitHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit), timeoutMs);
  }

  async expectMaverIQMenRegularFitText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit), expected, timeoutMs);
  }

  async expectMaverIQMenRegularFitContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit), substring, timeoutMs);
  }

  async scrollMaverIQMenRegularFitIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit));
  }

  async clickManiacMenTypographyPrinted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted));
  }

  async doubleClickManiacMenTypographyPrinted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted));
  }

  async expectManiacMenTypographyPrintedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted), timeoutMs);
  }

  async expectManiacMenTypographyPrintedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted), timeoutMs);
  }

  async expectManiacMenTypographyPrintedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted), expected, timeoutMs);
  }

  async expectManiacMenTypographyPrintedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted), substring, timeoutMs);
  }

  async scrollManiacMenTypographyPrintedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted));
  }

  async clickRigoUnisexPrintedCotton2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2));
  }

  async doubleClickRigoUnisexPrintedCotton2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2));
  }

  async expectRigoUnisexPrintedCotton2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2), timeoutMs);
  }

  async expectRigoUnisexPrintedCotton2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2), timeoutMs);
  }

  async expectRigoUnisexPrintedCotton2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2), expected, timeoutMs);
  }

  async expectRigoUnisexPrintedCotton2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2), substring, timeoutMs);
  }

  async scrollRigoUnisexPrintedCotton2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2));
  }

  async clickGlitchezPoloCollarOversized(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized));
  }

  async doubleClickGlitchezPoloCollarOversized(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized));
  }

  async expectGlitchezPoloCollarOversizedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized), timeoutMs);
  }

  async expectGlitchezPoloCollarOversizedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized), timeoutMs);
  }

  async expectGlitchezPoloCollarOversizedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized), expected, timeoutMs);
  }

  async expectGlitchezPoloCollarOversizedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized), substring, timeoutMs);
  }

  async scrollGlitchezPoloCollarOversizedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized));
  }

  async clickUSPoloAssnPure(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure));
  }

  async doubleClickUSPoloAssnPure(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure));
  }

  async expectUSPoloAssnPureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure), timeoutMs);
  }

  async expectUSPoloAssnPureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure), timeoutMs);
  }

  async expectUSPoloAssnPureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure), expected, timeoutMs);
  }

  async expectUSPoloAssnPureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure), substring, timeoutMs);
  }

  async scrollUSPoloAssnPureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure));
  }

  async clickBAESDPackOf22(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22));
  }

  async doubleClickBAESDPackOf22(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22));
  }

  async expectBAESDPackOf22Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22), timeoutMs);
  }

  async expectBAESDPackOf22Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22), timeoutMs);
  }

  async expectBAESDPackOf22Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22), expected, timeoutMs);
  }

  async expectBAESDPackOf22ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22), substring, timeoutMs);
  }

  async scrollBAESDPackOf22IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22));
  }

  async clickNEWMaverIQTshirtRs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs));
  }

  async doubleClickNEWMaverIQTshirtRs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs));
  }

  async expectNEWMaverIQTshirtRsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs), timeoutMs);
  }

  async expectNEWMaverIQTshirtRsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs), timeoutMs);
  }

  async expectNEWMaverIQTshirtRsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs), expected, timeoutMs);
  }

  async expectNEWMaverIQTshirtRsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs), substring, timeoutMs);
  }

  async scrollNEWMaverIQTshirtRsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs));
  }

  async clickJockeyMenRoundNeck2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2));
  }

  async doubleClickJockeyMenRoundNeck2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2));
  }

  async expectJockeyMenRoundNeck2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2), timeoutMs);
  }

  async expectJockeyMenRoundNeck2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2), timeoutMs);
  }

  async expectJockeyMenRoundNeck2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2), expected, timeoutMs);
  }

  async expectJockeyMenRoundNeck2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2), substring, timeoutMs);
  }

  async scrollJockeyMenRoundNeck2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2));
  }

  async clickHRXByHrithikRoshan(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan));
  }

  async doubleClickHRXByHrithikRoshan(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan));
  }

  async expectHRXByHrithikRoshanVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan), timeoutMs);
  }

  async expectHRXByHrithikRoshanHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan), timeoutMs);
  }

  async expectHRXByHrithikRoshanText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan), expected, timeoutMs);
  }

  async expectHRXByHrithikRoshanContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan), substring, timeoutMs);
  }

  async scrollHRXByHrithikRoshanIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan));
  }

  async clickHMMenCottonPure(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure));
  }

  async doubleClickHMMenCottonPure(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure));
  }

  async expectHMMenCottonPureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure), timeoutMs);
  }

  async expectHMMenCottonPureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure), timeoutMs);
  }

  async expectHMMenCottonPureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure), expected, timeoutMs);
  }

  async expectHMMenCottonPureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure), substring, timeoutMs);
  }

  async scrollHMMenCottonPureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure));
  }

  async clickUSPoloAssnLounge(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge));
  }

  async doubleClickUSPoloAssnLounge(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge));
  }

  async expectUSPoloAssnLoungeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge), timeoutMs);
  }

  async expectUSPoloAssnLoungeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge), timeoutMs);
  }

  async expectUSPoloAssnLoungeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge), expected, timeoutMs);
  }

  async expectUSPoloAssnLoungeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge), substring, timeoutMs);
  }

  async scrollUSPoloAssnLoungeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge));
  }

  async clickNEWLeotudeMenTypography(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography));
  }

  async doubleClickNEWLeotudeMenTypography(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography));
  }

  async expectNEWLeotudeMenTypographyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography), timeoutMs);
  }

  async expectNEWLeotudeMenTypographyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography), timeoutMs);
  }

  async expectNEWLeotudeMenTypographyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography), expected, timeoutMs);
  }

  async expectNEWLeotudeMenTypographyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography), substring, timeoutMs);
  }

  async scrollNEWLeotudeMenTypographyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography));
  }

  async clickNEWMaverIQTshirtRs2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2));
  }

  async doubleClickNEWMaverIQTshirtRs2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2));
  }

  async expectNEWMaverIQTshirtRs2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2), timeoutMs);
  }

  async expectNEWMaverIQTshirtRs2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2), timeoutMs);
  }

  async expectNEWMaverIQTshirtRs2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2), expected, timeoutMs);
  }

  async expectNEWMaverIQTshirtRs2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2), substring, timeoutMs);
  }

  async scrollNEWMaverIQTshirtRs2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2));
  }

  async clickJockeyMenSolidSports(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports));
  }

  async doubleClickJockeyMenSolidSports(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports));
  }

  async expectJockeyMenSolidSportsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports), timeoutMs);
  }

  async expectJockeyMenSolidSportsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports), timeoutMs);
  }

  async expectJockeyMenSolidSportsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports), expected, timeoutMs);
  }

  async expectJockeyMenSolidSportsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports), substring, timeoutMs);
  }

  async scrollJockeyMenSolidSportsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports));
  }

  async clickPRONKMenPrintedRaw(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw));
  }

  async doubleClickPRONKMenPrintedRaw(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw));
  }

  async expectPRONKMenPrintedRawVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw), timeoutMs);
  }

  async expectPRONKMenPrintedRawHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw), timeoutMs);
  }

  async expectPRONKMenPrintedRawText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw), expected, timeoutMs);
  }

  async expectPRONKMenPrintedRawContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw), substring, timeoutMs);
  }

  async scrollPRONKMenPrintedRawIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw));
  }

  async clickNEWAUSTIVOMenStriped(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped));
  }

  async doubleClickNEWAUSTIVOMenStriped(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped));
  }

  async expectNEWAUSTIVOMenStripedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped), timeoutMs);
  }

  async expectNEWAUSTIVOMenStripedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped), timeoutMs);
  }

  async expectNEWAUSTIVOMenStripedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped), expected, timeoutMs);
  }

  async expectNEWAUSTIVOMenStripedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped), substring, timeoutMs);
  }

  async scrollNEWAUSTIVOMenStripedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped));
  }

  async clickDAMENSCHMenLoungeTShirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts));
  }

  async doubleClickDAMENSCHMenLoungeTShirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts));
  }

  async expectDAMENSCHMenLoungeTShirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts), timeoutMs);
  }

  async expectDAMENSCHMenLoungeTShirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts), timeoutMs);
  }

  async expectDAMENSCHMenLoungeTShirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts), expected, timeoutMs);
  }

  async expectDAMENSCHMenLoungeTShirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts), substring, timeoutMs);
  }

  async scrollDAMENSCHMenLoungeTShirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts));
  }

  async clickVeBNoRMenSelfDesign(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign));
  }

  async doubleClickVeBNoRMenSelfDesign(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign));
  }

  async expectVeBNoRMenSelfDesignVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign), timeoutMs);
  }

  async expectVeBNoRMenSelfDesignHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign), timeoutMs);
  }

  async expectVeBNoRMenSelfDesignText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign), expected, timeoutMs);
  }

  async expectVeBNoRMenSelfDesignContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign), substring, timeoutMs);
  }

  async scrollVeBNoRMenSelfDesignIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign));
  }

  async clickTHEBEETLEHOUSETshirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt));
  }

  async doubleClickTHEBEETLEHOUSETshirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt));
  }

  async expectTHEBEETLEHOUSETshirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt), expected, timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt), substring, timeoutMs);
  }

  async scrollTHEBEETLEHOUSETshirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt));
  }

  async clickManiacPrintedCottonTShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt));
  }

  async doubleClickManiacPrintedCottonTShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt));
  }

  async expectManiacPrintedCottonTShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt), timeoutMs);
  }

  async expectManiacPrintedCottonTShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt), timeoutMs);
  }

  async expectManiacPrintedCottonTShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt), expected, timeoutMs);
  }

  async expectManiacPrintedCottonTShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt), substring, timeoutMs);
  }

  async scrollManiacPrintedCottonTShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt));
  }

  async clickPlayRChennaiSuperKings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings));
  }

  async doubleClickPlayRChennaiSuperKings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings));
  }

  async expectPlayRChennaiSuperKingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings), timeoutMs);
  }

  async expectPlayRChennaiSuperKingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings), timeoutMs);
  }

  async expectPlayRChennaiSuperKingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings), expected, timeoutMs);
  }

  async expectPlayRChennaiSuperKingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings), substring, timeoutMs);
  }

  async scrollPlayRChennaiSuperKingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings));
  }

  async clickPlayRChennaiSuperKings2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2));
  }

  async doubleClickPlayRChennaiSuperKings2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2));
  }

  async expectPlayRChennaiSuperKings2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2), timeoutMs);
  }

  async expectPlayRChennaiSuperKings2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2), timeoutMs);
  }

  async expectPlayRChennaiSuperKings2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2), expected, timeoutMs);
  }

  async expectPlayRChennaiSuperKings2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2), substring, timeoutMs);
  }

  async scrollPlayRChennaiSuperKings2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2));
  }

  async clickUSPoloAssnMen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen));
  }

  async doubleClickUSPoloAssnMen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen));
  }

  async expectUSPoloAssnMenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen), timeoutMs);
  }

  async expectUSPoloAssnMenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen), timeoutMs);
  }

  async expectUSPoloAssnMenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen), expected, timeoutMs);
  }

  async expectUSPoloAssnMenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen), substring, timeoutMs);
  }

  async scrollUSPoloAssnMenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen));
  }

  async clickGlitchezPrintedRelaxedTShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt));
  }

  async doubleClickGlitchezPrintedRelaxedTShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt));
  }

  async expectGlitchezPrintedRelaxedTShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt), timeoutMs);
  }

  async expectGlitchezPrintedRelaxedTShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt), timeoutMs);
  }

  async expectGlitchezPrintedRelaxedTShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt), expected, timeoutMs);
  }

  async expectGlitchezPrintedRelaxedTShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt), substring, timeoutMs);
  }

  async scrollGlitchezPrintedRelaxedTShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt));
  }

  async clickTHEBEETLEHOUSETshirt2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2));
  }

  async doubleClickTHEBEETLEHOUSETshirt2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2));
  }

  async expectTHEBEETLEHOUSETshirt2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirt2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirt2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2), expected, timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirt2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2), substring, timeoutMs);
  }

  async scrollTHEBEETLEHOUSETshirt2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2));
  }

  async clickNEWPeterEnglandPolo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo));
  }

  async doubleClickNEWPeterEnglandPolo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo));
  }

  async expectNEWPeterEnglandPoloVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo), timeoutMs);
  }

  async expectNEWPeterEnglandPoloHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo), timeoutMs);
  }

  async expectNEWPeterEnglandPoloText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo), expected, timeoutMs);
  }

  async expectNEWPeterEnglandPoloContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo), substring, timeoutMs);
  }

  async scrollNEWPeterEnglandPoloIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo));
  }

  async clickTHEBEETELHOUSEMen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen));
  }

  async doubleClickTHEBEETELHOUSEMen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen));
  }

  async expectTHEBEETELHOUSEMenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen), timeoutMs);
  }

  async expectTHEBEETELHOUSEMenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen), timeoutMs);
  }

  async expectTHEBEETELHOUSEMenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen), expected, timeoutMs);
  }

  async expectTHEBEETELHOUSEMenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen), substring, timeoutMs);
  }

  async scrollTHEBEETELHOUSEMenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen));
  }

  async clickRigoUnisexGraphicPrinted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted));
  }

  async doubleClickRigoUnisexGraphicPrinted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted));
  }

  async expectRigoUnisexGraphicPrintedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted), timeoutMs);
  }

  async expectRigoUnisexGraphicPrintedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted), timeoutMs);
  }

  async expectRigoUnisexGraphicPrintedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted), expected, timeoutMs);
  }

  async expectRigoUnisexGraphicPrintedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted), substring, timeoutMs);
  }

  async scrollRigoUnisexGraphicPrintedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted));
  }

  async clickSeekbuyloveUnisexGraphicPrinted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted));
  }

  async doubleClickSeekbuyloveUnisexGraphicPrinted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted));
  }

  async expectSeekbuyloveUnisexGraphicPrintedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted), timeoutMs);
  }

  async expectSeekbuyloveUnisexGraphicPrintedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted), timeoutMs);
  }

  async expectSeekbuyloveUnisexGraphicPrintedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted), expected, timeoutMs);
  }

  async expectSeekbuyloveUnisexGraphicPrintedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted), substring, timeoutMs);
  }

  async scrollSeekbuyloveUnisexGraphicPrintedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted));
  }

  async clickENRIZZMenTShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt));
  }

  async doubleClickENRIZZMenTShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt));
  }

  async expectENRIZZMenTShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt), timeoutMs);
  }

  async expectENRIZZMenTShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt), timeoutMs);
  }

  async expectENRIZZMenTShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt), expected, timeoutMs);
  }

  async expectENRIZZMenTShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt), substring, timeoutMs);
  }

  async scrollENRIZZMenTShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt));
  }

  async clickTHEBEETELHOUSEMen2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2));
  }

  async doubleClickTHEBEETELHOUSEMen2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2));
  }

  async expectTHEBEETELHOUSEMen2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2), timeoutMs);
  }

  async expectTHEBEETELHOUSEMen2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2), timeoutMs);
  }

  async expectTHEBEETELHOUSEMen2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2), expected, timeoutMs);
  }

  async expectTHEBEETELHOUSEMen2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2), substring, timeoutMs);
  }

  async scrollTHEBEETELHOUSEMen2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2));
  }

  async clickTHEBEETLEHOUSEMen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen));
  }

  async doubleClickTHEBEETLEHOUSEMen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen));
  }

  async expectTHEBEETLEHOUSEMenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen), timeoutMs);
  }

  async expectTHEBEETLEHOUSEMenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen), timeoutMs);
  }

  async expectTHEBEETLEHOUSEMenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen), expected, timeoutMs);
  }

  async expectTHEBEETLEHOUSEMenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen), substring, timeoutMs);
  }

  async scrollTHEBEETLEHOUSEMenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen));
  }

  async clickDostitchGraphicRealMadrid(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid));
  }

  async doubleClickDostitchGraphicRealMadrid(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid));
  }

  async expectDostitchGraphicRealMadridVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid), timeoutMs);
  }

  async expectDostitchGraphicRealMadridHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid), timeoutMs);
  }

  async expectDostitchGraphicRealMadridText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid), expected, timeoutMs);
  }

  async expectDostitchGraphicRealMadridContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid), substring, timeoutMs);
  }

  async scrollDostitchGraphicRealMadridIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid));
  }

  async clickTShirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tShirts));
  }

  async doubleClickTShirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tShirts));
  }

  async expectTShirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.tShirts), expected, timeoutMs);
  }

  async expectTShirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.tShirts), substring, timeoutMs);
  }

  async scrollTShirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.tShirts));
  }

  async clickTrackPants(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.trackPants));
  }

  async doubleClickTrackPants(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.trackPants));
  }

  async expectTrackPantsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.trackPants), timeoutMs);
  }

  async expectTrackPantsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.trackPants), timeoutMs);
  }

  async expectTrackPantsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.trackPants), expected, timeoutMs);
  }

  async expectTrackPantsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.trackPants), substring, timeoutMs);
  }

  async scrollTrackPantsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.trackPants));
  }

  async clickLoungeShorts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.loungeShorts));
  }

  async doubleClickLoungeShorts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.loungeShorts));
  }

  async expectLoungeShortsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.loungeShorts), timeoutMs);
  }

  async expectLoungeShortsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.loungeShorts), timeoutMs);
  }

  async expectLoungeShortsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.loungeShorts), expected, timeoutMs);
  }

  async expectLoungeShortsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.loungeShorts), substring, timeoutMs);
  }

  async scrollLoungeShortsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.loungeShorts));
  }

  async clickInnerwear(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.innerwear));
  }

  async doubleClickInnerwear(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.innerwear));
  }

  async expectInnerwearVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.innerwear), timeoutMs);
  }

  async expectInnerwearHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.innerwear), timeoutMs);
  }

  async expectInnerwearText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.innerwear), expected, timeoutMs);
  }

  async expectInnerwearContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.innerwear), substring, timeoutMs);
  }

  async scrollInnerwearIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.innerwear));
  }

  async clickMen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.men));
  }

  async doubleClickMen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.men));
  }

  async expectMenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.men), timeoutMs);
  }

  async expectMenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.men), timeoutMs);
  }

  async expectMenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.men), expected, timeoutMs);
  }

  async expectMenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.men), substring, timeoutMs);
  }

  async scrollMenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.men));
  }

  async clickJoggers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.joggers));
  }

  async doubleClickJoggers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.joggers));
  }

  async expectJoggersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.joggers), timeoutMs);
  }

  async expectJoggersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.joggers), timeoutMs);
  }

  async expectJoggersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.joggers), expected, timeoutMs);
  }

  async expectJoggersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.joggers), substring, timeoutMs);
  }

  async scrollJoggersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.joggers));
  }

  async clickTracksuits(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tracksuits));
  }

  async doubleClickTracksuits(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tracksuits));
  }

  async expectTracksuitsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.tracksuits), timeoutMs);
  }

  async expectTracksuitsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.tracksuits), timeoutMs);
  }

  async expectTracksuitsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.tracksuits), expected, timeoutMs);
  }

  async expectTracksuitsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.tracksuits), substring, timeoutMs);
  }

  async scrollTracksuitsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.tracksuits));
  }

  async clickRoundNeckTShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt));
  }

  async doubleClickRoundNeckTShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt));
  }

  async expectRoundNeckTShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt), timeoutMs);
  }

  async expectRoundNeckTShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt), timeoutMs);
  }

  async expectRoundNeckTShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt), expected, timeoutMs);
  }

  async expectRoundNeckTShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt), substring, timeoutMs);
  }

  async scrollRoundNeckTShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt));
  }

  async clickJeans(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jeans));
  }

  async doubleClickJeans(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jeans));
  }

  async expectJeansVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.jeans), timeoutMs);
  }

  async expectJeansHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.jeans), timeoutMs);
  }

  async expectJeansText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.jeans), expected, timeoutMs);
  }

  async expectJeansContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.jeans), substring, timeoutMs);
  }

  async scrollJeansIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.jeans));
  }

  async clickRoadsterMenWhitePure(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure));
  }

  async doubleClickRoadsterMenWhitePure(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure));
  }

  async expectRoadsterMenWhitePureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure), timeoutMs);
  }

  async expectRoadsterMenWhitePureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure), timeoutMs);
  }

  async expectRoadsterMenWhitePureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure), expected, timeoutMs);
  }

  async expectRoadsterMenWhitePureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure), substring, timeoutMs);
  }

  async scrollRoadsterMenWhitePureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure));
  }

  async clickHRXByHrithikRoshan2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2));
  }

  async doubleClickHRXByHrithikRoshan2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2));
  }

  async expectHRXByHrithikRoshan2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2), timeoutMs);
  }

  async expectHRXByHrithikRoshan2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2), timeoutMs);
  }

  async expectHRXByHrithikRoshan2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2), expected, timeoutMs);
  }

  async expectHRXByHrithikRoshan2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2), substring, timeoutMs);
  }

  async scrollHRXByHrithikRoshan2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2));
  }

  async clickUrbanoFashionMenTeal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal));
  }

  async doubleClickUrbanoFashionMenTeal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal));
  }

  async expectUrbanoFashionMenTealVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal), timeoutMs);
  }

  async expectUrbanoFashionMenTealHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal), timeoutMs);
  }

  async expectUrbanoFashionMenTealText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal), expected, timeoutMs);
  }

  async expectUrbanoFashionMenTealContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal), substring, timeoutMs);
  }

  async scrollUrbanoFashionMenTealIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal));
  }

  async clickHuetrapMenBeige(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige));
  }

  async doubleClickHuetrapMenBeige(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige));
  }

  async expectHuetrapMenBeigeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige), timeoutMs);
  }

  async expectHuetrapMenBeigeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige), timeoutMs);
  }

  async expectHuetrapMenBeigeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige), expected, timeoutMs);
  }

  async expectHuetrapMenBeigeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige), substring, timeoutMs);
  }

  async scrollHuetrapMenBeigeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige));
  }

  async clickRoadsterMenBlackCotton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton));
  }

  async doubleClickRoadsterMenBlackCotton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton));
  }

  async expectRoadsterMenBlackCottonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton), timeoutMs);
  }

  async expectRoadsterMenBlackCottonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton), timeoutMs);
  }

  async expectRoadsterMenBlackCottonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton), expected, timeoutMs);
  }

  async expectRoadsterMenBlackCottonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton), substring, timeoutMs);
  }

  async scrollRoadsterMenBlackCottonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton));
  }

  async clickHRXByHrithikRoshan3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3));
  }

  async doubleClickHRXByHrithikRoshan3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3));
  }

  async expectHRXByHrithikRoshan3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3), timeoutMs);
  }

  async expectHRXByHrithikRoshan3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3), timeoutMs);
  }

  async expectHRXByHrithikRoshan3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3), expected, timeoutMs);
  }

  async expectHRXByHrithikRoshan3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3), substring, timeoutMs);
  }

  async scrollHRXByHrithikRoshan3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3));
  }

  async clickBewakoof(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.bewakoof));
  }

  async doubleClickBewakoof(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.bewakoof));
  }

  async expectBewakoofVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.bewakoof), timeoutMs);
  }

  async expectBewakoofHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.bewakoof), timeoutMs);
  }

  async expectBewakoofText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.bewakoof), expected, timeoutMs);
  }

  async expectBewakoofContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.bewakoof), substring, timeoutMs);
  }

  async scrollBewakoofIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.bewakoof));
  }

  async clickZivame(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.zivame));
  }

  async doubleClickZivame(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.zivame));
  }

  async expectZivameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.zivame), timeoutMs);
  }

  async expectZivameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.zivame), timeoutMs);
  }

  async expectZivameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.zivame), expected, timeoutMs);
  }

  async expectZivameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.zivame), substring, timeoutMs);
  }

  async scrollZivameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.zivame));
  }

  async clickLevis(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.levis));
  }

  async doubleClickLevis(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.levis));
  }

  async expectLevisVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.levis), timeoutMs);
  }

  async expectLevisHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.levis), timeoutMs);
  }

  async expectLevisText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.levis), expected, timeoutMs);
  }

  async expectLevisContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.levis), substring, timeoutMs);
  }

  async scrollLevisIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.levis));
  }

  async clickManyavar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.manyavar));
  }

  async doubleClickManyavar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.manyavar));
  }

  async expectManyavarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.manyavar), timeoutMs);
  }

  async expectManyavarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.manyavar), timeoutMs);
  }

  async expectManyavarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.manyavar), expected, timeoutMs);
  }

  async expectManyavarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.manyavar), substring, timeoutMs);
  }

  async scrollManyavarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.manyavar));
  }

  async clickSelected(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.selected));
  }

  async doubleClickSelected(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.selected));
  }

  async expectSelectedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.selected), timeoutMs);
  }

  async expectSelectedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.selected), timeoutMs);
  }

  async expectSelectedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.selected), expected, timeoutMs);
  }

  async expectSelectedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.selected), substring, timeoutMs);
  }

  async scrollSelectedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.selected));
  }

  async clickSkechers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.skechers));
  }

  async doubleClickSkechers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.skechers));
  }

  async expectSkechersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.skechers), timeoutMs);
  }

  async expectSkechersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.skechers), timeoutMs);
  }

  async expectSkechersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.skechers), expected, timeoutMs);
  }

  async expectSkechersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.skechers), substring, timeoutMs);
  }

  async scrollSkechersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.skechers));
  }

  async clickHopscotch(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.hopscotch));
  }

  async doubleClickHopscotch(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.hopscotch));
  }

  async expectHopscotchVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.hopscotch), timeoutMs);
  }

  async expectHopscotchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.hopscotch), timeoutMs);
  }

  async expectHopscotchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.hopscotch), expected, timeoutMs);
  }

  async expectHopscotchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.hopscotch), substring, timeoutMs);
  }

  async scrollHopscotchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.hopscotch));
  }

  async clickJockey(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockey));
  }

  async doubleClickJockey(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockey));
  }

  async expectJockeyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.jockey), timeoutMs);
  }

  async expectJockeyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.jockey), timeoutMs);
  }

  async expectJockeyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.jockey), expected, timeoutMs);
  }

  async expectJockeyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.jockey), substring, timeoutMs);
  }

  async scrollJockeyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockey));
  }

  async clickMarksSpencer(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.marksSpencer));
  }

  async doubleClickMarksSpencer(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.marksSpencer));
  }

  async expectMarksSpencerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.marksSpencer), timeoutMs);
  }

  async expectMarksSpencerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.marksSpencer), timeoutMs);
  }

  async expectMarksSpencerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.marksSpencer), expected, timeoutMs);
  }

  async expectMarksSpencerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.marksSpencer), substring, timeoutMs);
  }

  async scrollMarksSpencerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.marksSpencer));
  }

  async clickLouisPhilippe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.louisPhilippe));
  }

  async doubleClickLouisPhilippe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.louisPhilippe));
  }

  async expectLouisPhilippeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.louisPhilippe), timeoutMs);
  }

  async expectLouisPhilippeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.louisPhilippe), timeoutMs);
  }

  async expectLouisPhilippeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.louisPhilippe), expected, timeoutMs);
  }

  async expectLouisPhilippeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.louisPhilippe), substring, timeoutMs);
  }

  async scrollLouisPhilippeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.louisPhilippe));
  }

  async clickAndamen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.andamen));
  }

  async doubleClickAndamen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.andamen));
  }

  async expectAndamenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.andamen), timeoutMs);
  }

  async expectAndamenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.andamen), timeoutMs);
  }

  async expectAndamenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.andamen), expected, timeoutMs);
  }

  async expectAndamenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.andamen), substring, timeoutMs);
  }

  async scrollAndamenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.andamen));
  }

  async clickTommyHilfiger(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger));
  }

  async doubleClickTommyHilfiger(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger));
  }

  async expectTommyHilfigerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger), timeoutMs);
  }

  async expectTommyHilfigerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger), timeoutMs);
  }

  async expectTommyHilfigerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger), expected, timeoutMs);
  }

  async expectTommyHilfigerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger), substring, timeoutMs);
  }

  async scrollTommyHilfigerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger));
  }

  async clickTheSouledStore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.theSouledStore));
  }

  async doubleClickTheSouledStore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.theSouledStore));
  }

  async expectTheSouledStoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.theSouledStore), timeoutMs);
  }

  async expectTheSouledStoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.theSouledStore), timeoutMs);
  }

  async expectTheSouledStoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.theSouledStore), expected, timeoutMs);
  }

  async expectTheSouledStoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.theSouledStore), substring, timeoutMs);
  }

  async scrollTheSouledStoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.theSouledStore));
  }

  async clickWineRed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.wineRed));
  }

  async doubleClickWineRed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.wineRed));
  }

  async expectWineRedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.wineRed), timeoutMs);
  }

  async expectWineRedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.wineRed), timeoutMs);
  }

  async expectWineRedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.wineRed), expected, timeoutMs);
  }

  async expectWineRedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.wineRed), substring, timeoutMs);
  }

  async scrollWineRedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.wineRed));
  }

  async clickAsics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.asics));
  }

  async doubleClickAsics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.asics));
  }

  async expectAsicsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.asics), timeoutMs);
  }

  async expectAsicsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.asics), timeoutMs);
  }

  async expectAsicsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.asics), expected, timeoutMs);
  }

  async expectAsicsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.asics), substring, timeoutMs);
  }

  async scrollAsicsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.asics));
  }

  async clickMonteCarlo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.monteCarlo));
  }

  async doubleClickMonteCarlo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.monteCarlo));
  }

  async expectMonteCarloVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.monteCarlo), timeoutMs);
  }

  async expectMonteCarloHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.monteCarlo), timeoutMs);
  }

  async expectMonteCarloText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.monteCarlo), expected, timeoutMs);
  }

  async expectMonteCarloContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.monteCarlo), substring, timeoutMs);
  }

  async scrollMonteCarloIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.monteCarlo));
  }

  async clickUnderArmour(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.underArmour));
  }

  async doubleClickUnderArmour(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.underArmour));
  }

  async expectUnderArmourVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.underArmour), timeoutMs);
  }

  async expectUnderArmourHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.underArmour), timeoutMs);
  }

  async expectUnderArmourText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.underArmour), expected, timeoutMs);
  }

  async expectUnderArmourContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.underArmour), substring, timeoutMs);
  }

  async scrollUnderArmourIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.underArmour));
  }

  async clickBasics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.basics));
  }

  async doubleClickBasics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.basics));
  }

  async expectBasicsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.basics), timeoutMs);
  }

  async expectBasicsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.basics), timeoutMs);
  }

  async expectBasicsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.basics), expected, timeoutMs);
  }

  async expectBasicsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.basics), substring, timeoutMs);
  }

  async scrollBasicsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.basics));
  }

  async clickChumbak(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.chumbak));
  }

  async doubleClickChumbak(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.chumbak));
  }

  async expectChumbakVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.chumbak), timeoutMs);
  }

  async expectChumbakHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.chumbak), timeoutMs);
  }

  async expectChumbakText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.chumbak), expected, timeoutMs);
  }

  async expectChumbakContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.chumbak), substring, timeoutMs);
  }

  async scrollChumbakIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.chumbak));
  }

  async clickFrenchCrown(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.frenchCrown));
  }

  async doubleClickFrenchCrown(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.frenchCrown));
  }

  async expectFrenchCrownVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.frenchCrown), timeoutMs);
  }

  async expectFrenchCrownHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.frenchCrown), timeoutMs);
  }

  async expectFrenchCrownText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.frenchCrown), expected, timeoutMs);
  }

  async expectFrenchCrownContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.frenchCrown), substring, timeoutMs);
  }

  async scrollFrenchCrownIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.frenchCrown));
  }

  async clickLacoste(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.lacoste));
  }

  async doubleClickLacoste(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.lacoste));
  }

  async expectLacosteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.lacoste), timeoutMs);
  }

  async expectLacosteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.lacoste), timeoutMs);
  }

  async expectLacosteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.lacoste), expected, timeoutMs);
  }

  async expectLacosteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.lacoste), substring, timeoutMs);
  }

  async scrollLacosteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.lacoste));
  }

  async clickLeeCooper(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.leeCooper));
  }

  async doubleClickLeeCooper(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.leeCooper));
  }

  async expectLeeCooperVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.leeCooper), timeoutMs);
  }

  async expectLeeCooperHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.leeCooper), timeoutMs);
  }

  async expectLeeCooperText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.leeCooper), expected, timeoutMs);
  }

  async expectLeeCooperContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.leeCooper), substring, timeoutMs);
  }

  async scrollLeeCooperIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.leeCooper));
  }

  async clickRituKumar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.rituKumar));
  }

  async doubleClickRituKumar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.rituKumar));
  }

  async expectRituKumarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.rituKumar), timeoutMs);
  }

  async expectRituKumarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.rituKumar), timeoutMs);
  }

  async expectRituKumarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.rituKumar), expected, timeoutMs);
  }

  async expectRituKumarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.rituKumar), substring, timeoutMs);
  }

  async scrollRituKumarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.rituKumar));
  }

  async clickBlackTShirtForMen2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2));
  }

  async doubleClickBlackTShirtForMen2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2));
  }

  async expectBlackTShirtForMen2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2), timeoutMs);
  }

  async expectBlackTShirtForMen2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2), timeoutMs);
  }

  async expectBlackTShirtForMen2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2), expected, timeoutMs);
  }

  async expectBlackTShirtForMen2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2), substring, timeoutMs);
  }

  async scrollBlackTShirtForMen2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2));
  }

  async clickWhiteTShirtForMen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen));
  }

  async doubleClickWhiteTShirtForMen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen));
  }

  async expectWhiteTShirtForMenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen), timeoutMs);
  }

  async expectWhiteTShirtForMenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen), timeoutMs);
  }

  async expectWhiteTShirtForMenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen), expected, timeoutMs);
  }

  async expectWhiteTShirtForMenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen), substring, timeoutMs);
  }

  async scrollWhiteTShirtForMenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen));
  }

  async clickWhiteTShirtForGirls(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls));
  }

  async doubleClickWhiteTShirtForGirls(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls));
  }

  async expectWhiteTShirtForGirlsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls), timeoutMs);
  }

  async expectWhiteTShirtForGirlsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls), timeoutMs);
  }

  async expectWhiteTShirtForGirlsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls), expected, timeoutMs);
  }

  async expectWhiteTShirtForGirlsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls), substring, timeoutMs);
  }

  async scrollWhiteTShirtForGirlsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls));
  }

  async clickWhiteTShirtForBoys(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys));
  }

  async doubleClickWhiteTShirtForBoys(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys));
  }

  async expectWhiteTShirtForBoysVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys), timeoutMs);
  }

  async expectWhiteTShirtForBoysHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys), timeoutMs);
  }

  async expectWhiteTShirtForBoysText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys), expected, timeoutMs);
  }

  async expectWhiteTShirtForBoysContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys), substring, timeoutMs);
  }

  async scrollWhiteTShirtForBoysIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys));
  }

  async clickBrownTShirtForMen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen));
  }

  async doubleClickBrownTShirtForMen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen));
  }

  async expectBrownTShirtForMenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen), timeoutMs);
  }

  async expectBrownTShirtForMenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen), timeoutMs);
  }

  async expectBrownTShirtForMenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen), expected, timeoutMs);
  }

  async expectBrownTShirtForMenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen), substring, timeoutMs);
  }

  async scrollBrownTShirtForMenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen));
  }

  async clickONLINESHOPPING(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING));
  }

  async doubleClickONLINESHOPPING(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING));
  }

  async expectONLINESHOPPINGVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING), expected, timeoutMs);
  }

  async expectONLINESHOPPINGContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING), substring, timeoutMs);
  }

  async scrollONLINESHOPPINGIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING));
  }

  async clickMen2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.men2));
  }

  async doubleClickMen2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.men2));
  }

  async expectMen2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.men2), timeoutMs);
  }

  async expectMen2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.men2), timeoutMs);
  }

  async expectMen2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.men2), expected, timeoutMs);
  }

  async expectMen2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.men2), substring, timeoutMs);
  }

  async scrollMen2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.men2));
  }

  async clickWomen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.women));
  }

  async doubleClickWomen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.women));
  }

  async expectWomenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.women), timeoutMs);
  }

  async expectWomenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.women), timeoutMs);
  }

  async expectWomenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.women), expected, timeoutMs);
  }

  async expectWomenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.women), substring, timeoutMs);
  }

  async scrollWomenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.women));
  }

  async clickKids(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.kids));
  }

  async doubleClickKids(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.kids));
  }

  async expectKidsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.kids), timeoutMs);
  }

  async expectKidsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.kids), timeoutMs);
  }

  async expectKidsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.kids), expected, timeoutMs);
  }

  async expectKidsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.kids), substring, timeoutMs);
  }

  async scrollKidsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.kids));
  }

  async clickHome2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.home2));
  }

  async doubleClickHome2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.home2));
  }

  async expectHome2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.home2), timeoutMs);
  }

  async expectHome2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.home2), timeoutMs);
  }

  async expectHome2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.home2), expected, timeoutMs);
  }

  async expectHome2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.home2), substring, timeoutMs);
  }

  async scrollHome2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.home2));
  }

  async clickBeauty(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.beauty));
  }

  async doubleClickBeauty(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.beauty));
  }

  async expectBeautyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.beauty), timeoutMs);
  }

  async expectBeautyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.beauty), timeoutMs);
  }

  async expectBeautyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.beauty), expected, timeoutMs);
  }

  async expectBeautyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.beauty), substring, timeoutMs);
  }

  async scrollBeautyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.beauty));
  }

  async clickGenz(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.genz));
  }

  async doubleClickGenz(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.genz));
  }

  async expectGenzVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.genz), timeoutMs);
  }

  async expectGenzHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.genz), timeoutMs);
  }

  async expectGenzText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.genz), expected, timeoutMs);
  }

  async expectGenzContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.genz), substring, timeoutMs);
  }

  async scrollGenzIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.genz));
  }

  async clickGiftCards(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.giftCards));
  }

  async doubleClickGiftCards(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.giftCards));
  }

  async expectGiftCardsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.giftCards), expected, timeoutMs);
  }

  async expectGiftCardsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.giftCards), substring, timeoutMs);
  }

  async scrollGiftCardsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.giftCards));
  }

  async clickMyntraInsider(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.myntraInsider));
  }

  async doubleClickMyntraInsider(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.myntraInsider));
  }

  async expectMyntraInsiderVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.myntraInsider), expected, timeoutMs);
  }

  async expectMyntraInsiderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.myntraInsider), substring, timeoutMs);
  }

  async scrollMyntraInsiderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.myntraInsider));
  }

  async clickBlog(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.blog));
  }

  async doubleClickBlog(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.blog));
  }

  async expectBlogVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.blog), timeoutMs);
  }

  async expectBlogHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.blog), timeoutMs);
  }

  async expectBlogText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.blog), expected, timeoutMs);
  }

  async expectBlogContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.blog), substring, timeoutMs);
  }

  async scrollBlogIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.blog));
  }

  async clickCareers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.careers));
  }

  async doubleClickCareers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.careers));
  }

  async expectCareersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.careers), timeoutMs);
  }

  async expectCareersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.careers), timeoutMs);
  }

  async expectCareersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.careers), expected, timeoutMs);
  }

  async expectCareersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.careers), substring, timeoutMs);
  }

  async scrollCareersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.careers));
  }

  async clickSiteMap(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.siteMap));
  }

  async doubleClickSiteMap(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.siteMap));
  }

  async expectSiteMapVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.siteMap), expected, timeoutMs);
  }

  async expectSiteMapContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.siteMap), substring, timeoutMs);
  }

  async scrollSiteMapIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.siteMap));
  }

  async clickCorporateInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.corporateInformation));
  }

  async doubleClickCorporateInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.corporateInformation));
  }

  async expectCorporateInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.corporateInformation), expected, timeoutMs);
  }

  async expectCorporateInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.corporateInformation), substring, timeoutMs);
  }

  async scrollCorporateInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.corporateInformation));
  }

  async clickWhitehat(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.whitehat));
  }

  async doubleClickWhitehat(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.whitehat));
  }

  async expectWhitehatVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.whitehat), expected, timeoutMs);
  }

  async expectWhitehatContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.whitehat), substring, timeoutMs);
  }

  async scrollWhitehatIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.whitehat));
  }

  async clickCleartrip(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.cleartrip));
  }

  async doubleClickCleartrip(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.cleartrip));
  }

  async expectCleartripVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.cleartrip), expected, timeoutMs);
  }

  async expectCleartripContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.cleartrip), substring, timeoutMs);
  }

  async scrollCleartripIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.cleartrip));
  }

  async clickMyntraGlobal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.myntraGlobal));
  }

  async doubleClickMyntraGlobal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.myntraGlobal));
  }

  async expectMyntraGlobalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.myntraGlobal), expected, timeoutMs);
  }

  async expectMyntraGlobalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.myntraGlobal), substring, timeoutMs);
  }

  async scrollMyntraGlobalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.myntraGlobal));
  }

  async clickContactUs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.contactUs));
  }

  async doubleClickContactUs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.contactUs));
  }

  async expectContactUsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.contactUs), timeoutMs);
  }

  async expectContactUsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.contactUs), timeoutMs);
  }

  async expectContactUsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.contactUs), expected, timeoutMs);
  }

  async expectContactUsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.contactUs), substring, timeoutMs);
  }

  async scrollContactUsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.contactUs));
  }

  async clickFAQ(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.fAQ));
  }

  async doubleClickFAQ(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.fAQ));
  }

  async expectFAQVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.fAQ), timeoutMs);
  }

  async expectFAQHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.fAQ), timeoutMs);
  }

  async expectFAQText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.fAQ), expected, timeoutMs);
  }

  async expectFAQContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.fAQ), substring, timeoutMs);
  }

  async scrollFAQIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.fAQ));
  }

  async clickTC(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tC));
  }

  async doubleClickTC(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tC));
  }

  async expectTCVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.tC), timeoutMs);
  }

  async expectTCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.tC), timeoutMs);
  }

  async expectTCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.tC), expected, timeoutMs);
  }

  async expectTCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.tC), substring, timeoutMs);
  }

  async scrollTCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.tC));
  }

  async clickTermsOfUse(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.termsOfUse));
  }

  async doubleClickTermsOfUse(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.termsOfUse));
  }

  async expectTermsOfUseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.termsOfUse), expected, timeoutMs);
  }

  async expectTermsOfUseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.termsOfUse), substring, timeoutMs);
  }

  async scrollTermsOfUseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.termsOfUse));
  }

  async clickTrackOrders(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.trackOrders));
  }

  async doubleClickTrackOrders(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.trackOrders));
  }

  async expectTrackOrdersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.trackOrders), expected, timeoutMs);
  }

  async expectTrackOrdersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.trackOrders), substring, timeoutMs);
  }

  async scrollTrackOrdersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.trackOrders));
  }

  async clickShipping(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.shipping));
  }

  async doubleClickShipping(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.shipping));
  }

  async expectShippingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.shipping), timeoutMs);
  }

  async expectShippingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.shipping), timeoutMs);
  }

  async expectShippingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.shipping), expected, timeoutMs);
  }

  async expectShippingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.shipping), substring, timeoutMs);
  }

  async scrollShippingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.shipping));
  }

  async clickCancellation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.cancellation));
  }

  async doubleClickCancellation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.cancellation));
  }

  async expectCancellationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.cancellation), timeoutMs);
  }

  async expectCancellationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.cancellation), timeoutMs);
  }

  async expectCancellationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.cancellation), expected, timeoutMs);
  }

  async expectCancellationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.cancellation), substring, timeoutMs);
  }

  async scrollCancellationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.cancellation));
  }

  async clickPrivacyPolicy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.privacyPolicy));
  }

  async doubleClickPrivacyPolicy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.privacyPolicy));
  }

  async expectPrivacyPolicyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.privacyPolicy), expected, timeoutMs);
  }

  async expectPrivacyPolicyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.privacyPolicy), substring, timeoutMs);
  }

  async scrollPrivacyPolicyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.privacyPolicy));
  }

  async clickGrievanceRedressal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal));
  }

  async doubleClickGrievanceRedressal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal));
  }

  async expectGrievanceRedressalVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal), expected, timeoutMs);
  }

  async expectGrievanceRedressalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal), substring, timeoutMs);
  }

  async scrollGrievanceRedressalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal));
  }

  async clickFSSAIFoodSafetyConnect(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect));
  }

  async doubleClickFSSAIFoodSafetyConnect(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect));
  }

  async expectFSSAIFoodSafetyConnectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect), expected, timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect), substring, timeoutMs);
  }

  async scrollFSSAIFoodSafetyConnectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect));
  }

  async clickDishantPatel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.dishantPatel));
  }

  async doubleClickDishantPatel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.dishantPatel));
  }

  async expectDishantPatelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.dishantPatel), timeoutMs);
  }

  async expectDishantPatelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.dishantPatel), timeoutMs);
  }

  async expectDishantPatelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.dishantPatel), expected, timeoutMs);
  }

  async expectDishantPatelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.dishantPatel), substring, timeoutMs);
  }

  async scrollDishantPatelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.dishantPatel));
  }

  async clickMenSportsShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.menSportsShoes));
  }

  async doubleClickMenSportsShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.menSportsShoes));
  }

  async expectMenSportsShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.menSportsShoes), timeoutMs);
  }

  async expectMenSportsShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.menSportsShoes), timeoutMs);
  }

  async expectMenSportsShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.menSportsShoes), expected, timeoutMs);
  }

  async expectMenSportsShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.menSportsShoes), substring, timeoutMs);
  }

  async scrollMenSportsShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.menSportsShoes));
  }

  async clickAdidas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.adidas));
  }

  async doubleClickAdidas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.adidas));
  }

  async expectAdidasVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.adidas), timeoutMs);
  }

  async expectAdidasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.adidas), timeoutMs);
  }

  async expectAdidasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.adidas), expected, timeoutMs);
  }

  async expectAdidasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.adidas), substring, timeoutMs);
  }

  async scrollAdidasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.adidas));
  }

  async clickArrow(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.arrow));
  }

  async doubleClickArrow(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.arrow));
  }

  async expectArrowVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.arrow), timeoutMs);
  }

  async expectArrowHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.arrow), timeoutMs);
  }

  async expectArrowText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.arrow), expected, timeoutMs);
  }

  async expectArrowContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.arrow), substring, timeoutMs);
  }

  async scrollArrowIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.arrow));
  }

  async clickFila(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.fila));
  }

  async doubleClickFila(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.fila));
  }

  async expectFilaVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.fila), timeoutMs);
  }

  async expectFilaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.fila), timeoutMs);
  }

  async expectFilaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.fila), expected, timeoutMs);
  }

  async expectFilaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.fila), substring, timeoutMs);
  }

  async scrollFilaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.fila));
  }

  async clickOnlineShopping(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.onlineShopping));
  }

  async doubleClickOnlineShopping(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.onlineShopping));
  }

  async expectOnlineShoppingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.onlineShopping), expected, timeoutMs);
  }

  async expectOnlineShoppingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.onlineShopping), substring, timeoutMs);
  }

  async scrollOnlineShoppingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.onlineShopping));
  }

  async clickNike(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nike));
  }

  async doubleClickNike(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nike));
  }

  async expectNikeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nike), timeoutMs);
  }

  async expectNikeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nike), timeoutMs);
  }

  async expectNikeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nike), expected, timeoutMs);
  }

  async expectNikeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nike), substring, timeoutMs);
  }

  async scrollNikeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nike));
  }

  async clickPepeJeans(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.pepeJeans));
  }

  async doubleClickPepeJeans(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.pepeJeans));
  }

  async expectPepeJeansVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.pepeJeans), expected, timeoutMs);
  }

  async expectPepeJeansContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.pepeJeans), substring, timeoutMs);
  }

  async scrollPepeJeansIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.pepeJeans));
  }

  async clickPuma(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.puma));
  }

  async doubleClickPuma(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.puma));
  }

  async expectPumaVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.puma), timeoutMs);
  }

  async expectPumaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.puma), timeoutMs);
  }

  async expectPumaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.puma), expected, timeoutMs);
  }

  async expectPumaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.puma), substring, timeoutMs);
  }

  async scrollPumaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.puma));
  }

  async clickUnitedColorsOfBenetton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton));
  }

  async doubleClickUnitedColorsOfBenetton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton));
  }

  async expectUnitedColorsOfBenettonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton), expected, timeoutMs);
  }

  async expectUnitedColorsOfBenettonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton), substring, timeoutMs);
  }

  async scrollUnitedColorsOfBenettonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton));
  }

  async clickFastrack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.fastrack));
  }

  async doubleClickFastrack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.fastrack));
  }

  async expectFastrackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.fastrack), timeoutMs);
  }

  async expectFastrackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.fastrack), timeoutMs);
  }

  async expectFastrackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.fastrack), expected, timeoutMs);
  }

  async expectFastrackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.fastrack), substring, timeoutMs);
  }

  async scrollFastrackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.fastrack));
  }

  async clickShorts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.shorts));
  }

  async doubleClickShorts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.shorts));
  }

  async expectShortsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.shorts), timeoutMs);
  }

  async expectShortsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.shorts), timeoutMs);
  }

  async expectShortsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.shorts), expected, timeoutMs);
  }

  async expectShortsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.shorts), substring, timeoutMs);
  }

  async scrollShortsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.shorts));
  }

  async clickBeingHuman(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.beingHuman));
  }

  async doubleClickBeingHuman(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.beingHuman));
  }

  async expectBeingHumanVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.beingHuman), expected, timeoutMs);
  }

  async expectBeingHumanContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.beingHuman), substring, timeoutMs);
  }

  async scrollBeingHumanIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.beingHuman));
  }

  async clickSkirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.skirts));
  }

  async doubleClickSkirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.skirts));
  }

  async expectSkirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.skirts), timeoutMs);
  }

  async expectSkirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.skirts), timeoutMs);
  }

  async expectSkirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.skirts), expected, timeoutMs);
  }

  async expectSkirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.skirts), substring, timeoutMs);
  }

  async scrollSkirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.skirts));
  }

  async clickWoodland(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.woodland));
  }

  async doubleClickWoodland(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.woodland));
  }

  async expectWoodlandVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.woodland), timeoutMs);
  }

  async expectWoodlandHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.woodland), timeoutMs);
  }

  async expectWoodlandText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.woodland), expected, timeoutMs);
  }

  async expectWoodlandContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.woodland), substring, timeoutMs);
  }

  async scrollWoodlandIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.woodland));
  }

  async clickSupra(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.supra));
  }

  async doubleClickSupra(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.supra));
  }

  async expectSupraVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.supra), timeoutMs);
  }

  async expectSupraHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.supra), timeoutMs);
  }

  async expectSupraText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.supra), expected, timeoutMs);
  }

  async expectSupraContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.supra), substring, timeoutMs);
  }

  async scrollSupraIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.supra));
  }

  async clickDresses(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.dresses));
  }

  async doubleClickDresses(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.dresses));
  }

  async expectDressesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.dresses), timeoutMs);
  }

  async expectDressesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.dresses), timeoutMs);
  }

  async expectDressesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.dresses), expected, timeoutMs);
  }

  async expectDressesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.dresses), substring, timeoutMs);
  }

  async scrollDressesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.dresses));
  }

  async clickMenShopping(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.menShopping));
  }

  async doubleClickMenShopping(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.menShopping));
  }

  async expectMenShoppingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.menShopping), timeoutMs);
  }

  async expectMenShoppingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.menShopping), timeoutMs);
  }

  async expectMenShoppingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.menShopping), expected, timeoutMs);
  }

  async expectMenShoppingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.menShopping), substring, timeoutMs);
  }

  async scrollMenShoppingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.menShopping));
  }

  async clickWomenShopping(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.womenShopping));
  }

  async doubleClickWomenShopping(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.womenShopping));
  }

  async expectWomenShoppingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.womenShopping), timeoutMs);
  }

  async expectWomenShoppingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.womenShopping), timeoutMs);
  }

  async expectWomenShoppingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.womenShopping), expected, timeoutMs);
  }

  async expectWomenShoppingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.womenShopping), substring, timeoutMs);
  }

  async scrollWomenShoppingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.womenShopping));
  }

  async clickBlazers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.blazers));
  }

  async doubleClickBlazers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.blazers));
  }

  async expectBlazersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.blazers), timeoutMs);
  }

  async expectBlazersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.blazers), timeoutMs);
  }

  async expectBlazersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.blazers), expected, timeoutMs);
  }

  async expectBlazersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.blazers), substring, timeoutMs);
  }

  async scrollBlazersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.blazers));
  }

  async clickSherwani(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.sherwani));
  }

  async doubleClickSherwani(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.sherwani));
  }

  async expectSherwaniVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.sherwani), timeoutMs);
  }

  async expectSherwaniHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.sherwani), timeoutMs);
  }

  async expectSherwaniText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.sherwani), expected, timeoutMs);
  }

  async expectSherwaniContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.sherwani), substring, timeoutMs);
  }

  async scrollSherwaniIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.sherwani));
  }

  async clickOnlineShopping2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.onlineShopping2));
  }

  async doubleClickOnlineShopping2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.onlineShopping2));
  }

  async expectOnlineShopping2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.onlineShopping2), timeoutMs);
  }

  async expectOnlineShopping2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.onlineShopping2), timeoutMs);
  }

  async expectOnlineShopping2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.onlineShopping2), expected, timeoutMs);
  }

  async expectOnlineShopping2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.onlineShopping2), substring, timeoutMs);
  }

  async scrollOnlineShopping2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.onlineShopping2));
  }

  async clickMenOliveGreen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.menOliveGreen));
  }

  async doubleClickMenOliveGreen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.menOliveGreen));
  }

  async expectMenOliveGreenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.menOliveGreen), timeoutMs);
  }

  async expectMenOliveGreenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.menOliveGreen), timeoutMs);
  }

  async expectMenOliveGreenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.menOliveGreen), expected, timeoutMs);
  }

  async expectMenOliveGreenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.menOliveGreen), substring, timeoutMs);
  }

  async scrollMenOliveGreenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.menOliveGreen));
  }

  async clickRahulRaina(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.rahulRaina));
  }

  async doubleClickRahulRaina(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.rahulRaina));
  }

  async expectRahulRainaVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.rahulRaina), timeoutMs);
  }

  async expectRahulRainaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.rahulRaina), timeoutMs);
  }

  async expectRahulRainaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.rahulRaina), expected, timeoutMs);
  }

  async expectRahulRainaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.rahulRaina), substring, timeoutMs);
  }

  async scrollRahulRainaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.rahulRaina));
  }

  async clickSaurabhSharma(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.saurabhSharma));
  }

  async doubleClickSaurabhSharma(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.saurabhSharma));
  }

  async expectSaurabhSharmaVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.saurabhSharma), timeoutMs);
  }

  async expectSaurabhSharmaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.saurabhSharma), timeoutMs);
  }

  async expectSaurabhSharmaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.saurabhSharma), expected, timeoutMs);
  }

  async expectSaurabhSharmaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.saurabhSharma), substring, timeoutMs);
  }

  async scrollSaurabhSharmaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.saurabhSharma));
  }

  async clickClothing2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.clothing2));
  }

  async doubleClickClothing2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.clothing2));
  }

  async expectClothing2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.clothing2), expected, timeoutMs);
  }

  async expectClothing2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.clothing2), substring, timeoutMs);
  }

  async scrollClothing2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.clothing2));
  }

  async clickJewellery(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jewellery));
  }

  async doubleClickJewellery(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jewellery));
  }

  async expectJewelleryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.jewellery), expected, timeoutMs);
  }

  async expectJewelleryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.jewellery), substring, timeoutMs);
  }

  async scrollJewelleryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.jewellery));
  }

  async clickTShirts2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tShirts2));
  }

  async doubleClickTShirts2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.tShirts2));
  }

  async expectTShirts2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.tShirts2), timeoutMs);
  }

  async expectTShirts2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.tShirts2), timeoutMs);
  }

  async expectTShirts2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.tShirts2), expected, timeoutMs);
  }

  async expectTShirts2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.tShirts2), substring, timeoutMs);
  }

  async scrollTShirts2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.tShirts2));
  }

  async clickShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.shoes));
  }

  async doubleClickShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.shoes));
  }

  async expectShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.shoes), timeoutMs);
  }

  async expectShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.shoes), timeoutMs);
  }

  async expectShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.shoes), expected, timeoutMs);
  }

  async expectShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.shoes), substring, timeoutMs);
  }

  async scrollShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.shoes));
  }

  async clickBags(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.bags));
  }

  async doubleClickBags(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.bags));
  }

  async expectBagsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.bags), timeoutMs);
  }

  async expectBagsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.bags), timeoutMs);
  }

  async expectBagsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.bags), expected, timeoutMs);
  }

  async expectBagsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.bags), substring, timeoutMs);
  }

  async scrollBagsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.bags));
  }

  async clickWatches(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.watches));
  }

  async doubleClickWatches(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.watches));
  }

  async expectWatchesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.watches), timeoutMs);
  }

  async expectWatchesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.watches), timeoutMs);
  }

  async expectWatchesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.watches), expected, timeoutMs);
  }

  async expectWatchesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.watches), substring, timeoutMs);
  }

  async scrollWatchesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.watches));
  }

  async clickCaps(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.caps));
  }

  async doubleClickCaps(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.caps));
  }

  async expectCapsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.caps), timeoutMs);
  }

  async expectCapsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.caps), timeoutMs);
  }

  async expectCapsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.caps), expected, timeoutMs);
  }

  async expectCapsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.caps), substring, timeoutMs);
  }

  async scrollCapsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.caps));
  }

  async clickShirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.shirts));
  }

  async doubleClickShirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.shirts));
  }

  async expectShirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.shirts), timeoutMs);
  }

  async expectShirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.shirts), timeoutMs);
  }

  async expectShirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.shirts), expected, timeoutMs);
  }

  async expectShirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.shirts), substring, timeoutMs);
  }

  async scrollShirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.shirts));
  }

  async clickBackpacks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.backpacks));
  }

  async doubleClickBackpacks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.backpacks));
  }

  async expectBackpacksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.backpacks), expected, timeoutMs);
  }

  async expectBackpacksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.backpacks), substring, timeoutMs);
  }

  async scrollBackpacksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.backpacks));
  }

  async clickPumaTshirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.pumaTshirts));
  }

  async doubleClickPumaTshirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.pumaTshirts));
  }

  async expectPumaTshirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.pumaTshirts), expected, timeoutMs);
  }

  async expectPumaTshirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.pumaTshirts), substring, timeoutMs);
  }

  async scrollPumaTshirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.pumaTshirts));
  }

  async clickWoodlandShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.woodlandShoes));
  }

  async doubleClickWoodlandShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.woodlandShoes));
  }

  async expectWoodlandShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.woodlandShoes), expected, timeoutMs);
  }

  async expectWoodlandShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.woodlandShoes), substring, timeoutMs);
  }

  async scrollWoodlandShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.woodlandShoes));
  }

  async clickTitanWatches(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.titanWatches));
  }

  async doubleClickTitanWatches(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.titanWatches));
  }

  async expectTitanWatchesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.titanWatches), expected, timeoutMs);
  }

  async expectTitanWatchesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.titanWatches), substring, timeoutMs);
  }

  async scrollTitanWatchesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.titanWatches));
  }

  async clickFastrackWatches(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.fastrackWatches));
  }

  async doubleClickFastrackWatches(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.fastrackWatches));
  }

  async expectFastrackWatchesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.fastrackWatches), expected, timeoutMs);
  }

  async expectFastrackWatchesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.fastrackWatches), substring, timeoutMs);
  }

  async scrollFastrackWatchesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.fastrackWatches));
  }

  async clickWranglerShirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.wranglerShirts));
  }

  async doubleClickWranglerShirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.wranglerShirts));
  }

  async expectWranglerShirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.wranglerShirts), expected, timeoutMs);
  }

  async expectWranglerShirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.wranglerShirts), substring, timeoutMs);
  }

  async scrollWranglerShirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.wranglerShirts));
  }

  async clickAdidasTshirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.adidasTshirts));
  }

  async doubleClickAdidasTshirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.adidasTshirts));
  }

  async expectAdidasTshirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.adidasTshirts), expected, timeoutMs);
  }

  async expectAdidasTshirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.adidasTshirts), substring, timeoutMs);
  }

  async scrollAdidasTshirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.adidasTshirts));
  }

  async clickNikeShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nikeShoes));
  }

  async doubleClickNikeShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nikeShoes));
  }

  async expectNikeShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nikeShoes), expected, timeoutMs);
  }

  async expectNikeShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nikeShoes), substring, timeoutMs);
  }

  async scrollNikeShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nikeShoes));
  }

  async clickRoadsterShirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.roadsterShirts));
  }

  async doubleClickRoadsterShirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.roadsterShirts));
  }

  async expectRoadsterShirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.roadsterShirts), expected, timeoutMs);
  }

  async expectRoadsterShirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.roadsterShirts), substring, timeoutMs);
  }

  async scrollRoadsterShirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.roadsterShirts));
  }

  async clickCasualShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.casualShoes));
  }

  async doubleClickCasualShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.casualShoes));
  }

  async expectCasualShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.casualShoes), expected, timeoutMs);
  }

  async expectCasualShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.casualShoes), substring, timeoutMs);
  }

  async scrollCasualShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.casualShoes));
  }

  async clickRunningShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.runningShoes));
  }

  async doubleClickRunningShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.runningShoes));
  }

  async expectRunningShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.runningShoes), expected, timeoutMs);
  }

  async expectRunningShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.runningShoes), substring, timeoutMs);
  }

  async scrollRunningShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.runningShoes));
  }

  async clickNikeSportsShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes));
  }

  async doubleClickNikeSportsShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes));
  }

  async expectNikeSportsShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes), expected, timeoutMs);
  }

  async expectNikeSportsShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes), substring, timeoutMs);
  }

  async scrollNikeSportsShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes));
  }

  async clickJeans2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jeans2));
  }

  async doubleClickJeans2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.jeans2));
  }

  async expectJeans2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.jeans2), timeoutMs);
  }

  async expectJeans2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.jeans2), timeoutMs);
  }

  async expectJeans2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.jeans2), expected, timeoutMs);
  }

  async expectJeans2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.jeans2), substring, timeoutMs);
  }

  async scrollJeans2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.jeans2));
  }

  async clickBeingHumanTshirts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts));
  }

  async doubleClickBeingHumanTshirts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts));
  }

  async expectBeingHumanTshirtsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts), expected, timeoutMs);
  }

  async expectBeingHumanTshirtsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts), substring, timeoutMs);
  }

  async scrollBeingHumanTshirtsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts));
  }

  async clickConverseShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.converseShoes));
  }

  async doubleClickConverseShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.converseShoes));
  }

  async expectConverseShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.converseShoes), expected, timeoutMs);
  }

  async expectConverseShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.converseShoes), substring, timeoutMs);
  }

  async scrollConverseShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.converseShoes));
  }

  async clickCricketShoes(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.cricketShoes));
  }

  async doubleClickCricketShoes(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.cricketShoes));
  }

  async expectCricketShoesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.cricketShoes), expected, timeoutMs);
  }

  async expectCricketShoesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.cricketShoes), substring, timeoutMs);
  }

  async scrollCricketShoesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.cricketShoes));
  }

  async clickContactUs2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.contactUs2));
  }

  async doubleClickContactUs2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.contactUs2));
  }

  async expectContactUs2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.contactUs2), expected, timeoutMs);
  }

  async expectContactUs2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.contactUs2), substring, timeoutMs);
  }

  async scrollContactUs2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.contactUs2));
  }

  async clickAFlipkartCompany(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany));
  }

  async doubleClickAFlipkartCompany(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany));
  }

  async expectAFlipkartCompanyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany), expected, timeoutMs);
  }

  async expectAFlipkartCompanyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany), substring, timeoutMs);
  }

  async scrollAFlipkartCompanyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany));
  }

  async clickPlayVideo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.playVideo));
  }

  async doubleClickPlayVideo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.playVideo));
  }

  async expectPlayVideoVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.playVideo), timeoutMs);
  }

  async expectPlayVideoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.playVideo), timeoutMs);
  }

  async expectPlayVideoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.playVideo), timeoutMs);
  }

  async expectPlayVideoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.playVideo), timeoutMs);
  }

  async expectPlayVideoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.playVideo), expected, timeoutMs);
  }

  async expectPlayVideoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.playVideo), substring, timeoutMs);
  }

  async scrollPlayVideoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.playVideo));
  }

  async clickHidePlayerControls(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls));
  }

  async doubleClickHidePlayerControls(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls));
  }

  async expectHidePlayerControlsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls), timeoutMs);
  }

  async expectHidePlayerControlsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls), timeoutMs);
  }

  async expectHidePlayerControlsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls), timeoutMs);
  }

  async expectHidePlayerControlsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls), timeoutMs);
  }

  async expectHidePlayerControlsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls), expected, timeoutMs);
  }

  async expectHidePlayerControlsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls), substring, timeoutMs);
  }

  async scrollHidePlayerControlsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls));
  }

  async clickTop5TShirtHacks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks));
  }

  async doubleClickTop5TShirtHacks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks));
  }

  async expectTop5TShirtHacksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks), timeoutMs);
  }

  async expectTop5TShirtHacksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks), timeoutMs);
  }

  async expectTop5TShirtHacksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks), expected, timeoutMs);
  }

  async expectTop5TShirtHacksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks), substring, timeoutMs);
  }

  async scrollTop5TShirtHacksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks));
  }

  async clickMyntra(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.myntra));
  }

  async doubleClickMyntra(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.myntra));
  }

  async expectMyntraVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.myntra), timeoutMs);
  }

  async expectMyntraHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.myntra), timeoutMs);
  }

  async expectMyntraText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.myntra), expected, timeoutMs);
  }

  async expectMyntraContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.myntra), substring, timeoutMs);
  }

  async scrollMyntraIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.myntra));
  }

  async clickShare(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.share));
  }

  async doubleClickShare(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.share));
  }

  async expectShareVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.share), timeoutMs);
  }

  async expectShareHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.share), timeoutMs);
  }

  async expectShareEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.share), timeoutMs);
  }

  async expectShareDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.share), timeoutMs);
  }

  async expectShareText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.share), expected, timeoutMs);
  }

  async expectShareContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.share), substring, timeoutMs);
  }

  async scrollShareIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.share));
  }

  async clickWatchOnYouTube(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube));
  }

  async doubleClickWatchOnYouTube(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube));
  }

  async expectWatchOnYouTubeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube), timeoutMs);
  }

  async expectWatchOnYouTubeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube), timeoutMs);
  }

  async expectWatchOnYouTubeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube), expected, timeoutMs);
  }

  async expectWatchOnYouTubeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube), substring, timeoutMs);
  }

  async scrollWatchOnYouTubeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube));
  }


  async expectInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, MenTshirtsPage.L.input), expected, timeoutMs);
  }

  async expectInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, MenTshirtsPage.L.input), substring, timeoutMs);
  }

  async expectInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.input), timeoutMs);
  }

  async expectInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.input), timeoutMs);
  }

  async expectInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.input), count, timeoutMs);
  }

  async longPressHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.home));
  }

  async expectHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.home), value, timeoutMs);
  }

  async expectHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.home), timeoutMs);
  }

  async expectHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.home), timeoutMs);
  }

  async expectHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.home), timeoutMs);
  }

  async expectHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.home), timeoutMs);
  }

  async expectHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.home), timeoutMs);
  }

  async expectHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.home), count, timeoutMs);
  }

  async longPressClothing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.clothing));
  }

  async expectClothingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.clothing), value, timeoutMs);
  }

  async expectClothingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.clothing), timeoutMs);
  }

  async expectClothingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.clothing), timeoutMs);
  }

  async expectClothingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.clothing), timeoutMs);
  }

  async expectClothingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.clothing), timeoutMs);
  }

  async expectClothingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.clothing), timeoutMs);
  }

  async expectClothingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.clothing), count, timeoutMs);
  }

  async longPressTshirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.tshirts));
  }

  async expectTshirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.tshirts), value, timeoutMs);
  }

  async expectTshirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.tshirts), timeoutMs);
  }

  async expectTshirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.tshirts), timeoutMs);
  }

  async expectTshirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.tshirts), timeoutMs);
  }

  async expectTshirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.tshirts), timeoutMs);
  }

  async expectTshirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.tshirts), timeoutMs);
  }

  async expectTshirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.tshirts), count, timeoutMs);
  }

  async longPressJockeySuperCombedCotton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton));
  }

  async expectJockeySuperCombedCottonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton), value, timeoutMs);
  }

  async expectJockeySuperCombedCottonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton), timeoutMs);
  }

  async expectJockeySuperCombedCottonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton), timeoutMs);
  }

  async expectJockeySuperCombedCottonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton), timeoutMs);
  }

  async expectJockeySuperCombedCottonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton), timeoutMs);
  }

  async expectJockeySuperCombedCottonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton), timeoutMs);
  }

  async expectJockeySuperCombedCottonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.jockeySuperCombedCotton), count, timeoutMs);
  }

  async longPressJockeySolidVNeckTShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt));
  }

  async expectJockeySolidVNeckTShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt), value, timeoutMs);
  }

  async expectJockeySolidVNeckTShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt), timeoutMs);
  }

  async expectJockeySolidVNeckTShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt), timeoutMs);
  }

  async expectJockeySolidVNeckTShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt), timeoutMs);
  }

  async expectJockeySolidVNeckTShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt), timeoutMs);
  }

  async expectJockeySolidVNeckTShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt), timeoutMs);
  }

  async expectJockeySolidVNeckTShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.jockeySolidVNeckTShirt), count, timeoutMs);
  }

  async longPressNEWTHEBEETELHOUSE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE));
  }

  async expectNEWTHEBEETELHOUSEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE), value, timeoutMs);
  }

  async expectNEWTHEBEETELHOUSEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE), count, timeoutMs);
  }

  async longPressRigoUnisexPrintedCotton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton));
  }

  async expectRigoUnisexPrintedCottonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton), value, timeoutMs);
  }

  async expectRigoUnisexPrintedCottonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton), timeoutMs);
  }

  async expectRigoUnisexPrintedCottonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton), timeoutMs);
  }

  async expectRigoUnisexPrintedCottonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton), timeoutMs);
  }

  async expectRigoUnisexPrintedCottonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton), timeoutMs);
  }

  async expectRigoUnisexPrintedCottonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton), timeoutMs);
  }

  async expectRigoUnisexPrintedCottonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton), count, timeoutMs);
  }

  async longPressJockeyMenSolidCotton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton));
  }

  async expectJockeyMenSolidCottonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton), value, timeoutMs);
  }

  async expectJockeyMenSolidCottonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton), timeoutMs);
  }

  async expectJockeyMenSolidCottonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton), timeoutMs);
  }

  async expectJockeyMenSolidCottonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton), timeoutMs);
  }

  async expectJockeyMenSolidCottonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton), timeoutMs);
  }

  async expectJockeyMenSolidCottonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton), timeoutMs);
  }

  async expectJockeyMenSolidCottonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidCotton), count, timeoutMs);
  }

  async longPressNEWSeekbuyloveRoundNeck(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck));
  }

  async expectNEWSeekbuyloveRoundNeckValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck), value, timeoutMs);
  }

  async expectNEWSeekbuyloveRoundNeckEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck), timeoutMs);
  }

  async expectNEWSeekbuyloveRoundNeckDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck), timeoutMs);
  }

  async expectNEWSeekbuyloveRoundNeckChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck), timeoutMs);
  }

  async expectNEWSeekbuyloveRoundNeckUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck), timeoutMs);
  }

  async expectNEWSeekbuyloveRoundNeckFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck), timeoutMs);
  }

  async expectNEWSeekbuyloveRoundNeckCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEWSeekbuyloveRoundNeck), count, timeoutMs);
  }

  async longPressNEWHIORPureCotton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton));
  }

  async expectNEWHIORPureCottonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton), value, timeoutMs);
  }

  async expectNEWHIORPureCottonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton), timeoutMs);
  }

  async expectNEWHIORPureCottonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton), timeoutMs);
  }

  async expectNEWHIORPureCottonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton), timeoutMs);
  }

  async expectNEWHIORPureCottonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton), timeoutMs);
  }

  async expectNEWHIORPureCottonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton), timeoutMs);
  }

  async expectNEWHIORPureCottonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEWHIORPureCotton), count, timeoutMs);
  }

  async longPressNauticaPureCottonTShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt));
  }

  async expectNauticaPureCottonTShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt), value, timeoutMs);
  }

  async expectNauticaPureCottonTShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt), timeoutMs);
  }

  async expectNauticaPureCottonTShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt), timeoutMs);
  }

  async expectNauticaPureCottonTShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt), timeoutMs);
  }

  async expectNauticaPureCottonTShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt), timeoutMs);
  }

  async expectNauticaPureCottonTShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt), timeoutMs);
  }

  async expectNauticaPureCottonTShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nauticaPureCottonTShirt), count, timeoutMs);
  }

  async longPressENRIZZMenTShirtRs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs));
  }

  async expectENRIZZMenTShirtRsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs), value, timeoutMs);
  }

  async expectENRIZZMenTShirtRsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs), timeoutMs);
  }

  async expectENRIZZMenTShirtRsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs), timeoutMs);
  }

  async expectENRIZZMenTShirtRsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs), timeoutMs);
  }

  async expectENRIZZMenTShirtRsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs), timeoutMs);
  }

  async expectENRIZZMenTShirtRsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs), timeoutMs);
  }

  async expectENRIZZMenTShirtRsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirtRs), count, timeoutMs);
  }

  async longPressBAESDPackOf2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2));
  }

  async expectBAESDPackOf2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2), value, timeoutMs);
  }

  async expectBAESDPackOf2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2), timeoutMs);
  }

  async expectBAESDPackOf2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2), timeoutMs);
  }

  async expectBAESDPackOf2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2), timeoutMs);
  }

  async expectBAESDPackOf2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2), timeoutMs);
  }

  async expectBAESDPackOf2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2), timeoutMs);
  }

  async expectBAESDPackOf2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf2), count, timeoutMs);
  }

  async longPressManiacMenStripedRound(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound));
  }

  async expectManiacMenStripedRoundValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound), value, timeoutMs);
  }

  async expectManiacMenStripedRoundEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound), timeoutMs);
  }

  async expectManiacMenStripedRoundDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound), timeoutMs);
  }

  async expectManiacMenStripedRoundChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound), timeoutMs);
  }

  async expectManiacMenStripedRoundUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound), timeoutMs);
  }

  async expectManiacMenStripedRoundFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound), timeoutMs);
  }

  async expectManiacMenStripedRoundCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.maniacMenStripedRound), count, timeoutMs);
  }

  async longPressNEWTHEBEETELHOUSE2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2));
  }

  async expectNEWTHEBEETELHOUSE2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2), value, timeoutMs);
  }

  async expectNEWTHEBEETELHOUSE2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSE2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSE2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSE2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSE2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2), timeoutMs);
  }

  async expectNEWTHEBEETELHOUSE2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETELHOUSE2), count, timeoutMs);
  }

  async longPressNEWTHEBEETLEHOUSE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE));
  }

  async expectNEWTHEBEETLEHOUSEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE), value, timeoutMs);
  }

  async expectNEWTHEBEETLEHOUSEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETLEHOUSEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETLEHOUSEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETLEHOUSEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETLEHOUSEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE), timeoutMs);
  }

  async expectNEWTHEBEETLEHOUSECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEWTHEBEETLEHOUSE), count, timeoutMs);
  }

  async longPressNEXTPureCottonTShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt));
  }

  async expectNEXTPureCottonTShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt), value, timeoutMs);
  }

  async expectNEXTPureCottonTShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt), timeoutMs);
  }

  async expectNEXTPureCottonTShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt), timeoutMs);
  }

  async expectNEXTPureCottonTShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt), timeoutMs);
  }

  async expectNEXTPureCottonTShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt), timeoutMs);
  }

  async expectNEXTPureCottonTShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt), timeoutMs);
  }

  async expectNEXTPureCottonTShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEXTPureCottonTShirt), count, timeoutMs);
  }

  async longPressNEWDostitchPrintedRegular(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular));
  }

  async expectNEWDostitchPrintedRegularValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular), value, timeoutMs);
  }

  async expectNEWDostitchPrintedRegularEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular), timeoutMs);
  }

  async expectNEWDostitchPrintedRegularDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular), timeoutMs);
  }

  async expectNEWDostitchPrintedRegularChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular), timeoutMs);
  }

  async expectNEWDostitchPrintedRegularUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular), timeoutMs);
  }

  async expectNEWDostitchPrintedRegularFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular), timeoutMs);
  }

  async expectNEWDostitchPrintedRegularCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEWDostitchPrintedRegular), count, timeoutMs);
  }

  async longPressSTARTONUnisexCottonOversized(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized));
  }

  async expectSTARTONUnisexCottonOversizedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized), value, timeoutMs);
  }

  async expectSTARTONUnisexCottonOversizedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized), timeoutMs);
  }

  async expectSTARTONUnisexCottonOversizedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized), timeoutMs);
  }

  async expectSTARTONUnisexCottonOversizedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized), timeoutMs);
  }

  async expectSTARTONUnisexCottonOversizedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized), timeoutMs);
  }

  async expectSTARTONUnisexCottonOversizedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized), timeoutMs);
  }

  async expectSTARTONUnisexCottonOversizedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.sTARTONUnisexCottonOversized), count, timeoutMs);
  }

  async longPressUSPoloAssnPrinted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted));
  }

  async expectUSPoloAssnPrintedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted), value, timeoutMs);
  }

  async expectUSPoloAssnPrintedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted), timeoutMs);
  }

  async expectUSPoloAssnPrintedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted), timeoutMs);
  }

  async expectUSPoloAssnPrintedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted), timeoutMs);
  }

  async expectUSPoloAssnPrintedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted), timeoutMs);
  }

  async expectUSPoloAssnPrintedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted), timeoutMs);
  }

  async expectUSPoloAssnPrintedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPrinted), count, timeoutMs);
  }

  async longPressNEWTheModernSoul(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul));
  }

  async expectNEWTheModernSoulValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul), value, timeoutMs);
  }

  async expectNEWTheModernSoulEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul), timeoutMs);
  }

  async expectNEWTheModernSoulDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul), timeoutMs);
  }

  async expectNEWTheModernSoulChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul), timeoutMs);
  }

  async expectNEWTheModernSoulUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul), timeoutMs);
  }

  async expectNEWTheModernSoulFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul), timeoutMs);
  }

  async expectNEWTheModernSoulCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEWTheModernSoul), count, timeoutMs);
  }

  async longPressMaverIQTshirtRs244Rs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs));
  }

  async expectMaverIQTshirtRs244RsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs), value, timeoutMs);
  }

  async expectMaverIQTshirtRs244RsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs), timeoutMs);
  }

  async expectMaverIQTshirtRs244RsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs), timeoutMs);
  }

  async expectMaverIQTshirtRs244RsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs), timeoutMs);
  }

  async expectMaverIQTshirtRs244RsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs), timeoutMs);
  }

  async expectMaverIQTshirtRs244RsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs), timeoutMs);
  }

  async expectMaverIQTshirtRs244RsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.maverIQTshirtRs244Rs), count, timeoutMs);
  }

  async longPressJockeyModernSolidLounge(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge));
  }

  async expectJockeyModernSolidLoungeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge), value, timeoutMs);
  }

  async expectJockeyModernSolidLoungeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge), timeoutMs);
  }

  async expectJockeyModernSolidLoungeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge), timeoutMs);
  }

  async expectJockeyModernSolidLoungeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge), timeoutMs);
  }

  async expectJockeyModernSolidLoungeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge), timeoutMs);
  }

  async expectJockeyModernSolidLoungeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge), timeoutMs);
  }

  async expectJockeyModernSolidLoungeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.jockeyModernSolidLounge), count, timeoutMs);
  }

  async longPressNEWENITORMenPolo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo));
  }

  async expectNEWENITORMenPoloValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo), value, timeoutMs);
  }

  async expectNEWENITORMenPoloEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo), timeoutMs);
  }

  async expectNEWENITORMenPoloDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo), timeoutMs);
  }

  async expectNEWENITORMenPoloChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo), timeoutMs);
  }

  async expectNEWENITORMenPoloUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo), timeoutMs);
  }

  async expectNEWENITORMenPoloFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo), timeoutMs);
  }

  async expectNEWENITORMenPoloCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEWENITORMenPolo), count, timeoutMs);
  }

  async longPressGlitchezTypographyRegularTShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt));
  }

  async expectGlitchezTypographyRegularTShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt), value, timeoutMs);
  }

  async expectGlitchezTypographyRegularTShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt), timeoutMs);
  }

  async expectGlitchezTypographyRegularTShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt), timeoutMs);
  }

  async expectGlitchezTypographyRegularTShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt), timeoutMs);
  }

  async expectGlitchezTypographyRegularTShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt), timeoutMs);
  }

  async expectGlitchezTypographyRegularTShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt), timeoutMs);
  }

  async expectGlitchezTypographyRegularTShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.glitchezTypographyRegularTShirt), count, timeoutMs);
  }

  async longPressJockeyMenRoundNeck(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck));
  }

  async expectJockeyMenRoundNeckValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck), value, timeoutMs);
  }

  async expectJockeyMenRoundNeckEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck), timeoutMs);
  }

  async expectJockeyMenRoundNeckDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck), timeoutMs);
  }

  async expectJockeyMenRoundNeckChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck), timeoutMs);
  }

  async expectJockeyMenRoundNeckUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck), timeoutMs);
  }

  async expectJockeyMenRoundNeckFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck), timeoutMs);
  }

  async expectJockeyMenRoundNeckCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck), count, timeoutMs);
  }

  async longPressModaRapidoMenPolo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo));
  }

  async expectModaRapidoMenPoloValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo), value, timeoutMs);
  }

  async expectModaRapidoMenPoloEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo), timeoutMs);
  }

  async expectModaRapidoMenPoloDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo), timeoutMs);
  }

  async expectModaRapidoMenPoloChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo), timeoutMs);
  }

  async expectModaRapidoMenPoloUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo), timeoutMs);
  }

  async expectModaRapidoMenPoloFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo), timeoutMs);
  }

  async expectModaRapidoMenPoloCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.modaRapidoMenPolo), count, timeoutMs);
  }

  async longPressMaverIQMenRegularFit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit));
  }

  async expectMaverIQMenRegularFitValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit), value, timeoutMs);
  }

  async expectMaverIQMenRegularFitEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit), timeoutMs);
  }

  async expectMaverIQMenRegularFitDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit), timeoutMs);
  }

  async expectMaverIQMenRegularFitChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit), timeoutMs);
  }

  async expectMaverIQMenRegularFitUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit), timeoutMs);
  }

  async expectMaverIQMenRegularFitFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit), timeoutMs);
  }

  async expectMaverIQMenRegularFitCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.maverIQMenRegularFit), count, timeoutMs);
  }

  async longPressManiacMenTypographyPrinted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted));
  }

  async expectManiacMenTypographyPrintedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted), value, timeoutMs);
  }

  async expectManiacMenTypographyPrintedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted), timeoutMs);
  }

  async expectManiacMenTypographyPrintedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted), timeoutMs);
  }

  async expectManiacMenTypographyPrintedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted), timeoutMs);
  }

  async expectManiacMenTypographyPrintedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted), timeoutMs);
  }

  async expectManiacMenTypographyPrintedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted), timeoutMs);
  }

  async expectManiacMenTypographyPrintedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.maniacMenTypographyPrinted), count, timeoutMs);
  }

  async longPressRigoUnisexPrintedCotton2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2));
  }

  async expectRigoUnisexPrintedCotton2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2), value, timeoutMs);
  }

  async expectRigoUnisexPrintedCotton2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2), timeoutMs);
  }

  async expectRigoUnisexPrintedCotton2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2), timeoutMs);
  }

  async expectRigoUnisexPrintedCotton2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2), timeoutMs);
  }

  async expectRigoUnisexPrintedCotton2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2), timeoutMs);
  }

  async expectRigoUnisexPrintedCotton2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2), timeoutMs);
  }

  async expectRigoUnisexPrintedCotton2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.rigoUnisexPrintedCotton2), count, timeoutMs);
  }

  async longPressGlitchezPoloCollarOversized(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized));
  }

  async expectGlitchezPoloCollarOversizedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized), value, timeoutMs);
  }

  async expectGlitchezPoloCollarOversizedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized), timeoutMs);
  }

  async expectGlitchezPoloCollarOversizedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized), timeoutMs);
  }

  async expectGlitchezPoloCollarOversizedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized), timeoutMs);
  }

  async expectGlitchezPoloCollarOversizedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized), timeoutMs);
  }

  async expectGlitchezPoloCollarOversizedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized), timeoutMs);
  }

  async expectGlitchezPoloCollarOversizedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.glitchezPoloCollarOversized), count, timeoutMs);
  }

  async longPressUSPoloAssnPure(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure));
  }

  async expectUSPoloAssnPureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure), value, timeoutMs);
  }

  async expectUSPoloAssnPureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure), timeoutMs);
  }

  async expectUSPoloAssnPureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure), timeoutMs);
  }

  async expectUSPoloAssnPureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure), timeoutMs);
  }

  async expectUSPoloAssnPureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure), timeoutMs);
  }

  async expectUSPoloAssnPureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure), timeoutMs);
  }

  async expectUSPoloAssnPureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnPure), count, timeoutMs);
  }

  async longPressBAESDPackOf22(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22));
  }

  async expectBAESDPackOf22Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22), value, timeoutMs);
  }

  async expectBAESDPackOf22Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22), timeoutMs);
  }

  async expectBAESDPackOf22Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22), timeoutMs);
  }

  async expectBAESDPackOf22Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22), timeoutMs);
  }

  async expectBAESDPackOf22Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22), timeoutMs);
  }

  async expectBAESDPackOf22Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22), timeoutMs);
  }

  async expectBAESDPackOf22Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.bAESDPackOf22), count, timeoutMs);
  }

  async longPressNEWMaverIQTshirtRs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs));
  }

  async expectNEWMaverIQTshirtRsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs), value, timeoutMs);
  }

  async expectNEWMaverIQTshirtRsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs), timeoutMs);
  }

  async expectNEWMaverIQTshirtRsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs), timeoutMs);
  }

  async expectNEWMaverIQTshirtRsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs), timeoutMs);
  }

  async expectNEWMaverIQTshirtRsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs), timeoutMs);
  }

  async expectNEWMaverIQTshirtRsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs), timeoutMs);
  }

  async expectNEWMaverIQTshirtRsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs), count, timeoutMs);
  }

  async longPressJockeyMenRoundNeck2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2));
  }

  async expectJockeyMenRoundNeck2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2), value, timeoutMs);
  }

  async expectJockeyMenRoundNeck2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2), timeoutMs);
  }

  async expectJockeyMenRoundNeck2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2), timeoutMs);
  }

  async expectJockeyMenRoundNeck2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2), timeoutMs);
  }

  async expectJockeyMenRoundNeck2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2), timeoutMs);
  }

  async expectJockeyMenRoundNeck2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2), timeoutMs);
  }

  async expectJockeyMenRoundNeck2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.jockeyMenRoundNeck2), count, timeoutMs);
  }

  async longPressHRXByHrithikRoshan(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan));
  }

  async expectHRXByHrithikRoshanValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan), value, timeoutMs);
  }

  async expectHRXByHrithikRoshanEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan), timeoutMs);
  }

  async expectHRXByHrithikRoshanDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan), timeoutMs);
  }

  async expectHRXByHrithikRoshanChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan), timeoutMs);
  }

  async expectHRXByHrithikRoshanUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan), timeoutMs);
  }

  async expectHRXByHrithikRoshanFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan), timeoutMs);
  }

  async expectHRXByHrithikRoshanCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan), count, timeoutMs);
  }

  async longPressHMMenCottonPure(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure));
  }

  async expectHMMenCottonPureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure), value, timeoutMs);
  }

  async expectHMMenCottonPureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure), timeoutMs);
  }

  async expectHMMenCottonPureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure), timeoutMs);
  }

  async expectHMMenCottonPureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure), timeoutMs);
  }

  async expectHMMenCottonPureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure), timeoutMs);
  }

  async expectHMMenCottonPureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure), timeoutMs);
  }

  async expectHMMenCottonPureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.hMMenCottonPure), count, timeoutMs);
  }

  async longPressUSPoloAssnLounge(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge));
  }

  async expectUSPoloAssnLoungeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge), value, timeoutMs);
  }

  async expectUSPoloAssnLoungeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge), timeoutMs);
  }

  async expectUSPoloAssnLoungeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge), timeoutMs);
  }

  async expectUSPoloAssnLoungeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge), timeoutMs);
  }

  async expectUSPoloAssnLoungeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge), timeoutMs);
  }

  async expectUSPoloAssnLoungeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge), timeoutMs);
  }

  async expectUSPoloAssnLoungeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnLounge), count, timeoutMs);
  }

  async longPressNEWLeotudeMenTypography(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography));
  }

  async expectNEWLeotudeMenTypographyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography), value, timeoutMs);
  }

  async expectNEWLeotudeMenTypographyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography), timeoutMs);
  }

  async expectNEWLeotudeMenTypographyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography), timeoutMs);
  }

  async expectNEWLeotudeMenTypographyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography), timeoutMs);
  }

  async expectNEWLeotudeMenTypographyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography), timeoutMs);
  }

  async expectNEWLeotudeMenTypographyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography), timeoutMs);
  }

  async expectNEWLeotudeMenTypographyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEWLeotudeMenTypography), count, timeoutMs);
  }

  async longPressNEWMaverIQTshirtRs2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2));
  }

  async expectNEWMaverIQTshirtRs2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2), value, timeoutMs);
  }

  async expectNEWMaverIQTshirtRs2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2), timeoutMs);
  }

  async expectNEWMaverIQTshirtRs2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2), timeoutMs);
  }

  async expectNEWMaverIQTshirtRs2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2), timeoutMs);
  }

  async expectNEWMaverIQTshirtRs2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2), timeoutMs);
  }

  async expectNEWMaverIQTshirtRs2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2), timeoutMs);
  }

  async expectNEWMaverIQTshirtRs2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEWMaverIQTshirtRs2), count, timeoutMs);
  }

  async longPressJockeyMenSolidSports(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports));
  }

  async expectJockeyMenSolidSportsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports), value, timeoutMs);
  }

  async expectJockeyMenSolidSportsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports), timeoutMs);
  }

  async expectJockeyMenSolidSportsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports), timeoutMs);
  }

  async expectJockeyMenSolidSportsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports), timeoutMs);
  }

  async expectJockeyMenSolidSportsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports), timeoutMs);
  }

  async expectJockeyMenSolidSportsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports), timeoutMs);
  }

  async expectJockeyMenSolidSportsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.jockeyMenSolidSports), count, timeoutMs);
  }

  async longPressPRONKMenPrintedRaw(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw));
  }

  async expectPRONKMenPrintedRawValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw), value, timeoutMs);
  }

  async expectPRONKMenPrintedRawEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw), timeoutMs);
  }

  async expectPRONKMenPrintedRawDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw), timeoutMs);
  }

  async expectPRONKMenPrintedRawChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw), timeoutMs);
  }

  async expectPRONKMenPrintedRawUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw), timeoutMs);
  }

  async expectPRONKMenPrintedRawFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw), timeoutMs);
  }

  async expectPRONKMenPrintedRawCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.pRONKMenPrintedRaw), count, timeoutMs);
  }

  async longPressNEWAUSTIVOMenStriped(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped));
  }

  async expectNEWAUSTIVOMenStripedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped), value, timeoutMs);
  }

  async expectNEWAUSTIVOMenStripedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped), timeoutMs);
  }

  async expectNEWAUSTIVOMenStripedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped), timeoutMs);
  }

  async expectNEWAUSTIVOMenStripedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped), timeoutMs);
  }

  async expectNEWAUSTIVOMenStripedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped), timeoutMs);
  }

  async expectNEWAUSTIVOMenStripedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped), timeoutMs);
  }

  async expectNEWAUSTIVOMenStripedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEWAUSTIVOMenStriped), count, timeoutMs);
  }

  async longPressDAMENSCHMenLoungeTShirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts));
  }

  async expectDAMENSCHMenLoungeTShirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts), value, timeoutMs);
  }

  async expectDAMENSCHMenLoungeTShirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts), timeoutMs);
  }

  async expectDAMENSCHMenLoungeTShirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts), timeoutMs);
  }

  async expectDAMENSCHMenLoungeTShirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts), timeoutMs);
  }

  async expectDAMENSCHMenLoungeTShirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts), timeoutMs);
  }

  async expectDAMENSCHMenLoungeTShirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts), timeoutMs);
  }

  async expectDAMENSCHMenLoungeTShirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.dAMENSCHMenLoungeTShirts), count, timeoutMs);
  }

  async longPressVeBNoRMenSelfDesign(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign));
  }

  async expectVeBNoRMenSelfDesignValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign), value, timeoutMs);
  }

  async expectVeBNoRMenSelfDesignEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign), timeoutMs);
  }

  async expectVeBNoRMenSelfDesignDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign), timeoutMs);
  }

  async expectVeBNoRMenSelfDesignChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign), timeoutMs);
  }

  async expectVeBNoRMenSelfDesignUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign), timeoutMs);
  }

  async expectVeBNoRMenSelfDesignFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign), timeoutMs);
  }

  async expectVeBNoRMenSelfDesignCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.veBNoRMenSelfDesign), count, timeoutMs);
  }

  async longPressTHEBEETLEHOUSETshirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt));
  }

  async expectTHEBEETLEHOUSETshirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt), value, timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt), count, timeoutMs);
  }

  async longPressManiacPrintedCottonTShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt));
  }

  async expectManiacPrintedCottonTShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt), value, timeoutMs);
  }

  async expectManiacPrintedCottonTShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt), timeoutMs);
  }

  async expectManiacPrintedCottonTShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt), timeoutMs);
  }

  async expectManiacPrintedCottonTShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt), timeoutMs);
  }

  async expectManiacPrintedCottonTShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt), timeoutMs);
  }

  async expectManiacPrintedCottonTShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt), timeoutMs);
  }

  async expectManiacPrintedCottonTShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.maniacPrintedCottonTShirt), count, timeoutMs);
  }

  async longPressPlayRChennaiSuperKings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings));
  }

  async expectPlayRChennaiSuperKingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings), value, timeoutMs);
  }

  async expectPlayRChennaiSuperKingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings), timeoutMs);
  }

  async expectPlayRChennaiSuperKingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings), timeoutMs);
  }

  async expectPlayRChennaiSuperKingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings), timeoutMs);
  }

  async expectPlayRChennaiSuperKingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings), timeoutMs);
  }

  async expectPlayRChennaiSuperKingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings), timeoutMs);
  }

  async expectPlayRChennaiSuperKingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings), count, timeoutMs);
  }

  async longPressPlayRChennaiSuperKings2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2));
  }

  async expectPlayRChennaiSuperKings2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2), value, timeoutMs);
  }

  async expectPlayRChennaiSuperKings2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2), timeoutMs);
  }

  async expectPlayRChennaiSuperKings2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2), timeoutMs);
  }

  async expectPlayRChennaiSuperKings2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2), timeoutMs);
  }

  async expectPlayRChennaiSuperKings2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2), timeoutMs);
  }

  async expectPlayRChennaiSuperKings2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2), timeoutMs);
  }

  async expectPlayRChennaiSuperKings2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.playRChennaiSuperKings2), count, timeoutMs);
  }

  async longPressUSPoloAssnMen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen));
  }

  async expectUSPoloAssnMenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen), value, timeoutMs);
  }

  async expectUSPoloAssnMenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen), timeoutMs);
  }

  async expectUSPoloAssnMenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen), timeoutMs);
  }

  async expectUSPoloAssnMenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen), timeoutMs);
  }

  async expectUSPoloAssnMenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen), timeoutMs);
  }

  async expectUSPoloAssnMenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen), timeoutMs);
  }

  async expectUSPoloAssnMenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.uSPoloAssnMen), count, timeoutMs);
  }

  async longPressGlitchezPrintedRelaxedTShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt));
  }

  async expectGlitchezPrintedRelaxedTShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt), value, timeoutMs);
  }

  async expectGlitchezPrintedRelaxedTShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt), timeoutMs);
  }

  async expectGlitchezPrintedRelaxedTShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt), timeoutMs);
  }

  async expectGlitchezPrintedRelaxedTShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt), timeoutMs);
  }

  async expectGlitchezPrintedRelaxedTShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt), timeoutMs);
  }

  async expectGlitchezPrintedRelaxedTShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt), timeoutMs);
  }

  async expectGlitchezPrintedRelaxedTShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.glitchezPrintedRelaxedTShirt), count, timeoutMs);
  }

  async longPressTHEBEETLEHOUSETshirt2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2));
  }

  async expectTHEBEETLEHOUSETshirt2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2), value, timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirt2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirt2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirt2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirt2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirt2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2), timeoutMs);
  }

  async expectTHEBEETLEHOUSETshirt2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSETshirt2), count, timeoutMs);
  }

  async longPressNEWPeterEnglandPolo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo));
  }

  async expectNEWPeterEnglandPoloValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo), value, timeoutMs);
  }

  async expectNEWPeterEnglandPoloEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo), timeoutMs);
  }

  async expectNEWPeterEnglandPoloDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo), timeoutMs);
  }

  async expectNEWPeterEnglandPoloChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo), timeoutMs);
  }

  async expectNEWPeterEnglandPoloUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo), timeoutMs);
  }

  async expectNEWPeterEnglandPoloFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo), timeoutMs);
  }

  async expectNEWPeterEnglandPoloCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nEWPeterEnglandPolo), count, timeoutMs);
  }

  async longPressTHEBEETELHOUSEMen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen));
  }

  async expectTHEBEETELHOUSEMenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen), value, timeoutMs);
  }

  async expectTHEBEETELHOUSEMenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen), timeoutMs);
  }

  async expectTHEBEETELHOUSEMenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen), timeoutMs);
  }

  async expectTHEBEETELHOUSEMenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen), timeoutMs);
  }

  async expectTHEBEETELHOUSEMenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen), timeoutMs);
  }

  async expectTHEBEETELHOUSEMenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen), timeoutMs);
  }

  async expectTHEBEETELHOUSEMenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen), count, timeoutMs);
  }

  async longPressRigoUnisexGraphicPrinted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted));
  }

  async expectRigoUnisexGraphicPrintedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted), value, timeoutMs);
  }

  async expectRigoUnisexGraphicPrintedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted), timeoutMs);
  }

  async expectRigoUnisexGraphicPrintedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted), timeoutMs);
  }

  async expectRigoUnisexGraphicPrintedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted), timeoutMs);
  }

  async expectRigoUnisexGraphicPrintedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted), timeoutMs);
  }

  async expectRigoUnisexGraphicPrintedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted), timeoutMs);
  }

  async expectRigoUnisexGraphicPrintedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.rigoUnisexGraphicPrinted), count, timeoutMs);
  }

  async longPressSeekbuyloveUnisexGraphicPrinted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted));
  }

  async expectSeekbuyloveUnisexGraphicPrintedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted), value, timeoutMs);
  }

  async expectSeekbuyloveUnisexGraphicPrintedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted), timeoutMs);
  }

  async expectSeekbuyloveUnisexGraphicPrintedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted), timeoutMs);
  }

  async expectSeekbuyloveUnisexGraphicPrintedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted), timeoutMs);
  }

  async expectSeekbuyloveUnisexGraphicPrintedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted), timeoutMs);
  }

  async expectSeekbuyloveUnisexGraphicPrintedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted), timeoutMs);
  }

  async expectSeekbuyloveUnisexGraphicPrintedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.seekbuyloveUnisexGraphicPrinted), count, timeoutMs);
  }

  async longPressENRIZZMenTShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt));
  }

  async expectENRIZZMenTShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt), value, timeoutMs);
  }

  async expectENRIZZMenTShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt), timeoutMs);
  }

  async expectENRIZZMenTShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt), timeoutMs);
  }

  async expectENRIZZMenTShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt), timeoutMs);
  }

  async expectENRIZZMenTShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt), timeoutMs);
  }

  async expectENRIZZMenTShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt), timeoutMs);
  }

  async expectENRIZZMenTShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.eNRIZZMenTShirt), count, timeoutMs);
  }

  async longPressTHEBEETELHOUSEMen2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2));
  }

  async expectTHEBEETELHOUSEMen2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2), value, timeoutMs);
  }

  async expectTHEBEETELHOUSEMen2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2), timeoutMs);
  }

  async expectTHEBEETELHOUSEMen2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2), timeoutMs);
  }

  async expectTHEBEETELHOUSEMen2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2), timeoutMs);
  }

  async expectTHEBEETELHOUSEMen2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2), timeoutMs);
  }

  async expectTHEBEETELHOUSEMen2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2), timeoutMs);
  }

  async expectTHEBEETELHOUSEMen2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.tHEBEETELHOUSEMen2), count, timeoutMs);
  }

  async longPressTHEBEETLEHOUSEMen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen));
  }

  async expectTHEBEETLEHOUSEMenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen), value, timeoutMs);
  }

  async expectTHEBEETLEHOUSEMenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen), timeoutMs);
  }

  async expectTHEBEETLEHOUSEMenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen), timeoutMs);
  }

  async expectTHEBEETLEHOUSEMenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen), timeoutMs);
  }

  async expectTHEBEETLEHOUSEMenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen), timeoutMs);
  }

  async expectTHEBEETLEHOUSEMenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen), timeoutMs);
  }

  async expectTHEBEETLEHOUSEMenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.tHEBEETLEHOUSEMen), count, timeoutMs);
  }

  async longPressDostitchGraphicRealMadrid(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid));
  }

  async expectDostitchGraphicRealMadridValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid), value, timeoutMs);
  }

  async expectDostitchGraphicRealMadridEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid), timeoutMs);
  }

  async expectDostitchGraphicRealMadridDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid), timeoutMs);
  }

  async expectDostitchGraphicRealMadridChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid), timeoutMs);
  }

  async expectDostitchGraphicRealMadridUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid), timeoutMs);
  }

  async expectDostitchGraphicRealMadridFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid), timeoutMs);
  }

  async expectDostitchGraphicRealMadridCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.dostitchGraphicRealMadrid), count, timeoutMs);
  }

  async longPressTShirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.tShirts));
  }

  async expectTShirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.tShirts), value, timeoutMs);
  }

  async expectTShirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.tShirts), timeoutMs);
  }

  async expectTShirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.tShirts), count, timeoutMs);
  }

  async longPressTrackPants(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.trackPants));
  }

  async expectTrackPantsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.trackPants), value, timeoutMs);
  }

  async expectTrackPantsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.trackPants), timeoutMs);
  }

  async expectTrackPantsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.trackPants), timeoutMs);
  }

  async expectTrackPantsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.trackPants), timeoutMs);
  }

  async expectTrackPantsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.trackPants), timeoutMs);
  }

  async expectTrackPantsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.trackPants), timeoutMs);
  }

  async expectTrackPantsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.trackPants), count, timeoutMs);
  }

  async longPressLoungeShorts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.loungeShorts));
  }

  async expectLoungeShortsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.loungeShorts), value, timeoutMs);
  }

  async expectLoungeShortsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.loungeShorts), timeoutMs);
  }

  async expectLoungeShortsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.loungeShorts), timeoutMs);
  }

  async expectLoungeShortsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.loungeShorts), timeoutMs);
  }

  async expectLoungeShortsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.loungeShorts), timeoutMs);
  }

  async expectLoungeShortsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.loungeShorts), timeoutMs);
  }

  async expectLoungeShortsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.loungeShorts), count, timeoutMs);
  }

  async longPressInnerwear(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.innerwear));
  }

  async expectInnerwearValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.innerwear), value, timeoutMs);
  }

  async expectInnerwearEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.innerwear), timeoutMs);
  }

  async expectInnerwearDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.innerwear), timeoutMs);
  }

  async expectInnerwearChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.innerwear), timeoutMs);
  }

  async expectInnerwearUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.innerwear), timeoutMs);
  }

  async expectInnerwearFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.innerwear), timeoutMs);
  }

  async expectInnerwearCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.innerwear), count, timeoutMs);
  }

  async longPressMen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.men));
  }

  async expectMenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.men), value, timeoutMs);
  }

  async expectMenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.men), timeoutMs);
  }

  async expectMenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.men), timeoutMs);
  }

  async expectMenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.men), timeoutMs);
  }

  async expectMenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.men), timeoutMs);
  }

  async expectMenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.men), timeoutMs);
  }

  async expectMenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.men), count, timeoutMs);
  }

  async longPressJoggers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.joggers));
  }

  async expectJoggersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.joggers), value, timeoutMs);
  }

  async expectJoggersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.joggers), timeoutMs);
  }

  async expectJoggersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.joggers), timeoutMs);
  }

  async expectJoggersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.joggers), timeoutMs);
  }

  async expectJoggersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.joggers), timeoutMs);
  }

  async expectJoggersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.joggers), timeoutMs);
  }

  async expectJoggersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.joggers), count, timeoutMs);
  }

  async longPressTracksuits(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.tracksuits));
  }

  async expectTracksuitsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.tracksuits), value, timeoutMs);
  }

  async expectTracksuitsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.tracksuits), timeoutMs);
  }

  async expectTracksuitsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.tracksuits), timeoutMs);
  }

  async expectTracksuitsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.tracksuits), timeoutMs);
  }

  async expectTracksuitsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.tracksuits), timeoutMs);
  }

  async expectTracksuitsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.tracksuits), timeoutMs);
  }

  async expectTracksuitsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.tracksuits), count, timeoutMs);
  }

  async longPressRoundNeckTShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt));
  }

  async expectRoundNeckTShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt), value, timeoutMs);
  }

  async expectRoundNeckTShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt), timeoutMs);
  }

  async expectRoundNeckTShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt), timeoutMs);
  }

  async expectRoundNeckTShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt), timeoutMs);
  }

  async expectRoundNeckTShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt), timeoutMs);
  }

  async expectRoundNeckTShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt), timeoutMs);
  }

  async expectRoundNeckTShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.roundNeckTShirt), count, timeoutMs);
  }

  async longPressJeans(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.jeans));
  }

  async expectJeansValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.jeans), value, timeoutMs);
  }

  async expectJeansEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.jeans), timeoutMs);
  }

  async expectJeansDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.jeans), timeoutMs);
  }

  async expectJeansChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.jeans), timeoutMs);
  }

  async expectJeansUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.jeans), timeoutMs);
  }

  async expectJeansFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.jeans), timeoutMs);
  }

  async expectJeansCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.jeans), count, timeoutMs);
  }

  async longPressRoadsterMenWhitePure(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure));
  }

  async expectRoadsterMenWhitePureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure), value, timeoutMs);
  }

  async expectRoadsterMenWhitePureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure), timeoutMs);
  }

  async expectRoadsterMenWhitePureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure), timeoutMs);
  }

  async expectRoadsterMenWhitePureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure), timeoutMs);
  }

  async expectRoadsterMenWhitePureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure), timeoutMs);
  }

  async expectRoadsterMenWhitePureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure), timeoutMs);
  }

  async expectRoadsterMenWhitePureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.roadsterMenWhitePure), count, timeoutMs);
  }

  async longPressHRXByHrithikRoshan2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2));
  }

  async expectHRXByHrithikRoshan2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2), value, timeoutMs);
  }

  async expectHRXByHrithikRoshan2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2), timeoutMs);
  }

  async expectHRXByHrithikRoshan2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2), timeoutMs);
  }

  async expectHRXByHrithikRoshan2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2), timeoutMs);
  }

  async expectHRXByHrithikRoshan2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2), timeoutMs);
  }

  async expectHRXByHrithikRoshan2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2), timeoutMs);
  }

  async expectHRXByHrithikRoshan2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan2), count, timeoutMs);
  }

  async longPressUrbanoFashionMenTeal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal));
  }

  async expectUrbanoFashionMenTealValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal), value, timeoutMs);
  }

  async expectUrbanoFashionMenTealEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal), timeoutMs);
  }

  async expectUrbanoFashionMenTealDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal), timeoutMs);
  }

  async expectUrbanoFashionMenTealChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal), timeoutMs);
  }

  async expectUrbanoFashionMenTealUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal), timeoutMs);
  }

  async expectUrbanoFashionMenTealFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal), timeoutMs);
  }

  async expectUrbanoFashionMenTealCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.urbanoFashionMenTeal), count, timeoutMs);
  }

  async longPressHuetrapMenBeige(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige));
  }

  async expectHuetrapMenBeigeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige), value, timeoutMs);
  }

  async expectHuetrapMenBeigeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige), timeoutMs);
  }

  async expectHuetrapMenBeigeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige), timeoutMs);
  }

  async expectHuetrapMenBeigeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige), timeoutMs);
  }

  async expectHuetrapMenBeigeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige), timeoutMs);
  }

  async expectHuetrapMenBeigeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige), timeoutMs);
  }

  async expectHuetrapMenBeigeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.huetrapMenBeige), count, timeoutMs);
  }

  async longPressRoadsterMenBlackCotton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton));
  }

  async expectRoadsterMenBlackCottonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton), value, timeoutMs);
  }

  async expectRoadsterMenBlackCottonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton), timeoutMs);
  }

  async expectRoadsterMenBlackCottonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton), timeoutMs);
  }

  async expectRoadsterMenBlackCottonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton), timeoutMs);
  }

  async expectRoadsterMenBlackCottonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton), timeoutMs);
  }

  async expectRoadsterMenBlackCottonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton), timeoutMs);
  }

  async expectRoadsterMenBlackCottonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.roadsterMenBlackCotton), count, timeoutMs);
  }

  async longPressHRXByHrithikRoshan3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3));
  }

  async expectHRXByHrithikRoshan3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3), value, timeoutMs);
  }

  async expectHRXByHrithikRoshan3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3), timeoutMs);
  }

  async expectHRXByHrithikRoshan3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3), timeoutMs);
  }

  async expectHRXByHrithikRoshan3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3), timeoutMs);
  }

  async expectHRXByHrithikRoshan3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3), timeoutMs);
  }

  async expectHRXByHrithikRoshan3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3), timeoutMs);
  }

  async expectHRXByHrithikRoshan3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.hRXByHrithikRoshan3), count, timeoutMs);
  }

  async longPressBewakoof(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.bewakoof));
  }

  async expectBewakoofValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.bewakoof), value, timeoutMs);
  }

  async expectBewakoofEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.bewakoof), timeoutMs);
  }

  async expectBewakoofDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.bewakoof), timeoutMs);
  }

  async expectBewakoofChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.bewakoof), timeoutMs);
  }

  async expectBewakoofUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.bewakoof), timeoutMs);
  }

  async expectBewakoofFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.bewakoof), timeoutMs);
  }

  async expectBewakoofCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.bewakoof), count, timeoutMs);
  }

  async longPressZivame(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.zivame));
  }

  async expectZivameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.zivame), value, timeoutMs);
  }

  async expectZivameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.zivame), timeoutMs);
  }

  async expectZivameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.zivame), timeoutMs);
  }

  async expectZivameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.zivame), timeoutMs);
  }

  async expectZivameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.zivame), timeoutMs);
  }

  async expectZivameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.zivame), timeoutMs);
  }

  async expectZivameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.zivame), count, timeoutMs);
  }

  async longPressLevis(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.levis));
  }

  async expectLevisValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.levis), value, timeoutMs);
  }

  async expectLevisEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.levis), timeoutMs);
  }

  async expectLevisDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.levis), timeoutMs);
  }

  async expectLevisChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.levis), timeoutMs);
  }

  async expectLevisUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.levis), timeoutMs);
  }

  async expectLevisFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.levis), timeoutMs);
  }

  async expectLevisCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.levis), count, timeoutMs);
  }

  async longPressManyavar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.manyavar));
  }

  async expectManyavarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.manyavar), value, timeoutMs);
  }

  async expectManyavarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.manyavar), timeoutMs);
  }

  async expectManyavarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.manyavar), timeoutMs);
  }

  async expectManyavarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.manyavar), timeoutMs);
  }

  async expectManyavarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.manyavar), timeoutMs);
  }

  async expectManyavarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.manyavar), timeoutMs);
  }

  async expectManyavarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.manyavar), count, timeoutMs);
  }

  async longPressSelected(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.selected));
  }

  async expectSelectedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.selected), value, timeoutMs);
  }

  async expectSelectedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.selected), timeoutMs);
  }

  async expectSelectedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.selected), timeoutMs);
  }

  async expectSelectedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.selected), timeoutMs);
  }

  async expectSelectedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.selected), timeoutMs);
  }

  async expectSelectedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.selected), timeoutMs);
  }

  async expectSelectedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.selected), count, timeoutMs);
  }

  async longPressSkechers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.skechers));
  }

  async expectSkechersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.skechers), value, timeoutMs);
  }

  async expectSkechersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.skechers), timeoutMs);
  }

  async expectSkechersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.skechers), timeoutMs);
  }

  async expectSkechersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.skechers), timeoutMs);
  }

  async expectSkechersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.skechers), timeoutMs);
  }

  async expectSkechersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.skechers), timeoutMs);
  }

  async expectSkechersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.skechers), count, timeoutMs);
  }

  async longPressHopscotch(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.hopscotch));
  }

  async expectHopscotchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.hopscotch), value, timeoutMs);
  }

  async expectHopscotchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.hopscotch), timeoutMs);
  }

  async expectHopscotchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.hopscotch), timeoutMs);
  }

  async expectHopscotchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.hopscotch), timeoutMs);
  }

  async expectHopscotchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.hopscotch), timeoutMs);
  }

  async expectHopscotchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.hopscotch), timeoutMs);
  }

  async expectHopscotchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.hopscotch), count, timeoutMs);
  }

  async longPressJockey(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.jockey));
  }

  async expectJockeyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.jockey), value, timeoutMs);
  }

  async expectJockeyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.jockey), timeoutMs);
  }

  async expectJockeyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.jockey), timeoutMs);
  }

  async expectJockeyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.jockey), timeoutMs);
  }

  async expectJockeyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.jockey), timeoutMs);
  }

  async expectJockeyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.jockey), timeoutMs);
  }

  async expectJockeyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.jockey), count, timeoutMs);
  }

  async longPressMarksSpencer(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.marksSpencer));
  }

  async expectMarksSpencerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.marksSpencer), value, timeoutMs);
  }

  async expectMarksSpencerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.marksSpencer), timeoutMs);
  }

  async expectMarksSpencerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.marksSpencer), timeoutMs);
  }

  async expectMarksSpencerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.marksSpencer), timeoutMs);
  }

  async expectMarksSpencerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.marksSpencer), timeoutMs);
  }

  async expectMarksSpencerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.marksSpencer), timeoutMs);
  }

  async expectMarksSpencerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.marksSpencer), count, timeoutMs);
  }

  async longPressLouisPhilippe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.louisPhilippe));
  }

  async expectLouisPhilippeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.louisPhilippe), value, timeoutMs);
  }

  async expectLouisPhilippeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.louisPhilippe), timeoutMs);
  }

  async expectLouisPhilippeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.louisPhilippe), timeoutMs);
  }

  async expectLouisPhilippeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.louisPhilippe), timeoutMs);
  }

  async expectLouisPhilippeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.louisPhilippe), timeoutMs);
  }

  async expectLouisPhilippeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.louisPhilippe), timeoutMs);
  }

  async expectLouisPhilippeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.louisPhilippe), count, timeoutMs);
  }

  async longPressAndamen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.andamen));
  }

  async expectAndamenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.andamen), value, timeoutMs);
  }

  async expectAndamenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.andamen), timeoutMs);
  }

  async expectAndamenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.andamen), timeoutMs);
  }

  async expectAndamenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.andamen), timeoutMs);
  }

  async expectAndamenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.andamen), timeoutMs);
  }

  async expectAndamenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.andamen), timeoutMs);
  }

  async expectAndamenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.andamen), count, timeoutMs);
  }

  async longPressTommyHilfiger(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger));
  }

  async expectTommyHilfigerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger), value, timeoutMs);
  }

  async expectTommyHilfigerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger), timeoutMs);
  }

  async expectTommyHilfigerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger), timeoutMs);
  }

  async expectTommyHilfigerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger), timeoutMs);
  }

  async expectTommyHilfigerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger), timeoutMs);
  }

  async expectTommyHilfigerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger), timeoutMs);
  }

  async expectTommyHilfigerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.tommyHilfiger), count, timeoutMs);
  }

  async longPressTheSouledStore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.theSouledStore));
  }

  async expectTheSouledStoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.theSouledStore), value, timeoutMs);
  }

  async expectTheSouledStoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.theSouledStore), timeoutMs);
  }

  async expectTheSouledStoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.theSouledStore), timeoutMs);
  }

  async expectTheSouledStoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.theSouledStore), timeoutMs);
  }

  async expectTheSouledStoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.theSouledStore), timeoutMs);
  }

  async expectTheSouledStoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.theSouledStore), timeoutMs);
  }

  async expectTheSouledStoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.theSouledStore), count, timeoutMs);
  }

  async longPressWineRed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.wineRed));
  }

  async expectWineRedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.wineRed), value, timeoutMs);
  }

  async expectWineRedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.wineRed), timeoutMs);
  }

  async expectWineRedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.wineRed), timeoutMs);
  }

  async expectWineRedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.wineRed), timeoutMs);
  }

  async expectWineRedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.wineRed), timeoutMs);
  }

  async expectWineRedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.wineRed), timeoutMs);
  }

  async expectWineRedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.wineRed), count, timeoutMs);
  }

  async longPressAsics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.asics));
  }

  async expectAsicsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.asics), value, timeoutMs);
  }

  async expectAsicsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.asics), timeoutMs);
  }

  async expectAsicsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.asics), timeoutMs);
  }

  async expectAsicsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.asics), timeoutMs);
  }

  async expectAsicsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.asics), timeoutMs);
  }

  async expectAsicsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.asics), timeoutMs);
  }

  async expectAsicsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.asics), count, timeoutMs);
  }

  async longPressMonteCarlo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.monteCarlo));
  }

  async expectMonteCarloValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.monteCarlo), value, timeoutMs);
  }

  async expectMonteCarloEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.monteCarlo), timeoutMs);
  }

  async expectMonteCarloDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.monteCarlo), timeoutMs);
  }

  async expectMonteCarloChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.monteCarlo), timeoutMs);
  }

  async expectMonteCarloUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.monteCarlo), timeoutMs);
  }

  async expectMonteCarloFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.monteCarlo), timeoutMs);
  }

  async expectMonteCarloCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.monteCarlo), count, timeoutMs);
  }

  async longPressUnderArmour(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.underArmour));
  }

  async expectUnderArmourValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.underArmour), value, timeoutMs);
  }

  async expectUnderArmourEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.underArmour), timeoutMs);
  }

  async expectUnderArmourDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.underArmour), timeoutMs);
  }

  async expectUnderArmourChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.underArmour), timeoutMs);
  }

  async expectUnderArmourUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.underArmour), timeoutMs);
  }

  async expectUnderArmourFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.underArmour), timeoutMs);
  }

  async expectUnderArmourCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.underArmour), count, timeoutMs);
  }

  async longPressBasics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.basics));
  }

  async expectBasicsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.basics), value, timeoutMs);
  }

  async expectBasicsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.basics), timeoutMs);
  }

  async expectBasicsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.basics), timeoutMs);
  }

  async expectBasicsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.basics), timeoutMs);
  }

  async expectBasicsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.basics), timeoutMs);
  }

  async expectBasicsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.basics), timeoutMs);
  }

  async expectBasicsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.basics), count, timeoutMs);
  }

  async longPressChumbak(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.chumbak));
  }

  async expectChumbakValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.chumbak), value, timeoutMs);
  }

  async expectChumbakEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.chumbak), timeoutMs);
  }

  async expectChumbakDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.chumbak), timeoutMs);
  }

  async expectChumbakChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.chumbak), timeoutMs);
  }

  async expectChumbakUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.chumbak), timeoutMs);
  }

  async expectChumbakFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.chumbak), timeoutMs);
  }

  async expectChumbakCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.chumbak), count, timeoutMs);
  }

  async longPressFrenchCrown(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.frenchCrown));
  }

  async expectFrenchCrownValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.frenchCrown), value, timeoutMs);
  }

  async expectFrenchCrownEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.frenchCrown), timeoutMs);
  }

  async expectFrenchCrownDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.frenchCrown), timeoutMs);
  }

  async expectFrenchCrownChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.frenchCrown), timeoutMs);
  }

  async expectFrenchCrownUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.frenchCrown), timeoutMs);
  }

  async expectFrenchCrownFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.frenchCrown), timeoutMs);
  }

  async expectFrenchCrownCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.frenchCrown), count, timeoutMs);
  }

  async longPressLacoste(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.lacoste));
  }

  async expectLacosteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.lacoste), value, timeoutMs);
  }

  async expectLacosteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.lacoste), timeoutMs);
  }

  async expectLacosteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.lacoste), timeoutMs);
  }

  async expectLacosteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.lacoste), timeoutMs);
  }

  async expectLacosteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.lacoste), timeoutMs);
  }

  async expectLacosteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.lacoste), timeoutMs);
  }

  async expectLacosteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.lacoste), count, timeoutMs);
  }

  async longPressLeeCooper(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.leeCooper));
  }

  async expectLeeCooperValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.leeCooper), value, timeoutMs);
  }

  async expectLeeCooperEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.leeCooper), timeoutMs);
  }

  async expectLeeCooperDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.leeCooper), timeoutMs);
  }

  async expectLeeCooperChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.leeCooper), timeoutMs);
  }

  async expectLeeCooperUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.leeCooper), timeoutMs);
  }

  async expectLeeCooperFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.leeCooper), timeoutMs);
  }

  async expectLeeCooperCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.leeCooper), count, timeoutMs);
  }

  async longPressRituKumar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.rituKumar));
  }

  async expectRituKumarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.rituKumar), value, timeoutMs);
  }

  async expectRituKumarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.rituKumar), timeoutMs);
  }

  async expectRituKumarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.rituKumar), timeoutMs);
  }

  async expectRituKumarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.rituKumar), timeoutMs);
  }

  async expectRituKumarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.rituKumar), timeoutMs);
  }

  async expectRituKumarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.rituKumar), timeoutMs);
  }

  async expectRituKumarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.rituKumar), count, timeoutMs);
  }

  async longPressBlackTShirtForMen2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2));
  }

  async expectBlackTShirtForMen2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2), value, timeoutMs);
  }

  async expectBlackTShirtForMen2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2), timeoutMs);
  }

  async expectBlackTShirtForMen2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2), timeoutMs);
  }

  async expectBlackTShirtForMen2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2), timeoutMs);
  }

  async expectBlackTShirtForMen2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2), timeoutMs);
  }

  async expectBlackTShirtForMen2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2), timeoutMs);
  }

  async expectBlackTShirtForMen2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.blackTShirtForMen2), count, timeoutMs);
  }

  async longPressWhiteTShirtForMen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen));
  }

  async expectWhiteTShirtForMenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen), value, timeoutMs);
  }

  async expectWhiteTShirtForMenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen), timeoutMs);
  }

  async expectWhiteTShirtForMenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen), timeoutMs);
  }

  async expectWhiteTShirtForMenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen), timeoutMs);
  }

  async expectWhiteTShirtForMenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen), timeoutMs);
  }

  async expectWhiteTShirtForMenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen), timeoutMs);
  }

  async expectWhiteTShirtForMenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForMen), count, timeoutMs);
  }

  async longPressWhiteTShirtForGirls(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls));
  }

  async expectWhiteTShirtForGirlsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls), value, timeoutMs);
  }

  async expectWhiteTShirtForGirlsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls), timeoutMs);
  }

  async expectWhiteTShirtForGirlsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls), timeoutMs);
  }

  async expectWhiteTShirtForGirlsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls), timeoutMs);
  }

  async expectWhiteTShirtForGirlsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls), timeoutMs);
  }

  async expectWhiteTShirtForGirlsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls), timeoutMs);
  }

  async expectWhiteTShirtForGirlsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForGirls), count, timeoutMs);
  }

  async longPressWhiteTShirtForBoys(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys));
  }

  async expectWhiteTShirtForBoysValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys), value, timeoutMs);
  }

  async expectWhiteTShirtForBoysEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys), timeoutMs);
  }

  async expectWhiteTShirtForBoysDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys), timeoutMs);
  }

  async expectWhiteTShirtForBoysChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys), timeoutMs);
  }

  async expectWhiteTShirtForBoysUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys), timeoutMs);
  }

  async expectWhiteTShirtForBoysFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys), timeoutMs);
  }

  async expectWhiteTShirtForBoysCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.whiteTShirtForBoys), count, timeoutMs);
  }

  async longPressBrownTShirtForMen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen));
  }

  async expectBrownTShirtForMenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen), value, timeoutMs);
  }

  async expectBrownTShirtForMenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen), timeoutMs);
  }

  async expectBrownTShirtForMenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen), timeoutMs);
  }

  async expectBrownTShirtForMenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen), timeoutMs);
  }

  async expectBrownTShirtForMenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen), timeoutMs);
  }

  async expectBrownTShirtForMenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen), timeoutMs);
  }

  async expectBrownTShirtForMenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.brownTShirtForMen), count, timeoutMs);
  }

  async longPressONLINESHOPPING(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING));
  }

  async expectONLINESHOPPINGValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING), value, timeoutMs);
  }

  async expectONLINESHOPPINGEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING), timeoutMs);
  }

  async expectONLINESHOPPINGCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.oNLINESHOPPING), count, timeoutMs);
  }

  async longPressMen2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.men2));
  }

  async expectMen2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.men2), value, timeoutMs);
  }

  async expectMen2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.men2), timeoutMs);
  }

  async expectMen2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.men2), timeoutMs);
  }

  async expectMen2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.men2), timeoutMs);
  }

  async expectMen2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.men2), timeoutMs);
  }

  async expectMen2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.men2), timeoutMs);
  }

  async expectMen2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.men2), count, timeoutMs);
  }

  async longPressWomen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.women));
  }

  async expectWomenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.women), value, timeoutMs);
  }

  async expectWomenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.women), timeoutMs);
  }

  async expectWomenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.women), timeoutMs);
  }

  async expectWomenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.women), timeoutMs);
  }

  async expectWomenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.women), timeoutMs);
  }

  async expectWomenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.women), timeoutMs);
  }

  async expectWomenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.women), count, timeoutMs);
  }

  async longPressKids(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.kids));
  }

  async expectKidsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.kids), value, timeoutMs);
  }

  async expectKidsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.kids), timeoutMs);
  }

  async expectKidsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.kids), timeoutMs);
  }

  async expectKidsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.kids), timeoutMs);
  }

  async expectKidsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.kids), timeoutMs);
  }

  async expectKidsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.kids), timeoutMs);
  }

  async expectKidsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.kids), count, timeoutMs);
  }

  async longPressHome2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.home2));
  }

  async expectHome2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.home2), value, timeoutMs);
  }

  async expectHome2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.home2), timeoutMs);
  }

  async expectHome2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.home2), timeoutMs);
  }

  async expectHome2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.home2), timeoutMs);
  }

  async expectHome2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.home2), timeoutMs);
  }

  async expectHome2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.home2), timeoutMs);
  }

  async expectHome2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.home2), count, timeoutMs);
  }

  async longPressBeauty(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.beauty));
  }

  async expectBeautyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.beauty), value, timeoutMs);
  }

  async expectBeautyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.beauty), timeoutMs);
  }

  async expectBeautyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.beauty), timeoutMs);
  }

  async expectBeautyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.beauty), timeoutMs);
  }

  async expectBeautyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.beauty), timeoutMs);
  }

  async expectBeautyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.beauty), timeoutMs);
  }

  async expectBeautyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.beauty), count, timeoutMs);
  }

  async longPressGenz(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.genz));
  }

  async expectGenzValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.genz), value, timeoutMs);
  }

  async expectGenzEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.genz), timeoutMs);
  }

  async expectGenzDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.genz), timeoutMs);
  }

  async expectGenzChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.genz), timeoutMs);
  }

  async expectGenzUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.genz), timeoutMs);
  }

  async expectGenzFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.genz), timeoutMs);
  }

  async expectGenzCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.genz), count, timeoutMs);
  }

  async longPressGiftCards(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.giftCards));
  }

  async expectGiftCardsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.giftCards), value, timeoutMs);
  }

  async expectGiftCardsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.giftCards), timeoutMs);
  }

  async expectGiftCardsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.giftCards), count, timeoutMs);
  }

  async longPressMyntraInsider(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.myntraInsider));
  }

  async expectMyntraInsiderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.myntraInsider), value, timeoutMs);
  }

  async expectMyntraInsiderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.myntraInsider), timeoutMs);
  }

  async expectMyntraInsiderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.myntraInsider), count, timeoutMs);
  }

  async longPressBlog(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.blog));
  }

  async expectBlogValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.blog), value, timeoutMs);
  }

  async expectBlogEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.blog), timeoutMs);
  }

  async expectBlogDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.blog), timeoutMs);
  }

  async expectBlogChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.blog), timeoutMs);
  }

  async expectBlogUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.blog), timeoutMs);
  }

  async expectBlogFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.blog), timeoutMs);
  }

  async expectBlogCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.blog), count, timeoutMs);
  }

  async longPressCareers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.careers));
  }

  async expectCareersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.careers), value, timeoutMs);
  }

  async expectCareersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.careers), timeoutMs);
  }

  async expectCareersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.careers), timeoutMs);
  }

  async expectCareersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.careers), timeoutMs);
  }

  async expectCareersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.careers), timeoutMs);
  }

  async expectCareersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.careers), timeoutMs);
  }

  async expectCareersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.careers), count, timeoutMs);
  }

  async longPressSiteMap(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.siteMap));
  }

  async expectSiteMapValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.siteMap), value, timeoutMs);
  }

  async expectSiteMapEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.siteMap), timeoutMs);
  }

  async expectSiteMapCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.siteMap), count, timeoutMs);
  }

  async longPressCorporateInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.corporateInformation));
  }

  async expectCorporateInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.corporateInformation), value, timeoutMs);
  }

  async expectCorporateInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.corporateInformation), timeoutMs);
  }

  async expectCorporateInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.corporateInformation), count, timeoutMs);
  }

  async longPressWhitehat(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.whitehat));
  }

  async expectWhitehatValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.whitehat), value, timeoutMs);
  }

  async expectWhitehatEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.whitehat), timeoutMs);
  }

  async expectWhitehatCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.whitehat), count, timeoutMs);
  }

  async longPressCleartrip(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.cleartrip));
  }

  async expectCleartripValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.cleartrip), value, timeoutMs);
  }

  async expectCleartripEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.cleartrip), timeoutMs);
  }

  async expectCleartripCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.cleartrip), count, timeoutMs);
  }

  async longPressMyntraGlobal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.myntraGlobal));
  }

  async expectMyntraGlobalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.myntraGlobal), value, timeoutMs);
  }

  async expectMyntraGlobalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.myntraGlobal), timeoutMs);
  }

  async expectMyntraGlobalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.myntraGlobal), count, timeoutMs);
  }

  async longPressContactUs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.contactUs));
  }

  async expectContactUsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.contactUs), value, timeoutMs);
  }

  async expectContactUsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.contactUs), timeoutMs);
  }

  async expectContactUsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.contactUs), timeoutMs);
  }

  async expectContactUsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.contactUs), timeoutMs);
  }

  async expectContactUsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.contactUs), timeoutMs);
  }

  async expectContactUsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.contactUs), timeoutMs);
  }

  async expectContactUsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.contactUs), count, timeoutMs);
  }

  async longPressFAQ(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.fAQ));
  }

  async expectFAQValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.fAQ), value, timeoutMs);
  }

  async expectFAQEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.fAQ), timeoutMs);
  }

  async expectFAQDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.fAQ), timeoutMs);
  }

  async expectFAQChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.fAQ), timeoutMs);
  }

  async expectFAQUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.fAQ), timeoutMs);
  }

  async expectFAQFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.fAQ), timeoutMs);
  }

  async expectFAQCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.fAQ), count, timeoutMs);
  }

  async longPressTC(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.tC));
  }

  async expectTCValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.tC), value, timeoutMs);
  }

  async expectTCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.tC), timeoutMs);
  }

  async expectTCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.tC), timeoutMs);
  }

  async expectTCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.tC), timeoutMs);
  }

  async expectTCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.tC), timeoutMs);
  }

  async expectTCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.tC), timeoutMs);
  }

  async expectTCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.tC), count, timeoutMs);
  }

  async longPressTermsOfUse(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.termsOfUse));
  }

  async expectTermsOfUseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.termsOfUse), value, timeoutMs);
  }

  async expectTermsOfUseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.termsOfUse), timeoutMs);
  }

  async expectTermsOfUseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.termsOfUse), count, timeoutMs);
  }

  async longPressTrackOrders(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.trackOrders));
  }

  async expectTrackOrdersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.trackOrders), value, timeoutMs);
  }

  async expectTrackOrdersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.trackOrders), timeoutMs);
  }

  async expectTrackOrdersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.trackOrders), count, timeoutMs);
  }

  async longPressShipping(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.shipping));
  }

  async expectShippingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.shipping), value, timeoutMs);
  }

  async expectShippingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.shipping), timeoutMs);
  }

  async expectShippingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.shipping), timeoutMs);
  }

  async expectShippingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.shipping), timeoutMs);
  }

  async expectShippingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.shipping), timeoutMs);
  }

  async expectShippingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.shipping), timeoutMs);
  }

  async expectShippingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.shipping), count, timeoutMs);
  }

  async longPressCancellation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.cancellation));
  }

  async expectCancellationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.cancellation), value, timeoutMs);
  }

  async expectCancellationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.cancellation), timeoutMs);
  }

  async expectCancellationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.cancellation), timeoutMs);
  }

  async expectCancellationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.cancellation), timeoutMs);
  }

  async expectCancellationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.cancellation), timeoutMs);
  }

  async expectCancellationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.cancellation), timeoutMs);
  }

  async expectCancellationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.cancellation), count, timeoutMs);
  }

  async longPressPrivacyPolicy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.privacyPolicy));
  }

  async expectPrivacyPolicyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.privacyPolicy), value, timeoutMs);
  }

  async expectPrivacyPolicyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.privacyPolicy), timeoutMs);
  }

  async expectPrivacyPolicyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.privacyPolicy), count, timeoutMs);
  }

  async longPressGrievanceRedressal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal));
  }

  async expectGrievanceRedressalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal), value, timeoutMs);
  }

  async expectGrievanceRedressalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal), timeoutMs);
  }

  async expectGrievanceRedressalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.grievanceRedressal), count, timeoutMs);
  }

  async longPressFSSAIFoodSafetyConnect(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect));
  }

  async expectFSSAIFoodSafetyConnectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect), value, timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect), timeoutMs);
  }

  async expectFSSAIFoodSafetyConnectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.fSSAIFoodSafetyConnect), count, timeoutMs);
  }

  async longPressDishantPatel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.dishantPatel));
  }

  async expectDishantPatelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.dishantPatel), value, timeoutMs);
  }

  async expectDishantPatelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.dishantPatel), timeoutMs);
  }

  async expectDishantPatelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.dishantPatel), timeoutMs);
  }

  async expectDishantPatelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.dishantPatel), timeoutMs);
  }

  async expectDishantPatelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.dishantPatel), timeoutMs);
  }

  async expectDishantPatelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.dishantPatel), timeoutMs);
  }

  async expectDishantPatelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.dishantPatel), count, timeoutMs);
  }

  async longPressMenSportsShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.menSportsShoes));
  }

  async expectMenSportsShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.menSportsShoes), value, timeoutMs);
  }

  async expectMenSportsShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.menSportsShoes), timeoutMs);
  }

  async expectMenSportsShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.menSportsShoes), timeoutMs);
  }

  async expectMenSportsShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.menSportsShoes), timeoutMs);
  }

  async expectMenSportsShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.menSportsShoes), timeoutMs);
  }

  async expectMenSportsShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.menSportsShoes), timeoutMs);
  }

  async expectMenSportsShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.menSportsShoes), count, timeoutMs);
  }

  async longPressAdidas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.adidas));
  }

  async expectAdidasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.adidas), value, timeoutMs);
  }

  async expectAdidasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.adidas), timeoutMs);
  }

  async expectAdidasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.adidas), timeoutMs);
  }

  async expectAdidasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.adidas), timeoutMs);
  }

  async expectAdidasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.adidas), timeoutMs);
  }

  async expectAdidasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.adidas), timeoutMs);
  }

  async expectAdidasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.adidas), count, timeoutMs);
  }

  async longPressArrow(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.arrow));
  }

  async expectArrowValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.arrow), value, timeoutMs);
  }

  async expectArrowEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.arrow), timeoutMs);
  }

  async expectArrowDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.arrow), timeoutMs);
  }

  async expectArrowChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.arrow), timeoutMs);
  }

  async expectArrowUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.arrow), timeoutMs);
  }

  async expectArrowFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.arrow), timeoutMs);
  }

  async expectArrowCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.arrow), count, timeoutMs);
  }

  async longPressFila(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.fila));
  }

  async expectFilaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.fila), value, timeoutMs);
  }

  async expectFilaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.fila), timeoutMs);
  }

  async expectFilaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.fila), timeoutMs);
  }

  async expectFilaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.fila), timeoutMs);
  }

  async expectFilaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.fila), timeoutMs);
  }

  async expectFilaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.fila), timeoutMs);
  }

  async expectFilaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.fila), count, timeoutMs);
  }

  async longPressOnlineShopping(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.onlineShopping));
  }

  async expectOnlineShoppingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.onlineShopping), value, timeoutMs);
  }

  async expectOnlineShoppingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.onlineShopping), timeoutMs);
  }

  async expectOnlineShoppingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.onlineShopping), count, timeoutMs);
  }

  async longPressNike(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nike));
  }

  async expectNikeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nike), value, timeoutMs);
  }

  async expectNikeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nike), timeoutMs);
  }

  async expectNikeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nike), timeoutMs);
  }

  async expectNikeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nike), timeoutMs);
  }

  async expectNikeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nike), timeoutMs);
  }

  async expectNikeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nike), timeoutMs);
  }

  async expectNikeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nike), count, timeoutMs);
  }

  async longPressPepeJeans(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.pepeJeans));
  }

  async expectPepeJeansValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.pepeJeans), value, timeoutMs);
  }

  async expectPepeJeansEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.pepeJeans), timeoutMs);
  }

  async expectPepeJeansCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.pepeJeans), count, timeoutMs);
  }

  async longPressPuma(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.puma));
  }

  async expectPumaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.puma), value, timeoutMs);
  }

  async expectPumaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.puma), timeoutMs);
  }

  async expectPumaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.puma), timeoutMs);
  }

  async expectPumaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.puma), timeoutMs);
  }

  async expectPumaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.puma), timeoutMs);
  }

  async expectPumaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.puma), timeoutMs);
  }

  async expectPumaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.puma), count, timeoutMs);
  }

  async longPressUnitedColorsOfBenetton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton));
  }

  async expectUnitedColorsOfBenettonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton), value, timeoutMs);
  }

  async expectUnitedColorsOfBenettonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton), timeoutMs);
  }

  async expectUnitedColorsOfBenettonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.unitedColorsOfBenetton), count, timeoutMs);
  }

  async longPressFastrack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.fastrack));
  }

  async expectFastrackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.fastrack), value, timeoutMs);
  }

  async expectFastrackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.fastrack), timeoutMs);
  }

  async expectFastrackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.fastrack), timeoutMs);
  }

  async expectFastrackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.fastrack), timeoutMs);
  }

  async expectFastrackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.fastrack), timeoutMs);
  }

  async expectFastrackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.fastrack), timeoutMs);
  }

  async expectFastrackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.fastrack), count, timeoutMs);
  }

  async longPressShorts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.shorts));
  }

  async expectShortsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.shorts), value, timeoutMs);
  }

  async expectShortsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.shorts), timeoutMs);
  }

  async expectShortsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.shorts), timeoutMs);
  }

  async expectShortsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.shorts), timeoutMs);
  }

  async expectShortsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.shorts), timeoutMs);
  }

  async expectShortsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.shorts), timeoutMs);
  }

  async expectShortsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.shorts), count, timeoutMs);
  }

  async longPressBeingHuman(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.beingHuman));
  }

  async expectBeingHumanValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.beingHuman), value, timeoutMs);
  }

  async expectBeingHumanEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.beingHuman), timeoutMs);
  }

  async expectBeingHumanCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.beingHuman), count, timeoutMs);
  }

  async longPressSkirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.skirts));
  }

  async expectSkirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.skirts), value, timeoutMs);
  }

  async expectSkirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.skirts), timeoutMs);
  }

  async expectSkirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.skirts), timeoutMs);
  }

  async expectSkirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.skirts), timeoutMs);
  }

  async expectSkirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.skirts), timeoutMs);
  }

  async expectSkirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.skirts), timeoutMs);
  }

  async expectSkirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.skirts), count, timeoutMs);
  }

  async longPressWoodland(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.woodland));
  }

  async expectWoodlandValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.woodland), value, timeoutMs);
  }

  async expectWoodlandEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.woodland), timeoutMs);
  }

  async expectWoodlandDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.woodland), timeoutMs);
  }

  async expectWoodlandChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.woodland), timeoutMs);
  }

  async expectWoodlandUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.woodland), timeoutMs);
  }

  async expectWoodlandFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.woodland), timeoutMs);
  }

  async expectWoodlandCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.woodland), count, timeoutMs);
  }

  async longPressSupra(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.supra));
  }

  async expectSupraValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.supra), value, timeoutMs);
  }

  async expectSupraEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.supra), timeoutMs);
  }

  async expectSupraDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.supra), timeoutMs);
  }

  async expectSupraChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.supra), timeoutMs);
  }

  async expectSupraUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.supra), timeoutMs);
  }

  async expectSupraFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.supra), timeoutMs);
  }

  async expectSupraCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.supra), count, timeoutMs);
  }

  async longPressDresses(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.dresses));
  }

  async expectDressesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.dresses), value, timeoutMs);
  }

  async expectDressesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.dresses), timeoutMs);
  }

  async expectDressesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.dresses), timeoutMs);
  }

  async expectDressesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.dresses), timeoutMs);
  }

  async expectDressesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.dresses), timeoutMs);
  }

  async expectDressesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.dresses), timeoutMs);
  }

  async expectDressesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.dresses), count, timeoutMs);
  }

  async longPressMenShopping(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.menShopping));
  }

  async expectMenShoppingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.menShopping), value, timeoutMs);
  }

  async expectMenShoppingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.menShopping), timeoutMs);
  }

  async expectMenShoppingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.menShopping), timeoutMs);
  }

  async expectMenShoppingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.menShopping), timeoutMs);
  }

  async expectMenShoppingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.menShopping), timeoutMs);
  }

  async expectMenShoppingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.menShopping), timeoutMs);
  }

  async expectMenShoppingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.menShopping), count, timeoutMs);
  }

  async longPressWomenShopping(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.womenShopping));
  }

  async expectWomenShoppingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.womenShopping), value, timeoutMs);
  }

  async expectWomenShoppingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.womenShopping), timeoutMs);
  }

  async expectWomenShoppingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.womenShopping), timeoutMs);
  }

  async expectWomenShoppingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.womenShopping), timeoutMs);
  }

  async expectWomenShoppingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.womenShopping), timeoutMs);
  }

  async expectWomenShoppingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.womenShopping), timeoutMs);
  }

  async expectWomenShoppingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.womenShopping), count, timeoutMs);
  }

  async longPressBlazers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.blazers));
  }

  async expectBlazersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.blazers), value, timeoutMs);
  }

  async expectBlazersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.blazers), timeoutMs);
  }

  async expectBlazersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.blazers), timeoutMs);
  }

  async expectBlazersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.blazers), timeoutMs);
  }

  async expectBlazersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.blazers), timeoutMs);
  }

  async expectBlazersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.blazers), timeoutMs);
  }

  async expectBlazersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.blazers), count, timeoutMs);
  }

  async longPressSherwani(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.sherwani));
  }

  async expectSherwaniValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.sherwani), value, timeoutMs);
  }

  async expectSherwaniEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.sherwani), timeoutMs);
  }

  async expectSherwaniDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.sherwani), timeoutMs);
  }

  async expectSherwaniChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.sherwani), timeoutMs);
  }

  async expectSherwaniUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.sherwani), timeoutMs);
  }

  async expectSherwaniFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.sherwani), timeoutMs);
  }

  async expectSherwaniCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.sherwani), count, timeoutMs);
  }

  async longPressOnlineShopping2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.onlineShopping2));
  }

  async expectOnlineShopping2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.onlineShopping2), value, timeoutMs);
  }

  async expectOnlineShopping2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.onlineShopping2), timeoutMs);
  }

  async expectOnlineShopping2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.onlineShopping2), timeoutMs);
  }

  async expectOnlineShopping2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.onlineShopping2), timeoutMs);
  }

  async expectOnlineShopping2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.onlineShopping2), timeoutMs);
  }

  async expectOnlineShopping2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.onlineShopping2), timeoutMs);
  }

  async expectOnlineShopping2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.onlineShopping2), count, timeoutMs);
  }

  async longPressMenOliveGreen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.menOliveGreen));
  }

  async expectMenOliveGreenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.menOliveGreen), value, timeoutMs);
  }

  async expectMenOliveGreenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.menOliveGreen), timeoutMs);
  }

  async expectMenOliveGreenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.menOliveGreen), timeoutMs);
  }

  async expectMenOliveGreenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.menOliveGreen), timeoutMs);
  }

  async expectMenOliveGreenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.menOliveGreen), timeoutMs);
  }

  async expectMenOliveGreenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.menOliveGreen), timeoutMs);
  }

  async expectMenOliveGreenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.menOliveGreen), count, timeoutMs);
  }

  async longPressRahulRaina(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.rahulRaina));
  }

  async expectRahulRainaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.rahulRaina), value, timeoutMs);
  }

  async expectRahulRainaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.rahulRaina), timeoutMs);
  }

  async expectRahulRainaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.rahulRaina), timeoutMs);
  }

  async expectRahulRainaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.rahulRaina), timeoutMs);
  }

  async expectRahulRainaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.rahulRaina), timeoutMs);
  }

  async expectRahulRainaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.rahulRaina), timeoutMs);
  }

  async expectRahulRainaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.rahulRaina), count, timeoutMs);
  }

  async longPressSaurabhSharma(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.saurabhSharma));
  }

  async expectSaurabhSharmaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.saurabhSharma), value, timeoutMs);
  }

  async expectSaurabhSharmaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.saurabhSharma), timeoutMs);
  }

  async expectSaurabhSharmaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.saurabhSharma), timeoutMs);
  }

  async expectSaurabhSharmaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.saurabhSharma), timeoutMs);
  }

  async expectSaurabhSharmaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.saurabhSharma), timeoutMs);
  }

  async expectSaurabhSharmaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.saurabhSharma), timeoutMs);
  }

  async expectSaurabhSharmaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.saurabhSharma), count, timeoutMs);
  }

  async longPressClothing2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.clothing2));
  }

  async expectClothing2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.clothing2), value, timeoutMs);
  }

  async expectClothing2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.clothing2), timeoutMs);
  }

  async expectClothing2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.clothing2), count, timeoutMs);
  }

  async longPressJewellery(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.jewellery));
  }

  async expectJewelleryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.jewellery), value, timeoutMs);
  }

  async expectJewelleryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.jewellery), timeoutMs);
  }

  async expectJewelleryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.jewellery), count, timeoutMs);
  }

  async longPressTShirts2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.tShirts2));
  }

  async expectTShirts2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.tShirts2), value, timeoutMs);
  }

  async expectTShirts2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.tShirts2), timeoutMs);
  }

  async expectTShirts2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.tShirts2), timeoutMs);
  }

  async expectTShirts2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.tShirts2), timeoutMs);
  }

  async expectTShirts2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.tShirts2), timeoutMs);
  }

  async expectTShirts2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.tShirts2), timeoutMs);
  }

  async expectTShirts2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.tShirts2), count, timeoutMs);
  }

  async longPressShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.shoes));
  }

  async expectShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.shoes), value, timeoutMs);
  }

  async expectShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.shoes), timeoutMs);
  }

  async expectShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.shoes), timeoutMs);
  }

  async expectShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.shoes), timeoutMs);
  }

  async expectShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.shoes), timeoutMs);
  }

  async expectShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.shoes), timeoutMs);
  }

  async expectShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.shoes), count, timeoutMs);
  }

  async longPressBags(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.bags));
  }

  async expectBagsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.bags), value, timeoutMs);
  }

  async expectBagsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.bags), timeoutMs);
  }

  async expectBagsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.bags), timeoutMs);
  }

  async expectBagsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.bags), timeoutMs);
  }

  async expectBagsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.bags), timeoutMs);
  }

  async expectBagsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.bags), timeoutMs);
  }

  async expectBagsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.bags), count, timeoutMs);
  }

  async longPressWatches(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.watches));
  }

  async expectWatchesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.watches), value, timeoutMs);
  }

  async expectWatchesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.watches), timeoutMs);
  }

  async expectWatchesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.watches), timeoutMs);
  }

  async expectWatchesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.watches), timeoutMs);
  }

  async expectWatchesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.watches), timeoutMs);
  }

  async expectWatchesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.watches), timeoutMs);
  }

  async expectWatchesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.watches), count, timeoutMs);
  }

  async longPressCaps(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.caps));
  }

  async expectCapsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.caps), value, timeoutMs);
  }

  async expectCapsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.caps), timeoutMs);
  }

  async expectCapsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.caps), timeoutMs);
  }

  async expectCapsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.caps), timeoutMs);
  }

  async expectCapsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.caps), timeoutMs);
  }

  async expectCapsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.caps), timeoutMs);
  }

  async expectCapsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.caps), count, timeoutMs);
  }

  async longPressShirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.shirts));
  }

  async expectShirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.shirts), value, timeoutMs);
  }

  async expectShirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.shirts), timeoutMs);
  }

  async expectShirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.shirts), timeoutMs);
  }

  async expectShirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.shirts), timeoutMs);
  }

  async expectShirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.shirts), timeoutMs);
  }

  async expectShirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.shirts), timeoutMs);
  }

  async expectShirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.shirts), count, timeoutMs);
  }

  async longPressBackpacks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.backpacks));
  }

  async expectBackpacksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.backpacks), value, timeoutMs);
  }

  async expectBackpacksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.backpacks), timeoutMs);
  }

  async expectBackpacksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.backpacks), count, timeoutMs);
  }

  async longPressPumaTshirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.pumaTshirts));
  }

  async expectPumaTshirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.pumaTshirts), value, timeoutMs);
  }

  async expectPumaTshirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.pumaTshirts), timeoutMs);
  }

  async expectPumaTshirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.pumaTshirts), count, timeoutMs);
  }

  async longPressWoodlandShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.woodlandShoes));
  }

  async expectWoodlandShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.woodlandShoes), value, timeoutMs);
  }

  async expectWoodlandShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.woodlandShoes), timeoutMs);
  }

  async expectWoodlandShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.woodlandShoes), count, timeoutMs);
  }

  async longPressTitanWatches(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.titanWatches));
  }

  async expectTitanWatchesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.titanWatches), value, timeoutMs);
  }

  async expectTitanWatchesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.titanWatches), timeoutMs);
  }

  async expectTitanWatchesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.titanWatches), count, timeoutMs);
  }

  async longPressFastrackWatches(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.fastrackWatches));
  }

  async expectFastrackWatchesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.fastrackWatches), value, timeoutMs);
  }

  async expectFastrackWatchesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.fastrackWatches), timeoutMs);
  }

  async expectFastrackWatchesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.fastrackWatches), count, timeoutMs);
  }

  async longPressWranglerShirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.wranglerShirts));
  }

  async expectWranglerShirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.wranglerShirts), value, timeoutMs);
  }

  async expectWranglerShirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.wranglerShirts), timeoutMs);
  }

  async expectWranglerShirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.wranglerShirts), count, timeoutMs);
  }

  async longPressAdidasTshirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.adidasTshirts));
  }

  async expectAdidasTshirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.adidasTshirts), value, timeoutMs);
  }

  async expectAdidasTshirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.adidasTshirts), timeoutMs);
  }

  async expectAdidasTshirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.adidasTshirts), count, timeoutMs);
  }

  async longPressNikeShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nikeShoes));
  }

  async expectNikeShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nikeShoes), value, timeoutMs);
  }

  async expectNikeShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nikeShoes), timeoutMs);
  }

  async expectNikeShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nikeShoes), count, timeoutMs);
  }

  async longPressRoadsterShirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.roadsterShirts));
  }

  async expectRoadsterShirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.roadsterShirts), value, timeoutMs);
  }

  async expectRoadsterShirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.roadsterShirts), timeoutMs);
  }

  async expectRoadsterShirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.roadsterShirts), count, timeoutMs);
  }

  async longPressCasualShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.casualShoes));
  }

  async expectCasualShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.casualShoes), value, timeoutMs);
  }

  async expectCasualShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.casualShoes), timeoutMs);
  }

  async expectCasualShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.casualShoes), count, timeoutMs);
  }

  async longPressRunningShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.runningShoes));
  }

  async expectRunningShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.runningShoes), value, timeoutMs);
  }

  async expectRunningShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.runningShoes), timeoutMs);
  }

  async expectRunningShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.runningShoes), count, timeoutMs);
  }

  async longPressNikeSportsShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes));
  }

  async expectNikeSportsShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes), value, timeoutMs);
  }

  async expectNikeSportsShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes), timeoutMs);
  }

  async expectNikeSportsShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.nikeSportsShoes), count, timeoutMs);
  }

  async longPressJeans2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.jeans2));
  }

  async expectJeans2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.jeans2), value, timeoutMs);
  }

  async expectJeans2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.jeans2), timeoutMs);
  }

  async expectJeans2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.jeans2), timeoutMs);
  }

  async expectJeans2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.jeans2), timeoutMs);
  }

  async expectJeans2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.jeans2), timeoutMs);
  }

  async expectJeans2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.jeans2), timeoutMs);
  }

  async expectJeans2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.jeans2), count, timeoutMs);
  }

  async longPressBeingHumanTshirts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts));
  }

  async expectBeingHumanTshirtsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts), value, timeoutMs);
  }

  async expectBeingHumanTshirtsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts), timeoutMs);
  }

  async expectBeingHumanTshirtsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.beingHumanTshirts), count, timeoutMs);
  }

  async longPressConverseShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.converseShoes));
  }

  async expectConverseShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.converseShoes), value, timeoutMs);
  }

  async expectConverseShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.converseShoes), timeoutMs);
  }

  async expectConverseShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.converseShoes), count, timeoutMs);
  }

  async longPressCricketShoes(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.cricketShoes));
  }

  async expectCricketShoesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.cricketShoes), value, timeoutMs);
  }

  async expectCricketShoesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.cricketShoes), timeoutMs);
  }

  async expectCricketShoesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.cricketShoes), count, timeoutMs);
  }

  async longPressContactUs2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.contactUs2));
  }

  async expectContactUs2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.contactUs2), value, timeoutMs);
  }

  async expectContactUs2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.contactUs2), timeoutMs);
  }

  async expectContactUs2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.contactUs2), count, timeoutMs);
  }

  async longPressAFlipkartCompany(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany));
  }

  async expectAFlipkartCompanyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany), value, timeoutMs);
  }

  async expectAFlipkartCompanyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany), timeoutMs);
  }

  async expectAFlipkartCompanyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.aFlipkartCompany), count, timeoutMs);
  }

  async longPressPlayVideo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.playVideo));
  }

  async expectPlayVideoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.playVideo), value, timeoutMs);
  }

  async expectPlayVideoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.playVideo), timeoutMs);
  }

  async expectPlayVideoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.playVideo), timeoutMs);
  }

  async expectPlayVideoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.playVideo), timeoutMs);
  }

  async expectPlayVideoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.playVideo), count, timeoutMs);
  }

  async longPressHidePlayerControls(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls));
  }

  async expectHidePlayerControlsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls), value, timeoutMs);
  }

  async expectHidePlayerControlsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls), timeoutMs);
  }

  async expectHidePlayerControlsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls), timeoutMs);
  }

  async expectHidePlayerControlsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls), timeoutMs);
  }

  async expectHidePlayerControlsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.hidePlayerControls), count, timeoutMs);
  }

  async longPressTop5TShirtHacks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks));
  }

  async expectTop5TShirtHacksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks), value, timeoutMs);
  }

  async expectTop5TShirtHacksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks), timeoutMs);
  }

  async expectTop5TShirtHacksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks), timeoutMs);
  }

  async expectTop5TShirtHacksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks), timeoutMs);
  }

  async expectTop5TShirtHacksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks), timeoutMs);
  }

  async expectTop5TShirtHacksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks), timeoutMs);
  }

  async expectTop5TShirtHacksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.top5TShirtHacks), count, timeoutMs);
  }

  async longPressMyntra(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.myntra));
  }

  async expectMyntraValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.myntra), value, timeoutMs);
  }

  async expectMyntraEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.myntra), timeoutMs);
  }

  async expectMyntraDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.myntra), timeoutMs);
  }

  async expectMyntraChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.myntra), timeoutMs);
  }

  async expectMyntraUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.myntra), timeoutMs);
  }

  async expectMyntraFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.myntra), timeoutMs);
  }

  async expectMyntraCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.myntra), count, timeoutMs);
  }

  async longPressShare(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.share));
  }

  async expectShareValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.share), value, timeoutMs);
  }

  async expectShareChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.share), timeoutMs);
  }

  async expectShareUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.share), timeoutMs);
  }

  async expectShareFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.share), timeoutMs);
  }

  async expectShareCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.share), count, timeoutMs);
  }

  async longPressWatchOnYouTube(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube));
  }

  async expectWatchOnYouTubeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube), value, timeoutMs);
  }

  async expectWatchOnYouTubeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube), timeoutMs);
  }

  async expectWatchOnYouTubeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube), timeoutMs);
  }

  async expectWatchOnYouTubeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube), timeoutMs);
  }

  async expectWatchOnYouTubeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube), timeoutMs);
  }

  async expectWatchOnYouTubeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube), timeoutMs);
  }

  async expectWatchOnYouTubeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, MenTshirtsPage.L.watchOnYouTube), count, timeoutMs);
  }

}
