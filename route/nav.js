import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Home from "../src/Screens/Home";
import Page2 from "../src/Screens/Page2";
import Smartphones from "../src/Screens/Smartphones";
import Computers from "../src/Screens/Computers" ;
import Accessories from "../src/Screens/Accessories" ;
import Ipads from "../src/Screens/Ipads" ;
import Watches from "../src/Screens/Watches" ;
import Prodocts from "../src/Screens/Prodocts";
import Buy from "../src/Screens/Buy";
import ScreenNames from "./ScreenNames";


const MainNavigation = () => {

    const stack = createNativeStackNavigator() ;
     

    return (

        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name = {ScreenNames.Home} component ={Home} />
                <stack.Screen name = {ScreenNames.Page2} component ={Page2} />
                <stack.Screen name = {ScreenNames.Smartphones} component ={Smartphones} />
                <stack.Screen name = {ScreenNames.Accessories} component ={Accessories} />
                <stack.Screen name = {ScreenNames.Computers} component ={Computers} />
                <stack.Screen name = {ScreenNames.Ipads} component ={Ipads} />
                <stack.Screen name = {ScreenNames.Watches} component ={Watches} />
                <stack.Screen name ={ScreenNames.Prodocts} component ={Prodocts} />
                <stack.Screen name ={ScreenNames.Buy} component ={Buy} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation 
