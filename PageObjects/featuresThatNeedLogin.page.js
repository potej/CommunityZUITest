class FeaturesThatRequireLogin {
    constructor() {}
    get iconChat() { return $('.evnt-messages-button') };
    get buttonCreate() { return $('[id=createDropdown]') };
    get dropdownItemsCreate() { return $$('.create-icon') };
    get buttonLogin() { return $('.login') }
}
module.exports = { FeaturesThatRequireLogin };