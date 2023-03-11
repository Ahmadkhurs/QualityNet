import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import ScreenNames from '../../route/ScreenNames';


const CategoryItem = (props) => {
    const { Images, title } = props;
    const navgation =  useNavigation();
    const onItemPress = () => {
        navgation.navigate(ScreenNames.Prodocts , {catrgory: title})
    }


    return (
        <View style={styles.orderboared}>
            <Pressable onPress={onItemPress}>
                <View style={styles.imagesorderboard}>
                    {!!Images ? <Image style={styles.imagesStyle} source={Images} /> : null}

                    <Text
                     style={[styles.Text , !Images && styles.buyStyle]}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    imagesorderboard: {
        flex: 1 , 
        flexDirection:'row' ,
    },
    orderboared: {
        borderWidth: 0.5,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 15,
        backgroundColor: 'rgba(100,100,100,0.2)',
    },
    Text: {
        alignSelf: 'center',
        fontSize: 30,
        color: 'white',
        marginLeft: 50 , 
    },
    imagesStyle: {
        width: '35%',
        height: 90,
        borderRadius: 10 ,
    },
    buyStyle:{
        marginLeft: 0 , 
        width:"100%" , 
        textAlign:'center' ,
    },


})

export default CategoryItem