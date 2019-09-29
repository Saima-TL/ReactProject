import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  

import { Keyboard, TouchableOpacity ,Dimensions, TextInput ,AppRegistry,ListView } from 'react-native';
import { Image,ScrollView } from 'react-native'; 
import { DrawerActions } from 'react-navigation'; 
import { withNavigation } from 'react-navigation';
//import AppContainer from "./SideMenu";
 
import {  
    createAppContainer,  
    createStackNavigator  
} 
from 'react-navigation';
//import RadioGroup from 'react-native-radio-buttons-group';
//<Button onPress={() => this.props.navigation.navigate("Dashboard")} title="Owner trip list" />

//import { RadioGroup } from 'react-native-btr';
//import RadioButton from 'radio-button-react-native';

//import { RadioButton } from 'react-native-paper';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

import Modal from "react-native-modal";
//import Load from "./load_location";


class Header extends Component {

    render() {  
        return (  
            <View style={{height : 56,backgroundColor: '#292929',justifyContent : 'center'}}>

             <Text style = {{color: '#FFFFFF',fontSize: 16,  fontWeight: 'bold' }}>আমার ট্রাক</Text>
      
            </View> 
        );  
    }  
} 



 
export default class ModalTester extends Component {

       static navigationOptions = {
   headerTitle: <Header />,
   headerTitleStyle: {

        
      },
       headerStyle: {
        //sbackgroundColor: '#292929',
        
       backgroundColor: '#292929',
        //height : 56,
        //marginLeft : 16,
        // marginRight : 39
      },
  };

     state = {
   
    screenHeight: 0,
  };


  render() {
    return (
      <View style = {{ flex :1,backgroundColor : '#d6d7da'}}>
      <View style={{ height : 150,marginTop : 8,marginLeft : 8,marginRight : 8,  borderWidth : 1,borderRadius : 2,borderColor : '#FFFFFF',
    backgroundColor: '#FFFFFF',alignItems : 'center'}}>

          <Text style = {{ marginTop : 20,fontSize: 16, fontWeight: 'bold'}}>আপনি অ্যাপে কোন ট্রাক যোগ করেননি।</Text>
           <Text style = {{ marginTop : 5,  fontSize: 14, opacity: 0.7, color: '#000000'}}>অ্যাপে আপনার ট্রাকটি যোগ করে সাথে সাথে ট্রিপ করুন </Text>
           

           <View style = {styles.box}>

        <TouchableOpacity onPress ={() => this.props.navigation.navigate('TruckAdd')}   >
      <Text style={{ color : '#FFFFFFFF',fontSize: 16, fontWeight: 'bold',lineHeight: 24,textAlign : 'center'}}>ট্রাক যোগ করুন</Text>
       </TouchableOpacity> 


      </View>


      </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({

  box : {
    height: 45,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 2,
    backgroundColor: '#4285F4',
    marginTop : 20,
    width: 320

  },

  });
