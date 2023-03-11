import React, { useContext, useState } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import QnetContext from '../Store/qnetContext';
const Amount = props => {
  const amountSaver = amount ;
  const { image ,price, name , hideAddRemove } = props;

  const { cart, setCart } = useContext(QnetContext)
  const orderIndex = cart?.findIndex(order => order.name === name);

  const amount = orderIndex == -1 ? 0 : cart[orderIndex]?.amount
  // const [amount, setamount] = useState(initAmount || 0 );



  const removeOrderFromCart = () => {
    const filterdCart = cart.filter((order) => {
      return order.name !== name;
    })

    console.log('cart: ', filterdCart);
    setCart([...filterdCart]);
  }

  amountHandler = (newAmont) => {
    console.log('dddd', newAmont);
  }

  console.log("amount: ", amount);

  const setAmount = (newAmont) => {
    
  }

  console.log("image: " , props.image);

  const updateCart = (newAmont) => {
    var cartCopy = cart;
    const order = {
      name,
      price,
      image,
      amount: newAmont,
      finalPrice: price * newAmont,
    }

    if (orderIndex == -1) {
      cartCopy.push(order);
    } else {
      cartCopy[orderIndex] = order;
    }

    console.log("cartCopy: " , cartCopy);

    setCart([...cartCopy])

  }

  const onPlusPress = () => {
    const newAmount = amount + 1;
    // setamount(newAmont);
    updateCart(newAmount);
  }

  const onMinusPress = () => {
    const newAmount = amount - 1

    if (newAmount < 1) {
      setAmount(0)
      removeOrderFromCart();
      return;
    } else {
      setAmount(newAmount)
      updateCart(newAmount);
    }
  }


  return (

    <View style={styles.cardContainer} >
      <View style={styles.productContainer}>
        <Image source={props.image} style={styles.imageStyle} /> 
        <View style={styles.textContainer}>
          <Text style={styles.amountStyle}>{name}</Text>
          <Text style={styles.amountStyle}>{"price: " + price}</Text>
        </View>
      </View>

      {!hideAddRemove &&
        <Pressable onPress={onPlusPress}>
          <Text style={styles.amountStyle}>+</Text>
        </Pressable>
      }

      <Text style={styles.amountStyle}>{'amount: ' + amount}</Text>

      {!hideAddRemove &&
        <Pressable onPress={onMinusPress}>
          <Text style={styles.amountStyle}>-</Text>
        </Pressable>
      }
      <Text style={styles.amountStyle}>{"Final price: " + price * amount}</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    borderWidth: 3,
    borderColor: 'rgb(0,100,200)',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 10 ,
  },
  Text: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 5 ,
  },
  amountStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
  priceStyle: {
    alignSelf: 'center',
    fontSize:20,
    marginTop: -10,
    color: 'rgba(0,0,0,0.8)',
  },
  imageStyle: {
    width: 100,
    height: 100,
    // marginTop: 15,
    // marginLeft: 15,
    borderRadius: 10,
    backgroundColor : 'white' ,
    resizeMode:'contain',
  },
  productContainer: {
    flexDirection: 'row',
    // width: '100%',
  },
  textContainer: {
    paddingTop: 30,
    paddingLeft: 30,
  },

})

export default Amount