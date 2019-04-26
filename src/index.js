import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Components/Button';
import Slider from './Components/Slider';
import CoffeeStatus from './Components/CoffeeStatus';
import SweetCoffeeMachine from './Components/SweetCoffeeMock';
import CoffeeMaker from './Components/CoffeeMaker';
import './css/index.css';
import ErrorMessage from "./Components/ErrorMessage";

var sweetCoffeeMachine = new SweetCoffeeMachine();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            drinkName: false,
            disabled: false,
            sliderValue: 0,
            milk: 0,
            sugar: 0,
            error: 0
        };

        this.updateStatus = this.updateStatus.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    updateStatus(event) {
        event.preventDefault();
        this.drinkName = event.target.value;

        this.setState({
            status: !this.state.status,
            drinkName: this.drinkName,
            disabled: true,
        });

        sweetCoffeeMachine.readyCallback(this.stateReset);
        sweetCoffeeMachine.errorCallback(this.updateError, this.stateReset);
        CoffeeMaker.makeCoffee(this.drinkName, this.state.milk, this.state.sugar, sweetCoffeeMachine);
    }

    onChange = (e) => {
        (e.target.name == "Suiker") ? this.setState({milk: e.target.value}) : this.setState({sugar: e.target.value});
    };

    stateReset = () => {
        this.setState({
                disabled: false,
                milk: 0,
                sugar: 0,
                status: !this.state.status,
                error: 0
            }
        );
    };

    updateError = (errorCode) => {
        this.setState({
            error: errorCode
        });
    };

    render() {
        return (
            <div>
                <p className="title"/>

                <div className="interface">

                    <Button drinkName="Americano"
                            updateStatus={this.updateStatus}
                            status={this.state.status}
                            disabled={this.state.disabled}
                    />

                    <Button drinkName="Cappuccino"
                            updateStatus={this.updateStatus}
                            status={this.state.status}
                            disabled={this.state.disabled || (sweetCoffeeMachine.totalMilk && sweetCoffeeMachine.totalSugar <= 0)}
                    />

                    <Button drinkName="Wiener Melange"
                            updateStatus={this.updateStatus}
                            status={this.state.status}
                            disabled={this.state.disabled || sweetCoffeeMachine.totalChocolate <= 0}
                    />

                    <Button drinkName="Chocolade"
                            updateStatus={this.updateStatus}
                            status={this.state.status}
                            disabled={this.state.disabled || sweetCoffeeMachine.totalChocolate <= 0}
                    />

                    <Button drinkName="Zwarte thee"
                            updateStatus={this.updateStatus}
                            status={this.state.status}
                            disabled={this.state.disabled}
                    />

                    <Button drinkName="Earl Gray"
                            updateStatus={this.updateStatus}
                            status={this.state.status}
                            disabled={this.state.disabled}
                    />

                    <Slider sliderLabel="Suiker"
                            sliderClass="Left slider-container"
                            disabled={this.state.disabled || sweetCoffeeMachine.totalSugar <= 0}
                            onChange={this.onChange}
                            value={this.state.sugar}
                            name="Melk"
                    />

                    <Slider sliderLabel="Melk"
                            sliderClass="Right slider-container"
                            disabled={this.state.disabled || sweetCoffeeMachine.totalMilk <= 0}
                            onChange={this.onChange}
                            value={this.state.milk}
                            name={"Suiker"}
                    />

                    <CoffeeStatus status={this.state.status}
                                  drinkName={this.drinkName}
                    />

                    <ErrorMessage error={this.state.error} />

                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));