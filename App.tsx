import React,{ Component } from 'react';
import Homepage from './screens/Homepage';
import MapScreen from './screens/MapScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './screens/ListScreen';

const Stack = createNativeStackNavigator();

const App =() => (
    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Homepage}
        options={{
          headerShown: false,  
        }} 
      />
      <Stack.Screen 
        name="MapScreen" 
        component={MapScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />


      <Stack.Screen 
        name="ListScreen" 
        component={ListScreen}
        options={{
          headerShown: true,
          title: '',
        }} 
      />
    </Stack.Navigator>
  </NavigationContainer>

);
  
export default App;


