/**
 * Doel van dit object is het bieden van een interface naar de koffiezetmachine, er is gedrag geimplementeerd
 * echter voel je vrij om dit naar behoefte aan te passen. Zolang de interface van het mock object identiek blijft.
 * 
 * 
 */

class SweetCoffeeMachine {

    constructor() {
        this.errorState = 0;
        this.totalMilk = 100;
        this.totalSugar = 100;
        this.totalChocolate = 100;
    }

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
    makeAmericano(sugar, milk) {
        this.totalMilk = (this.totalMilk - milk);
        this.totalSugar = (this.totalSugar - sugar);
        return true;
    }

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
    makeCapoccino(sugar, milk) {
        this.totalMilk = (this.totalMilk - milk);
        this.totalSugar = (this.totalSugar - sugar);
        return true;
    }

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
    makeWienerMelange(sugar, milk) {
        this.totalMilk = (this.totalMilk - milk);
        this.totalSugar = (this.totalSugar - sugar);
        return true;
    }

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
    makeChoco(sugar, milk) {
        this.totalMilk = (this.totalMilk - milk);
        this.totalSugar = (this.totalSugar - sugar);
        this.totalChocolate = (this.totalChocolate - 20);
        return true;
    }

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
    makeBlackTea(sugar, milk) {
        this.totalMilk = (this.totalMilk - milk);
        this.totalSugar = (this.totalSugar - sugar);
        return true;
    }

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
    makeEarlGray(sugar, milk) {
        this.totalMilk = (this.totalMilk - milk);
        this.totalSugar = (this.totalSugar - sugar);
        return true;
    }

    /**
     * Callback for retrieving error messages, takes callback function as parameter. Setting the callback
     * tiggers a response in a minute
     */
    errorCallback(callback) {
        this._cbError = callback;

        setTimeout(function () {
            callback(Math.round(Math.random() * 3));
        }, Math.random() * 15000);
    }

    /**
     * Callback for retrieving ready messages, takes callback function as parameter.  Setting the callback
     * tiggers a response in a minute
     */
    readyCallback(callback) {
        this._cbReady = callback;

        setTimeout(function () {
            callback();
        }, Math.random() * 15000);
    }
}

export default SweetCoffeeMachine;
