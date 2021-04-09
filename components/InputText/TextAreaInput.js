import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const TextAreaInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                multiline={true}
                style={styles.textInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    textInput:{
        borderWidth: 1.5,
        minWidth: '100%',
        height: 60,
        borderRadius: 5,
        padding: 10,
    },
});

export default TextAreaInput
