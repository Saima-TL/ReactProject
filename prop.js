  
 import React, { Component } from 'react';
import { TouchableOpacity , TextInput , StyleSheet ,Text ,AppRegistry, View } from 'react-native';
import { Image } from 'react-native';
//import PresentationalComponent from './PresentationalComponent' ;


//<Image style = {styles.logo} source = {require('./img/logo.png')} />

 class App extends React.Component {
   state = {
      myState: 'এগিয়ে যান'
   }
   updateState = () => {
      this.setState({ myState: 'The state is updated' })
   }
   render() {
      return (
         <View>
            <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
         </View>
      );
   }
}

const PresentationalComponent = (props) => {
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
            
            <Text style = {styles.placeholder}> Email  </Text>

               </TextInput>
      </View>


      
      <View style={{ flex: 3, backgroundColor: 'white',marginLeft: 6 }}>
      <TouchableOpacity style = {styles.submitButton}>
               <Text style = {styles.submitButtonText}>
                      
                       <Text onPress = {props.updateState}>
            {props.myState}
                      </Text>
          

            </Text>
            </TouchableOpacity>

             <Text style={styles.last}>By continue you accept the terms of use and privacy policy </Text>
        
      </View>



        
      </View>
    )
  }



export default PresentationalComponent




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