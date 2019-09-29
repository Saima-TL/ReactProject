import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  

import { Navigate,Keyboard, TouchableOpacity ,Dimensions, TextInput ,AppRegistry,ListView } from 'react-native';
import { Image,ScrollView } from 'react-native'; 
import { DrawerActions } from 'react-navigation'; 
import { withNavigation } from 'react-navigation';
//import AppContainer from "./SideMenu";
 
import {  
    createAppContainer,  
    createStackNavigator  
} 
from 'react-navigation';

    //<Button onPress={() => this.props.navigation.navigate("Dashboard")} title="Shipper trip list" />

class Header extends Component {

    render() {  
        return (  

          
                    <View style={{height : 56,backgroundColor : '#292929',flexDirection : 'row'}}>
        <Text style = {styles.text1}> ট্রিপ নং #৮১৩২৪১ </Text>
        <Text style = {styles.text2}> সাপোর্ট </Text>
             </View>

        );  
    }  
} 

const { height } = Dimensions.get('window'); 

class DetailScreen extends Component {

  static navigationOptions = {
   headerTitle: <Header/>,
   headerTitleStyle: {

        
      },
       headerStyle: {
        backgroundColor: '#292929',        
        // marginBottom : 22,
        height : 56,
        //marginLeft : 16,
        // marginRight : 39
      },
  };

     state = {
   
    screenHeight: 0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
   
    this.setState({ screenHeight: contentHeight });
  };
  render () {
  const { navigation } = this.props;  
    const {navigate} = this.props.navigation;
    
        return (
        <View style = {{flex :1}}> 


        <View style = {{height: 444, backgroundColor: '#0F9D58'}}>

            <Text style = {styles.text3}>কাস্টমার আপনাকে দিবে </Text>            
             <Text style = {styles.text4}>৳৮৫০</Text>
              <Text style = {styles.text5}>বিস্তারিত</Text>

               <View style = {{marginTop : 22}}>
              <View style = {{flexDirection : 'row',justifyContent : 'space-between'}}>

               <Text style = {styles.text6}>মোট ভাড়া</Text>
              <Text style = {styles.text7}>৳ ১০০০</Text>

               </View>


               <View style = {{flexDirection : 'row',justifyContent : 'space-between'}}>

               <Text style = {styles.text6}>কাস্টমার আপনাকে দিবে</Text>
              <Text style = {styles.text7}>৳ ৮৫০</Text>

               </View>


               <View style = {{flexDirection : 'row',justifyContent : 'space-between'}}>

               <Text style = {styles.text6}>ট্রাক লাগবে আপনাকে দিবে</Text>
              <Text style = {styles.text7}>৳ ১৫০</Text>

               </View>

       </View>

        </View>



       <View style = {{height : 50,marginBottom : 10}}>
             <View style = {{flexDirection : 'row'}}>
<Icon style={{marginTop : 19,marginLeft : 23, color: '#4285F4',marginLeft : 20 }}  
                        name="md-menu"  
                        size={20}  
                    />  
<Text style={styles.text8}>ট্রিপের বিস্তারিত</Text>
</View>


       </View>


       <View style = {{ height : 66}}>

           <View style = {styles.rectangle5}>
        
        <TouchableOpacity style = {styles.submitButton}  onPress ={() => this.props.navigation.navigate('DetailScreen')}   >
      <Text style={styles.text20}>কাস্টমারকে কল করুন</Text>
       </TouchableOpacity> 


      </View>


       </View>

       
      </View>
    );
  }
}


const styles = StyleSheet.create({


  text20 :{
  marginTop : 8,
   height: 24,

  color: '#FFFFFFFF' ,
  fontSize: 16,
  fontWeight: 'bold',
  lineHeight: 24,
  textAlign: 'center'


 },
  rectangle5 : {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,

    

    height: 45,
    
    borderWidth : 1,
    alignItems : 'center',

    borderRadius: 2,
    marginLeft : 20,
    marginRight : 20,
    backgroundColor: '#4285F4'
   },


  text1 : {
  
    marginTop : 17,  
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft : 24,
    width : 204 ,
    height : 25
  },
 
 text2 :{
    
   marginLeft : 140,
    marginRight : 20 ,
    
    color: '#4285F4'

 },
 text3 : {
   marginTop : 88.41,
   marginLeft : 100,
   marginRight : 99,
    height: 25,
    color: '#FFFFFF',fontSize: 18,
    lineHeight: 27

 },
 text4 : {
     marginLeft :113,
     marginRight : 113,
     height: 71,
     color: '#FFFFFF',
    fontSize: 50,
      fontWeight: 'bold',
        lineHeight: 76
 },
 text5 : {
    height: 23,
      color: '#FFFFFF',
      fontSize: 16,
    
      marginLeft : 16,
      marginRight : 291,
      marginTop :108

 },
 text6 : {
   marginLeft : 30 ,
  marginTop : 6,
    height: 23,
    color: '#FFFFFF', fontSize: 16

 },
 text7 : {
 
 

  marginRight : 40,
  marginTop : 6,
    height: 23,
    color: '#FFFFFF',fontSize: 16,
    fontWeight: 'bold'

 },
 text8 : {
    height: 20,color: '#4285F4',fontSize: 14,
    marginTop :18,marginLeft :12

 }

});

export default DetailScreen;