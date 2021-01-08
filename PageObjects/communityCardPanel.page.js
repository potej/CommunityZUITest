class CommunityPanel {
    constructor() { };
    get divTag() { return $('.evnt-community-topic') };
    get divTags() { return $('.evnt-topics-wrapper') };
    get divCommunityName() { return $('.evnt-desktop-info .evnt-card-name') };
    get iconNavigateBack() { return $('.evnt-nav-cell [href]') };
    get divLocation() { return $('.evnt-desktop-info .location') };

    async getTagText(tagNumber) {
        return await this.divTag.getText();
    }
    async getCommunityNameText() {
        return await this.divCommunityName.getText();
    }
}
module.exports = { CommunityPanel };