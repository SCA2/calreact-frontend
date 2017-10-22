import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from '../components/Appointment';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Appointment />);
});

describe('render', () => {
  it('should display the appointment title', () => {
    const appointment = mount(
      <BrowserRouter>
        <Appointment appointment={{id: 1, title: 'Title', appt_time: new Date()}} />
      </BrowserRouter>
    );
    const title = <h3>Title</h3>;
    expect(appointment.contains(title)).toEqual(true);
  })

  it('should display the appointment time', () => {
    const appointment = mount(
      <BrowserRouter>
        <Appointment appointment={{id: 1, title: 'Title', appt_time: new Date('01/01/2018, 12:00:00')}} />
      </BrowserRouter>
    );
    const time = <p>January 01 2018, 12:00:00 pm</p>;
    console.log(appointment);
    expect(appointment.contains(time)).toEqual(true);
  })
})