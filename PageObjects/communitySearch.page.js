const { GenericHelper } = require('../Helpers/generic.helper.js');
let genericHelper = new GenericHelper();

class CommunitySearch {
    constructor() { };
    get buttonSeeAllCommunities() { return $('.evnt-panel-wrapper .evnt-button.sky') }; // TODO: two results, uses first by default but not future proof
    get editSearchField() { return $('.evnt-search-filter .evnt-search') };
    get checkboxLocations() { return $$('[for*=filter_location]') };
    get comboLocationFilter() { return $('[id=filter_location]') };
    get divCommunityCards() { return $$('.evnt-community-card') };
    get divCommunityName() { return $('.evnt-name-wrapper') };
    get divCommunityNames() { return $$('.evnt-name-wrapper') };
    get divNoResults() { return $('.evnt-filters-not-found') };

    async getRandomCommunityCardFromList() { // TODO: handle banners among community cards
        let max = await this.getNumberOfDisplayedCards();
        let randomNumberWithinRange = genericHelper.getRandomNumber(max);
        return this.divCommunityCards.get(randomNumberWithinRange);
    }
    async extractCommunityNameFromCard(cardLocator) { // TODO: handle too long Community names and replace '...'
        let text = await cardLocator.$('.evnt-name-wrapper').getText();
        console.log(`Extracted Community name ${text}`); // TODO: remove. For debugging.
        return text;
    }
    async getNumberOfDisplayedCards() {
        return await $$('.evnt-communities-column').count();
    }
    async selectRandomLocationCheckbox() {
        let max = await this.checkboxLocations.count();
        let locationToSelect = this.checkboxLocations.get(genericHelper.getRandomNumber(max));
        await locationToSelect.click();
        return await locationToSelect.getText();
    }
}
module.exports = { CommunitySearch };