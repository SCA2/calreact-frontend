import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from '../src/components/Appointment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Appointment />, div);
});
