import React from 'react';
import { Button, View, Text } from 'react-native';
//import { Navigation } from 'react-native-navigation';
//import {createStackNavigator, createAppContainer} from 'react-navigation';

import ProfileScreen from "./src/screens/ProfileScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Verification from "./src/screens/Verification";
import Dashboard from "./SideMenu";
//import Trucklagbe from "./src/screens/Trucklagbe";
import Splash from "./src/screens/Splash";
// import StackNav from "./src/screens/StackNav";
// import StackNav from "./src/screens/StackNav";


import { createSwitchNavigator, createStackNavigator, createAppContainer ,DrawerNavigator} from 'react-navigation';



const AppStack = createStackNavigator({   Profile: ProfileScreen, Trucklagbe: Dashboard });

const AuthStack = createStackNavigator({ HomeScreen: HomeScreen,Verification: Verification  });


export default createAppContainer(createSwitchNavigator(

  {
    AuthLoading: Splash,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));








// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Profile: {screen: ProfileScreen},
//   Verification: {screen: Verification},
//   fetchData: {screen: fetchData},
//   Trucklagbe: {screen: Trucklagbe},
// });

// const App = createAppContainer(MainNavigator);

// export default App;

