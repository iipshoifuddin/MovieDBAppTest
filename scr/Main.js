import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground, SafeAreaView, ScrollView, Text, StatusBar } from 'react-native'
import { BackHandler } from 'react-native';

import Header from '../components/Header/MainHeader';
import InputTextRegister from '../components/InputText/InputTextRegister';
import Button from '../components/Button/SecondaryButton';
import BottomTable from '../components/BottomTable/MainBottomTable';

import ImageBg from '../assets/jumbotron.jpg'
import BlackImage from '../assets/blackScreen.png';
import WhiteImage from '../assets/white.jpg';

class Main extends Component {
    constructor(props) {
        super(props)
        // this.state({
        //     errorMessage:'',
        // });
        this.state = {
            email: '',
            emailErrorMessage: '',
            enableButton: false,
        };
    }
    
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
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
        // console.log(navigation);
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        <ImageBackground source={ImageBg} style={styles.image}>
                            <View style={styles.layer1}>
                                <SafeAreaView>
                                    <ScrollView>
                                        <Header />
                                        <Text style={textStyles.headline}>Film, Acara TV tak terbatas, dan
                                        lebih banyak lagi
                                        </Text>
                                        <Text style={textStyles.secondHeadline}>
                                            Tonton di manapaun, dan batalkan kapanpun. 
                                        </Text>
                                        <Text style={textStyles.secondHeadline}>
                                            Siap menonton ? Masuka Email Untuk membuat atau memulai
                                            lagi keanggotaanmu. 
                                        </Text>
                                        <InputTextRegister
                                            onChange={(e)=>{
                                                this.setState({email : e.nativeEvent.text});
                                                this.onHandlePressButton();
                                            }}
                                            // onBlur={(e)=>{this.IsEmailValid()}}
                                            errorText={this.state.emailErrorMessage === '' ? false : true}
                                            messageTextError={this.state.emailErrorMessage}
                                        />
                                        {
                                            this.state.enableButton ? <Button
                                                name="Register"
                                                onPress={()=>{
                                                    navigation.navigate('Register')}}
                                                /> : <Button
                                                    name="Register"
                                                    onPress={()=>{
                                                        navigation.navigate('Register')}
                                                    }
                                                />
                                        }
                                        
                                    </ScrollView>
                                </SafeAreaView>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={WhiteImage} style={lineStyles.image}>
                            <View style={lineStyles.layer1}>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={BlackImage} style={bottomStyles.image}>
                            <View style={bottomStyles.layer1}>
                                <SafeAreaView>
                                    <ScrollView>
                                        <Text style={bottomTextStyles.secondHeadline}>
                                            Ada pertanyaan ? Hubungi 007 - 803 - 321 - 0000
                                        </Text>
                                        <View style={bottomTextStyles.table}>
                                            <BottomTable />
                                        </View>
                                        <Text style={bottomTextStyles.textMovieDB}>
                                            The Movie DB
                                        </Text>
                                    </ScrollView>
                                </SafeAreaView>
                            </View>
                        </ImageBackground>
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

const bottomStyles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        maxWidth: '100%' , 
        height: 260,
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

const lineStyles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        maxWidth: '100%' , 
        height: 6,
        backgroundColor: 'white'
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

const textStyles = StyleSheet.create({
    headline: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 70,
        color: 'white',
        padding: 10,
    },
    secondHeadline: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'normal',
        fontSize: 18,
        marginTop: 0,
        color: 'white',
        padding: 10,
    },
});

const bottomTextStyles = StyleSheet.create({
    headline: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 70,
        color: 'white',
        padding: 20,
    },
    secondHeadline: {
        textAlign: 'justify', // <-- the magic
        fontWeight: 'normal',
        fontSize: 16,
        marginTop: 0,
        color: '#393534',
        padding: 20,
        paddingBottom: 15,
        marginLeft: 15,

    },
    table:{
        padding: 20,
        paddingTop: 0,
    },
    textMovieDB:{
        textAlign: 'left', // <-- the magic
        fontWeight: 'normal',
        fontSize: 16,
        marginTop: 0,
        color: '#393534',
    }    
 
});


export default Main
