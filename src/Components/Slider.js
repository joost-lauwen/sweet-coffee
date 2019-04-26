import React from 'react';
// import { sliderChange } from './Components/SweetCoffeeMock';

class Slider extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            sliderValue: 0,
        }
    }

    onChange = (e) => {
        console.log(e.target.value);
        this.setState({ sliderValue: e.target.value });
    };

    render() {
        return (
            <div className= { this.props.sliderClass }>
                <p className="slider-text">{ this.props.sliderLabel } ({ this.state.sliderValue }%)</p> <br/>
                <input className="slider"
                       id="slider"
                       type="range"
                       name="points"
                       min="0"
                       max="100"
                       value={this.state.sliderValue}
                       onChange={this.onChange.bind(this)}
                       disabled={this.props.disabled}
                />
            </div>
        );
    }
}

export default Slider;