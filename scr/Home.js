import React, { Component } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { BackHandler } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';

// Import Action Redux
import {
    movieFetchData,
} from './redux/actions/movie';

import NavbarHome from '../components/Navbar/NavbarHome';
import CardList from '../components/Card/CardList';

class Home extends Component {
    constructor(props) {
        super(props)
        // this.state({
        //     errorMessage:'',
        // });
        this.state = {
            data: [],
        };
    }
    
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        this.getDataMovie()
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    getDataMovie = async() =>{
        let link ='https://api.themoviedb.org/3/movie/now_playing?api_key=614002dcd1a0f28b0c4bfe38b3ceb817';
        //   .then(function (response) {
        //     // console.log(response);
        //     return response.data;
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        // });
        // let getData = await data;
        // this.setState({data: getData});
        // // console.log(getData);
        await this.props.fetchData(link);
    }

    handleBackButton() {
        console.log("my log");
        return true;
    }

    IsEmailValid = () => {
        let valueInput=this.state.email, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        // valueInput = document.getElementById("emailLoginComponents").value;
        if (!valueInput) {
            text = "e-Mail cannot be empty !";
            formIsValid=false;
        }
        else if(typeof valueInput !== "undefined"){
            let lastAtPos = valueInput.lastIndexOf('@');
            let lastDotPos = valueInput.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && valueInput.indexOf('@@') == -1 && lastDotPos > 2 && (valueInput.length - lastDotPos) > 2)) {
                text = "Invalid Format (ex. jhon@gmail.com)";
                formIsValid=false;
            }
        }
  
        this.setState({emailErrorMessage: text});
        return formIsValid;
    }
    onHandlePressButton = () =>{
        const validation = this.IsEmailValid();
        if(validation){
            // console.log("You Can Go");
            this.setState({enableButton: true});
        }
    }

    render() {
        const { navigation } = this.props;
        // console.log(this.state.data.results);
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        <NavbarHome /> 
                            {/* <CardList 
                                data={this.state.data.results}
                                link={'https://image.tmdb.org/t/p/w500/'}
                            />  */}
                    </ScrollView>
                </SafeAreaView>

          </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    },
    container: {
      flex: 1,
      flexDirection: "column",
    },
    scrollView: {
        marginHorizontal: 0,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      maxWidth: '100%' , 
      height: 600,
    },
    layer1: {
      width: '100%', 
      height: '100%',
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0",
    }
});

const singleCol = StyleSheet.create({
    row:{
      flex: 1, 
      flexDirection: 'row',
    //   padding: 30,
    //   paddingTop: 20,
    //   paddingBottom: 10,
    },
    column:{
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderWidth: 0,
    },
});

const mapStateToProps = (state) => {
    return {
        movie: state.movie,
        hasError: state.movieHaveError,
        isLoading: state.movieAreLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(movieFetchData(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
