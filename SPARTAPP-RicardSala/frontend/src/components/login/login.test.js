import React from "react";
import {render} from '../../utils/tetsUtils/test.utils'
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
  })
})