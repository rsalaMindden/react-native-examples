import React from 'react';
import {Text, Button, Image, SafeAreaView, TextInput} from 'react-native';
import globalStyles from '../../theme/globalTheme';

const Home = ({navigation}: any) => {
  return (
    <SafeAreaView style={globalStyles.backgound}>
      <Text>HOME</Text>
      <Image
        style={globalStyles.logo__Standar}
        source={require('../../images/spartappYELLOW.png')}
      />
      <TextInput placeholder="buscar" />
      <Button
        title="tipos de entreno"
        onPress={() => navigation.push('Training')}
      />
      <Button
        title="objetivo por tiempo"
        onPress={() => navigation.push('Training')}
      />
      <Button
        title="equipamiento"
        onPress={() => navigation.push('Training')}
      />
    </SafeAreaView>
  );
};

export default Home;
