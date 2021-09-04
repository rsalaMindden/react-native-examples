import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Authenticate from './navigators/AuthenticationNavigator/AuthenticationNavigator';

import configureStore from './redux/stores/index';
const App = () => {
  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <Authenticate />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
