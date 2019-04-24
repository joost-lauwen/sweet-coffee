import React from 'react';

class Slider extends React.Component {

    render() {
        return (
            <div>
                <p className="slider-text">{this.props.sliderLabel}</p> <br/>
                <input className="slider" type="range" name="points" min="0" max="100"/>
            </div>
        );
    }
}

export default Slider;