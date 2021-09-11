import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';


import globalStyles from '../../theme/globalTheme';
import { useSelector } from 'react-redux';



export default function trainingpopUp({navigation}: any) {
  const trainings = useSelector((store: any) => store.trainings);
  
  function handleClick(trainingName: string) {
    const training=trainings.filter(({name}: any)=> name === trainingName)
    navigation.navigate({
      name: 'Training',
      merge: true,
params: {
  training
}
    });
  }
  
  return (
    <SafeAreaView style={[globalStyles.backgound, globalStyles.aliginItems,styles.menu]}>
       <ImageBackground
          source={require('../../images/trainingImg.png')}
          resizeMode="cover"
          imageStyle={{borderRadius:15}}
          style={styles.trainingTypes__image}
        />
            <TouchableOpacity
              onPress={() => handleClick('AMRAP')}
              style={[styles.input__text]}>
              <Text style={[globalStyles.text__yellow, styles.input__text]}>
                AMRAP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleClick('FOR TIME')}>
              <Text style={[globalStyles.text__yellow, styles.input__text]}>
                FOR TIME
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleClick('ABS 5 ROUND')}>
              <Text style={[globalStyles.text__yellow, styles.input__text]}>
                ABS
              </Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#595260',
    flex: 1,
    justifyContent: 'center',
  },

  input__text: {
    backgroundColor: '#2C2E43',
    borderRadius: 18,
    width: 349,
    height: 35,
    fontSize: 24,
    textAlign: 'center',
  },
  trainingTypes__image: {
    width: 349,
    height: 155,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },

  popUp: {
    justifyContent: 'center',
    height: 220,
    width: 250,
    padding: 200,
    borderRadius: 20,
  },
});
