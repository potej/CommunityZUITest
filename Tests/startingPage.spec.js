const { CookieModal } = require('../PageObjects/Cookie.page.js');
const { MasterPage } = require('../PageObjects/master.page.js');
const { LoginModal } = require('../PageObjects/loginPopup.page');
const { FeaturesThatRequireLogin } = require('../PageObjects/featuresThatNeedLogin.page');

let cookieModal = new CookieModal(),
    masterPage = new MasterPage(),
    loginModal = new LoginModal(),
    featuresThatRequireLogin = new FeaturesThatRequireLogin();

describe("Cookie modal", () => {
    beforeAll(async () => {
        await masterPage.navigateTo(browser.params.systemUnderTestUrl);
    });
    it("should be displayed by default", async () => {
        expect(await browser.isElementPresent(cookieModal.divAlert)).toBe(true, "Cookie popup is not displayed after first page load");
    });
    it("should disappears if Accepted", async () => {
        await cookieModal.buttonAccept.click();
        expect(await browser.isElementPresent(cookieModal.divAlert)).toBe(false, "Cookie popup did not disappear after clicking Accept button");
    });
});
describe("Logged out users", () => {
    beforeAll(async () => {
        await masterPage.navigateTo(browser.params.systemUnderTestUrl);
    });
    it("should get Login popup if feature only available after registration", async () => {
        let triggerLoginModal = async (locators) => {
            expect(await browser.isElementPresent(loginModal.divLogin)).toBe(false, "Login modal is shown by default or did not disappear after closing it");
            for (var locator of locators) {
                await locator.click();
            }
            expect(await browser.isElementPresent(loginModal.divLogin)).toBe(true, `Clicked ${locator.locator()} from logged out state but Login popup did not appear. Is this feature provided without login?`);
            await loginModal.iconClose.click();
        };
        await triggerLoginModal([featuresThatRequireLogin.iconChat]);
        await triggerLoginModal([
            featuresThatRequireLogin.buttonCreate,
            featuresThatRequireLogin.dropdownItemsCreate.get(0)
        ]);
        await triggerLoginModal([
            featuresThatRequireLogin.buttonCreate,
            featuresThatRequireLogin.dropdownItemsCreate.get(1)
        ]);
        await triggerLoginModal([featuresThatRequireLogin.buttonLogin]);
    });
})