import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const RadioButtonPrimary=(props)=> {
    const [ radioSelected, setRadioSelected ] = useState(props.radioState);
    const products = [{
        id: 1
      },
      {
        id: 0
      }];
      return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <TouchableOpacity
                        key={products[0].id} 
                        onPressIn={()=>{setRadioSelected(products[0].id)}}
                        onPress={() => props.getRadioValue(products[0].id)}
                        >
                        <View style={styles.lineOut}>
                            {
                            products[0].id == radioSelected ?
                                <View style={styles.circle} />
                                : null
                            }
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.column}><Text>Yes</Text></View>
                <View style={[styles.column, {minWidth:'20%'}]}></View>
                <View style={styles.column}>
                    <TouchableOpacity 
                        key={products[1].id} 
                        onPressIn={()=>{setRadioSelected(products[1].id)}}
                        onPress={() => props.getRadioValue(products[1].id)}
                        >
                        <View style={styles.lineOut}>
                            {
                            products[1].id == radioSelected ?
                                <View style={styles.circle} />
                                : null
                            }
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.column}><Text>No</Text></View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "column",
    },
    row:{
        flex: 1, 
        flexDirection: 'row',
        paddingTop: 10,
    },
    column:{
        // width: '50%', 
        // height: 55, 
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 0,
        marginRight: 15,
    },
    lineOut:{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

    },
    circle:{
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#000',
    },
});

export default RadioButtonPrimary

