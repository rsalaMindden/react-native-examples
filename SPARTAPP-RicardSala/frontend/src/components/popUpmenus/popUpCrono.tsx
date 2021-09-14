import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
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
    <SafeAreaView style={[globalStyles.backgound, globalStyles.aliginItems]}>
      <View style={styles.menu} >
        <ImageBackground
          source={require('../../images/cronoImg.png')}
          resizeMode="cover"
          imageStyle={{borderRadius:15}}
          style={styles.trainingTypes__image}
        />
       
            <TouchableOpacity
            testID='FOR TIME'
            onPress={() => handleClick('FOR TIME')}
              style={[styles.input__text]}>
              <Text style={[globalStyles.text__yellow, styles.input__text]}>
                FOR TIME
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
             testID='TABATA'
            onPress={() => handleClick('TABATA')}>
              <Text style={[globalStyles.text__yellow, styles.input__text]}>
                TABATA
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
             testID='CRONO'
            onPress={() => handleClick('CRONO')}>
              <Text style={[globalStyles.text__yellow, styles.input__text]}>
                CRONO
              </Text>
            </TouchableOpacity>
       </View>
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
    backgroundColor: 'red',
    height: 220,
    width: 250,
    padding: 20,
    borderRadius: 20,
  },
});
