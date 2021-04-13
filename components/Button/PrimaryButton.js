import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native';

const PrimaryButton = (props) => {
    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems:'stretch'}}>
            <View>
                <MyButton {...props}>
                    <TextButton>Login</TextButton>
                </MyButton>
            </View>
        </View>
    )
}


const TextButton = styled.Text`
    position:absolute;
    font-size: 15px;
    padding: 4px 13px;
    color: #F4F4F4;
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