import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import popUpTraining from '../../components/popUpmenus/popUpTraining';
import popUpCrono from '../../components/popUpmenus/popUpCrono';
import popUpEquipment from '../../components/popUpmenus/popUpEquipment';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import Home from '../../components/home-page/HomePage';
import Training from '../../components/training mode/training';
import PreTraining from '../../components/training mode/preTraining';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function Authenticate() {
  const {isAuthenticated} = useSelector(
    (store: any) => store.loggedUserReducer,
  );
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </>
      ) : (
        <>
          <Stack.Screen name="HomePage" component={Home} />
          <Stack.Screen name="popUpTraining" component={popUpTraining} />
          <Stack.Screen name="popUpEquipment" component={popUpEquipment} />
          <Stack.Screen name="popUpCrono" component={popUpCrono} />
          <Stack.Screen name="Training" component={Training} />
          <Stack.Screen name="PreTraining" component={PreTraining} />
        </>
      )}
    </Stack.Navigator>
  );
}
