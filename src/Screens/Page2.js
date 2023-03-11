import { View, Text, TextInput, StyleSheet, Button, Image, ScrollView, Pressable, ImageBackground , NavigationAction} from 'react-native'
import React from 'react'
import { useState } from 'react'
import Card from '../components/Amount'
import CategoryItem from '../components/CategoryItem'
import Images from '../assest/images/Images'
import ScreenNames from '../../route/ScreenNames'


const Page2 = (props) => {
  const [background, setbackground] = useState(Images.homeBackground);
  const BuyPg = () => {
    props.navigation.navigate(ScreenNames.Buy)
  }

  const CategoryArr = [
    {
      title: "Smartphones",
      image : Images.Smartphones(),
    },
    {
      title: "Ipads",
      image: Images.Ipads(),
    },
    {
      title: "Computers",
      image: Images.Computers(),
    },
    {
      title: "Watches",
      image: Images.Watches(),
    },
    {
      title: "Accessories",
      image: Images.Accessories(),
    },
    {
      title: "Buy",
      image : Images.Icon() ,
    },
  ]

  const renderCategories = () => {
    return CategoryArr.map((category) =>
      <CategoryItem
        Images={category.image}
        title={category.title}
      />)
  }


    return (
      
     <View style = {styles.appContainer}>
     <ImageBackground source={background} style={{ flex: 1 }}>
     <Image style = {styles.imagesStyle} source = {Images.Shop()}/>
        <ScrollView>
          {renderCategories()}
          <Pressable onPress={Card}>
            <View style = {styles.orderboared}>
              <Text style = {styles.Text}> {'Cart'}</Text>
            </View>
          </Pressable>
          </ScrollView>
      </ImageBackground>
    </View>
    )
  



  return (

    <View style={styles.appContainer}>
      <ImageBackground source={background} style={{ flex: 1 }}>
        <ScrollView>
          {renderCategories()}
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

  appContainer: {
    flex: 1,

  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  imagesStyle: {
    width: '100%',
    height: 100,
    marginLeft: 4,
    marginTop: 4,
    borderRadius: 10,
  },
  // imagesorderboard: {
  //   flex: 1

  // },
  // imagesorderboard2: {
  //   flex: 1 ,
  // },
  orderboared: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 1,
    marginHorizontal: 10,
    borderColor: 'rgba(255,255,255,0.7)',
    marginBottom: 15,
    backgroundColor: 'rgba(100,100,100,0.3)' ,
  },


  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  Text: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'white',
  },

  goalsContainer: {
    flex: 5,
  },


});

export default Page2 