import React, { useContext } from "react";
import {View, ImageBackground, StyleSheet , ScrollView} from "react-native";
import Images from "../assest/images/Images";
import finallPrice from "../components/Amount"
import { useState } from "react";
import QnetContext from "../Store/qnetContext";
import Card from "../components/Amount";

const Buy = () =>{

    const {cart} = useContext(QnetContext) ;

    console.log("cart: " , cart);

    const renderCart = () => {
        return cart.map(order => <Card {...order} hideAddRemove={true} /> )
    }

    return(
        <View style = {{flex:1}}>
            <ImageBackground source={Images.homeBackground()} style = {{flex:1}}>
                <ScrollView>
                    {renderCart()}
                </ScrollView>
            </ImageBackground>
        </View>
    )
}
export default Buy