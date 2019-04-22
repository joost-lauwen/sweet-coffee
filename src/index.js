import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Components/Button';
import Slider from './Components/SimpleSlider';
import CoffeeStatus from './Components/CoffeeStatus';
// import SweetCoffeeMock from './Components/SweetCoffeeMock';
import './css/index.css';

class App extends React.Component {
    constructor(props){
        super(props); 
            this.state = { status: false };
            this.updateStatus = this.updateStatus.bind(this)
    }

    updateStatus(event) {
        this.setState({
            status: this.state.status?false:true,
        })
    }

    render() {
        return(
            <div className="interface">
                <Button drinkName="Americano" updateStatus={this.updateStatus} status={this.state.status} />
                <Button drinkName="Cappuccino" updateStatus={this.updateStatus} status={this.state.status} />
                <Button drinkName="Wiener Melange" updateStatus={this.updateStatus} status={this.state.status} />
                <Button drinkName="Chocolade" updateStatus={this.updateStatus} status={this.state.status} />
                <Button drinkName="Zwarte thee" updateStatus={this.updateStatus} status={this.state.status} />
                <Button drinkName="Earl Gray" updateStatus={this.updateStatus}status={this.state.status} />
                <Slider sliderLabel= "Suiker" />
                <Slider sliderLabel="Melk" />
                <CoffeeStatus status={this.state.status}></CoffeeStatus>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));