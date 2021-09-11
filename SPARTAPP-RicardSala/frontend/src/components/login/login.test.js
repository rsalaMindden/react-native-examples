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
        const emailInput = screen.getByTestId('emailInput');
        let setUserEmail = jest.fn();
        fireEvent(emailInput, 'onChangeText', setUserEmail);
        fireEvent.changeText(emailInput, 'email@email.com');
        expect(screen.queryByDisplayValue(/email@email.com/i)).not.toBe(null);
      });
    });
  })
})