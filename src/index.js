import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Components/Button';
import Slider from './Components/Slider';
import CoffeeStatus from './Components/CoffeeStatus';
// import SweetCoffeeMock from './Components/SweetCoffeeMock';
import './css/index.css';

class App extends React.Component {
    constructor(props){
        super(props); 
            this.state = {
                status: false,
                disabled: false
            };
            this.updateStatus = this.updateStatus.bind(this);
    }

    updateStatus(event) {
        event.preventDefault();
        this.setState({
            status: !this.state.status,
            disabled: true
        });
        setTimeout(() => this.setState({disabled: false, status: !this.state.status}), 10000);
    }

    render() {
        return(
            <div className="interface">
                <Button drinkName="Americano" updateStatus={this.updateStatus} status={this.state.status} disabled={this.state.disabled}/>
                <Button drinkName="Cappuccino" updateStatus={this.updateStatus} status={this.state.status} disabled={this.state.disabled}/>
                <Button drinkName="Wiener Melange" updateStatus={this.updateStatus} status={this.state.status} disabled={this.state.disabled}/>
                <Button drinkName="Chocolade" updateStatus={this.updateStatus} status={this.state.status} disabled={this.state.disabled}/>
                <Button drinkName="Zwarte thee" updateStatus={this.updateStatus} status={this.state.status} disabled={this.state.disabled}/>
                <Button drinkName="Earl Gray" updateStatus={this.updateStatus} status={this.state.status} disabled={this.state.disabled}/>
                <Slider sliderLabel= "Suiker" disabled={this.state.disabled}/>
                <Slider sliderLabel="Melk" disabled={this.state.disabled}/>
                <CoffeeStatus status={this.state.status} drinkName={this.props.drinkName}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));