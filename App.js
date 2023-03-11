import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native';

import MainNavigation from './route/nav';
import Card from './src/components/Amount';
import Home from './src/Screens/Home';
import Page2 from './src/Screens/Page2';
import QnetProvider from './src/Store/qnetProvider';
import QnetContext from './src/Store/qnetContext';




const App = () => {

  return (
    <View style={styles.container}>
      <QnetProvider>
        <QnetContext.Consumer>
          {Context => {
            return (
              <MainNavigation />
            )
          }}
        </QnetContext.Consumer>
      </QnetProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  }
});

export default App;











// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
// import React, { useEffect, useState } from 'react';
// import Type , {PropsWithChildren} from 'react' ;

// import {
//   FlatList,
//   RefreshControl,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   ImageBackground,
//   Image,
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native';


//   import MainNavigation from './route/nav';
//   import Home from './src/Screens/Home';
//   import Missions3 from './src/Screens/Page2';
//   import QnetProvider from './src/Store/qnetProvider';
//   import QnetContext from './src/Store/qnetContext';
// // import styles from './styles'
// import Card from './src/components/CategoryItem';
// import Images from './src/assest/images/Images';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */

// const dataArr = [
//   // { name: "Ahmad", id: 1 },
//   // { name: "Ali", id: 2 },
//   // { name: "Amal", id: 3 },
//   // { name: "Noor", id: 4 },
//   // { name: "Narmen", id: 5 },
//   // { name: "Malik", id: 6 },
//   // { name: "Mostafa", id: 7 },
//   // { name: "Issa", id: 8 },
//   // { name: "Hamzeh", id: 9 },
//   // { name: "Abed", id: 10 },
//   // { name: "Rinad", id: 11 },
//   // { name: "Mais", id: 12 },
//   {Smartphones : "iphone & Samsung" , id : 1},
//   {Ipads: "ipads & Tablets" , id : 2},
//   {Computers : "Computer's & Laptop's" , id :3},
//   {Accessories : "Accessories" , id : 4},
//   {Devices :" Devices" , id :5},
// ];

// const App = () => {
//   const [lastUser, setLastUser] = useState('')
//   const [refresh, setRefresh] = useState(false)
//   const [data, setData] = useState([...dataArr]);


//   const pullMe = () => {
//     setRefresh(true)

//     setTimeout(() => {
//       setData([...data])
//       setLastUser([])
//       setRefresh(false)
//     }, 500)
//   }


//   const renderItem = ({ item, index }) => {
//     // console.log(item);
//     return <Card
//       text={item.name}
//       id={item.id}
//       onCardChange={(name) => setLastUser(name, item.id)}
//       refreshing={refresh}
//     />;
//     return <View>

//     </View>
//   };
//   return (
//     <View style={styles.container}>
//       <ImageBackground source={Images.Backgroung()} style={styles.ImageBackground}>
//         <SafeAreaView>
//           <Image source={Images.Shop()} style={styles.imageStyle} />
//           <Text style={styles.title}>{'Quality Net Plus'} </Text>
//           <Text style={styles.lastUser}>{lastUser}</Text>
//           </SafeAreaView>
//           <FlatList
          

//             data={[...data]}
//             renderItem={(val, name) => renderItem(val, name)}
//             refreshControl={
//               <RefreshControl tintColor='white'
//                 refreshing={refresh}
//                 onRefresh={() => pullMe()}
//               />
//             }
            
//           />
//       </ImageBackground>
//     </View>


//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent : 'center' ,
//   },
//   imageStyle: {
//     width: '100%',
//     height: 100,
//     resizeMode: 'contain',
//   },
//   ImageBackground: {
//     flex: 1,
//   },
//   title: {
//     color: 'white',
//     fontSize: 20,
//   },
//   lastUser: {
//     color: 'white',
//     fontSize: 15,
//   }
// }
// );


// export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

