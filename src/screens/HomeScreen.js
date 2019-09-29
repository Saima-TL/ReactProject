

import {View, Text } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, { Component } from 'react';
import { Keyboard, TouchableOpacity ,Dimensions, TextInput , StyleSheet,AppRegistry,ScrollView } from 'react-native';
import { Image } from 'react-native';
import { AsyncStorage} from 'react-native' ;
//import TextField from 'material-ui/TextField';
//var NumberFormat = require('react-number-format');
//import { TextField } from 'react-native-material-textfield';
//import HideWithKeyboard from 'react-native-hide-with-keyboard';
// import { Icon } from 'react-native-elements';
// import { Button } from 'react-native-elements';

//import Verify from './Verify' ;

//import ProfileScreen from "./src/screens/ProfileScreen";

var {height, width} = Dimensions.get('window');
var _keyboardWillShowSubscription;
var _keyboardWillHideSubscription;
height = height - 80;

class HomeScreen extends Component {

//   constructor(props) {
//       super(props);
//        this.state = {
//         username: '',  
//         height: height,
//          getValue: '',
//       };
//       //console.warn("gkgkfgfs");
// }
constructor() {
    super();
    this.state = {
    	 height: height,
      username: '',
      //to get the value from the TextInput
      getValue: '',
      //to set the value on Text
    };
  }

  async saveValueFunction(data) {
    //function to save the value in AsyncStorage
    if(data){
      //To check the input not empty
      await AsyncStorage.setItem('username', data);
     // this._bootstrapAsync();

      //Setting a data to a AsyncStorage with respect to a key 
      // this.setState({ username: '' })
      //Resetting the TextInput
      //alert('Data Saved');
      this.props.navigation.navigate('Verification');
     // this._bootstrapAsync();
      //alert to confirm
    }

    else{
     alert('Please fill data');
      //alert for the empty InputText
      this.props.navigation.navigate('Auth')
    }
  };

  savemobile = () => {
  	this.setState({ username: '' })
  	this.saveValueFunction(this.state.username);
  	
  }

  // async _bootstrapAsync() {
  //  const userToken = await AsyncStorage.getItem('username');
  //  let data = JSON.parse(userToken);
  //  console.warn(data);
  // };
  
//onPress={this.saveValueFunction} 
  //onPress ={() => navigate('Verification', {name : this.state.username  })}

componentDidMount() {
	
        _keyboardWillShowSubscription = Keyboard.addListener('keyboardDidShow', (e) => this._keyboardWillShow(e));
        _keyboardWillHideSubscription = Keyboard.addListener('keyboardDidHide', (e) => this._keyboardWillHide(e));
    }
    componentWillUnmount() {
        _keyboardWillShowSubscription.remove();
        _keyboardWillHideSubscription.remove();
    }
    _keyboardWillShow(e) {
        this.setState({height: height - e.endCoordinates.height});
    }
    _keyboardWillHide(e) {
        this.setState({height: height});
    }

  render() {

  	const { navigation } = this.props; 

    const {navigate} = this.props.navigation ;

    return (
  <View style={{height: this.state.height}}>
     <View style={{
        flex: 1,
        flexDirection: 'column',
        height: this.state.height,
      }}>


      <Image
     source={require('./image.png')}
     style={styles.pic}
    /> 

     
      <View style = {styles.border}><Text style={styles.heading}> English </Text></View>

      <View style={{backgroundColor: 'white',marginLeft: 20 ,marginRight : 20,justifyContent: 'center',marginTop:24}}>

      <Text style={styles.text}>আপনার মোবাইল নাম্বার</Text>

      <View style={{flexDirection : 'row'}}>


    
     <TextInput style = {styles.input} 

       value={this.state.username}
          onChangeText={username => this.setState({ username })}

          keyboardType={'numeric'}
               underlineColorAndroid = "transparent"
  format="#### #### #### ####"
               
               />

     </View>




      <TouchableOpacity style = {styles.submitButton} onPress={this.savemobile}  >

               <Text style = {styles.submitButtonText}>
            
            এগিয়ে যান
            </Text>

        <View>
        	<Image
     source={require('./arrow.png')}
     style={styles.image}
    />

    </View>
  
        </TouchableOpacity>

             <Text style={styles.last}>By continue you accept the <Text style={{color : 'green'}}> terms of use </Text> and <Text style={{color : 'green'}}>privacy policy </Text> </Text>
        
      </View>

       
      <View style={{marginTop : 58}}>
      

          <Text style={styles.lt}>আপনার কি ট্রাক আছে?</Text>

        

      </View>
       

        
      </View>

      </View>
    
    );
  }
}

export default HomeScreen

const styles = StyleSheet.create({

   image: {
    flex : 2,
 marginRight : 3,
 
 width: 25,
 height:1
 },

 phone: {
  padding:10,
  marginBottom : 4,
 width :30,
 height:30
 },

 pic: {
flex: 7
 },

  lt: {
    marginLeft: 20,
    marginRight : 213,
    borderBottomColor: '#2181F3',
 borderBottomWidth: 1,
   fontWeight: 'bold',
       color : '#2181F3',
       marginBottom:22

  },

    last: {
         height: 13,
          width: 245,
         opacity: 0.7, 
          color: '#000000',
          fontSize: 10,
          lineHeight: 13
    },
  
   submitButton: {

    flexDirection: 'row',
      marginTop : 66,
      marginVertical: 10,
      backgroundColor: '#b2beb5',
      padding: 10,
      justifyContent : 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      height: 48

   },

   submitButtonText:{
      color: 'white',
      marginLeft :115,
      marginRight: 125
   },

  input: {
    flex :3,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#1085EA',
    height: 48,
   },

   border: {
    alignItems :'flex-end',
    marginTop :10

   },

  heading: {
  marginRight :20,
 borderBottomColor: '#2181F3',
 borderBottomWidth: 1,
    color : '#2181F3'
    
  },

  text: {
   
    fontWeight: 'bold',
      borderColor: 'black',
       color : 'black',
       marginVertical: 10
  
  }
});



