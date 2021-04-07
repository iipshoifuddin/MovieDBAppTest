import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import styled from 'styled-components/native';


const InputTextPrimary=(props)=> {
    return (
        <View style={styles.container}>
            <MyTextInput {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:0,
        margin: 0,
    },
});

const MyTextInput = styled.TextInput(
    props => ({
        borderWidth: props.borderWidth ? props.borderWidth : 0,
    })
);


export default InputTextPrimary
