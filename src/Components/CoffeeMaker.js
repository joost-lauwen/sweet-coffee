class CoffeeMaker {
    constructor(props) {
    }

    static makeCoffee(drinkName, milk, sugar, sweetCoffeeMachine) {
        switch (drinkName) {
            case "Americano":
                sweetCoffeeMachine.makeAmericano(sugar, milk);
            break;
            case "Cappuccino":
                sweetCoffeeMachine.makeCapoccino(sugar, milk);
            break;
            case "Wiener Melange":
                sweetCoffeeMachine.makeWienerMelange(sugar, milk);
            break;
            case "Chocolade":
                sweetCoffeeMachine.makeChoco(sugar, milk);
            break;
            case "Zwarte thee":
                sweetCoffeeMachine.makeBlackTea(sugar, milk);
            break;
            case "Earl Gray":
                sweetCoffeeMachine.makeEarlGray(sugar, milk);
            break;
        }
    }
}

export default CoffeeMaker;
