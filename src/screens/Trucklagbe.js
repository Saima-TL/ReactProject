import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  

import { Navigate ,Keyboard, TouchableOpacity ,Dimensions, TextInput ,AppRegistry,ListView } from 'react-native';
import { Image,ScrollView } from 'react-native'; 
import { FlatList, ActivityIndicator} from 'react-native';
import { Actions } from 'react-native-router-flux';
import AnimatedEllipsis from 'react-native-animated-ellipsis';
// import { DrawerActions } from 'react-navigation'; 
// import { withNavigation } from 'react-navigation';
//import AppContainer from "./SideMenu";

import {  
    createAppContainer,  
    createStackNavigator  
} 
from 'react-navigation';

class Header extends Component {

    render() {  
        return (  
            <View style={{height : 56,backgroundColor : '#292929' ,marginTop : 0}}>

      <Image style = {styles.image3} source={require('./notification.png')}/>

      
     <View style={{ flexDirection :'row',marginLeft : 38,marginRight : 38,marginBottom : 14.5,marginTop : -25,
      height: 26,width: 214,borderColor: '#FFFFFF',backgroundColor: '#FFFFFF',borderRadius: 2,borderWidth: 2,alignItems : 'center',
    justifyContent : 'center'}}>

      <View style = {{  alignItems : 'center',
    justifyContent : 'center',
    flex:5 ,height :26,
        width : 107}}>
      <Text style={styles.text1}> সকল ট্রিপ </Text> 
      </View>

      <View style = {{ flex :5,
        height :26,
        width : 107,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor : '#FFFFFF',  
    backgroundColor: '#4285F4'}}>
      <Text style={styles.text2}> চলতি ট্রিপ </Text> 
    </View>
      </View>
      </View> 
        );  
    }  
} 


const { height } = Dimensions.get('window'); 

  
class DashboardScreen extends Component { 

  //  state = { animating: true } 
  // closeActivityIndicator = () => setTimeout(() => this.setState({  animating: false }), 1000)  

  constructor(props){
    super(props);
     status:'false',
    this.state ={ isLoading: true,
                  
                }
  }

// async saveValueFunction(data) {
//  // console.warn (data);

//       await AsyncStorage.setItem('data', data);
   
//       this.props.navigation.navigate('StackNav');
   
//     };

//   savemobile = () => {
//     this.setState({ data: 'BiddingTrip' });
//     this.saveValueFunction(this.state.data);
    
//   }

//   savemobile2 = () => {
//     this.setState({ data: 'on_demand_trip' });
//     this.saveValueFunction(this.state.data);

//   }

  componentDidMount(){
     //this.closeActivityIndicator()  ;
    return (
      fetch('https://raw.githubusercontent.com/Saima-24/Location/master/TripDetails.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      }),


      fetch('https://raw.githubusercontent.com/Saima-24/Location/master/express.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          express: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      })



      );
  }


    static navigationOptions = {
   headerTitle: <Header />,
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


ShowHideTextComponentView = filter =>{

    this.setState({status: true})
};

 // _onLoadEnd = () => {
 //    this.setState({
 //      isLoading: false
 //    })
 //  }

 // onPressNext() {

 //        this.setState({ data: 'BiddingTrip' })
 //    }
 //<ActivityIndicator  animating = {animating} size="large" color="#ff0000"/>


  
    render() {
      //const animating = this.state.animating  ;
      const { navigation } = this.props;  
    const {navigate} = this.props.navigation;
  
        const scrollEnabled = this.state.screenHeight > height;  

         if(this.state.isLoading){
      return(
        <View style={{flex: 1,alignItems :'center',justifyContent :'center'}}>
           
         <Image style = {{ height :24,width :70,marginBottom :5}} source={require('./express.png')}/>
          
          <AnimatedEllipsis numberOfDots={3}
          
                  minOpacity={0.4}
                  animationDelay={200}
                  style={{
                    color: '#ff0000',
                    fontSize: 100,
                    letterSpacing: -15,
                  }}
  />
     

        </View>
      )
    }


        return (   
        
         <View style={{backgroundColor: '#CCD6DD',flex : 1}}>
         <View>
          {this.state.status ? (
    
       <View style={{ flexDirection :'row',backgroundColor: '#FFFFFF',height : 40,marginBottom : 8}} >
         
         <TouchableOpacity onPress ={() => this.props.navigation.navigate('LoadLocation')} >
         <Text style={styles.text9}> লোড </Text> 
         </TouchableOpacity> 

         
        <View style ={{flexDirection : 'row' ,flex :0.1,backgroundColor : '#000000',opacity: 0.1}}>
        </View>
          

         <Text style={styles.text10}>আনলোড </Text>

         <View style ={{flexDirection : 'row' ,flex :0.1,backgroundColor : '#000000',opacity: 0.1}}>
        </View> 

         <Text style={styles.text11}> অন্যান্য </Text> 
      </View>

      ) : (<View>
       </View>) }

      </View> 

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >

    
  <View>


         {this.state.status ? (
<View>
   <View style={{marginBottom : 4}}>
      <Text style={styles.text3}> এখনই </Text>
      </View> 
        
        <FlatList

          data={this.state.express}
          renderItem={({item}) => (

    <View>

         

       
     <View style={{ marginLeft : 8,marginRight: 8, backgroundColor: '#FFFFFF',marginBottom : 8,height :184}}> 
     
       <Image style = {styles.image1} source={require('./express.png')}/>
      
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end',marginTop:2 }}>
            <View style={{height:17,width:41}}> 
               <Text style={{ backgroundColor : '#0F9D58',textAlign: 'center'}}> নতুন</Text>
           </View>
        </View> 

        
          <View style = {{flexDirection : 'row'}}>
           <Image style = {styles.image2}source={require('./pic.png')}/>

          <View style = {{flexDirection : 'column'}}>
                   
          <Text style={styles.text4}>{item.Loadlocation}</Text>
          <Text style={styles.text5}>{item.LoadlocationSecond}</Text>
          <Text style={styles.text6}>আরও ২টি স্টপে থামবে</Text>
          <Text style={styles.text7}>{item.Unloadlocation}</Text>
        <Text style={styles.text8}>{item.UnloadlocationSecond}</Text>
        
          </View>

         
          <View style = {{flexDirection : 'column'}}>
         <View style = {{flexDirection : 'row'}}>
         <Image style = {styles.image} source={require('./package.png')}/>

         <Text style={styles.text12}>{item.Details}</Text>
         </View>


          <Text style ={{fontWeight : 'bold',marginLeft : 160,fontSize: 20, marginRight : 12,marginBottom : 10,marginTop : 47}}> ৳১২০০ </Text>
          </View>

         </View>
         
        
        
       
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end',marginBottom:10 }}>

               <View style={{height: 30,  width: 100, borderRadius: 1, backgroundColor: '#4285F4',marginRight : 10,marginBottom:10,alignItems : 'center',
                justifyContent : 'center'}}> 

                     <TouchableOpacity onPress={() => navigate('StackNav',{id: 0})} >
                      <Text style={{textAlign: 'center', fontSize: 14, lineHeight: 21,color: '#FFFFFF'}}> ট্রিপ ধরুন </Text>
                     </TouchableOpacity> 

          
              </View>
         </View>
      
      
     
    </View>

    </View>
     
     )}
     keyExtractor={({id}, index) => id}
    />
</View>

    ) : (
          <View style={{ backgroundColor: '#F4B400',height :70,marginTop : 532,flexDirection : 'row'}}>
         
         <Image style = {styles.location} source={require('./location.png')}/>

         <View style = {{flexDirection : 'column'}}> 
         <Text style = {{color: '#000000',fontSize: 16,marginTop : 7,marginLeft : 10}}> লোকেশন সার্ভিস চালু করুন</Text>
         <Text style = {{color: '#000000',marginLeft : 10,height: 34,width: 215,color: '#000000',fontSize: 12,marginRight : 10}}>
          সকল ট্রিপ দেখতে আপনার মোবাইলের GPS সার্ভিসটি চালু করুন</Text>
         </View>
         
         <View style = {{
        height :30,
        width : 70,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: '#4285F4' ,marginTop : 20,marginRight : 10}}>
    <TouchableOpacity onPress={this.ShowHideTextComponentView}    >
      <Text style={styles.text2}> Turn On </Text> 
   </TouchableOpacity> 

    </View>

         


      </View>

     
     ) }

     </View>



<View>
         {this.state.status ? (
          <View>

           <View style={{marginBottom : 4}}>
     <Text style={styles.text3}>আজকে</Text>
     </View>

         <FlatList

          data={this.state.dataSource}
          renderItem={
            ({item}) => (

       
     <View style={{ marginLeft : 8,marginRight: 8, backgroundColor: '#FFFFFF',marginBottom : 8,height :184}}> 
        <Text style = {{ marginLeft : 10,marginRight : 290,marginTop : 5,color: '#000000',fontSize: 11}}>সকাল ৭ টা</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end',marginTop:2 }}>
            <View style={{height:17,width:41}}> 
               <Text style={{ backgroundColor : '#0F9D58',textAlign: 'center'}} >নতুন</Text>
           </View>
        </View> 

        
          <View style = {{flexDirection : 'row'}}>
           <Image style = {styles.image2}source={require('./pic.png')}/>

          <View style = {{flexDirection : 'column'}}>
                   
          <Text style={styles.text4}>{item.Loadlocation}</Text>
          <Text style={styles.text5}>{item.LoadlocationSecond}</Text>
          <Text style={styles.text6}>আরও ২টি স্টপে থামবে</Text>
          <Text style={styles.text7}>{item.Unloadlocation}</Text>
        <Text style={styles.text8}>{item.UnloadlocationSecond}</Text>
        
          </View>

         
          
         <View style = {{flexDirection : 'row'}}>
         <Image style = {styles.image} source={require('./package.png')}/>

         <Text style={styles.text12}>{item.Details}</Text>
         </View>

         </View>
         
      


         <View style={{ flexDirection: 'row', justifyContent: 'flex-end',marginBottom:10 }}>
               <View style={{height: 30,  width: 100, borderRadius: 1, backgroundColor: '#82C43C',marginRight : 10,marginBottom:10,alignItems : 'center',
               justifyContent : 'center'}}> 

                     <TouchableOpacity  onPress={() => navigate('StackNav',{id: 1})} >
                      <Text style={{textAlign: 'center', fontSize: 14, lineHeight: 21,color: '#FFFFFF'}} >বিড করুন</Text>
                     </TouchableOpacity> 

              </View>
         </View>
      
      
     
    </View>
     
     )}

     keyExtractor={item => item.TripId}
    
    />  

      </View> ) : (
          <View style={{ }}>
         
       
      </View>
     ) }

     </View>
   
     </ScrollView>  
     </View> 

        );  
    }  
}  

export default  DashboardScreen


const styles = StyleSheet.create({

  location: {
     marginTop : 20,
     marginLeft : 18


  },

     container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center'  
    }  ,

  image: {
    marginTop : 17,
    marginLeft :90,
    marginRight : 2,
    width: 12,
    height: 12
  },

  image1: {

     height: 15.82,
     width: 42.43

  },
  image2: {

     marginTop : 11,
     marginLeft : 19


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

  CircleShapeView: {
    marginLeft :15,
    marginRight : 319,
    marginTop : 18,
    
    width: 10,
    height: 10,
    borderRadius: 150/2,
    backgroundColor: '#4285F4'
},

CircleShapeView3: {

  marginLeft :15,
    marginRight : 319,
    marginTop : 4,
    marginBottom: 1,
    width: 10,
    height: 10,
    borderRadius: 150/2,
    backgroundColor: '#0F9D58'

},

  text1 : {
    fontSize: 12,
  
    color: '#000000',
   
  },
 

text3 : {
  fontSize: 14,
 marginRight : 317,
 marginLeft : 8,

},
text4 : {
  fontSize: 15,
  marginTop : 11,
 
  marginLeft :5,

},

text5 : { 

  marginLeft :5,
  marginTop : 1,

  fontSize: 12,
    
},

text6 : {
  fontSize: 10,
  lineHeight: 16,
  marginTop : 5,
  marginLeft :5,



},

text7 : {
  fontSize: 14,
 
  marginTop :3,
  marginLeft :5,



},
text8: {
  fontSize: 11,
 
  marginLeft :5
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

 flex :2 ,
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


},
text12 : {

 
 marginRight : 12,
 width : 127,
 height :17,
 marginTop : 12,
 marginLeft : 5
 
 


},

view1 : {

  marginLeft : 30

},
view2 : {

  marginLeft : 32

}


 
  
});



