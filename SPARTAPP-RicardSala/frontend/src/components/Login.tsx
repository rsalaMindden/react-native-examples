import React from 'react';
import {SafeAreaView, Button, Text, StyleSheet, TextInput} from 'react-native';

const Login = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.login}>
      <Text> login page</Text>
      <TextInput placeholder="User name" />
      <TextInput placeholder="password" />
      <Button
        title="Go to Profile"
        onPress={() => navigation.push('Profile')}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Login;
