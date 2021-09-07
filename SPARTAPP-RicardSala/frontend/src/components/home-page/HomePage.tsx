import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadTrainings} from '../../redux/actions/trainingCreators';

import globalStyles from '../../theme/globalTheme';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const trainings = useSelector((store: any) => store.trainings);
  const [search, setSearch] = useState('');
  useEffect(() => {
    dispatch(loadTrainings());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(trainings, 'home esto es lo que es esto');
  const trainingFiltereds = trainings.filter(
    (element: any) => element.name === search,
  );

  return (
    <SafeAreaView style={[globalStyles.backgound, globalStyles.aliginItems]}>
      {console.log(trainingFiltereds, 'esto es training filtered')}
      {console.log(search)}
      <Image
        style={globalStyles.logo__Standar}
        source={require('../../images/spartappYELLOW.png')}
      />

      <TextInput
        style={[styles.search__box, globalStyles.text__gray]}
        placeholder="BUSCAR"
        placeholderTextColor="#FFD523"
        textAlign="center"
        onChangeText={(text: any) => setSearch(text)}
      />

      <Image
        style={styles.search__icon}
        source={require('../../images/magnifyingglass.png')}
      />
      {search.length < 1 && (
        <View>
          <ImageBackground
            source={require('../../images/trainingImg.png')}
            resizeMode="cover"
            style={styles.trainingTypes__image}>
            <Pressable onPress={() => navigation.push('popUpTraining')}>
              <Text
                style={[
                  globalStyles.text__yellow,
                  globalStyles.login__text,
                  styles.trainingTypes__text,
                ]}>
                TIPOS DE ENTRENAMIENTO
              </Text>
            </Pressable>
          </ImageBackground>

          <ImageBackground
            source={require('../../images/cronoImg.png')}
            resizeMode="cover"
            style={styles.trainingTypes__image}>
            <Pressable onPress={() => navigation.push('popUpCrono')}>
              <Text
                style={[
                  globalStyles.text__yellow,
                  globalStyles.login__text,
                  styles.trainingTypes__text,
                ]}>
                OBJETIVO POR TIEMPO
              </Text>
            </Pressable>
          </ImageBackground>

          <ImageBackground
            source={require('../../images/equipmentImg.png')}
            resizeMode="cover"
            style={styles.trainingTypes__image}>
            <Pressable onPress={() => navigation.push('popUpEquipment')}>
              <Text
                style={[
                  globalStyles.text__yellow,
                  globalStyles.login__text,
                  styles.trainingTypes__text,
                ]}>
                EQIPAMIENTO
              </Text>
            </Pressable>
          </ImageBackground>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search__box: {
    fontWeight: '600',
    fontSize: 24,
    alignContent: 'center',
    backgroundColor: '#2C2E43',
    marginTop: 35,
    width: 206,
    height: 41,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    borderRadius: 15,
  },

  trainingTypes__text: {
    marginTop: 25,
    alignSelf: 'center',
  },
  trainingTypes__image: {
    width: 349,
    height: 155,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  search__icon: {
    top: -32,
    right: 75,
  },
});

export default Home;
