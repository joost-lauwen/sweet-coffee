import React from 'react';

class Button extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="button"
                    onClick={this.props.updateStatus}
                    disabled={this.props.disabled}
                    value={this.props.drinkName}>
                {this.props.drinkName}
            </button>
        )
    }
}

export default Button;