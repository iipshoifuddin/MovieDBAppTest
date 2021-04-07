import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'

const InputTextRegister = (props) => {

    return (
        <View style={page.container} >
            <View style={{flex: 1, flexDirection: 'row', alignItems:'stretch'}}>
                <View style={page.column}>
                    <TextInput
                        style={InputTextStyle.inputText}
                        underlineColorAndroid="transparent"
                        blurOnSubmit={false} 
                        autoFocus={false} 
                        autoCorrect={false} 
                        autoCapitalize="none" 
                        keyboardType="email-address" 
                        returnKeyType="next" 
                        placeholder="Alamat email"
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                    />
                    {props.errorText ? <Text style={InputTextStyle.errorText}>{props.messageTextError}</Text> : false }
                </View>
            </View>
        </View>
    );
}

const InputTextStyle = StyleSheet.create({
    inputText:
    { 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        padding: 10,
    },
    errorText:{
        color: '#C21807',
        fontSize: 16
    },
});

const page = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      paddingLeft: 15,
      paddingRight: 15,
    },
    column:{
        width: '100%', 
        // height: 30, 
        // justifyContent: 'center',
        // alignItems: 'center'
    },

    text: {
      fontSize: 30,
    },
});

export default InputTextRegister
