import React from 'react';
import {
  SafeAreaView,
  Button,
  Image,
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

const Profile = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.backgound}>
      <View style={styles.login}>
        <Image
          style={styles.logoName}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={styles.logo}
          source={require('../../images/logo-spartapp.png')}
        />
      </View>
      <View style={styles.inputs}>
        <View style={styles.box__input}>
          <Text style={styles.text__yellow}>email</Text>
          <TextInput
            style={(styles.text__gray, styles.input)}
            placeholder="example@example.com"
          />

          <Text style={styles.text__yellow}>password</Text>
          <TextInput
            style={(styles.text__gray, styles.input)}
            placeholder="password"
          />
        </View>
      </View>
      <TextInput placeholder="Login" />
      <Button title="LOGIN" onPress={() => navigation.push('Login')} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backgound: {
    backgroundColor: '#595260',
    flex: 1,
  },
  login: {
    alignItems: 'center',
  },
  logoName: {
    width: 288,
    height: 61,
    marginTop: 40,

    resizeMode: 'contain',
  },
  logo: {
    width: 198,
    height: 224,
    marginTop: 54,
    resizeMode: 'contain',
  },
  text__gray: {
    color: '#B2B1B9',
  },
  text__yellow: {
    color: '#FFD523',
    marginLeft: 15,
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
  inputs: {
    flex: 1,
    alignItems: 'flex-start',
  },
  input: {
    backgroundColor: '#2C2E43',
    borderRadius: 18,
    marginLeft: 15,
    marginBottom: 17,
    width: 367,
    paddingLeft: 20,
    height: 67,
    fontSize: 24,

    color: '#B2B1B9',
  },
});
export default Profile;
