import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';

import validateEmail from '../../utils/functions/validateEmail';
import validatePassword from '../../utils/functions/validatePasword';
import globalStyles from '../../theme/globalTheme';
import buttonStyles from '../../theme/buttonsTheme';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../redux/actions/actionCreators';

function Signup({navigation: {pop}}: any) {
  const dispatch = useDispatch();
  function handleLoginNavigation() {
    pop();
  }
  function handleUsernameChange(text: string) {
    setUsername(text);
  }
  function handleUsernameFocus() {
    if (!isValidUsername) {
      setValidUsername(true);
    }
  }
  function handlePasswordChange(text: string) {
    setUserPassword(text);
  }
  function handlePasswordFocus() {
    if (!isValidPassword) {
      setValidPassword(true);
    }
  }
  function handleEmailChange(text: string) {
    setUserEmail(text);
  }
  function handleEmailFocus() {
    if (!isValidEmail) {
      setValidEmail(true);
    }
  }

  function handleRegister(userEmail: any, userPassword: any, username: any) {
    if (!username) {
      return setValidUsername(false);
    }
    if (!validateEmail(userEmail)) {
      return setValidEmail(false);
    }
    if (!validatePassword(userPassword)) {
      return setValidPassword(false);
    }

    dispatch(
      registerUser({
        name: username,
        email: userEmail,
        password: userPassword,
      }),
    );
    return pop();
  }

  const [username, setUsername] = useState('');
  const [isValidUsername, setValidUsername] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [isValidEmail, setValidEmail] = useState(true);
  const [userPassword, setUserPassword] = useState('');
  const [isValidPassword, setValidPassword] = useState(true);
  return (
    <SafeAreaView style={[globalStyles.backgound, globalStyles.aliginItems]}>
      <Pressable onPress={handleLoginNavigation}>
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
      </Pressable>
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
            value={username}
            textAlign="center"
            textContentType="name"
            placeholderTextColor="#B2B1B9"
            onChangeText={handleUsernameChange}
            onFocus={handleUsernameFocus}
          />
          {!isValidUsername && (
            <Text style={globalStyles.invalid}>Type you userName</Text>
          )}
        </View>
        <View style={styles.box__input}>
          <Text style={[globalStyles.text__yellow]}>email</Text>
          <TextInput
            style={[styles.input, globalStyles.text__gray]}
            placeholder="example@example.com"
            value={userEmail}
            textAlign="center"
            textContentType="emailAddress"
            autoCapitalize="none"
            placeholderTextColor="#B2B1B9"
            onChangeText={handleEmailChange}
            onFocus={handleEmailFocus}
          />
          {!isValidEmail && (
            <Text style={globalStyles.invalid}>Invalid email</Text>
          )}
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
            onChangeText={handlePasswordChange}
            onFocus={handlePasswordFocus}
          />
          <Text style={[globalStyles.invalid, styles.invalidPasswordText]}>
            Minimum: 8 characters, 1 uppercase, 1 lowercase and 1 number
          </Text>
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
            handleRegister(userEmail, userPassword, username);
          }}>
          <Text style={[globalStyles.text__yellow, globalStyles.login__text]}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  invalidPasswordText: {
    paddingHorizontal: 5,
  },
  nameBox: {
    marginTop: 10,
    marginLeft: 14,
    alignSelf: 'flex-start',
  },

  buttonsMargin: {
    marginTop: 110,
  },

  box__input: {
    alignItems: 'center',
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
    marginBottom: 20,
    width: 300,
    height: 67,
    fontSize: 24,
  },
});
export default Signup;
