  
 import React, { Component } from 'react';
import { TouchableOpacity , TextInput , StyleSheet ,Text ,AppRegistry, View } from 'react-native';
import { Image } from 'react-native';




class Button extends Component{

  render() {
    return (
<View>
          <TouchableOpacity style = {styles.submitButton}>
      <Text style = {styles.submitButtonText}>{this.props.name}

            </Text>

            </TouchableOpacity>    
              
</View>
           

    );
  }
}




export default Button ;



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
