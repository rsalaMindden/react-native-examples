import React from "react";
import HomePage from './HomePage'
import {render,fireEvent}from '../../utils/tetsUtils/test.utils'


const navigation={
    pop:jest.fn(),
    push:jest.fn()
}
jest.mock('../../redux/actions/actionCreators',()=>({
    registerUser: jest.fn()
  }));


describe('Given a HomePage component',()=>{
    describe('When it is render',()=>{
        let screen
        beforeEach(()=>{
            screen=render(<HomePage navigation={navigation}/>)
        })
        test('Then should match the snapshot',()=>{
            expect(screen).toMatchSnapshot();
          })

          describe('And popUpEquipment button is clicked', () => {
            test('Then navigation.push should have been called with handleClick', () => {
              const BUTTON = screen.getByTestId('popUpEquipment');
              fireEvent.press(BUTTON);
              expect(navigation.push).toHaveBeenCalled();
            });
          });
          describe('And popUpCrono button is clicked', () => {
            test('Then navigation.push should have been called with handleClick', () => {
              const BUTTON = screen.getByTestId('popUpCrono');
              fireEvent.press(BUTTON);
              expect(navigation.push).toHaveBeenCalled();
            });
          });
          describe('And popUpTraining button is clicked', () => {
            test('Then navigation.push should have been called with handleClick', () => {
              const BUTTON = screen.getByTestId('popUpTraining');
              fireEvent.press(BUTTON);
              expect(navigation.push).toHaveBeenCalled();
            });
          });
          
          
        
          describe('Given a HomePage component',()=>{
            describe('When it is render',()=>{
                let screen
                const initialState = {trainings:[{
                  name:'FOR TIME',
                  _id:'1234'
                }]}
                beforeEach(()=>{
                    screen=render(<HomePage navigation={navigation}/>,initialState)
                })
                    test('Then should match the snapshot',()=>{
                    expect(screen).toMatchSnapshot();
                  })
          
          describe('And email input text is changed', () => {
            test('Then the text typed should be rendered', () => {
              const trainingFiltereds = screen.getByTestId('Train');
              fireEvent.changeText(trainingFiltereds, 'FOR TIME');
              expect(screen.queryByDisplayValue('FOR TIME')).not.toBe(null);
            });
          });
        });
      });
     })
    })