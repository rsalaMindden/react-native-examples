import React from "react";
import Training from './popUpCrono'
import {render,fireEvent}from '../../utils/tetsUtils/test.utils'

const navigation={
    pop:jest.fn(),
    navigate:jest.fn()
}


describe('Given a Training component',()=>{
    describe('When it is render',()=>{
        let screen
        beforeEach(()=>{
            screen=render(<Training navigation={navigation}/>)
        })
        test('Then should match the snapshot',()=>{
            expect(screen).toMatchSnapshot();
          })
  
          describe('And FOR TIME button is clicked', () => {
            test('Then navigation.navigate should have been called with handleClick', () => {
              const AMRAP = screen.getByTestId('FOR TIME');
              fireEvent.press(AMRAP);
              expect(navigation.navigate).toHaveBeenCalled();
            });
          });

          describe('And TABATA button is clicked', () => {
            test('Then navigation.navigate should have been called with handleClick', () => {
              const AMRAP = screen.getByTestId('TABATA');
              fireEvent.press(AMRAP);
              expect(navigation.navigate).toHaveBeenCalled();
            });
          });
          describe('And CRONO button is clicked', () => {
            test('Then navigation.navigate should have been called with handleClick', () => {
              const AMRAP = screen.getByTestId('CRONO');
              fireEvent.press(AMRAP);
              expect(navigation.navigate).toHaveBeenCalled();
            });
          });
        })
    })