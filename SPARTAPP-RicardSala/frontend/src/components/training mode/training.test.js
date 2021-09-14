import React from "react";
import Training from "./training";
import { render }from '../../utils/tetsUtils/test.utils'

const navigation={
    push:jest.fn()
}

describe('Given a Training component',()=>{
    describe('When it is render',()=>{
        let screen
        beforeEach(()=>{
            screen=render(<Training navigation={navigation}/>)
        })
        test('Then should match tHe snapshot',()=>{
            expect(screen).toMatchSnapshot();
          })
       
        })
    })
