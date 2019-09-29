import React from 'react';
import {
  Text,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';


class Splash extends React.Component {
  constructor(props) {
    super(props);
    //this._bootstrapAsync();
  }



  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
   const userToken = await AsyncStorage.getItem('username');
   let data = JSON.parse(userToken);
   //console.warn(data);

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  componentDidMount() {
   this._bootstrapAsync();
   
  }

  // Render any loading content that you like here
  render() {
    const { navigation } = this.props;  

    const {navigate} = this.props.navigation;
    return (
      <View>
      <Text>HI</Text>
      </View>
    );
  }
}

export default  Splash
