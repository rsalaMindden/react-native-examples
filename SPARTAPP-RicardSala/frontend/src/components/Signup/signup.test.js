import React from "react";
import Signup from './Signup'
import {render,fireEvent}from '../../utils/tetsUtils/test.utils'
import {registerUser} from '../../redux/actions/actionCreators';

const navigation={
    pop:jest.fn(),
    navigate:jest.fn()
}
jest.mock('../../redux/actions/actionCreators',()=>({
    registerUser: jest.fn()
  }));


  handleUsernameFocus=jest.fn()

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

describe('And name is valid but email is not', () => {
  describe('And you click registerButton', () => {
    let screen;
    beforeEach(() => {
      screen=render(<Signup navigation={navigation}/>)
      const usernameInput = screen.getByTestId('usernameInput');
      fireEvent(usernameInput, 'focus');
      fireEvent.changeText(usernameInput, 'Riki');
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
describe('And name, email are valid but email is not', () => {
  describe('And you click registerButton', () => {
    let screen;
    beforeEach(() => {
      screen=render(<Signup navigation={navigation}/>)
      const usernameInput = screen.getByTestId('usernameInput');
      const emailInput = screen.getByTestId('emailInput');
      fireEvent.changeText(usernameInput, 'Riki');
      fireEvent(emailInput, 'focus');
      fireEvent.changeText(emailInput, 'example@example.com');
      const registerButton = screen.getByTestId('registerButton');
      fireEvent.press(registerButton);
    });

    test('Then should render a Text with testId invalidPassword', () => {
      expect(screen.queryByTestId('invalidPassword')).not.toBe(null);
    });

    describe('And you focus on passwordInput', () => {
      test('Then should not render a Text with testId invalidPassword', () => {
        const passwordInput = screen.getByTestId('passwordInput');
        fireEvent(passwordInput, 'focus');
        expect(screen.queryByTestId('invalidPassword')).toBe(null);
      });
    });
  });
});

describe('And name, email, password, are valid', () => {
  describe('And you click registerButton', () => {
    const name = 'Riki';
    const email = 'juan@email.com';
    const password = 'Aa111111';
   
    let screen;
    beforeEach(() => {
      screen=render(<Signup navigation={navigation}/>)
       registerUser.mockReturnValue({ type: '' });
      const usernameInput = screen.getByTestId('usernameInput');
      const emailInput = screen.getByTestId('emailInput');
      const passwordInput = screen.getByTestId('passwordInput');
      fireEvent.changeText(usernameInput, name);
      fireEvent.changeText(emailInput, email);
      fireEvent.changeText(passwordInput, password);
      const registerButton = screen.getByTestId('registerButton');
      fireEvent.press(registerButton);
    });
    test('Then should call registerUser with the name, email and password typed', () => {
      expect(registerUser).toHaveBeenCalledWith({ name, email, password });
    });

    
    test('Then should call navigation.pop', () => {
      expect(navigation.pop).toHaveBeenCalled();
    });
  });
});