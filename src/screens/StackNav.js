import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button,FontAwesome } from 'react-native';  
import Iconn from 'react-native-vector-icons/AntDesign';  
import Icon from 'react-native-vector-icons/Ionicons';  

import { Navigate ,Keyboard, TouchableOpacity ,Dimensions, TextInput ,AppRegistry,ListView } from 'react-native';
import { Image,ScrollView } from 'react-native'; 
import { DrawerActions } from 'react-navigation'; 
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
//import DropdownMenu from 'react-native-dropdown-menu';
//import { Dropdown } from 'react-native-material-dropdown';
//import MenuItem from '@material-ui/core/MenuItem';
 // console.warn(this.props.navigation.state.params.id);

 //   this.setState({ id : this.props.navigation.state.params.id });

 //  if (this.props.navigation.state.params.id === 1) {
  
 //  this.setState({indicator: 'false'});
 //   }
 //  else
 //  {   
 //    this.setState({indicator:'true'});
  
 //  }

import { FlatList, ActivityIndicator } from 'react-native';
import Menu, { MenuItem } from "react-native-material-menu";
import { AsyncStorage} from 'react-native' ;
import Modal from "react-native-modal";

import {  
    createAppContainer,  
    createStackNavigator  
} 


from 'react-navigation';

const { height } = Dimensions.get('window'); 


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



 
class DetailScreen extends Component { 

  constructor(props) {
    super(props);
    this.state = {
        status: true,
        isLoading: true,
        indicator : '',
        id : '',
        filter : ''

       

    };
   
  }

componentDidMount(){ 

    return fetch('https://raw.githubusercontent.com/Saima-24/Location/master/Owner_details.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.Owner_details,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      }); 

       

  }



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


//   static navigationOptions = {
//   title: null,
// header : null
// }


// init = () => {

//        const otherParam = this.props.navigation.getParam('otherParam', 'on_demand_trip');
//      this.setState({TripType: otherParam});
   
  
//   if (this.state.TripType === 'on_demand_trip') {
//     console.warn(this.state.TripType) ;
//      this.setState({indicator: true})
  
// }
//   else
//   {
//     this.setState({indicator: false})
  
//   }

// };



  // getValueFunction = () => {
  //   //console.warn(5);
  //   //function to get the value from AsyncStorage
  //   AsyncStorage.getItem('data').then(value =>
  //     //AsyncStorage returns a promise so adding a callback to get the value
  //     {this.setState({ TripType : value }); console.warn(value);} 
  //   );

  //   if (this.state.TripType === 'BiddingTrip') {
  //    this.setState({indicator: 'true'})
  //  console.warn(1);
  //  }


  // else
  // {   
  
  //   this.setState({indicator:'false'});
  //   console.warn(2);
  
  // }

  // };

 _menu = null;

  //state = { filter: '' };

  setMenuRef = ref => {
    this._menu = ref;
  };

  sort = filter => {
    this.setState({ filter });
    this._menu.hide();
  };


  showMenu = () => {
    this._menu.show();
  };


ShowHideTextComponentView = filter =>{
  // if(this.state.status == true)
  // {
  //   this.setState({status: false})
  // }
  this.setState({status : true}) 
  
  if (this.state.filter === '') {
    //console.warn(this.state.filter) ;
     this.setState({status: true});
     this.showModal4() ;
  
}
  else
  {
    this.setState({status: false})
  
  }

};

  
   onSelect(index, value){
  this.setState({
    text: `Selected index: ${index} , value: ${value}`
  })
}
 

state = {
    isModalVisible: false,
     Modal2 : false,
    Modal4 : false
    };

   toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  showModal2 = () => {
     this.setState({ Modal2: !this.state.Modal2 });

  };

showModal4 = () => {
     this.setState({ Modal4: !this.state.Modal4 });

  };


    render() {
      
      const { filter } = this.state;

      const { navigation } = this.props;  
      const {navigate} = this.props.navigation;

    
     const id = this.props.navigation.getParam('id', '');

     // this.setState({id: id});
  
        const scrollEnabled = this.state.screenHeight > height;

        if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
  



 return (
        <View style = {{flex :1}}> 

       
       <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}>


      <View>

      <Modal isVisible={this.state.Modal4}
         onBackdropPress={() => this.setState({ Modal4: false })}>

 <View style={{ height: 440, width: 320,borderRadius: 2, backgroundColor: '#FFFFFF',marginLeft : 20,marginRight : 20,marginBottom : 60,marginTop : 140 }}>
   

    <Image style = {styles.modal} source={require('./trucks.jpg')} />

    <Text style = {{fontSize: 16 , fontWeight: 'bold',marginTop : 23, textAlign : 'center'}}>ট্রাক যোগ করা নেই!</Text>
    <Text style = {{opacity: 0.7, color: '#000000' , fontSize: 14, lineHeight: 21, marginLeft : 34,marginRight : 33,marginTop : 10,textAlign : 'center'}}>
   অ্যাপে আপনার কোন  ট্রাক যোগ করা নেই। 
ট্রাক যোগ করে বেশি বেশি ট্রিপ করুন</Text>


   <View style = {styles.box}>

        <TouchableOpacity onPress ={() => this.props.navigation.navigate('TruckAdd')}   >
      <Text style={{marginTop : 10.2, color : '#FFFFFFFF',fontSize: 16, fontWeight: 'bold',lineHeight: 24,textAlign : 'center'}}>ট্রাক যোগ করুন</Text>
       </TouchableOpacity> 


      </View>

        <Text style = {{textAlign : 'center',fontSize: 16 ,marginTop : 22,marginBottom : 18,
             opacity: 0.4,  color: '#000000',lineHeight: 25}}>এখন না</Text>


      </View>
         </Modal>







      {this.state.status ? 
      ( <View style = {{flexDirection : 'row', borderBottomColor: '#979797',borderBottomWidth: 1}}>
        

      {id ? 

      (<View style = {{marginLeft: 150,marginTop : 10,alignItems : 'center',marginBottom :10}}>
        <Image style = {styles.image2} source={require('./Warning.png')} />
      <Text style = {styles.text3}> আমেনা খাতুন</Text>
      <Text style = {styles.text4}> আমান উদ্দিন স্টিল মিলস</Text>


      <View style = {styles.rectangle}>
        <Text style = {{ fontSize: 12 ,color: '#000000'}}> ৯০% </Text>
      </View>


      </View>) : (
      <View style = {{flexDirection : 'row'}}>
       <View style = {{ marginLeft :17,marginTop : 49}}>
       <Image style = {styles.image1} source={require('./express.png')}/>
      </View> 

      <View style = {{marginLeft: 60,marginTop : 10,alignItems : 'center',marginBottom :10}}>
        <Image style = {styles.image2} source={require('./Warning.png')} />
      <Text style = {styles.text3}> আমেনা খাতুন</Text>
      <Text style = {styles.text4}> আমান উদ্দিন স্টিল মিলস</Text>


      <View style = {styles.rectangle}>
        <Text style = {{ fontSize: 12 ,color: '#000000'}}> ৯০% </Text>
      </View>


      </View>

      </View>
       ) }

      
      </View>

      ):
      (
       <View style = {{flexDirection : 'row',marginLeft : 10,marginRight :10}}>
         <View style = {{alignItems :'center',textAlign : 'center'}}>



         <View style = {{ height: 30,width: 30,marginTop : 36.5,marginLeft : 10,alignItems :'center',justifyContent : 'center'}}>
         <Iconn  style={{ }}
               onPress ={() => this.toggleModal} 
               name="closecircleo"  
              size={30}  
          />  
          </View>
  


      
         <TouchableOpacity onPress={this.toggleModal}>
         <Text style = {{marginLeft : 10,fontSize: 10, color :'#000000'}} >বাতিল করুন</Text> 
         </TouchableOpacity>

         <Modal isVisible={this.state.isModalVisible}
         onBackdropPress={() => this.setState({ isModalVisible: false })}>

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

<View style = {styles.rectangle6}>

        <TouchableOpacity onPress ={() => this.props.navigation.navigate('DetailScreen')}   >
      <Text style={{marginTop : 10.2, color : '#2984FC',fontSize: 16, fontWeight: 'bold',textAlign : 'center'}}>ট্রিপটি বাতিল করুন</Text>
       </TouchableOpacity> 


      </View>


      <View style = {styles.rectangle7}>

        <TouchableOpacity onPress ={() => this.props.navigation.navigate('DetailScreen')}   >
      <Text style={{marginTop : 10.2, color : '#FFFFFFFF',fontSize: 16, fontWeight: 'bold',textAlign : 'center'}}>ফিরে যান</Text>
       </TouchableOpacity> 


      </View>

 </View>

 </Modal>
 </View> 
  






        <View style = {{marginLeft : 71,marginRight : 37,alignItems : 'center',textAlign :'center',marginTop : 10}}>
        <Image style = {{width: 50,
   height: 50,
   borderRadius: 25,
   backgroundColor : 'skyblue'}} source={require('./Warning.png')} />
      <Text > আমেনা খাতুন</Text>
      <Text > আমান উদ্দিন স্টিল মিলস</Text>

      <View style ={{height: 22,
   width: 60,
    opacity: 0.07,
    borderRadius: 11,
     backgroundColor: '#000000'}}>
        <Text style = {{ fontSize: 12 ,color: '#000000'}}> abc </Text>
      </View>
      </View>





        <View style = {{alignItems :'center',textAlign : 'center' }} >
         <View style = {{ height: 30,width: 30,borderRadius: 30 ,borderColor : '#E02020',borderWidth : 1,marginTop : 36.5,marginRight : 10,alignItems :'center'}}>
          <Image style = {{  height: 10 ,width: 10,marginTop :8,marginBottom : 8}} source= {require('./right.png')} onPress={this.showModal2}   />
        </View> 



        <TouchableOpacity onPress={this.showModal2}   >
         <Text style = {{marginRight : 20,fontSize: 10, color: '#FF2200',fontWeight: 'bold',alignItems :'center',textAlign : 'center'}} >
         ট্রিপটি শেষ করুন </Text> 
         </TouchableOpacity> 





          <Modal isVisible={this.state.Modal2}
         onBackdropPress={() => this.setState({ Modal2: false })}
          >

         <Image style = {styles.image6} source={require('./cross.jpg')}  title="Hide modal"  onPress={this.toggleModal}  />

          <View style={{ height: 332, width: 320,borderRadius: 2, backgroundColor: '#FFFFFF',marginLeft : 20,marginRight : 20,marginBottom : 132}}>

          <Image style = {styles.image5} source={require('./verified.png')} />

          <Text style = {styles.text21}>
           ট্রিপটি শেষ করতে চান?
          </Text>

           <Text style = {{height: 48,opacity: 0.7,fontSize: 14,textAlign: 'center',marginLeft : 38,
            marginRight : 37,marginTop : 10}}> কাস্টমারের মালামাল জায়গামত পৌঁছে দিলে ট্রিপটি শেষ করুন
           </Text>
            
            <View style = {styles.rectangle8}>

          <Text style = {styles.text22} onPress ={() => { this.setState({ Modal2: false }); this.props.navigation.navigate('DetailScreen'); }}>
           হাঁ, ট্রিপটি শেষ করুন
           </Text>
              
            </View>


            <View style = {styles.rectangle9}>

          <Text style = {styles.text23}>
          না
           </Text>
              
            </View>
            
            
          </View>
        </Modal>



         </View>     
      </View>
      )       
      }

       </View>




       <View style = {{ height: 70}}>
       <View style ={{flexDirection : 'row'}}>

       <Image style = {styles.image3} source={require('./clock.png')} />
       <Text style = {{ marginLeft : 10,marginTop : 5}}> এখন</Text>

         {this.state.status ? 
      (   <View>  
         <Menu
         style = {{marginLeft : 192 }}

          ref={this.setMenuRef}
          button={

            <Text style={{
          height: 28,
     width: 110,
    borderWidth : 1,
    alignItems : 'center',
    borderRadius: 2,
    marginLeft : 210,
    marginTop :5,
    backgroundColor: '#FDFDFD'}}  onPress={this.showMenu}> {filter || "  "}</Text>
          } >
       
          <MenuFilterItem onPress={this.sort} filter="DM N 1234513">
            DM N 1234513
          </MenuFilterItem>
          <MenuFilterItem onPress={this.sort} filter="DM N 1234514">
           DM N 1234514
          </MenuFilterItem>
          <MenuFilterItem onPress={this.sort} filter="DM N 1234515">
            DM N 1234515
          </MenuFilterItem>
        </Menu>
        </View> )
        :
        (
        <View>
         <Text style={{fontSize: 14, fontWeight: 'bold',marginLeft : 210, alignItems : 'center'}}>{this.state.filter}</Text>
        </View> )
      }
    
       </View> 


       <View style = {{flexDirection : 'row'}}>

       <View style = {styles.rectangle3}>
       <Text style = {styles.text6}> ASSIGNING</Text>
       </View>

       {id ? 

      (<View style = {styles.rectangle4}>
       <Text style = {styles.text7}>ROUND TRIP </Text>
       </View> ) : (
       <View>
      </View> 
       ) }

       </View>
       </View>


       <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
        <View>       
       <View style={{height: 144,flexDirection : 'row'}}>
         
      <View style = {{flex : 25}}><Image style = {styles.image7} source={require('./greenblue.png')} /></View>

      <View style = {{flexDirection : 'column',flex : 325}}>

      <Text style={styles.text8}>{item.Loadlocation}, {item.LoadlocationSecond}</Text>

      <Text style={styles.text9}>{item.SecondLoadlocation}</Text>
      <Text style={styles.text10}>{item.ThirdLoadlocation}</Text>

      <View style = {{marginRight : 30}}>
      <Text style={styles.text12}>{item.Unloadlocation}, {item.UnloadlocationSecond}</Text>
       
      <Text style={styles.text11}> Contact: {item.Name}, {item.MobileNumber}, {item.Address} </Text>
         </View>
      </View>

     </View>




     <View style = {{height: 80}}> 
          <View style = {{flexDirection : 'row'}}>
          <Image style = {styles.image} source={require('./package.png')}/>
          <Text style={styles.text13}>পণ্যের বিবরণ</Text>
          </View>

           <Text style={styles.text14}>{item.Details} </Text>

     </View>


      <View style = {{height: 60}}> 
          <View style = {{flexDirection : 'row'}}>
          <Image style = {styles.image} source={require('./package.png')}/>
          <Text style={styles.text13}>ট্রাকের ধরণ</Text>
          </View>

           <Text style={styles.text14}>{item.Truckneeded}</Text>

     </View>

</View>

     }
/>


      <View style = {{height: 73,borderWidth: 0.5,borderColor :'#979797', borderRadius: 4,marginLeft :20,marginRight :20,marginTop : 17}}>
          
          <View style = {{flexDirection : 'row',
 borderBottomColor: '#979797',
 borderBottomWidth: 2}}>
          
          <Text style={styles.text15}>অতিরিক্ত সার্ভিসঃ</Text>
          <Text style={styles.text16}>* খরচ কাস্টমার দিবে</Text>
          </View>

         <View style = {{flexDirection : 'row'}}>
         <Image style = {styles.image4} source={require('./labour.png')}/>
         <Text style={styles.text17}>লেবার লাগবে</Text>
         </View>
         
      </View>
      
<View style = {{backgroundColor: '#F4F8FF'}}> 

{this.state.status ? (
    <View>
  
          <View style={{height: 56, borderRadius: 1, backgroundColor: '#323232',marginBottom:10}}> 
    
     <Text style={{fontSize: 14, lineHeight: 21,color: '#FFFFFF',marginTop : 18,marginLeft : 24}} >ট্রাক সিলেক্ট করে ট্রিপটি গ্রহণ করুন</Text>
    
     </View>

     <View style={{ backgroundColor: '#F4F8FF',height :80}}>
         
        <View style = {styles.rectangle5}>

        <TouchableOpacity style = {styles.submitButton}  onPress={this.ShowHideTextComponentView}    >
      <Text style={styles.text20}>ট্রিপটি গ্রহণ করুন</Text>
       </TouchableOpacity> 


      </View>

      </View>


      </View>

        ) : 

      ( <View>
    
      <View style = {{height: 43, backgroundColor: '#F4F8FF',marginBottom : 9}}> 

<View style = {{flexDirection : 'row'}}>
<Icon  
                        style={{marginTop : 16,
    
    color: '#4285F4',
  marginLeft : 20 }}  
                        name="md-menu"  
                        size={20}  
                    />  
<Text style={styles.text18}>ট্রাক ভাড়া</Text>

<Text style={styles.text19}> ৳ ১০০০ </Text>
</View>

</View> 


<View style={{ backgroundColor: '#F4F8FF',height :80}}>
         
        <View style = {styles.rectangle5}>

        <TouchableOpacity  >
      <Text style={styles.text20}>কাস্টমারকে কল করুন</Text>
       </TouchableOpacity> 


      </View>

      </View>

</View>) }



 </View> 
      </ScrollView> 
     </View> 


        );  
    }  
}







class MenuFilterItem extends React.PureComponent {
  onPress = () => {
    this.props.onPress(this.props.filter);
  };

  render() {
    return <MenuItem onPress={this.onPress}>{this.props.children}</MenuItem>;
  }
}

export default DetailScreen 


const styles = StyleSheet.create({
    image1: {

     height: 24,
     width: 70

  },

  image4 : {
   height: 20,
   width: 20,
   borderRadius: 2,
   marginLeft : 11,
   marginTop : 10

  },

     image: {
  marginTop :16,
 marginLeft : 19,
  height: 12,
  width: 12
 },
 image7 : {
   marginLeft : 10,
   marginTop : 3


 },

 text18 : {
  marginTop : 16,
    height: 20,
    color: '#4285F4',fontSize: 14,
  marginLeft : 12
 },

 text19 : {
    height: 43,
    color: '#2F3749',
    fontSize: 30,
    fontWeight: 'bold',
     lineHeight: 46,
marginLeft : 130

 },
 text20 :{
  marginTop : 8,
   height: 24,
  color: '#FFFFFFFF' ,
  fontSize: 16,
  fontWeight: 'bold',
  lineHeight: 24,
  textAlign: 'center'


 },

 text13: {
    marginTop : 12,
    marginLeft : 5,
    height: 17,
    opacity: 0.7,
    color: '#000000' ,
    fontSize: 12,
    lineHeight: 18

 },
 text14 : {
  marginTop :11,
  marginLeft : 39,
  color: '#000000'

 },

 text17 : {
   marginTop : 10,
   height: 17,
   marginLeft : 10,
  color: '#000000',
  fontSize: 12

 },

 text16 : {

  height: 17,
  color: '#B90000',
    marginTop : 5,
  marginBottom : 5 ,
  fontSize: 12, 
  textAlign: 'right',
  justifyContent : 'flex-end'


 },

 text15 : {
  marginRight : 100,
  marginLeft : 10,
  height: 17,
  marginTop : 5,
  marginBottom : 5 ,
  opacity: 0.7,
   color: '#000000',
   fontSize: 12,
    justifyContent : 'flex-start'


 },


  text8 : {
      
      color: '#000000' ,
  fontSize: 16,

  marginLeft : 5,
   
},

text12: {
 
      color: '#000000' ,
  fontSize: 16,
 marginTop : 8,
marginLeft : 10,
   
},

text9 : { 
  marginTop : 8,
 
 
  opacity: 0.7,
  color: '#000000',
  marginLeft : 5,
   
  fontSize: 12,
    

},
text10 : { 
  marginTop : 7,
 
  color: '#000000',
  marginLeft : 5,
  
  fontSize: 12,
    lineHeight: 18

},

text11: {

     opacity: 0.7,
    color: '#000000' ,

  fontSize: 12,
  lineHeight: 18,
 marginLeft :5,
    

},


   CircleShapeView: {
    marginLeft :25,
    width: 10,
    height: 11,
    borderRadius: 150/2,
    backgroundColor: '#4285F4'
},

CircleShapeView3: {
 marginTop : 15,
   marginLeft :25,
    width: 10,
    height: 11,
    borderRadius: 150/2,
    backgroundColor: '#0F9D58'

},


  text1 : {
    marginTop : 17,  
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft : 24,
    width : 204 ,
    height : 24
  },


 image2: {

   marginTop : 10,
   //marginLeft : 157,
 
   width: 50,
   height: 50,
   borderRadius: 25,
   backgroundColor : 'skyblue'

 },
 image3 :{
  marginTop : 10,
  marginLeft : 19,
  height: 15,
  width: 15

 },
 modal : {
         height :200 ,width :320

     },

     box : {
    height: 45,
    width: 281,
    borderRadius : 2,
    backgroundColor: '#4285F4',
    marginTop : 30,
    marginLeft : 24,
    marginRight  :18

  },

 text2 :{
    marginLeft : 42 ,
    marginTop : 19,
   
    color: '#4285F4'

 },
 text3 : {
  //marginLeft : 147
 },

 text4 : {
  //marginLeft : 131,
  //marginRight : 131,
  
  fontSize: 10,
 },

 text6 : {
    height: 17,    
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 18
 },
 text7 : {
  height: 17,   color: '#4285F4', fontSize: 12,fontWeight: 'bold',
  lineHeight: 18,
  textAlign: 'center'

 },

  rectangle : {
   height: 22,
   width: 60,
    //opacity: 0.07,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius: 11,
     backgroundColor: '#CCD6DD',
     //marginLeft : 150
   },
   rectangle2 : {
    height: 28,
     width: 110,
    borderWidth : 1,
    alignItems : 'center',
    
    borderRadius: 2,
    marginLeft : 192,
    backgroundColor: '#FDFDFD'
   },

   rectangle3 : {
    height: 20,
    width: 76, 
     borderRadius: 9.5,
     backgroundColor: '#9A9A9A',
     marginLeft : 15
   },
   rectangle4 : {
    height: 20,
    width: 88,
     borderRadius: 10,
     backgroundColor: '#FFF7B500',
      marginRight : 171
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

    rectangle6 : {
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

  rectangle7 : {

      height: 45,
    width: 281,
    borderRadius : 2,
    backgroundColor: '#4285F4',
    
      marginLeft : 21,
    marginRight :18,
    marginBottom :25



  },

  image5: {
         height: 47,
        width: 47,
        borderColor:'#E02020',
        marginLeft : 136.5,
        marginRight : 136.5,
        marginTop : 28.5
     },
     image6 : {

           height: 34,
           width: 34,
           
           marginRight : 20,
           marginBottom : 4,
           marginLeft : 306,
           marginTop : 132
     },
     text21 : {
      height: 24,     
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
 
    marginLeft : 38,
    marginRight : 37,
    marginTop : 13.5

  },
  text22 : {
       height: 25.6,
     marginTop : 10.2,
     marginBottom : 9.2,
      color: '#FFFFFFFF' ,
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 24,
      textAlign: 'center'
    },
        text23 : {

        height: 24,
        color: '#4285F4' ,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop : 11,
        marginBottom : 10



    },

rectangle8:{
    height: 45,
    width: 281,
    borderRadius: 2,
    backgroundColor: '#4285F4',
    marginTop : 42,
    marginBottom : 10,
    marginLeft : 20,
    marginRight : 19
    

  },
  rectangle9 : {
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

 
});