import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const MainBottomTable = (props) =>{
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.column}><Text style={styles.text}>Tanya Jawab</Text></View>
                <View style={styles.column}><Text style={styles.text} >Pusat Bantuan</Text></View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}><Text style={styles.text}>Akun</Text></View>
                <View style={styles.column}><Text style={styles.text}>Pusat Media</Text></View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}><Text style={styles.text}>Cara Menonton</Text></View>
                <View style={styles.column}><Text style={styles.text}>Ketentuan Penggunaan</Text></View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}><Text style={styles.text}>Informasi Perusahaan</Text></View>
                <View style={styles.column}><Text style={styles.text}>Hubungi Kami</Text></View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },  
    row:{
        flex: 1, 
        flexDirection: 'row',
    },
    column:{
        width: '50%', 
        height: 30, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#393534',
        left:0,
    },
});

export default MainBottomTable
