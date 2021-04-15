import React from 'react'

import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    createDrawerNavigator 
} from '@react-navigation/drawer';

import CustomDrawerContent from './navigation/CustomDrawerContent';

const Stack = createStackNavigator();
const StackHome = createStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();


//Screen Home
import MainScreen from './scr/Main';
import HomeScreen from './scr/Home';
import ProfileScreen from './scr/Profile';
import LoginScreen from './scr/Auth/Login';
import RegisterScreen from './scr/Auth/Register';

const StactNavigationAuthScreeen = () =>{
    const navigationOptions = {
        gesturesEnabled: true
    }
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            gesturesEnabled: true
        }}
        >
            <Stack.Screen name="Main" component={MainScreen}    
                options={navigationOptions} 
            />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>

    );
}

const StactNavigationScreeen = () =>{
    return(
        <StackHome.Navigator
        screenOptions={{
            headerShown: false,
            gesturesEnabled: true
        }}
        >
            <StackHome.Screen name="Home" component={HomeScreen} />
            <StackHome.Screen name="Profile" component={ProfileScreen} />
        </StackHome.Navigator>

    );
}

const DrawerNavigationScreen = () =>{
    const dimensions = useWindowDimensions();
    return(

        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                itemStyle: {padding: 0},
            }}
            drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
            drawerContent={()=>CustomDrawerContent()}
            >               
            <Drawer.Screen 
                name="Home" 
                component={StactNavigationScreeen}
                options={{drawerLabel: 'First Page Option'}}  
            />
            <Drawer.Screen 
                name="Auth" 
                component={StactNavigationAuthScreeen}
                options={{
                    drawerLabel: 'First Page Option',
                    gestureEnabled: false,
            }}  
            />
        </Drawer.Navigator>

    );
}

function Route(){
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Main"
                    component={DrawerNavigationScreen}
                    options={{ headerShown: false }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}    

export default Route;


