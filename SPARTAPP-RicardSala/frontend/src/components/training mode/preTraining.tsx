import React from 'react';
import {Text, Button, Pressable, Image, SafeAreaView} from 'react-native';
import globalStyles from '../../theme/globalTheme';

const PreTraining = ({navigation}: any) => {
  return (
    <SafeAreaView style={globalStyles.backgound}>
      <Pressable onPress={() => navigation.push('HomePage')}>
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
      </Pressable>
      <Button
        title="Go to Profile"
        onPress={() => navigation.push('Profile')}
      />
      <Text> Pre-Training page</Text>
    </SafeAreaView>
  );
};
export default PreTraining;
