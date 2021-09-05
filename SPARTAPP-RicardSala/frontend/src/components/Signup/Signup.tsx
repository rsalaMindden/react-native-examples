import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import validateEmail from '../../utils/functions/validateEmail';
import globalStyles from '../../theme/globalTheme';
import buttonStyles from '../../theme/buttonsTheme';
import {useDispatch} from 'react-redux';
import {registerUserAction} from '../../redux/actions/actionCreators';

function Signup({navigation}: any) {
  const dispatch = useDispatch();

  function handleRegister(
    userEmail: string,
    userPassword: string,
    userName: String,
  ) {
    if (validateEmail(userEmail)) {
      dispatch(
        registerUserAction({
          email: userEmail,
          password: userPassword,
          name: userName,
        }),
      );
    }
  }

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  return (
    <SafeAreaView style={[globalStyles.backgound, globalStyles.aliginItems]}>
      <Image
        style={globalStyles.logo__Standar}
        source={require('../../images/spartappYELLOW.png')}
      />
      <View style={globalStyles.profile__photo__container}>
        <Image
          style={globalStyles.profile__photo}
          source={require('../../images/userDefaultPNG.png')}
        />
      </View>
      <Text style={globalStyles.text__yellow}> editar</Text>
      <View style={[styles.nameBox]}>
        <View style={styles.box__input}>
          <Text style={[globalStyles.text__yellow]}>nombre</Text>
          <TextInput
            style={[styles.input, globalStyles.text__gray]}
            placeholder="User name"
            value={userName}
            textAlign="center"
            textContentType="name"
            placeholderTextColor="#B2B1B9"
            onChangeText={text => setUserName(text)}
          />
        </View>
        <View style={styles.box__input}>
          <Text style={[globalStyles.text__yellow]}>email</Text>
          <TextInput
            style={[styles.input, globalStyles.text__gray]}
            placeholder="example@example.com"
            value={userEmail}
            textAlign="center"
            textContentType="emailAddress"
            placeholderTextColor="#B2B1B9"
            onChangeText={text => setUserEmail(text)}
          />
        </View>
        <View style={styles.box__input}>
          <Text style={[globalStyles.text__yellow]}>password</Text>
          <TextInput
            style={[styles.input, globalStyles.text__gray]}
            placeholder="password"
            value={userPassword}
            secureTextEntry={true}
            textAlign="center"
            textContentType="newPassword"
            placeholderTextColor="#B2B1B9"
            onChangeText={text => setUserPassword(text)}
          />
        </View>
      </View>
      <View
        style={[
          globalStyles.aliginItems,
          buttonStyles.box__button,
          styles.buttonsMargin,
        ]}>
        <TouchableOpacity
          style={[buttonStyles.littleButton]}
          onPress={() => {
            handleRegister(userEmail, userPassword, userName);
          }}>
          <Text style={[globalStyles.text__yellow, globalStyles.login__text]}>
            REGISTER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={buttonStyles.littleButton}
          onPress={() => navigation.push('Login')}>
          <Text style={[globalStyles.text__yellow, globalStyles.login__text]}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  nameBox: {
    marginTop: 10,
    marginLeft: 14,
    alignSelf: 'flex-start',
  },
  register__text: {
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  buttonsMargin: {
    marginTop: 110,
  },

  box__input: {
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  input: {
    backgroundColor: '#2C2E43',
    borderRadius: 18,
    marginBottom: 17,
    width: 367,
    height: 67,
    fontSize: 24,
  },
});
export default Signup;
