// import { forScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import ButtonLogin from '../Button/PrimaryButton';
import Icon from '../../assets/logoFix.png';

const HeaderLogin = () => {
  const navigation = useNavigation();
    return (
      // Try setting `flexDirection` to `column`.
      <View style={page.container} >
        <View style={{flex: 1, flexDirection: 'row', alignItems:'stretch'}}>
            <View style={{width: "40%", height: 50}}>
                <ImageLogo 
                  source={Icon}
                  width={50}
                />
            </View>
            <View style={{width: "30%", height: 50}} />
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

const ImageLogo = styled.Image`
  position: relative;
  width: 120px;
  height: 30px;
  left: 10px;
  top: 15px;
`;

const ButtonPosition = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -8px 0 0 -25px;
`;


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

export default HeaderLogin;

