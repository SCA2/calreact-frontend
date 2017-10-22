import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentForm from '../components/AppointmentForm';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<AppointmentForm />);
});

it('enables form submit button based on form validity', () => {
  const wrapper = mount(<BrowserRouter><AppointmentForm/></BrowserRouter>);
  expect(wrapper.find('.submit-button').props().disabled).toEqual(true);

  wrapper
    .find('[name="title"]')
    .simulate('change', {target: {value: 'Valid Title', name: 'title'}});

  wrapper.find('.rdtNext span').at(0).simulate('click');
  wrapper.find('.rdtDay').at(10).simulate('click');
  
  expect(wrapper.find('.submit-button').props().disabled).toEqual(false);
});
