
import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  

import { Navigate ,Keyboard, TouchableOpacity ,Dimensions, TextInput ,AppRegistry,ListView } from 'react-native';
import { Image,ScrollView } from 'react-native'; 
// import { DrawerActions } from 'react-navigation'; 
// import { withNavigation } from 'react-navigation';
//import AppContainer from "./SideMenu";
import Modal from "react-native-modal";

import {  
    createAppContainer,  
    createStackNavigator  
} 
from 'react-navigation';


class TruckSelect extends Component {

constructor(props) {
    super(props);
}
    render() {  
      
        return ( 
         <View>
          <DetailScreen />


       </View>

        );  
    }  
}


 
 export default  TruckSelect;