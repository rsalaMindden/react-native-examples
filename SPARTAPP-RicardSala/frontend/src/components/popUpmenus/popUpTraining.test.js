import React from "react";
import Training from './popUpTraining'
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
          describe('And AMRAP button is clicked', () => {
            test('Then navigation.navigate should have been called with handleClickAMRAP', () => {
              const AMRAP = screen.getByTestId('AMRAP');
              fireEvent.press(AMRAP);
              expect(navigation.navigate).toHaveBeenCalled();
            });
          });

          describe('And FOR TIME button is clicked', () => {
            test('Then navigation.navigate should have been called with handleClickAMRAP', () => {
              const AMRAP = screen.getByTestId('FOR TIME');
              fireEvent.press(AMRAP);
              expect(navigation.navigate).toHaveBeenCalled();
            });
          });
          describe('And ABS button is clicked', () => {
            test('Then navigation.navigate should have been called with handleClickAMRAP', () => {
              const AMRAP = screen.getByTestId('ABS');
              fireEvent.press(AMRAP);
              expect(navigation.navigate).toHaveBeenCalled();
            });
          });
        })
    })