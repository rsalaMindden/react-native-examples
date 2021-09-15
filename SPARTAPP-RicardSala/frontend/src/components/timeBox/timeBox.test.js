import React from "react";
import {render, fireEvent} from '../../utils/tetsUtils/test.utils'

import Timer from "./timeBox";


jest.useFakeTimers();


describe('Given a Timer component',()=>{
    describe('When it is render',()=>{
        let screen
        beforeEach(()=>{
            screen=render(<Timer  hoursMinSecs={{}}/>)
        })
        test('Then should match the snapshot',()=>{
            expect(screen).toMatchSnapshot();
          })

        describe('And pauseButton is pressed', () => {
            test('Then algo', () => {
                const pauseButton = screen.getByTestId('pauseButton');
                fireEvent.press(pauseButton);
                fireEvent.press(pauseButton);
                jest.advanceTimersByTime(5000);

            })
        })
        })
        describe('When it is render',()=>{
            let screen
            beforeEach(()=>{
                screen=render(<Timer  hoursMinSecs={{}}/>)
            })
            test('Then should match the snapshot',()=>{
                expect(screen).toMatchSnapshot();
              })
    
            describe('And pauseButton is pressed', () => {
                test('Then algo', () => {
                    const pauseButton = screen.getByTestId('pauseButton');
                    fireEvent.press(pauseButton);
                    jest.advanceTimersByTime(36000);
                })
            })
            })
    })