import React from "react";
import Training from "./training";
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


describe('Given a Training component',()=>{
    describe('When it is render',()=>{
        let screen;
        beforeEach(()=>{
            screen=render(<Training navigation={navigation} route={route}></Training>);
        });
        test('Then should match tHe snapshot',()=>{
            expect(screen).toMatchSnapshot();
          });
          describe('And sign up button is clicked', () => {
            test('Then navigation.push should have been called with Register', () => {
              const Button = screen.getByTestId('HomePage');
              fireEvent.press(Button);
              expect(navigation.push).toHaveBeenCalledWith('HomePage');
            });
          });
      
        });
    });
 