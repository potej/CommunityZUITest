class GenericHelper{
    constructor() { };
    getRandomNumber(max) {
        let result = Math.floor(Math.random() * Math.floor(max));
        console.log(`Max value for random ${max}`); // TODO: remove. For debugging
        console.log(`Random number ${result}`); // TODO: remove. For debugging
        return result;
    }
}
module.exports = { GenericHelper };