import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';

import globalStyles from '../../theme/globalTheme';

export default function trainingpopUp({navigation}: any) {
  function handleClickAMRAP() {
    navigation.navigate({
      name: 'Training',
      merge: true,
    });
  }
  function handleClickPYRAMIDAL() {
    navigation.navigate({
      name: 'Training',
      merge: true,
    });
  }
  return (
    <SafeAreaView style={[globalStyles.backgound, globalStyles.aliginItems]}>
      <Menu style={styles.menu} renderer={renderers.Popover}>
        <ImageBackground
          source={require('../../images/cronoImg.png')}
          resizeMode="cover"
          style={styles.trainingTypes__image}
        />
        <MenuTrigger>
          <MenuOptions>
            <TouchableOpacity
              onPress={handleClickAMRAP}
              style={[styles.input__text]}>
              <Text style={[globalStyles.text__yellow, styles.input__text]}>
                FOR TIME
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClickPYRAMIDAL}>
              <Text style={[globalStyles.text__yellow, styles.input__text]}>
                TABATA
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClickPYRAMIDAL}>
              <Text style={[globalStyles.text__yellow, styles.input__text]}>
                CRONO
              </Text>
            </TouchableOpacity>
          </MenuOptions>
        </MenuTrigger>
      </Menu>
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
