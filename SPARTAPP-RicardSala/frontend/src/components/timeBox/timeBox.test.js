import React from "react";
import {render} from '../../utils/tetsUtils/test.utils'

import Timer from "./timeBox";


const time={
    time:jest.fn()
}

describe('Given a Timer component',()=>{
    describe('When it is render',()=>{
        let screen
        beforeEach(()=>{
            screen=render(<Timer  hoursMinSecs={time}/>)
        })
        test('Then should match the snapshot',()=>{
            expect(screen).toMatchSnapshot();
          })
        })
    })