import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  

import { Navigate ,Keyboard, TouchableOpacity ,Dimensions, TextInput ,AppRegistry,ListView } from 'react-native';
import { Image,ScrollView } from 'react-native'; 
// import { DrawerActions } from 'react-navigation'; 
// import { withNavigation } from 'react-navigation';
//import AppContainer from "./SideMenu";
import Modal from "react-native-modal";
import button from './button_onpress' ;
import MultiSelect from 'react-native-multiple-select';
import { FlatList, ActivityIndicator} from 'react-native';
//import Select from "react-styled-select";


import {  
    createAppContainer,  
    createStackNavigator  
} 
from 'react-navigation';


 // const items = [
 //    {
 //    id: 'nahs75a5sg',
 //    name: 'Lagos',
 //  },  {
 //    id: 'sdhyaysdj',
 //    name: 'Kaduna',
 //  }, {
 //    id: 'suudydjsjd',
 //    name: 'Abuja',
 //  }];

       // <MultiSelect
       //    hideTags
       //    items={items}
          
       //    uniqueKey="id"
       //    ref={(component) => { this.multiSelect = component }}
       //    onSelectedItemsChange={this.onSelectedItemsChange}
       //    selectedItems={selectedItems}
       //    selectText="Pick Items"
       //    searchInputPlaceholderText="Search Items..."
       //    onChangeInput={ (text)=> console.log(text)}
          
       //    tagRemoveIconColor="#CCC"
       //    tagBorderColor="#CCC"
       //    tagTextColor="#CCC"
       //    selectedItemTextColor="#CCC"
       //    selectedItemIconColor="#CCC"
       //    itemTextColor="#000"
       //    displayKey="name"
       //    searchInputStyle={{ color: '#CCC' }}
       //    submitButtonColor="#CCC"
       //    submitButtonText="Submit"
       //  />

       //    <View>
       //    {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
       //  </View>
         // {this.state.select ? (
         //      <View style = {{height: 30, width: 96.67,borderColor:'#E6E6E6',borderWidth :1, borderRadius: 1,
         //    marginLeft : 14.33,marginRight : 15.33 ,marginBottom : 20}}>
            

         //    <Text style = {styles.text}>   </Text>
        
         //    </View>
         //    ) : (   <View> 
         //    </View>)   }

class Header extends Component {

    render() {  
        return (  
            <View style={{height : 56,backgroundColor : '#292929' ,marginTop : 0}}>

      <Image style = {styles.image3} source={require('./notification.png')}/>

      
     <View style={{ flexDirection :'row',marginLeft : 38,marginRight : 38,marginBottom : 14.5,marginTop : -25,
      height: 26,width: 214,borderColor: '#FFFFFF',backgroundColor: '#FFFFFF',borderRadius: 2,borderWidth: 2}} >


      <Text style={styles.text1}> সকল ট্রিপ  </Text> 
      <Text style={styles.text2}> চলতি ট্রিপ </Text> 
    
      </View>
      </View> 
        );  
    }  
}  



class MainScreen extends Component {

  


   static navigationOptions = {
   headerTitle: <Header />,
   headerTitleStyle: {

        
      },
       headerStyle: {
        backgroundColor: '#292929',
        marginTop : 24,
        // marginBottom : 22,
        height : 56,
        //marginLeft : 16,
        // marginRight : 39
      },
  };


constructor(props) {
    super(props);
    this.state = {
        
        isLoading: true ,

    };
  } 

 componentDidMount(){
    return fetch('https://raw.githubusercontent.com/Saima-24/Location/master/location_main.json')
      .then((response) => response.json())
      .then((responseJson) => {
        

        this.setState({
          isLoading: false,
          dataSource: responseJson,
          Areas: responseJson[0].Areas,

        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });

  }


 //<TouchableOpacity  onPress={() => this.setState({ backgroundColor : '#4285F4'})}>
//   </TouchableOpacity>  


state = {
      selectedItems :[],
       select: false,
       area : false
    };


    // onSelectedItemsChange = selectedItems => {
    //   this.setState({ selectedItems });
    // };
     

// actionOnRow(item) {
//    console.warn('Selected Item :',item.location);
//    this.setState({
//     //backgroundColor : '#4285F4';
//       select: item.location
//    });

    
// }

    getListViewItem = (item) => {  

        this.setState ({area: item[0].Areas });

         this.setState({select: item.location });

         // if (this.setState ({area: item.Areas[0] })) {
         //     this.setState ({select : false}) ;
         // }

         this.setState({ 
            backgroundColor: '#4285F4'
        });

           
    } 

  render () {
   
   const { selectedItems } = this.state;

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator color="purple"/>
        </View>
      )
    }


    return (
      <View>
            <View style = {{borderBottomColor: '#FFFFFF',borderBottomWidth: 2}}>

         <View style={{ flexDirection :'row',backgroundColor: '#FFFFFF',height : 40}} >
         
         <TouchableOpacity onPress ={() => this.props.navigation.navigate('LoadLocation')}>
         <Text style={styles.text9}> লোড </Text> 
         </TouchableOpacity> 

        <View style ={{flexDirection : 'row' ,flex :0.1,backgroundColor : '#000000',opacity: 0.1}}>
        </View>

         <Text style={styles.text10}>আনলোড </Text>

         <View style ={{flexDirection : 'row' ,flex :0.1,backgroundColor : '#000000',opacity: 0.1}}>
        </View> 

         <Text style={styles.text11}> অন্যান্য</Text> 
      </View>
     </View>

           <Text style={styles.text3}>পছন্দের লোড লোকেশন সিলেক্ট করুন</Text>
       
           <View>



           {this.state.select ? (

           <View>

           <View style = {{height: 30, width: 96.67,borderColor:'#4285F4',borderWidth :1, borderRadius: 1,
            marginLeft : 14.33,marginRight : 15.33 ,marginBottom : 20,backgroundColor : 'white'}}>
            

            <Text style = {{ color : '#4285F4',textAlign : 'center',marginTop : 7,marginBottom : 6}}> {this.state.select} </Text>
        
            </View>


            <View style = {{marginLeft : 20,marginTop : 21,marginRight : 20,justifyContent : 'space-between'}}>


            <FlatList
          numColumns = {3}
          data={this.state.dataSource}
          dataset={(data) => this.setState({ data })}
          onPress={() => this.selectItem(data)}
          renderItem={({item}) =>
           

           <TouchableOpacity onPress={this.getListViewItem.bind(this, item)} ItemSeparatorComponent={this.renderSeparator}    >

            <View style = {{height: 30, width: 96.67,borderColor:'#E6E6E6',borderWidth :1, borderRadius: 1,
            marginLeft : 14.33,marginRight : 15.33 ,marginBottom : 20}}>
            
        

            <Text style={styles.text}> {item.location}  </Text>
              </View>
          
           </TouchableOpacity>
         }
         keyExtractor={({ id }, index) => id}

         />
        

 </View>


 </View>            ) : (
          

           <View style = {{marginLeft : 20,marginTop : 21,marginRight : 20,justifyContent : 'space-between'}}>


            <FlatList
          numColumns = {3}
          data={this.state.dataSource}
          dataset={(data) => this.setState({ data })}
          onPress={() => this.selectItem(data)}
          renderItem={({item}) =>
           

           <TouchableOpacity  onPress={this.getListViewItem.bind(this, item)}  ItemSeparatorComponent={this.renderSeparator}  >
            <View style = {{height: 30, width: 96.67,borderColor:'#E6E6E6',borderWidth :1, borderRadius: 1,
            marginLeft : 14.33,marginRight : 15.33 ,marginBottom : 20}}>
            

            <Text style = {styles.text}> {item.location}  </Text>
        
            </View>
           </TouchableOpacity>
         }
         keyExtractor={({ id }, index) => id}

         />
        

 </View>


 ) }

 </View>




<View>

{this.state.area ? (

           <View>

           <View style = {{height: 30, width: 96.67,borderColor:'#4285F4',borderWidth :1, borderRadius: 1,
            marginLeft : 14.33,marginRight : 15.33 ,marginBottom : 20,backgroundColor : 'white'}}>
            

            <Text style = {{ color : '#4285F4',textAlign : 'center',marginTop : 7,marginBottom : 6}}> {this.state.area} </Text>
        

            </View>


            <View style = {{marginLeft : 20,marginTop : 21,marginRight : 20,justifyContent : 'space-between'}}>


            <FlatList
          numColumns = {3}
          data={this.state.Areas}
           renderRow={this.renderRow.bind(this)} 
          dataset={(data) => this.setState({ data })}
          onPress={() => this.selectItem(data)}
          renderItem={({item}) =>
           

           <TouchableOpacity onPress={this.getListViewItem.bind(this, item)} ItemSeparatorComponent={this.renderSeparator}    >

            <View style = {{height: 30, width: 96.67,borderColor:'#E6E6E6',borderWidth :1, borderRadius: 1,
            marginLeft : 14.33,marginRight : 15.33 ,marginBottom : 20}}>

            <Text style={styles.text}> {item}  </Text>

              </View>
          
           </TouchableOpacity>
         
         }

         keyExtractor={({ id }, index) => id}

         />
        

 </View>


 </View>            ) : (
          

           <View style = {{marginLeft : 20,marginTop : 21,marginRight : 20,justifyContent : 'space-between'}}>

            <FlatList
          numColumns = {3}
          data = {this.state.dataSource}
          dataset={(data) => this.setState({ data })}
          onPress={() => this.selectItem(data)}
          renderItem={({item}) =>
           

           <TouchableOpacity  onPress={this.getListViewItem.bind(this, item)}  ItemSeparatorComponent={this.renderSeparator}  >
            <View style = {{height: 30, width: 96.67,borderColor:'#E6E6E6',borderWidth :1, borderRadius: 1,
            marginLeft : 14.33,marginRight : 15.33 ,marginBottom : 20}}>
            

            <Text style = {styles.text}> {item.Areas}  </Text>
        
            </View>
           </TouchableOpacity>
         }
         keyExtractor={({ id }, index) => id}

         />
        

 </View>


 ) }

</View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
   selected: {backgroundColor: "#FA7B5F"},
  text : {
     textAlign : 'center',
      marginTop : 7,
      marginBottom : 6


  },

  image3 : {
   
     marginTop : 21,
    //marginBottom : 15.5,
     marginLeft : 300,
     marginRight : 25,
     height: 19.5,
     width: 16,
     backgroundColor: '#FFFFFF'

  },
   text1 : {
    fontSize: 12,
    //lineHeight: 18,
    opacity: 0.7,
    color: '#000000',
    flex:5

  },
  text2 : {
    flex :5,
    borderRadius: 2,
    borderWidth: 1,
    borderColor : '#FFFFFF',  
    backgroundColor: '#4285F4'
},

text3 :{
      height: 17,
      opacity: 0.7,
      color: '#000000',
      fontSize: 12,
      marginLeft : 20,
      marginTop :20

},

text9: {
 
 flex : 3,
 marginLeft : 41,
 marginRight : 50,
 marginTop :12,
 marginBottom :11,
 fontSize: 12,
lineHeight: 18,
 textAlign: 'center',

 height: 17,
width: 29,
opacity: 0.7,
 color: '#000000'

},

text10: {
flex :3,
marginLeft : 30,
 marginRight : 32,
  marginTop :12,
 marginBottom :11,

height: 17,
width: 56,
opacity: 0.7,
 color: '#000000',

 fontSize: 12,
lineHeight: 18,
 textAlign: 'center'


},

text11: {

 flex :3 ,
 marginLeft : 37,
 marginRight : 47,
  marginTop :12,
 marginBottom :11,

 height: 17,
width: 36,
opacity: 0.7,
 color: '#000000',

 fontSize: 12,
lineHeight: 18,
 textAlign: 'center'


}
});

export default MainScreen;


// const DisplayModal = (props) => (

// <Modal  visible={ props.display } 
//        onBackdropPress={() => this.setState({ isVisible: false })}
//  onRequestClose={ () => console.log('closed') }>
//           <View style={{ height : 100 }}>
//             <Text>Hello!</Text>
//             <Button title="Hide modal" onPress={this.toggleModal} />
//           </View>
//         </Modal>
        


//     )

// import React from 'react'
// import { Modal, View, Image, Text, StyleSheet } from 'react-native';


// class Load extends Component {

// render () {

//     state = {
//     isModalVisible: true
//   };
//   toggleModal = () => {
//     this.setState({ isModalVisible: !this.state.isModalVisible });
//   };
//     return (     

//           <View>

//           <Modal  visible={ props.display } 
//        onBackdropPress={() => this.setState({ isVisible: false })}
//  onRequestClose={ () => console.log('closed') }>
//           <View style={{ height : 100 }}>
//             <Text>Hello!</Text>
//             <Button title="Hide modal" onPress={this.toggleModal} />
//           </View>
//         </Modal>

//         </View>
//         );
//       }
//     }



 

