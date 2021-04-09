import React from 'react'
import { View, StyleSheet } from 'react-native'
import styled from 'styled-components'

const SecondaryButton = (props) => {
    return (
        <View style={PageButton.container} >
            <View style={{flex: 1, flexDirection: 'row', alignItems:'stretch'}}>
                <View>
                    <MyButton {...props}>
                        <TextButton>{props.name ? props.name :'Login'}</TextButton>
                    </MyButton>
                </View>
            </View>
        </View>
    )
}


const PageButton = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
    },
});


const TextButton = styled.Text`
    position:absolute;
    font-size: 18px;
    padding: 4px 13px;
    color: #F4F4F4;
    font-weight: bold;
`;


const MyButton = styled.TouchableOpacity(
    props => ({
        width: props.width ? props.width : "10px",
        height: props.height ? props.height : "18px",
        // position: props.position ? props.position : 'relative',
        backgroundColor: props.backgroundColor ? props.backgroundColor : '#FF7314', /* Green */
        border: props.border ? props.border : 'none',
        color: props.color ? props.color : 'white',
        padding: props.padding ? props.padding : '20px 60px',
        textAlign: props.textAlign ? props.textAlign : 'center',
        textDecoration: props.textDecoration ? props.textDecoration : 'none',
        fontSize: props.fontSize ? props.fontSize : "15px",   
        justifyContent : "center",
        alignItems: "center",
    })
);

export default SecondaryButton
