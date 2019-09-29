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
 
export default class ModalTester extends Component {

  onSelect(index, value){
  this.setState({
    text: `Selected index: ${index} , value: ${value}`
  })
}
 
  state = {
    isModalVisible: false,
    Modal2 : false,
    Modal3 : false,
    Modal4 : false,
    Modal5 : false
  };
 
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  showModal2 = () => {
     this.setState({ Modal2: !this.state.Modal2 });

  };
  showModal3 = () => {
     this.setState({ Modal3: !this.state.Modal3 });

  };

  showModal4 = () => {
     this.setState({ Modal4: !this.state.Modal4 });

  };
  
  showModal5 = () => {
     this.setState({ Modal5: !this.state.Modal5 });

  };



      //<Text style={styles.text}>{this.state.text}</Text>

  //<Button title="Hide modal" onPress={this.toggleModal} />
 
  render() {
    return (
      <View style={{ flex: 1 }}>


        
         <TouchableOpacity style = {styles.tryButton} onPress={this.toggleModal}   >
               <Text style = {styles.tryText} >  
                  Show modal
            </Text>
        </TouchableOpacity> 

        <Modal isVisible={this.state.isModalVisible}
        animationType="fade"
            transparent={true}
         onBackdropPress={() => this.setState({ isModalVisible: false })}>

           <Image style = {styles.image2} source={require('./cross.jpg')}  title="Hide modal"  onPress={this.toggleModal}  />

          <View style={{ height: 332, width: 320,borderRadius: 2, backgroundColor: '#FFFFFF',marginLeft : 20,marginRight : 20,marginBottom : 132}}>

          <Image style = {styles.image} source={require('./verified.png')} />

          <Text style = {styles.text1}>
           ট্রিপটি শেষ করতে চান?
          </Text>

           <Text style = {{height: 48,opacity: 0.7,fontSize: 14,textAlign: 'center',marginLeft : 38,
            marginRight : 37,marginTop : 10}}> কাস্টমারের মালামাল জায়গামত পৌঁছে দিলে ট্রিপটি শেষ করুন
           </Text>
            
            <View style = {styles.rectangle1}>

          <Text style = {styles.text2}>
           হাঁ, ট্রিপটি শেষ করুন
           </Text>
              
            </View>


            <View style = {styles.rectangle2}>

          <Text style = {styles.text3}>
          না
           </Text>
              
            </View>
            
            
          </View>
        </Modal>








         <TouchableOpacity style = {styles.tryButton} onPress={this.showModal2}   >
               <Text style = {styles.tryText} >  
                  Show modal
            </Text>
        </TouchableOpacity> 

         <Modal isVisible={this.state.Modal2}
         onBackdropPress={() => this.setState({ Modal2: false })}>


          <View style={{ height: 301,width: 320,borderRadius: 2, backgroundColor: '#FFFFFF',marginLeft : 21,marginRight : 19,marginBottom :221}}>


          <Text style = {styles.text4}>
         ট্রাক সিলেক্ট করুন
          </Text>

            
 <View style = {{marginTop : 35,marginBottom :93 }} >
         
         <RadioGroup
  size={20}
  thickness={2}
  color='#010101'
  borderColor = '#FF010101'
  highlightColor='#FFFFFFFF'
  selectedIndex={0}
  onSelect = {(index, value) => this.onSelect(index, value)}>

  
  <RadioButton 
    value='DM HA 223312'
    color='#4285F4'
    style = {{paddingLeft : 30,borderBottomColor: '#979797',borderBottomWidth: 1}}>

    <Text style = {{marginLeft : 26,fontSize: 16 , fontWeight: 'bold',  height: 24,marginBottom : 10}}>DM HA 223312</Text>
  </RadioButton>


  <RadioButton 
    value='DM HA 223312'
    color='#4285F4'
    style = {{paddingLeft : 30,borderBottomColor: '#979797',borderBottomWidth: 1,marginTop : 10}}>


    <Text style = {{marginLeft : 26,fontSize: 16 , fontWeight: 'bold', height: 24,lineHeight : 24 ,marginBottom : 10}}>DM HA 223312</Text>
  </RadioButton>

  <RadioButton 
    value='DM HA 223312'
    color='#4285F4'
    style = {{paddingLeft : 30,marginTop : 10}}>

    <Text style = {{marginLeft : 26,fontSize: 16 , fontWeight: 'bold' , height: 24,lineHeight : 24}}>DM HA 223312</Text>
  </RadioButton>
</RadioGroup>
</View>

            
          </View>
        </Modal>







<TouchableOpacity style = {styles.tryButton} onPress={this.showModal3}   >
               <Text style = {styles.tryText} >  
                  Show modal
            </Text>
        </TouchableOpacity> 

         <Modal isVisible={this.state.Modal3}
         onBackdropPress={() => this.setState({ Modal3: false })}>

 <View style={{ height: 483, width: 320,borderRadius: 2, backgroundColor: '#FFFFFF',marginLeft : 20,marginRight : 20,marginBottom : 39,marginTop : 118 }}>
   <Image style = {styles.image3} source={require('./trucks.jpg')} />

    <Text style = {{marginLeft : 36,fontSize: 16 , fontWeight: 'bold',marginTop : 40}}>এই ট্রিপ নেয়ার জন্য ট্রেইনিং প্রয়োজন</Text>

    <Text style = {{opacity: 0.7, color: '#000000' , fontSize: 14, lineHeight: 21, marginLeft : 54,marginRight : 53,marginTop : 10,textAlign : 'center'}}>আমাদের হেল্পনাইনে কল করে এখনই
আপনার সিট কনফার্ম করুন</Text>

    <Text style = {{color: '#FA6400',fontSize: 16, lineHeight: 25, marginLeft : 36,marginRight : 45,marginTop : 20,textAlign : 'center',borderBottomWidth : 1
                    ,borderBottomColor : '#FA6400'}}>
    ফ্রি ট্রেইনিং সাথে আকর্ষণীয় পুরস্কার</Text>
   

   <View style = {styles.rectangle}>

        <TouchableOpacity onPress ={() => this.props.navigation.navigate('DetailScreen')}   >
      <Text style={{marginTop : 11, color : '#FFFFFFFF',fontSize: 16, fontWeight: 'bold',lineHeight: 24,textAlign : 'center'}}>হেল্পলাইনে কল করুন</Text>
       </TouchableOpacity> 


      </View>

             <Text style = {{textAlign : 'center',fontSize: 16 ,marginTop : 20,marginBottom : 20,
             opacity: 0.4,  color: '#000000',lineHeight: 25}}>এখন না</Text>


      </View>
         </Modal>




         <TouchableOpacity style = {styles.tryButton} onPress={this.showModal4}  >
               <Text style = {styles.tryText} >  
                  Show modal
            </Text>
        </TouchableOpacity> 

         <Modal isVisible={this.state.Modal4}
         onBackdropPress={() => this.setState({ Modal4: false })}>

 <View style={{ height: 440, width: 320,borderRadius: 2, backgroundColor: '#FFFFFF',marginLeft : 20,marginRight : 20,marginBottom : 60,marginTop : 140 }}>
   

    <Image style = {styles.image4} source={require('./trucks.jpg')} />

    <Text style = {{fontSize: 16 , fontWeight: 'bold',marginTop : 23, textAlign : 'center'}}>ট্রাক যোগ করা নেই!</Text>
    <Text style = {{opacity: 0.7, color: '#000000' , fontSize: 14, lineHeight: 21, marginLeft : 34,marginRight : 33,marginTop : 10,textAlign : 'center'}}>
   অ্যাপে আপনার কোন  ট্রাক যোগ করা নেই। 
ট্রাক যোগ করে বেশি বেশি ট্রিপ করুন</Text>


   <View style = {styles.rectangle3}>

        <TouchableOpacity onPress ={() => this.props.navigation.navigate('DetailScreen')}   >
      <Text style={{marginTop : 10.2, color : '#FFFFFFFF',fontSize: 16, fontWeight: 'bold',lineHeight: 24,textAlign : 'center'}}>ট্রাক যোগ করুন</Text>
       </TouchableOpacity> 


      </View>

        <Text style = {{textAlign : 'center',fontSize: 16 ,marginTop : 22,marginBottom : 18,
             opacity: 0.4,  color: '#000000',lineHeight: 25}}>এখন না</Text>


      </View>
         </Modal>






<TouchableOpacity style = {styles.tryButton} onPress={this.showModal5}  >
               <Text style = {styles.tryText} >  
                  Show modal
            </Text>
        </TouchableOpacity> 

         <Modal isVisible={this.state.Modal5}
         onBackdropPress={() => this.setState({ Modal5: false })}>

 <View style={{ height: 358, width: 320,borderRadius: 2, backgroundColor: '#FFFFFF',marginLeft : 20,marginRight : 20,marginBottom : 60,marginTop : 140 }}>
     <Text style = {styles.text6}>যে কারণে বাতিল করতে চান</Text>

 <View style = {{marginTop : 18,marginBottom : 25 }} >
         
         <RadioGroup
  size={20}
  thickness={2}
  color='#010101'
  borderColor = '#FF010101'
  highlightColor='#FFFFFFFF'
  selectedIndex={0}
  onSelect = {(index, value) => this.onSelect(index, value)}>

  
  <RadioButton 
    value='কারণ ১ '
    color='#4285F4'
    style = {{marginLeft : 20.5 }}>

    <Text style = {{marginLeft : 9,fontSize: 14,color: '#000000'}}>কারণ ১ </Text>
  </RadioButton>


  <RadioButton 
    value='কারণ ২'
    color='#4285F4'
    style = {{marginTop : 5,marginLeft : 20.5}}>


    <Text style = {{marginLeft : 9,fontSize: 14 ,marginBottom : 5,color: '#000000'}}>কারণ ২</Text>
  </RadioButton>

  <RadioButton 
    value='কারণ ৩'
    color='#4285F4'
    style = {{marginLeft : 20.5}}>

    <Text style = {{marginLeft : 9,fontSize: 14,color: '#000000'}}>কারণ ৩</Text>
  </RadioButton>
</RadioGroup>
</View>

<View style = {styles.rectangle4}>

        <TouchableOpacity onPress ={() => this.props.navigation.navigate('DetailScreen')}   >
      <Text style={{marginTop : 10.2, color : '#2984FC',fontSize: 16, fontWeight: 'bold',textAlign : 'center'}}>ট্রিপটি বাতিল করুন</Text>
       </TouchableOpacity> 


      </View>


      <View style = {styles.rectangle5}>

        <TouchableOpacity onPress ={() => this.props.navigation.navigate('DetailScreen')}   >
      <Text style={{marginTop : 10.2, color : '#FFFFFFFF',fontSize: 16, fontWeight: 'bold',textAlign : 'center'}}>ফিরে যান</Text>
       </TouchableOpacity> 


      </View>




 </View>
 </Modal>










      </View>
    );
  }
}



const styles = StyleSheet.create({

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

   },

  text1 : {
      height: 24,     
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
 
    marginLeft : 38,
    marginRight : 37,
    marginTop : 13.5

  },
  text2 : {
       height: 25.6,
     marginTop : 10.2,
     marginBottom : 9.2,
      color: '#FFFFFFFF' ,
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 24,
      textAlign: 'center'
    },

    text3 : {

        height: 24,
        color: '#4285F4' ,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop : 11,
        marginBottom : 10



    },

    text4 : {

          height: 23,
          color: '#000000' ,
          fontSize: 16,
         
          textAlign : 'center',
         
          marginTop : 10

    },
    text5 : {
          height: 24,
          color: '#DE000000',
          fontSize: 16,
           fontWeight: 'bold',
           marginLeft : 64,
           marginTop : 10

     },
     text6 : {
      borderBottomColor: '#979797',borderBottomWidth: 1,
        paddingBottom : 14,  
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 25,
             textAlign: 'center',
             marginTop : 15
     },


    button2 : {
       marginTop : 40
    },


  rectangle1 :{
    height: 45,
    width: 281,
    borderRadius: 2,
    backgroundColor: '#4285F4',
    marginTop : 42,
    marginBottom : 10,
    marginLeft : 20,
    marginRight : 19
    

  },
  rectangle2 : {
    height: 45,
    width: 281,
    borderRadius: 2,
    borderWidth: 1,
   borderColor : '#4285F4',
    marginTop : 10,
    marginBottom : 19,
    marginLeft : 20,
    marginRight : 19
  },
  rectangle : {
  
    marginTop  : 30, 

    height: 45,
    
    borderWidth : 1,
    alignItems : 'center',

    borderRadius: 2,
    marginLeft : 18,
    marginRight : 18,
    backgroundColor: '#DF2D4D'


  }, 
  rectangle3 : {
    height: 45,
    width: 281,
    borderRadius : 2,
    backgroundColor: '#4285F4',
    marginTop : 30,
    marginLeft : 24,
    marginRight  :18

  },

  rectangle4 : {
  height: 45,
    width: 281,
     borderWidth : 1,
  
    borderRadius : 2,
    backgroundColor: '#FDFDFD',

    borderColor: '#2984FC',

    marginBottom :20,
      marginLeft : 21,
    marginRight :18



  },

  rectangle5 : {

      height: 45,
    width: 281,
    borderRadius : 2,
    backgroundColor: '#4285F4',
    
      marginLeft : 21,
    marginRight :18,
    marginBottom :25



  },
     image : {
         height: 47,
        width: 47,
        borderColor:'#E02020',
        marginLeft : 136.5,
        marginRight : 136.5,
        marginTop : 28.5
     },
     image2 : {

           height: 34,
           width: 34,
           
           marginRight : 20,
           marginBottom : 4,
           marginLeft : 306,
           marginTop : 132
     },
     image3 : {
          height :170,width : 320    

     },
     image4 : {
         height :200 ,width :320

     }


  });
