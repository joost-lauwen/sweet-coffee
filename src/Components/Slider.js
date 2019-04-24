import React from 'react';

class Slider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p className="slider-text">{this.props.sliderLabel}</p> <br/>
                <input className="slider" type="range" name="points" min="0" max="100" disabled={this.props.disabled} />
            </div>
        );
    }
}

export default Slider;