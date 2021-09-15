import React from "react";
import PreTraining from "./preTraining";
import { render,fireEvent }from '../../utils/tetsUtils/test.utils'


const navigation={
    push:jest.fn()
};
   
    const route={
        params:{
            training:[{name: 'FOR TIME',
                exercises: [{
                  exercise: { name: 'BURPEES',
                    description: 'asdasd',
                    picture: 'asd',
                    done:false,
                    },
                  reps: 10,
                }],
              }]}
        };


describe('Given a PreTraining component',()=>{
    describe('When it is render',()=>{
        let screen;
        beforeEach(()=>{
            screen=render(<PreTraining navigation={navigation} route={route}></PreTraining>);
        });
        test('Then should match tHe snapshot',()=>{
            expect(screen).toMatchSnapshot();
          });
          describe('And AMRAP button is clicked', () => {
            test('Then navigation.push should have been called with handleClickAMRAP', () => {
              const AMRAP = screen.getByTestId('HomePage');
              fireEvent.press(AMRAP);
              expect(navigation.push).toHaveBeenCalled();
            });
          });
      
        });
    });
 