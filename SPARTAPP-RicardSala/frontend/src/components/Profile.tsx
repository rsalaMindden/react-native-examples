import React from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text> esto es el profile y funciona perfectamente</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
