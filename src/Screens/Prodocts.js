import React from 'react'
import { ScrollView, View, ImageBackground, Text } from 'react-native'
import { useState, Component } from 'react';
import Images from '../assest/images/Images';
import Card from '../components/Amount';
import ProdoctsData from '../res/mokData/Devices';

const Prodocts = (props) => {

    const { catrgory } = props.route.params || {};

    console.log('catrgory: ', catrgory);

    const renderProducts = () => {
        const data = ProdoctsData[catrgory] || [];
        console.log(data);
        return data.map(Prodoct => {
            return <Card
                name={Prodoct.name}
                price={Prodoct.price}
                image={Prodoct.image}
            />
        })
    }



    return (
        <ImageBackground source={Images.homeBackground()} style={{ flex: 1 }}>
            <Text style={{ color: '#ffff', fontSize: 30, textAlign: 'center' }} >{catrgory}</Text>
            <ScrollView style={{ flex: 1 }}>
                {renderProducts()}
            </ScrollView>
        </ImageBackground>
    )
}

export default Prodocts 