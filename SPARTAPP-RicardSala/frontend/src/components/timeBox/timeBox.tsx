import { useEffect,useState, useRef} from "react"
import React from 'react'
import {View,Text, StyleSheet,Button, Pressable} from 'react-native'
import globalStyles from '../../theme/globalTheme'

const Timer = ({hoursMinSecs}:any) => {
   
    const {  minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[ mins, secs], setTime] = React.useState([ minutes, seconds]);
    const [pause, setPause] = useState(false);

    const tick = () => {
   
        if (mins === 0 && secs === 0) 
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([ 59, 59]);
        } else if (secs === 0) {
            setTime([ mins - 1, 59]);
        } else {
            setTime([ mins, secs - 1]);
        }
    };


    const reset = () => setTime([ parseInt(minutes), parseInt(seconds)]);

    let intervalRef:any = useRef();
    
    useEffect(() => {
      if (pause){const timerId = setInterval(() => tick(), 1000);
         return () => clearInterval(timerId);}
     });

    const handleClick = () => {
        if (!pause) {
          clearInterval(intervalRef.current);
        } else {
          intervalRef.current = setInterval(tick, 1000);
        }
        setPause((prev) => !prev);
      };
    

    
    return (
        <View style={[globalStyles.aliginItems]}>
            <Pressable onPress={handleClick} >
            <Text style={[globalStyles.text__yellow, styles.crono]}>{`${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</Text> 
             </Pressable>
        </View>
    );
}

const styles=StyleSheet.create({
    crono:{
        fontSize:100,
        fontWeight: '600',
    },
    
})

export default Timer;