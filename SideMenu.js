


import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Trucklagbe from "./src/screens/Trucklagbe"; 
import TruckAdd from "./src/screens/TruckAdd"; 
import Main from "./src/screens/MainScreen";  
import DetailScreen from "./src/screens/DetailScreen";  
import StackNav from "./src/screens/StackNav";  
import LoadLocation from "./src/screens/load_location";  
import fetchData from "./src/screens/fetchData";  
import ImageUpload from "./src/screens/ImageUpload";

  
import {  
    createSwitchNavigator,  
    createAppContainer,  
    createDrawerNavigator,  
    createStackNavigator  
} from 'react-navigation';  

export default class App extends Component {
  static navigationOptions = {
  title: null,
header : null
}  

    render() {  
          const { navigation } = this.props;  

    const {navigate} = this.props.navigation;

    //          <AppContainer navigation = {this.props.navigation}/>      
                return <AppContainer />;

    }  
} 



const DashboardStackNavigator = createStackNavigator(  
    {  
        DashboardNavigator: Trucklagbe ,
        StackNav : StackNav,
        fetchData : fetchData,
        DetailScreen : DetailScreen ,
        LoadLocation: LoadLocation 

    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {
        return { 
            headerLeft: (  
                <Icon  
                    style={{ paddingLeft: 16 , color : 'white' }} 
                    onPress={() => navigation.openDrawer()}                    
                    name="md-menu"  
                    size={30}  
                />  
            )  
        };  
        }  
    }  
); 


const WelcomeStackNavigator = createStackNavigator(  
    {  
        WelcomeNavigator: Main  
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 16 , color : 'white'}}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
); 

const ImageUploadStackNavigator = createStackNavigator(  
    {  
        ImageUploadNavigator: ImageUpload
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 16 , color : 'white'}}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
);



const TruckAddStackNavigator = createStackNavigator(  
    {  
        TruckAdd : TruckAdd 
    },  
    {  
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 16 , color : 'white'}}  
                        onPress={() => navigation.openDrawer()}  
                        name="md-menu"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }  
); 

const AppDrawerNavigator = createDrawerNavigator({  
    Dashboard: {  
        screen: DashboardStackNavigator
    },  
    Welcome : {  
        screen: WelcomeStackNavigator 
    },

    ImageUpload : {
        screen : ImageUploadStackNavigator
    },

    আমারট্রাক : {

        screen : TruckAddStackNavigator
    }


});  
 

const AppContainer = createAppContainer(AppDrawerNavigator);   


  
