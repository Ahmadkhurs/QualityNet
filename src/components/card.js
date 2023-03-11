import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, RefreshControl } from 'react-native';

const Card = props => {
    var userId = props.id || 0;

    const [id, setId] = useState(userId);

    
    const onCardsPress = () => {
        setId(id + 1);
        props.onCardChange?.(props.text);
        if (id >= 25) {
            setId(0);
        } else {
            setId(id + 1)
        }
    };
    //   const onCardPress2 = () => {
    //     setRefresh(setId == 0)
    //     console.log('Refresh' , setRefresh)
    //     props.onCardPress2?.(props.Text);
    //     if(setRefresh == onCardPress2)
    //     setId(0);
    //   };

    useEffect(() => {
        // console.log(DataView) ;
        props.refreshing &&
            setId(props.id)
    }, [props.refreshing])

    return (
        <Pressable onPress={onCardsPress}>
            <View style={styles.cardContainer}>
                <Text>{props.text || '404'}</Text>
                <Text>{id}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor : 'rgba(255,255,255,0.65)' ,
        width: '85%',
        height: 90,
        borderWidth : 1.5 ,
        borderStyle : 'dashed' ,
        borderRadius : 30 ,    
        alignSelf: 'center',
        justifyContent : 'space-evenly' ,
        marginBottom: 10,
    },
});

export default Card;