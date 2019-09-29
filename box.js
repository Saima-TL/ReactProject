  
 import React, { Component } from 'react';
import { TouchableOpacity , TextInput , StyleSheet ,Text ,AppRegistry, View } from 'react-native';
import { Image } from 'react-native';
import Button from './Button' ;

import { createStackNavigator, createAppContainer } from "react-navigation";


//<Image style = {styles.logo} source = {require('./img/logo.png')} />
//console.warn(this.props.navigation.state.params.id);

class HomeScreen extends Component {

  state = {
      myState:  'এগিয়ে যান--'
    }

    updateState = () => {
      this.setState({ myState: 'Verify' })
   }
  render() {
    return (
     <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>

      <View style={{ flex: 4, backgroundColor: 'skyblue'}}>
      </View>

      <View style={{ flex: 3,backgroundColor: 'white',marginLeft: 6 }}>
      
      <Text style={styles.heading}>English</Text>
      <Text style={styles.text}>আপনার মোবাইল নাম্বার</Text>
     <TextInput style = {styles.input}
               underlineColorAndroid = "transparent">
            
            
               </TextInput>
      </View>
  
      <View style={{ flex: 3, backgroundColor: 'white',marginLeft: 6 }}>
      
            <Button name = "ok"/>
            <Button name = "save"/>

      
             <Text style={styles.last}>By continue you accept the terms of use and privacy policy </Text>
        
      </View>



        
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({

    last: {
      marginHorizontal: 8,
      marginVertical: 10,
      marginLeft: 6 ,
         height: 13,
          width: 245,
         opacity: 0.7, 
          color: '#000000',
          fontSize: 10,
          lineHeight: 13
    },
  
   submitButton: {
       marginHorizontal: 8,
      marginVertical: 10,
      backgroundColor: '#b2beb5',
      padding: 10,
      alignItems: 'center',
      fontWeight: 'bold',
      margin: 15,
      height: 40

   },

   placeholder: {
      marginHorizontal: 8,
      marginVertical: 10,
  justifyContent: 'space-between'
  },

   submitButtonText:{
      color: 'white'
   },

  input: {
    marginHorizontal: 8,
      marginVertical: 10,
       width: 350,
      backgroundColor: '#FFFFFF',
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#1085EA',
      margin: 15,
      height: 48,
      borderWidth: 1
   },

  heading: {
      textAlign: 'right',
      marginTop: 4,
      color: 'black'
    
  },

  text: {
    fontWeight: 'bold',
      borderColor: 'black',
       color : 'black',
      marginHorizontal: 8,
      marginVertical: 10
  
  }
});
