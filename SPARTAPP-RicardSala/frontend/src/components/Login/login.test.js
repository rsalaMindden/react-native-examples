import React from "react";
import {render,fireEvent} from '../../utils/tetsUtils/test.utils'
import Login from "./Login";


const navigation={
  push:jest.fn()
}
jest.mock('../../redux/actions/actionCreators',()=>({
  loginUser: jest.fn()
}));

describe('Given a Login component',()=>{
  describe('When it is rendered',()=>{  
    let screen
    beforeEach(()=>{
      screen=render(<Login navigation={navigation} />)
    })
    test('Then should match the snapshot',()=>{
      expect(screen).toMatchSnapshot();
    })

    describe('And email input text is changed', () => {
      test('Then the text typed should be rendered', () => {
        const emailInput = screen.getByPlaceholderText('example@example.com');
        let setUserEmail = jest.fn();
        fireEvent(emailInput, 'onChangeText', setUserEmail);
        fireEvent.changeText(emailInput, 'email@email.com');
        expect(screen.queryByDisplayValue(/email@email.com/i)).not.toBe(null);
      });
    });

    describe('And password input text is changed', () => {
      test('Then the text typed should be rendered', () => {
        const passwordInput = screen.getByTestId('passwordInput');
        let setUserPassword = jest.fn();
        fireEvent(passwordInput, 'onChangeText', setUserPassword);
        fireEvent.changeText(passwordInput, 'password');
        expect(screen.queryByDisplayValue(/password/i)).not.toBe(null);
      });
    });

    describe('And sign up button is clicked', () => {
      test('Then navigation.push should have been called with Register', () => {
        const signUpButton = screen.getByTestId('signUpButton');
        fireEvent.press(signUpButton);
        expect(navigation.push).toHaveBeenCalledWith('Signup');
      });
    });

  })
})