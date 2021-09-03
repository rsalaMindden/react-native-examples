import React from 'react';
import {SafeAreaView, Button, Image, Text, TextInput} from 'react-native';
import globalStyles from '../../theme/globalTheme';

const Login = ({navigation}: any) => {
  return (
    <SafeAreaView style={globalStyles.backgound}>
      <Image
        style={globalStyles.logo__Standar}
        source={require('../../images/spartappYELLOW.png')}
      />
      <Text> login page</Text>
      <TextInput placeholder="User name" />
      <TextInput placeholder="password" />
      <Button title="Go to home" onPress={() => navigation.push('HomePage')} />
    </SafeAreaView>
  );
};

export default Login;
