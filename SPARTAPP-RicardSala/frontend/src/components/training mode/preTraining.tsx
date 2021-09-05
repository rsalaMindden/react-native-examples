import React from 'react';
import {
  Text,
  Button,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import globalStyles from '../../theme/globalTheme';

const PreTraining = ({navigation}: any) => {
  return (
    <SafeAreaView style={globalStyles.backgound}>
      <ScrollView>
        <Pressable onPress={() => navigation.push('HomePage')}>
          <Image
            style={globalStyles.logo__Standar}
            source={require('../../images/spartappYELLOW.png')}
          />
        </Pressable>
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />
        <Image
          style={globalStyles.logo__Standar}
          source={require('../../images/spartappYELLOW.png')}
        />

        <Button
          title="Go to Profile"
          onPress={() => navigation.push('Profile')}
        />
        <Text> Pre-Training page</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default PreTraining;
