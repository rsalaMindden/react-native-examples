import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './components/register/Register';
import Login from './components/login/Login';
import Home from './components/home-page/HomePage';
import Training from './components/training mode/training';
import PreTraining from './components/training mode/preTraining';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="Training" component={Training} />
        <Stack.Screen name="PreTraining" component={PreTraining} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
