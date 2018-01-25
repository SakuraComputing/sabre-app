import React from 'react';
import Navbar from '../../src/components/Navbar';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Navbar test',() => {

   let navbar;

   let mockCallBack = jest.fn();

   describe('#onHamburgerClick', () => {
      describe('no callback provided',() => {
         it('should not error', () => {
             navbar = shallow(<Navbar />);
             navbar.instance().onHamburgerClick();
         });
      });

      describe('when callback provided should invoke', () => {
         beforeEach(() => {
             navbar = shallow(<Navbar onHamburgerClick={mockCallBack}/>)
             navbar.instance().onHamburgerClick();
         });
         it('should render the hamburger menu',() => {
            expect(mockCallBack).toHaveBeenCalled();
         });
      });
   });

   it('should render the navbar',() => {
       // const wrapper = shallow(<Navbar />);
       // expect(wrapper).toMatchSnapshot();
       const wrapper = renderer.create(<Navbar />);
       let tree = wrapper.toJSON();
       expect(tree).toMatchSnapshot();
   })
});
