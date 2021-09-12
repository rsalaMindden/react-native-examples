import React from "react";
import Signup from './Signup'
import {render,fireEvent}from '../../utils/tetsUtils/test.utils'

const navigation={
    pop:jest.fn()
}
jest.mock('../../redux/actions/actionCreators',()=>({
    registerUser: jest.fn()
  }));



describe('Given a Signup component',()=>{
    describe('When it is render',()=>{
        let screen
        beforeEach(()=>{
            screen=render(<Signup navigation={navigation}/>)
        })
        test('Then should match the snapshot',()=>{
            expect(screen).toMatchSnapshot();
          })

          describe('And you click on loginPageButton', () => {
            test('Then navigation.pop should have been called', () => {
              const loginPageButton = screen.getByTestId('loginPageButton');
              fireEvent.press(loginPageButton);
              expect(navigation.pop).toHaveBeenCalled();
            });
          })

          describe('And usernameInput is empty', () => {
            describe('And you click registerButton', () => {
              beforeEach(() => {
                const registerButton = screen.getByTestId('registerButton');
                fireEvent.press(registerButton);
              });
              test('Then should render a Text with testId invalidUsername', () => {
                expect(screen.queryByTestId('invalidUsername')).not.toBe(null);
              });
    })
})
describe('And you focus on emailInput', () => {
    test('Then should not render a Text with testId invalidUsername', () => {
      const usernameInput = screen.getByTestId('usernameInput');
      fireEvent(usernameInput, 'onChangeText');
      expect(screen.queryByTestId('invalidUsername')).toBe(null);
    });
  });
})
})

describe('And username is valid but email is not', () => {
  describe('And you click registerButton', () => {
    let screen;
    beforeEach(() => {
      const usernameInput = screen.getByTestId('usernameInput');
      console.log(usernameInput)
      fireEvent(usernameInput, 'focus');
      fireEvent.changeText(usernameInput, 'Juan');
      const registerButton = screen.getByTestId('registerButton');
      fireEvent.press(registerButton);
    });

    test('Then should render a Text with testId invalidEmail', () => {
      expect(screen.queryByTestId('invalidEmail')).not.toBe(null);
    });

    describe('And you focus on emailInput', () => {
      test('Then should not render a Text with testId invalidEmail', () => {
        const emailInput = screen.getByTestId('emailInput');
        fireEvent(emailInput, 'focus');
        expect(screen.queryByTestId('invalidEmail')).toBe(null);
      });
    });
  });
});