import React, { useState } from 'react';
import {Text, Image, Button, StyleSheet,SafeAreaView, Pressable, View} from 'react-native';
import globalStyles from '../../theme/globalTheme';
import Timer from '../timeBox/timeBox'

function Training({
  navigation,
  route: {
    params: {
      training
    }
  }}: any) {
    
    const MinSecs = { minutes: 30, seconds: 0}
    
    const filteredTrainings =training[0].exercises.filter((filteredTraining:any)=>(filteredTraining.exercise.done!==true))
    const [done,setDone]=useState(filteredTrainings)
    function itsDone() {
      filteredTrainings[0].exercise.done =true
      setDone([...filteredTrainings])
    }
  return (
    <SafeAreaView style={[globalStyles.backgound, globalStyles.aliginItems]}>
      <Pressable
      testID='HomePage'
      onPress={() => navigation.push('HomePage')}>
        <Image
          style={[globalStyles.logo__Standar]}
          source={require('../../images/spartappYELLOW.png')}
        />
      </Pressable>
      <Button
      testID='exercise'
          title="Exercises List"
          onPress={() => navigation.push('PreTraining',{training})}
        />
    <View  style={styles.time__box}>
<Text style={[globalStyles.login__text, globalStyles.text__yellow,styles.text]}>timer</Text>
    <Timer  hoursMinSecs={MinSecs}/>
      </View>
     
      <View>
        {done.slice(0,2).map((actualExercise:any,index:any)=>(
        (index===0)?( <View key={actualExercise._id} style={styles.time__actualExerciseBox}>
          
          <Image
          style={styles.trainings__picture}
          source={{uri:actualExercise.exercise.picture}}></Image>
           <View>
            <Text style={[ globalStyles.text__yellow]}>{actualExercise.exercise.name}</Text>
             <Text  style={[globalStyles.text__yellow, styles.reps__text,styles.justifyContent]} >reps {"\n"}
               {actualExercise.reps}
             </Text>
               </View>
             <View>
               <Pressable onPress={itsDone}>
             <Image
          source={require('../../images/checkmark.circle.png')}/>
          </Pressable>
           </View>
          </View>):
         ( <View key={actualExercise._id} style={styles.nextTraining__box}>
          
            <Image
            style={styles.trainings__picture}
            source={{uri:actualExercise.exercise.picture}}></Image>
             <View>
              <Text style={[ globalStyles.text__yellow]}>{actualExercise.exercise.name}</Text>
               <Text  style={[globalStyles.text__yellow, styles.reps__text,styles.justifyContent]} >reps {"\n"}
                 {actualExercise.reps}
               </Text>
                 </View>
            </View>)
        ))}
  
    </View>
   
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
time__box: {
  display:'flex',
  justifyContent:'space-around',
  width: 349,
  backgroundColor: '#2C2E43',
  height: 200,
  marginTop: 55,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
borderRadius:15,
  elevation: 15,
},
text:{
  textAlign:'center',
},
reps__text: {
  justifyContent: 'center',
  fontSize: 64,
  fontWeight: '600',
},
time__actualExerciseBox:{
  display:'flex',
  flexDirection:'row',
  width: 349,
  height: 200,
  justifyContent:'space-around',
  alignItems:'center'
  
},
nextTraining__box: {
  display:'flex',
  flexDirection:'row',
  width: 349,
  backgroundColor: '#2C2E43',
  height: 200,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
borderRadius:15,
  elevation: 15,
  alignItems:'center',
  justifyContent:'space-around',
},
justifyContent:{
  textAlign:'center',

},
trainings__picture:{
width:116,
resizeMode:'contain',
height:180,
},
})
export default Training;
