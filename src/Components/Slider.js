import React from 'react';

class Slider extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className= { this.props.sliderClass }>
                <p className="slider-text">{this.props.sliderLabel}</p> <br/>
                <input className="slider"
                       type="range"
                       name="points"
                       min="0"
                       max="100"
                       disabled={this.props.disabled}/>
            </div>
        );
    }
}

export default Slider;