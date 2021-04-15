// import { forScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import EvilIcons from 'react-native-vector-icons/EvilIcons'

import IconImage from '../../assets/logoFix.png';

const NavbarHome = () => {
  const navigation = useNavigation();
    return (
      // Try setting `flexDirection` to `column`.
      <View style={page.container} >
        <View style={{flex: 1, flexDirection: 'row', alignItems:'stretch'}}>
            <View style={drawerButton.column}>
              <TouchableOpacity
                onPress={()=>{navigation.toggleDrawer()}}
              >
                <View style={drawerButton.icon}>
                  <EvilIcons 
                    name="navicon" 
                    size={40}
                    color="#FF7314"
                  />
                </View>
                <View style={drawerButton.text}>
                  <Text style={drawerButton.textConten}>menu</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={logoStyles.column} >
              <Image 
                source={IconImage} 
                style={logoStyles.image}
              />
            </View>
            <View style={{width: "30%", height: 50}} >
              {/* <ButtonPosition>
                <ButtonLogin
                  onPress={()=>navigation.navigate("Login")}
                />
              </ButtonPosition> */}
            </View>
        </View>
      </View>
    );
};

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  text: {
    fontSize: 30,
    color: '#000'
  },
});

const drawerButton = StyleSheet.create({
  column:{
    width: "25%",
    padding: 30,
    paddingLeft: 20,
  },
  icon:{
    justifyContent:'center',
    alignItems: 'center',
    width: 50,
  },
  text:{
    justifyContent:'center',
    alignItems: 'center',
    width: 50,

  },
  textConten: {
    color:"#FF7314",
    fontSize: 10,
  },
});

const logoStyles = StyleSheet.create({
  column:{
    width: "55%", 
    // backgroundColor:"powderblue",
    padding: 30,
    paddingLeft: 20,
  },
  image:{
    // flex: 1,
    position:'absolute', 
    width: "100%", 
    height: "100%",
    marginTop: 24,
    marginLeft: 10,
    // resizeMode: 'stretch',
  },
});

const ButtonPosition = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -8px 0 0 -25px;
`;



export default NavbarHome;