// homestack.js
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IntroScreen from '../pages/intro'; // Make sure this path is correct

const HomeStack = createStackNavigator({
  Intro: IntroScreen, // The key 'Intro' is the route name
}, {
  defaultNavigationOptions: {
    headerShown: false,
  },
  initialRouteName: 'Intro', // Set 'Intro' as the initial route
});

export default createAppContainer(HomeStack);
