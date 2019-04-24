import React from 'react';

class CoffeeStatus extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="status-container">
                <p className="status">
                    { this.props.status? "Machine maakt " : 'Klaar voor keuze' }
                </p>
            </div>
        )
    }
}

export default CoffeeStatus;