class MasterPage {
    constructor() { }
    async navigateTo(path) {
        browser.ignoreSynchronization = true;
        console.log("Initialize");
        await browser.navigate().to(path);
        await browser.driver.manage().window().maximize();
        await browser.sleep(2000); // TODO: handle waits
    }
}
module.exports = { MasterPage };
//export default new MasterPage();
