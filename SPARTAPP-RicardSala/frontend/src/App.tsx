import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Authenticate from './navigators/AuthenticationNavigator/AuthenticationNavigator';

import configureStore from './redux/stores/index';
import {MenuProvider} from 'react-native-popup-menu';
const App = () => {
  return (
    <Provider store={configureStore()}>
      <MenuProvider>
        <NavigationContainer>
          <Authenticate />
        </NavigationContainer>
      </MenuProvider>
    </Provider>
  );
};

export default App;
