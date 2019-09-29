
import { Button, View, Text } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, { Component } from 'react';
import { Navigate , Dimensions, TouchableOpacity , TextInput , StyleSheet,AppRegistry } from 'react-native';
import { Image } from 'react-native';
import { AsyncStorage} from 'react-native' ;

import Icon from 'react-native-vector-icons/Ionicons';  
  
import {  
    createSwitchNavigator,  
    createDrawerNavigator
} from 'react-navigation'; 


class ProfileScreen extends React.Component {

	 _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  // async _bootstrapAsync() {
  //  const userToken = await AsyncStorage.getItem('username');
  //  let data = JSON.parse(userToken);
  //  console.warn(data);
  // };

  componentDidMount() {
  	//this._bootstrapAsync();
  }

      static navigationOptions = {
  title: null,
header : null
}

  
  render() {
const { navigation } = this.props;  
        const user_name = navigation.getParam('username', 'NO-User');  

    const {navigate} = this.props.navigation;
    return (
     
      <View style={{
        backgroundColor: '#FFFFFF',
       flex: 1,
        flexDirection: 'column',
        marginTop :132,
        marginBottom : 131,
        marginLeft :20,
        marginRight: 20
      }}>

       <Image style = {styles.image} source={require('./Warning.png')} />

       
      <View style={ styles.view1}>
           
          <Text style={styles.text}>ভেরিফিকেশন কোড পাচ্ছেন না ?</Text>

      </View>

      <View style={ styles.view2}>
      
      <Text style={styles.heading}>1. মোবাইল নাম্বারটি সঠিক কিনা দেখুন {JSON.stringify(user_name)} </Text>

<Text style={styles.heading}>2. যদি মোবাইল নাম্বার ঠিক থাকে তাহলে ১০ মিনিট পর আবার চেষ্টা করুন </Text>

</View>

<View style={{flex : 2,justifyContent: 'flex-start',alignItems : 'center', textAlign : 'center' }}>

<View style={{flexDirection :'row',flex: 1 }}>



<View style={{flex :4,flexDirection:'column'}}>

 <View style={{flexDirection :'row',flex: 4}}>
 </View>

 <View style={{flexDirection :'row',flex:0.1,backgroundColor: 'black'}}>
 </View>

 <View style={{flexDirection :'row',flex: 4}}>
 </View>


</View>

<View style={{flex :2,justifyContent :'center' }}><Text style={styles.linestyle}> অথবা </Text></View>


<View style={{flex :4,flexDirection:'column'}}>

 <View style={{flexDirection :'row',flex: 4}}>
 </View>

 <View style={{flexDirection :'row',flex:0.1,backgroundColor: 'black'}}>
 </View>

 <View style={{flexDirection :'row',flex: 4}}>
 </View>


</View>



</View>
      
</View>
  
      <View style={{ alignItems : 'center', textAlign : 'center',marginTop :12}}>

      <Text style={styles.lt}> কল করুন, আমরা আপনাকে সাহায্য করবো </Text>
            
            <TouchableOpacity style = {styles.submitButton}  onPress ={() => this.props.navigation.navigate('Trucklagbe')}
            >
               <Text style = {styles.submitButtonText}>  
                  হেল্পলাইনে কল করুন
            </Text>
        </TouchableOpacity>  

    

      <TouchableOpacity style = {styles.tryButton} onPress={this._signOutAsync}   >
               <Text style = {styles.tryText} >  
                  আবার চেষ্টা করুন
            </Text>
        </TouchableOpacity>

        </View>
    



        
      </View>


//onPress ={() => this.props.navigation.navigate('fetchData')}
    );
  } 

}


export default  ProfileScreen

const styles = StyleSheet.create({
  linestyle: {
    marginBottom : 30
  },

  lt: {
    alignItems : 'center', textAlign : 'center' ,
    marginBottom :0 
  },

 image: {
  marginTop :20,
  marginBottom : 324,
  
  marginRight :144,
 width: 32,
 height: 32,

 position: 'absolute',
  left: (Dimensions.get('window').width / 2) - 25,
  justifyContent: 'center',
 },

  view1: {
    //flex :4,
    marginTop : 55,
    //justifyContent: 'flex-end',
    marginLeft :24,
    marginRight : 24,
    marginHorizontal :8,
    marginVertical :12,
    marginBottom :14,
    height: 24, color: '#000000',
   fontWeight: 'bold',
     lineHeight: 22,  textAlign: 'center',
    textAlign : 'center',
    alignItems:'center'

  },

  linestyle: {
    marginHorizontal :8,
    marginVertical :12
  },
  view2: {
    height: 86, width: 284, color: '#000000',fontSize: 14,  lineHeight: 25, 
   marginLeft: 21,
    marginRight : 15,
   marginHorizontal :14,
   marginBottom : 10,
   //flex:4, 
  //justifyContent: 'flex-start'
  },

  text: {
    //lineHeight: 22,
    alignItems : 'center',
    textAlign : 'center',
    //height :24,
     fontSize: 20, 
 
    fontWeight: 'bold',
      borderColor: 'black',
       color : 'black',
      marginHorizontal: 8,
      marginVertical: 10
  
  },

  heading: {
    
   alignItems : 'center',
    
    marginVertical :5,
    marginHorizontal: 8,
       color : 'black'
      
  },
  
   submitButton: {

      height: 45, width: 276, borderRadius: 2, backgroundColor: '#DF2D4D',
      marginHorizontal: 8,
      marginVertical: 10,
      marginLeft : 42,
      marginRight :42,
      padding: 10,
      alignItems: 'center',
      fontWeight: 'bold'

   },

   submitButtonText:{
    
        height: 24, width: 146, color: '#000000', fontSize: 16
   },

   tryButton :{

    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
   
    backgroundColor: 'white',
    borderColor :'black',
    borderRadius : 1,
    height: 45, width: 276, borderRadius: 2,
      marginHorizontal: 8,
      marginVertical: 10,
      marginLeft : 42,
      marginRight :42,
      padding: 10,
      alignItems: 'center',
      fontWeight: 'bold'


   },

   tryText: {
        height: 24, width: 146, color: '#2181F3', fontSize: 16

   }

   
  
});



