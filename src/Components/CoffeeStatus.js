import React from 'react';

class CoffeeStatus extends React.Component {

    render() {
        return(
            <div>
                <p className="status">
                    { this.props.status? "Machine maakt " : 'Klaar voor keuze' }
                </p>
            </div>
        )
    }
}

export default CoffeeStatus;