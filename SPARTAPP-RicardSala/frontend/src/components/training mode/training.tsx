import React from 'react';
import {Text, Image, Button, SafeAreaView, Pressable} from 'react-native';
import globalStyles from '../../theme/globalTheme';

const Training = ({navigation}: any) => {
  return (
    <SafeAreaView style={globalStyles.backgound}>
      <Pressable onPress={() => navigation.push('HomePage')}>
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
      </Pressable>
      <Button
        title="PAUSE TRAINING"
        onPress={() => navigation.push('PreTraining')}
      />
      <Text> Training page</Text>
    </SafeAreaView>
  );
};
export default Training;
