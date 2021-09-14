import React from 'react';
import {
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import globalStyles from '../../theme/globalTheme';


const PreTraining = ({navigation,
  route: {
    params: {
      training
    }
  }}: any) => {
 return (
   <SafeAreaView style={[globalStyles.backgound, globalStyles.aliginItems]}>
        <Pressable onPress={() => navigation.push('HomePage')}>
          <Image
          testID='HomePage'
            style={globalStyles.logo__Standar}
            source={require('../../images/spartappYELLOW.png')}
            />
        </Pressable>
            <ScrollView
            horizontal={false}
            >
        {training[0].exercises.map((exerciseList:any)=>(
          <View key={exerciseList._id} style={[styles.nextTraining__box,globalStyles.aliginItems]}>
        
          <View style={styles.container__picture}>
            <Text style={[ globalStyles.text__yellow, globalStyles.login__text]}>{exerciseList.exercise.name}</Text>
          <Image
            style={styles.trainings__picture}
            source={{uri:exerciseList.exercise.picture}}/>
          </View>
        <View style={[styles.trainings__description,styles.justifyContent]}>
            <Text  style={[globalStyles.text__yellow,styles.text]} >
              {exerciseList.exercise.description}
            </Text>
        </View>
              </View>
        ))}
        </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  trainings__picture:{
    width:80,
    resizeMode:'contain',
    height:150,
    marginLeft:20
    },
    container__picture:{
      margin:5,
      width:180,
      height:150,
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    trainings__description:{
      },
    nextTraining__box: {
      display:'flex',
      flexWrap:'wrap',
      flexDirection:'row',
      backgroundColor: '#2C2E43',
      width:300,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
    borderRadius:15,
      elevation: 15,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:25,
    },
    justifyContent:{
      textAlign:'center',
    },
    text:{
      margin:10,
    }
})
export default PreTraining;
