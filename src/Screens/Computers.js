import { View, Text, TextInput, StyleSheet, Button, Image,ImageBackground,ScrollView ,Pressable} from 'react-native'
import React from 'react'
import { useState , Component} from 'react'
import Card from '../components/Amount'
import Images from '../assest/images/Images'
const Computers = () =>{
   
    return(
        <ImageBackground source={require
        ('../assest/images/Images')}>
        <ScrollView>


        </ScrollView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
Computers:{
        marginTop:4,
        borderRadius:10,
        borderWidth:0.5,
        borderColor:'gray'
    },
    orderboared : {
        flex:1,
        borderWidth:1,
        borderRadius:10,
        marginTop:1,
        marginHorizontal:10,
        borderColor:'rgba(255,255,255,0.7)',
        marginBottom:15,
        backgroundColor:'rgba(100,100,100,0.3)'
       },
       Text:{
        alignSelf:'center',
        fontSize:30,
        marginTop:-65,
        marginBottom:30,
        color:'white',
        marginLeft:50
       },
       priceStyle:{
        alignSelf:'center',
        fontSize:20,
        marginTop:-10,
        color:'rgba(255,255,255,0.8)'
       },
       amountStyle:{
        alignSelf:'center',
        fontSize:20,
        color:'white'
       },
    })
    


export default Computers