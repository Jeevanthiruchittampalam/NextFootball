// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from './app/pages/intro'; // Adjust the path if necessary
import MenuScreen from './app/pages/menu'; // Adjust the path if necessary
import EntryScreen from './app/pages/entry';
import CreatorScreen from './app/pages/aboutCreators';
import RBForm from './app/pages/RB/RBForm';
import RBMenu from'./app/pages/RB/RBMenu';
import PositionMenu from './app/pages/positionMenu';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Entry" component={EntryScreen} />
        <Stack.Screen name="Creators" component={CreatorScreen} />
        <Stack.Screen name="RBForm" component={RBForm}/>
        <Stack.Screen name="PositionMenu" component={PositionMenu}/>
        <Stack.Screen name="RBMenu" component={RBMenu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
