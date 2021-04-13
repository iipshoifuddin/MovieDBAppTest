import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//Screen Home
import MainScreen from './scr/Main';
import HomeScreen from './scr/Home';
import ProfileScreen from './scr/Profile';
import LoginScreen from './scr/Auth/Login';
import RegisterScreen from './scr/Auth/Register';

function Route(){
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            >
                <Stack.Screen name="Main" component={MainScreen}/>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}    

export default Route;

// class Route extends Component {
//        constructor(props) {
//         super(props)
//     }
//     componentDidMount(){
//         BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);

//     }
//     componentWillMount() {
//         BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
//     }

//     // componentWillUnmount() {
//     //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
//     // }

//     handleBackButtonClick = () => {
//         // this.props.navigation.goBack(null);
//         console.log("my log");
//         return true;
//     };
//     render() {
//         // const {navigation} = this.props;
//         // console.log("tes log"+this.props.navigation.goBack(null));
//         return (
//             <NavigationContainer>
//                 <Stack.Navigator
//                 screenOptions={{
//                     headerShown: false
//                 }}
//                 >
//                 <Stack.Screen name="Home" component={HomeScreen} />
//                 <Stack.Screen name="Profile" component={ProfileScreen} />
//                 </Stack.Navigator>
//             </NavigationContainer>
//         )
//     }
// }


