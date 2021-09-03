import React from 'react';
import {Text, Button, SafeAreaView} from 'react-native';
import globalStyles from '../../theme/globalTheme';

const Profile = ({navigation}: any) => {
  return (
    <SafeAreaView style={globalStyles.backgound}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.push('Profile')}
      />
      <Text> Profile page</Text>
    </SafeAreaView>
  );
};
export default Profile;
