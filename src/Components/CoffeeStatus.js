import React from 'react';

class CoffeeStatus extends React.Component {

    render() {
        const drinkName = this.props.drinkName;
        const status = this.props.status? "Machine maakt " + drinkName : 'Klaar voor keuze';
        return(
            <div className="status-container">
                <p className="status">
                    { status }
                </p>
            </div>
        )
    }
}

export default CoffeeStatus;