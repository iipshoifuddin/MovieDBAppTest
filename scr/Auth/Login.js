import React, { Component } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5  from 'md5';

import { 
    View, 
    Text,
    StyleSheet,
    SafeAreaView, 
    ScrollView,
} from "react-native";

import Header from '../../components/Header/HeaderLogin';
import TextInputPrimary from '../../components/InputText/InputTextPrimary';
import Button from '../../components/Button/SecondaryButton';
import Toast from '../../components/Toast/Toast';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      data: [],
      passwordErrorMessage: "",
      emailErrorMessage: "",
      loginErrorMessage: "",
      enableButton: false,
      enableToase: false,
    };
  }

  componentDidMount = () =>{
    // console.log(this.getData())
  }
  getData = async (email) => {
    try {
      let encodedVal;
      email !== undefined ? encodedVal = md5(email) : encodedVal = md5("tes");
      const value = await AsyncStorage.getItem(encodedVal)
      if(value !== null) {
        // console.log(value);
        getValue=value;
        this.setState({data: JSON.parse(getValue)});
        return getValue;    
      }
    } catch(e) {
      // error reading value
      console.log("Error Get Data AsynStorage :"+e);
    }
  }
  IsEmailValid = () => {
    let valueInput=this.state.email, text="", formIsValid=true;
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
  IsPasswordValid = () => {
    let valueInput=this.state.password, text="", formIsValid=true;
    if (!valueInput) {
        text = "Password cannot be empty !";
        formIsValid=false;
    }
    else if(typeof valueInput !== "undefined"){
      if(valueInput.length <= 4){
        text = "Password Length more than 4 digit !";
        formIsValid=false;
      }
    } 
    this.setState({passwordErrorMessage: text});
    return formIsValid;
  }
  loginValidation = () =>{
    let formIsValid = true, text="";
    this.getData(this.state.email);
    if(this.state.data !== undefined || this.state.data !== null || this.state.data !== ""){
      // console.log(this.state.data.email)
      if(this.state.email !== this.state.data.email){
        formIsValid = false;
        text="Email Not Found"
      }
      if(this.state.password !== this.state.data.password){
        formIsValid = false;
        text="Email and Password Not Match"
      }
    }
    this.setState({loginErrorMessage: text});
    return formIsValid;
  }
  formValidation = ()=>{
    let formIsValid = true;
    const {IsEmailValid,IsPasswordValid, loginValidation} = this;
    if(!IsEmailValid()){
      formIsValid=false;
    }
    if(!IsPasswordValid()){
      formIsValid=false;
    }
    if(!loginValidation()){
      formIsValid=false;
    }
    return formIsValid;
  }
  onHandlePressButton = () =>{
      const validation = this.IsEmailValid();
      if(this.formValidation()){
          // console.log("You Can Go");
        this.setState({enableButton: true});
      }
      else{
        this.setState({enableButton: false});
      }
  }
  render() {
    const { navigation } = this.props;
    console.log("button :" + this.state.loginErrorMessage);
    // console.log("function" + this.onHandlePressButton());
    return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Toast visible={this.state.enableToase} message={this.state.loginErrorMessage} />
                <Header />
                <View style={[headerStyle.row]}>
                  <View style={[headerStyle.column, {minWidth: '20%'}]}></View>
                  <View style={headerStyle.column}>
                      <Text style={textStyles.label1}>Login Form</Text>
                  </View>
                  <View style={[headerStyle.column, {minWidth: '20%'}]}></View>
                </View>
                <View style={[singleCol.row, singleCol.firtsRow]}>
                    <View style={singleCol.column}>
                      <Text style={textStyles.label2}>Email</Text>
                      <TextInputPrimary 
                        borderWidth={1} 
                        style={singleCol.inputText}
                        // onChange={(e)=>{}}
                        onChangeText={(text)=>{this.setState({email: text})}}
                        onChange={()=>{this.IsEmailValid()}}
                        onBlur={()=>{this.onHandlePressButton()}}
                        value={this.state.email}
                        placeholder="ex. jhon@gmail.com"
                      />
                      <Text style={textStyles.errorText}>{this.state.emailErrorMessage}</Text>
                    </View>
                </View>
                <View style={singleCol.row}>
                    <View style={singleCol.column}>
                      <Text style={textStyles.label2}>Password</Text>
                      <TextInputPrimary 
                        borderWidth={1} 
                        style={singleCol.inputText}
                        secureTextEntry={true}
                        // onChange={(e)=>{}}
                        onChangeText={(text)=>{this.setState({password: text})}}
                        onChange={()=>{this.IsPasswordValid();this.onHandlePressButton()}}
                        onBlur={()=>{this.IsPasswordValid();this.onHandlePressButton()}}
                        value={this.state.password}
                        placeholder="Password"
                      />
                      <Text style={textStyles.errorText}>{this.state.passwordErrorMessage}</Text>
                    </View>
                </View>
                <View style={buttonStyles.row}>
                    <View style={[buttonStyles.column, { width: '29%'}]}></View>
                    <View style={buttonStyles.column}>
                        {
                          this.state.enableButton ? <Button
                              name="Login"
                              onPress={()=>{
                                  navigation.navigate('Home')}}
                              /> : <Button
                                  name="Login"
                                  onPress={()=>{
                                    if(this.state.loginErrorMessage !==""){
                                      this.setState({enableToase: true});
                                    }
                                  }}
                              />
                        }
                    </View>
                    <View style={[buttonStyles.column, { width: '50%'}]}></View>
                </View>            
            </ScrollView>
        </SafeAreaView>
    </View>
    );
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
      flex: 1,
      marginHorizontal: 0,
  },
});

const headerStyle = StyleSheet.create({
  row:{
    flex: 1, 
    flexDirection: 'row',
    padding: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  column:{
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0,
      padding:0,
  },
});

const singleCol = StyleSheet.create({
  row:{
    flex: 1, 
    flexDirection: 'row',
    padding: 30,
    paddingTop: 0,
    paddingBottom: 0,
  },
  firtsRow:{
    paddingTop:30
  },
  column:{
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderWidth: 0,
      padding:0,
  },
  inputText:{
    width: '100%',
    minWidth: '100%',
    height: 38,
    borderRadius: 5,
    borderWidth:1.5,
    padding: 10,
  }
});

const buttonStyles = StyleSheet.create({
  row:{
    flex: 1, 
    flexDirection: 'row',
    padding: 20,
    paddingTop: 0,
    paddingBottom: 10,
  },
  column:{
      // width: '33.3333%', 
      justifyContent: 'center',
      alignItems: "flex-end",
      borderWidth: 0,
      padding:0,
  },
});

const textStyles = StyleSheet.create({
  label1:{
      fontSize: 30,
      fontWeight: "bold",
      color: '#FF7314',
      // padding: 30,
      paddingTop: 50,
      paddingBottom:0,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
  },
  label2:{
    fontSize: 14,
    fontWeight: "600",
    color: '#22211F',
  },
  errorText:{
    color: '#C21807',
    fontSize: 16
},
});

export default Login;