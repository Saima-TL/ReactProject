
import { Button, View, Text } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, { Component } from 'react';
import { Keyboard ,Navigate , Dimensions, TouchableOpacity , TextInput , StyleSheet,AppRegistry } from 'react-native';
import { Image } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import {KeyboardAvoidingView} from 'react-native';
import { AsyncStorage} from 'react-native' ;
//import OtpInput from 'react-otp-input';
// import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

//import HomeScreen from "./src/screens/HomeScreen";
// onPress ={() => navigate('Profile', {name : 'jane'  })} 
var {height, width} = Dimensions.get('window');
var _keyboardWillShowSubscription;
var _keyboardWillHideSubscription;
height = height + 0;


class ProfileScreen extends React.Component {

  constructor(props) {

      super(props);
       this.state = {
// username: '',  
//         text : '',
        height: height,
      }; 
}



handlerOnFulfill = code => console.log(code);

componentDidMount() {
	//this._bootstrapAsync();
	this.getValueFunction();
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

    getValueFunction = () => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem('username').then(value =>
      //AsyncStorage returns a promise so adding a callback to get the value
      this.setState({ getValue: value })
      //Setting the value in Text 
    );
  };

  //  saveValueFunction = () => {
  //   //function to save the value in AsyncStorage
  //   if(this.state.username){
  //     //To check the input not empty
  //     AsyncStorage.setItem('username', this.state.username);
  //     //Setting a data to a AsyncStorage with respect to a key 
  //     this.setState({ username: '' })
  //     //Resetting the TextInput
  //     //alert('Data Saved');
  //     this.props.navigation.navigate('App');
  //     //alert to confirm
  //   }

  //   else{
  //    alert('Please fill data');
  //     //alert for the empty InputText
  //     this.props.navigation.navigate('Auth');
  //   }
  // };

  //const user_name = navigation.getParam('username', 'NO-User');   
  /*{JSON.stringify(user_name)}*/
  render() {
  	//const username = navigation.getParam('username', 'NO-User'); 

const { navigation } = this.props;  

    const {navigate} = this.props.navigation;
    return (

      <View style={{height: this.state.height}}>
    
      <View style={{
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'column'
      }}>

       <Image style = {styles.image} source={require('./smart.png')} />


      <View style={{marginTop :157,justifyContent : 'center',alignItems : 'flex-end', marginLeft :44, marginRight: 44}}>
      
      <Text style={styles.heading}  >আপনার  {this.state.getValue}  মোবাইল নাম্বারে পাঠানো ভেরিফিকেশন কোডটি এখানে প্রবেশ করান </Text>

</View>


<View style={{flex: 4}}>          
    
    <CodeInput
      ref="codeInputRef2"
      secureTextEntry
      compareWithCode='1234'
      codeLength ={4}
      activeColor='#D1D2D3'
      inactiveColor='#D1D2D3'
      autoFocus={false}
      ignoreCase={true}
      inputPosition='center'
      keyboardType={'numeric'}
      size={50}
      //onFulfill={(code) => this._onFulfill(code)}
      //onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
      onFulfill= {this.handlerOnFulfill}
      //onFulfill={(isValid, code) => this._onFinishCheckingCode2(isValid, code)}
      containerStyle={{ marginTop: 14, borderRadius: 2,backgroundColor: '#FFFFFF',marginBottom:0}}
      codeInputStyle={{ borderWidth: 1.5 }}
      
    />

     </View>

  <Text style= {{marginTop:65,marginLeft:20,marginRight :207,marginBottom : 9}}> পুনরায় কোড  ১৫ সেকেন্ডে </Text>

  
 <View style= {{marginLeft:20,marginRight :20,marginBottom:235 ,backgroundColor :'skyblue'}}> 

 <TouchableOpacity style = {styles.submitButton} onPress ={() => navigate('App', {name : 'jane'  })} >

               <Text style = {styles.submitButtonText} > ভেরিফাই করুন
            </Text>
        </TouchableOpacity>

</View>

        
      </View>
  </View>


    );
  }
}



export default  ProfileScreen

const styles = StyleSheet.create({

submitButton: {
  height: 45,
  borderRadius: 2,
  justifyContent :'center',
  alignItems :'center',
  backgroundColor: '#CCD6DD'
   },

   submitButtonText:{
    marginTop :10.2,
    marginBottom: 10.2,
    marginLeft : 101.7,
    marginRight : 101.7,
  
     opacity: 0.5,color: '#292C32',
     fontSize: 16,fontWeight: 'bold',
    lineHeight: 25
   },

   text:{
      height: 20,
    width: 133,
     opacity: 0.7,
     color: '#000000',
     fontSize: 14, 
      lineHeight: 21
   },
 image: {
  marginTop :74.5,
  marginBottom :12,
  marginLeft: 144.5,
  marginRight: 144.5,
 width: 72,
 height: 71,
 position: 'absolute',
  justifyContent: 'center',
 },

  
  heading: {

       height: 45,
       color: '#000000',
       fontSize: 14,  lineHeight: 22, textAlign: 'center'
      
  },
  
  
  
  

   
  
});



