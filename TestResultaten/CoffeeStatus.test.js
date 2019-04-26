import React from 'react';
import CoffeeStatus from "../src/Components/CoffeeStatus";

it('renders without crashing', () => {
    const div = document.createElement('div');
    React.render(<CoffeeStatus />, div);
});