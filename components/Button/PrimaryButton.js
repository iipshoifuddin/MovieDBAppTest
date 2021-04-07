import React from 'react'
import { View, StyleSheet } from 'react-native'
import styled from 'styled-components/native';

const PrimaryButton = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems:'stretch'}}>
            <View>
                <MyButton {...props} onPress={()=>{console.log('log Push')}}>
                    <TextButton>Login</TextButton>
                </MyButton>
            </View>
        </View>
    )
}

const PageButton = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
    },
    text: {
      fontSize: 30,
      color: '#000'
    },
});


const TextButton = styled.Text`
    position:absolute;
    font-size: 15px;
    padding: 4px 13px;
    color: #F4F4F4;
`;

const ButtonNew = styled.TouchableOpacity`
    position: relative;
    width: 10px;
    height: 18px;
    background-color: #FF7314; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
`;

const MyButton = styled.TouchableOpacity(
    props => ({
        width: props.width ? props.width : "10px",
        height: props.height ? props.height : "18px",
        position: props.position ? props.position : 'relative',
        backgroundColor: props.backgroundColor ? props.backgroundColor : '#FF7314', /* Green */
        border: props.border ? props.border : 'none',
        color: props.color ? props.color : 'white',
        padding: props.padding ? props.padding : '15px 32px',
        textAlign: props.textAlign ? props.textAlign : 'center',
        textDecoration: props.textDecoration ? props.textDecoration : 'none',
        fontSize: props.fontSize ? props.fontSize : "15px",   
    })
);

export default PrimaryButton