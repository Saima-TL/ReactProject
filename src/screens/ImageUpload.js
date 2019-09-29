
import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Constants } from 'expo';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';



class Header extends Component {

    render() {  
        return (  
            <View style={{height : 65,backgroundColor: '#F9FBFF',alignItems : 'center',justifyContent : 'center'}}>

      <Image style = {{alignItems : 'center',justifyContent : 'center',marginBottom : 10}} source={require('./heading.png')}/>

      
      </View> 
        );  
    }  
} 

export default class App extends Component {

	   static navigationOptions = {
   headerTitle: <Header />,
   headerTitleStyle: {

        
      },
       headerStyle: {
        //sbackgroundColor: '#292929',
        
        marginBottom : 5,
        //height : 56,
        //marginLeft : 16,
        // marginRight : 39
      },
  };

     state = {
   
    screenHeight: 0,
  };



  state = {
    image: null,
    uploading: false,
  };

 _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let {
      image
    } = this.state;

    if (!image) {
      return;
    }

    return (
      <View
        style={styles.maybeRenderContainer}>
        <View
          style={styles.maybeRenderImageContainer}>
          <Image source={{ uri: image }} style={styles.maybeRenderImage} />
        </View>

        <Text
          onPress={this._copyToClipboard}
          onLongPress={this._share}
          style={styles.maybeRenderImageText}>
          {image}
        </Text>
      </View>
    );
  };


  _share = () => {
    Share.share({
      message: this.state.image,
      title: 'Check out this photo',
      url: this.state.image,
    });
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert('Copied image URL to clipboard');
  };

  _takePhoto = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

  
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!pickerResult.cancelled) {
        this.setState({ image: pickerResult.uri });
      }

      this.uploadImageAsync(pickerResult.uri);
    }
  };

  _pickImage = async () => {
    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera roll
    if (cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        base64: true,
        aspect: [4, 3],
      });


      if (!pickerResult.cancelled) {
        this.setState({ image: pickerResult.uri});
      }

      this.uploadImageAsync(pickerResult.uri);
    }
  };

 uploadImageAsync(pictureuri) {
  let apiUrl = 'http://123.123.123.123/ABC';



    var data = new FormData();  
    data.append('file', {  
      uri: pictureuri,
      name: 'file',
      type: 'image/jpg'
    })

    fetch(apiUrl, {  
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      method: 'POST',
      body: data
    }).then(
      response => {
        console.log('succ ')
        console.log(response)
      }
      ).catch(err => {
      console.log('err ')
      console.log(err)
    } )

  }
//<StatusBar barStyle="default" />
  render() {
    let {
      image
    } = this.state;

    return (
      <View style={styles.container}>

        <Button
          onPress={this._pickImage}
          title="Pick an image from camera roll"
        />

        <Button onPress={this._takePhoto} title="Take a photo" />

        {this._maybeRenderImage()}
        {this._maybeRenderUploadingOverlay()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  exampleText: {
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  maybeRenderUploading: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
  },
  maybeRenderContainer: {
    borderRadius: 3,
    elevation: 2,
    marginTop: 30,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    width: 250,
  },
  maybeRenderImageContainer: {
  	 marginTop : 30,
  
  height: 100,	
  width: 100,
   borderRadius: 50,

  },
  maybeRenderImage: {
    height: 250,
    width: 250,
  },
  maybeRenderImageText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
});









// import React, { Component } from 'react';  
// import { View, Text, StyleSheet, Button } from 'react-native';  
// import Icon from 'react-native-vector-icons/Ionicons';  

// import { Keyboard, TouchableOpacity ,Dimensions, TextInput ,AppRegistry,ListView} from 'react-native';
// import { Image,ScrollView } from 'react-native'; 
// import { DrawerActions } from 'react-navigation'; 
// import { withNavigation } from 'react-navigation';
// import Expo from 'expo';
// //import ImagePicker from 'react-native-image-crop-picker';
// //import ImagePicker from 'react-native-image-picker';


// import {  
//     createAppContainer,  
//     createStackNavigator  
// } 
// from 'react-navigation';

// import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

// import Modal from "react-native-modal";
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';
// import * as Permissions from 'expo-permissions';

// export default class ImagePickerExample extends React.Component {
//   state = {
//     image: null,
//      imgUri: null
//   };

//    componentDidMount() {
//     this.getPermissionAsync();
//   }

//   getPermissionAsync = async () => {
//     if (Constants.platform.ios) {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//       if (status !== 'granted') {
//         alert('Sorry, we need camera roll permissions to make this work!');
//       }
//     }
//   }

//   _pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//     });

//     console.log(result);


//     _onTakePic = async () => {
//     const {
//       cancelled,
//       uri,
//     } = await Expo.ImagePicker.launchCameraAsync({});
//     if (!cancelled) {
//       this.setState({ imgUri: uri });
//     }
//   }

//     if (!result.cancelled) {
//       this.setState({ image: result.uri });
//     }
//   };



//   render() {
//     let { image } = this.state;

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           title="Pick an image from camera roll"
//           onPress={this._pickImage}
//         />
//         {image &&
//           <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}


//               <TouchableOpacity
         
//             onPress={this._onTakePic}>
//             <Text>Take Picture</Text>
//           </TouchableOpacity>


//       </View>
//     );
//   }
// }

//  
