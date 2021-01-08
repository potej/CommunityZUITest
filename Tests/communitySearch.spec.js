const { CommunitySearch } = require('../PageObjects/communitySearch.page');
const { MasterPage } = require('../PageObjects/master.page.js');
const { CommunityPanel } = require('../PageObjects/communityCardPanel.page.js')
let communitySearchPage = new CommunitySearch(),
    masterPage = new MasterPage(),
    communityPanel = new CommunityPanel();

describe("Community search by name", () => {
    beforeAll(async () => {
        await masterPage.navigateTo(browser.params.systemUnderTestUrl);
        await communitySearchPage.buttonSeeAllCommunities.click();
    });
    it("should find correct results", async () => {
        await browser.sleep(4000); // TODO: handle waits
        let oneCard = await communitySearchPage.getRandomCommunityCardFromList();
        let oneCommunityName = await communitySearchPage.extractCommunityNameFromCard(oneCard);
        await communitySearchPage.editSearchField.sendKeys(oneCommunityName);
        await browser.sleep(2000); // TODO: handle waits
        let firstCartName = communitySearchPage.divCommunityNames.get(0).getText();
        expect(firstCartName).toBe(oneCommunityName, "First result is not exact name match");
    });
});
describe("Community search by tag", () => {
    beforeAll(async () => {
        await masterPage.navigateTo(browser.params.systemUnderTestUrl);
        await communitySearchPage.buttonSeeAllCommunities.click();
    });
    it("should find correct results", async () => {
        await browser.sleep(4000); // TODO: handle waits
        let oneCard = await communitySearchPage.getRandomCommunityCardFromList();
        await oneCard.click();
        await browser.sleep(4000); // TODO: handle waits
        let tagForSearch = await communityPanel.getTagText(0); // TODO: are tags compulsory? Handle if not.
        await communityPanel.iconNavigateBack.click();
        await browser.sleep(2000); // TODO: handle waits
        await communitySearchPage.editSearchField.sendKeys(tagForSearch);
        await browser.sleep(2000); // TODO: handle waits
        oneCard = await communitySearchPage.getRandomCommunityCardFromList();
        await oneCard.click();
        await browser.sleep(2000); // TODO: handle waits
        expect(await communityPanel.divTags.getText()).toContain(tagForSearch);
    });
});
describe("Community search by Location", () => {
    // Possible bug: 'Budapest Java Community' has no location info, still listed under Location = Hungary
    beforeAll(async () => {
        await masterPage.navigateTo(browser.params.systemUnderTestUrl);
        await communitySearchPage.buttonSeeAllCommunities.click();
    });
    it("should find correct results", async () => {
        await communitySearchPage.comboLocationFilter.click();
        let selectedLocation = await communitySearchPage.selectRandomLocationCheckbox();
        await communitySearchPage.comboLocationFilter.click(); // close up, might hide Community card

        oneCard = await communitySearchPage.getRandomCommunityCardFromList();
        await oneCard.click();
        await browser.sleep(2000); // TODO: handle waits
        expect(await communityPanel.divLocation.getText()).toContain(selectedLocation);
    });
});
