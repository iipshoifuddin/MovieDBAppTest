import React from 'react';

import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image'

const gendre = [
    {
        id: 28,
        name: "Action"
    },
    {
        id: 12,
        name: "Adventure"
    },
    {
        id: 16,
        name: "Animation"
    },
    {
        id: 35,
        name: "Comedy"
    },
    {
        id: 80,
        name: "Crime"
    },
    {
        id: 99,
        name: "Documentary"
    },
    {
        id: 18,
        name: "Drama"
    },
    {
        id: 10751,
        name: "Family"
    },
    {
        id: 14,
        name: "Fantasy"
    },
    {
        id: 36,
        name: "History"
    },
    {
        id: 27,
        name: "Horror"
    },
    {
        id: 10402,
        name: "Music"
    },
    {
        id: 9648,
        name: "Mystery"
    },
    {
        id: 10749,
        name: "Romance"
    },
    {
        id: 878,
        name: "Science Fiction"
    },
    {
        id: 10770,
        name: "TV Movie"
    },
    {
        id: 53,
        name: "Thriller"
    },
    {
        id: 10752,
        name: "War"
    },
    {
        id: 37,
        name: "Western"
    }
]

const search=(nameKey, myArray)=>{
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return myArray[i].name;
        }
    }
}

const CardList = (props) =>{
    console.log(props.data);
    let blankData =[{
        backdrop_path:"",
        genre_ids:[],
        dates:{
            minimum: "",
            maximum: "",
        }
    }]
    let listMovie;
    props.data !== undefined ? listMovie = props.data : listMovie = blankData;

    return (
        <View style={styles.top}>
            {/* <SafeAreaView>
                <ScrollView> */}
                { listMovie.map((data, index)=>{
                    return(
                        <View key={index} style={styles.columContainer}>
                            <View style={styles.row}>
                                <View style={[styles.viewSty, {maxWidth: "42%"}]}>
                                    <FastImage
                                        key={index}
                                        style={styles.image}
                                        source={{
                                            uri:`${props.link}${data.backdrop_path ?
                                                data.backdrop_path : data.poster_path ? data.poster_path : ""}`,
                                            headers: { Authorization: 'someAuthToken' },
                                            priority: FastImage.priority.normal,
                                        }}
                                        resizeMode={FastImage.resizeMode.stretch}
                                    />
                                </View>
                                <View style={[styles.column, {paddingLeft: 15}]}>
                                    <View style={styles.column} >
                                        <View style={styles.rowSecondary}>
                                            <View style={[styles.column, {justifyContent: 'center'}]}>
                                                <Text style={textStyles.gendre}>
                                                    {props.data ? search(data.genre_ids[0], gendre) : ""}
                                                </Text>
                                            </View>
                                            {/* <View style={styles.column} ></View> */}
                                        </View>
                                    </View>
                                    <View style={{flex: 1}} >
                                        <Text style={textStyles.title}>{props.data ? data.original_title: ""}</Text>
                                    </View>
                                    <View style={styles.column} >
                                        <View style={styles.rowSecondary}>
                                            <View style={styles.column} >
                                                <Text style={textStyles.titleDate}>Release Date :</Text>
                                                <Text style={textStyles.date}>{data.release_date}</Text>
                                            </View>
                                            <View style={[styles.column, {alignItems: 'center'}]}>
                                                <Text style={textStyles.titleDate}>Starts :</Text>
                                                <Text style={textStyles.date}>{data.vote_average}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                    );
                })}
               {/* </ScrollView>
            </SafeAreaView> */}
        </View>
    )
}

const textStyles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'justify',
        color: '#22211F',
    },
    gendre:{
        fontWeight:'bold',
        fontSize: 15,
        textAlign: 'justify'
    },
    titleDate:{
        fontStyle: 'italic',
        color: '#393534',
        fontSize: 12,
    },
    date:{
        color: '#393534',
    },
});

const styles = StyleSheet.create({
    top:{
        flex: 1,
        padding: 20,
    },
    columContainer:{
        width: '100%', 
        minHeight: 100, 
        flexDirection: 'column',
        marginBottom: 20,
    },
    row:{
        flex: 2, 
        flexDirection: 'row'
    },
    rowSecondary: {
        flex: 1, 
        flexDirection: 'row'
    },
    column:{
        flex: 1, 
        flexDirection: 'column', 
    },
    viewSty:{
        flex: 1, 
    },
    image:{
        flex: 1,
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    },
})

export default CardList
