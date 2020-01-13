// react-test-renderer
// react-test-renderer lets our react test components inside reguler js code 
// And we can assert something what got rendered
import React from 'react';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
// import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';
import '../setupTest';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  // expect(wrapper.find('h1').text()).toBe('Expensify');
  // we get axcess to render output from renderer
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />)
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  // console.log(renderer.getRenderOutput());
});


