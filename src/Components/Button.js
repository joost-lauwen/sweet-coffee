import React from 'react';

class Button extends React.Component {

    render() {
        return(
            <button className="button" onClick={this.props.updateStatus}>
                {this.props.drinkName}
            </button>
        )
    }
}

export default Button;