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
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadTrainings} from '../../redux/actions/trainingCreators';

import globalStyles from '../../theme/globalTheme';
import buttonStyles from '../../theme/buttonsTheme';


const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const trainings = useSelector((store: any) => store.trainings);
  const [search, setSearch] = useState('');
  useEffect(() => {
    dispatch(loadTrainings());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const trainingFiltereds = trainings.filter(
    (element: any) => element.name === search,
    
  );

  return (
    <SafeAreaView style={[globalStyles.backgound, globalStyles.aliginItems]}>
      <Image
        style={globalStyles.logo__Standar}
        source={require('../../images/spartappYELLOW.png')}
      />

      <TextInput
        style={[styles.search__box, globalStyles.text__gray]}
        placeholder="BUSCAR"
        autoCapitalize="characters"
        placeholderTextColor="#FFD523"
        textAlign='center'
        onChangeText={(text: any) => setSearch(text)}
      />

      <Image
        style={styles.search__icon}
        source={require('../../images/magnifyingglass.png')}
      />
      {search.length < 1 ? (
        <View>
          <Pressable onPress={() => navigation.push('popUpTraining')}>
          <ImageBackground
            source={require('../../images/trainingImg.png')}
            resizeMode="cover"
            imageStyle={{borderRadius:15}}
            style={styles.trainingTypes__image}>
              <Text
                style={[
                  globalStyles.text__yellow,
                  globalStyles.login__text,
                  styles.trainingTypes__text,
                ]}>
                TIPOS DE ENTRENAMIENTO
              </Text>
          </ImageBackground>
            </Pressable>

          <Pressable onPress={() => navigation.push('popUpCrono')}>
          <ImageBackground
            source={require('../../images/cronoImg.png')}
            resizeMode="cover"
            imageStyle={{borderRadius:15}}
            style={styles.trainingTypes__image}>
              <Text
                style={[
                  globalStyles.text__yellow,
                  globalStyles.login__text,
                  styles.trainingTypes__text,
                ]}>
                OBJETIVO POR TIEMPO
              </Text>
          </ImageBackground>
            </Pressable>

            <Pressable onPress={() => navigation.push('popUpEquipment')}>
          <ImageBackground
            source={require('../../images/equipmentImg.png')}
            resizeMode="cover"
            imageStyle={{borderRadius:15}}
            style={styles.trainingTypes__image}>
              <Text
                style={[
                  globalStyles.text__yellow,
                  globalStyles.login__text,
                  styles.trainingTypes__text,
                ]}>
                EQIPAMIENTO
              </Text>
          </ImageBackground>
            </Pressable>
        </View>
      ):<View>
        {trainingFiltereds.map((train:any)=>(
          <View key={train._id}  >
   <TouchableOpacity
    style={[buttonStyles.filter__box ,globalStyles.aliginItems]}
    onPress={() => navigation.push('Training',{training:[train]})}
    >
   <Text style={[globalStyles.text__yellow,globalStyles.login__text]}  >
   {train.name}
   </Text>
   </TouchableOpacity>
   
 </View>
        ))}
      </View>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search__box: {
    fontWeight: '600',
    fontSize: 20,
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
  result__box: {
    justifyContent:'center',
    fontWeight: '600',
    fontSize: 24,
    alignContent: 'center',
    backgroundColor: '#2C2E43',
    marginTop: 35,
    width: 300,
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
   
    width: 310,
    height: 155,
    marginBottom: 35,
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
