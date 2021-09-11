import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import validateEmail from '../../utils/functions/validateEmail';
import {loginUserAction} from '../../redux/actions/actionCreators';

import globalStyles from '../../theme/globalTheme';
import buttonStyles from '../../theme/buttonsTheme';

function Login({navigation}: any) {
  const dispatch = useDispatch();

  function handleLogin(userEmail: string, userPassword: string) {
    if (validateEmail(userEmail)) {
      dispatch(
        loginUserAction({
          email: userEmail,
          password: userPassword,
        }),
      );
    }
  }
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  return (
    <SafeAreaView style={globalStyles.backgound}>
      <View style={globalStyles.aliginItems}>
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo}
          source={require('../../images/logo-spartapp.png')}
        />
      </View>
      <View style={styles.inputs__info}>
        <View style={styles.box__input}>
          <Text style={[globalStyles.text__yellow, globalStyles.margin]}>
            email
          </Text>
          <TextInput
            style={[styles.input__text, globalStyles.text__gray]}
            placeholder="example@example.com"
            value={userEmail}
            onChangeText={text => setUserEmail(text)}
            textAlign="center"
            textContentType="emailAddress"
            placeholderTextColor="#B2B1B9"
          />

          <Text style={[globalStyles.text__yellow, globalStyles.margin]}>
            password
          </Text>
          <TextInput
            style={[styles.input__text, globalStyles.text__gray]}
            placeholder="password"
            value={userPassword}
            secureTextEntry={true}
            onChangeText={text => setUserPassword(text)}
            textAlign="center"
            textContentType="password"
            placeholderTextColor="#B2B1B9"
          />
        </View>
      </View>
      <View style={[globalStyles.aliginItems, buttonStyles.box__button]}>
        <TouchableOpacity
          style={[buttonStyles.littleButton]}
          onPress={() => navigation.push('Signup')}>
          <Text style={[globalStyles.text__yellow, styles.login__text]}>
            REGISTER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={buttonStyles.littleButton}
          onPress={() =>  {
            handleLogin(userEmail, userPassword);
          }}>
          <Text style={[globalStyles.text__yellow, styles.login__text]}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  login__text: {
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: '600',
  },

  box__input: {
    flex: 1,
    top: 75,
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
  inputs__info: {
    flex: 1,
    alignItems: 'center',
  },
  input__text: {
    backgroundColor: '#2C2E43',
    borderRadius: 18,
    marginLeft: 12,
    marginBottom: 17,
    width: 320,
    height: 67,
    fontSize: 24,
  },
});
export default Login;
