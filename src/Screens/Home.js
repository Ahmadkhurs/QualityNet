import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput ,Pressable, Image} from 'react-native'
import React, { useEffect, useState } from 'react'


// import one from '../../src/images/city.jpeg'

import { Axios } from 'react-native-axios';
import Images from '../assest/images/Images';
import ScreenNames from '../../route/ScreenNames';

const Home = (props) => {

  const [background,setbackground] = useState(Images.Backgroung());


  const onTextPress = () => {
    props.navigation.navigate(ScreenNames.Page2);
  }

  return (
   <ImageBackground source={background} style={Styles.Images}>
        <Image style = {Styles.imageHome} source = {Images.Shop()}/>
        <View style={{ flex: 1 ,justifyContent:'center',alignItems:'center'}}>
        <Text style = {Styles.Text}>{'Welcome'}</Text>
        <Pressable onPress = {onTextPress}>
        <View style={Styles.textInputContainer}>
          <Text style = {{fontSize:30}}>{'Menu'}</Text>
        </View>
        </Pressable>
      </View>
    </ImageBackground>
  )
}

export default Home

const Styles = StyleSheet.create({
  Images: {
    flex: 1,
  },

  textInputContainer: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    paddingHorizontal: 100,
    width: '80%',
    justifyContent: 'space-between',
    
  },

  textInput: {
    height: 40,
    fontWeight: '600',

  },
  Text:{
    color:'rgba(255,255,255,0.5)',
    fontSize:30,
    marginBottom:100,
    marginTop:-90,
  },
  imageHome:{
    height: 100,
    width: '100%',
  },

})
