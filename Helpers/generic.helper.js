class GenericHelper{
    constructor() { };
    getRandomNumber(max) {
        let result = Math.floor(Math.random() * Math.floor(max));
        console.log(`Max value for random ${max}`); // TODO: remove. For debugging
        console.log(`Random number ${result}`); // TODO: remove. For debugging
        return result;
    }
    async click(locator) {
        await locator.click();
        await browser.sleep(2000); // TODO: handle waits
    }
    async sendKey(locator, setText) {
        await locator.sendKeys(setText);
        await browser.sleep(3000); // TODO: handle waits
    }
}
module.exports = { GenericHelper };