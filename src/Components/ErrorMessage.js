import React from 'react';

class ErrorMessage extends React.Component {
    render() {
        let message = '';
        switch (this.props.error) {
            case 0:
                message = '';
            break;
            case 1:
                message = 'Helaas is er een technische storing: Geen water. Het maken van dranken is helaas niet mogelijk.';
            break;
            case 2:
                message = 'Helaas is er een technische storing: Interne status fout. Het maken van dranken is helaas niet mogelijk';
            break;
            case 3:
                message = 'Helaas is er een technische storing: Interne status fout. Het maken van dranken is helaas niet mogelijk';
            break;
        }
        return(
                <div className="error-message">{message}</div>
        )
    }
}

export default ErrorMessage;