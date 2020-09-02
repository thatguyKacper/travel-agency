import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

const select = {
  name: '.name',
  number: '.number',
};

const mockProps = {
  name: 'name',
  number: 'number',
};


describe('Component Contact', () => {

  it('should render component without error', () => {
    const component = shallow(<Contact />);

    expect(component).toBeTruthy();
  });

  it('should render correctly elements', () => {
    const component = shallow(<Contact />);

    expect(component.exists(select.name)).toEqual(true);
    expect(component.exists(select.number)).toEqual(true);
  });

  it('should render correct name and phone number', () => {
    const component = shallow(<Contact {...mockProps} />);

    expect(component.find(select.name).text()).toEqual(mockProps.name);
    expect(component.find(select.number).text()).toEqual(mockProps.number);
  });
}); 