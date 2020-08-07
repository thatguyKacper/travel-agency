import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render link to  correct adress', () => {
    const correct = 'abc';
    const component = shallow(<TripSummary id={correct} tags={[]} />);
    const correctLink = component.find('.link').prop('to');
    console.log(correctLink);
    expect(correctLink).toEqual(`/trip/${correct}`);
    console.log(component.debug());
  });
  it('img render correct props', () => {
    const expectedImage = 'image.jpg';
    const expectedAlterText = 'name';

    const component = shallow(<TripSummary tags={[]} image={expectedImage} name={expectedAlterText} />);

    const renderedImage = component.find('img').prop('src');
    const renderAlterText = component.find('img').prop('alt');

    expect(renderedImage).toEqual(expectedImage);
    expect(renderAlterText).toEqual(expectedAlterText);
  });
  it('exist correect render props', () => {
    const expectedName = 'Lorem';
    const expectedCost = '1111';
    const expectedDays = 3;

    const component = shallow(<TripSummary tags={[]} name={expectedName} cost={expectedCost} days={expectedDays} />);

    expect(component).toBeTruthy;
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should render tags in correct order', () => {
    const expectedTags = ['beach', 'pool', 'spa'];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tag').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedTags[2]);

  });
  it('should not render tags if falls or empty array', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags} />);
    expect(component.find('.tags').exists()).toEqual();
  });
});