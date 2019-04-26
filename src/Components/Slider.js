import React from 'react';

class Slider extends React.Component {

    render() {
        return (
            <div className= { this.props.sliderClass }>
                <p className="slider-text">{ this.props.sliderLabel } ({ this.props.value }%)</p> <br/>
                <input className="slider"
                       type="range"
                       name={this.props.name}
                       min="0"
                       max="100"
                       value={this.props.value}
                       onChange={this.props.onChange}
                       disabled={this.props.disabled}
                />
            </div>
        );
    }
}

export default Slider;