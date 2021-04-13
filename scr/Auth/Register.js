import React, { Component } from "react";
import { View } from "react-native";
import AnimatedMultistep from "react-native-animated-multistep"; // gw pake ini
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5  from 'md5';


/* Define the steps  */

import Step1 from "./RegisterStep/Step1";
import Step2 from "./RegisterStep/Step2";
import Step3 from "./RegisterStep/Step3";
// import Step4 from "./steps/step4";

const allSteps = [
    { name: "step 1", component: Step1 },
    { name: "step 2", component: Step2 },
    { name: "step 3", component: Step3 },
//   { name: "step 4", component: Step4 }
];

/* Define your class */
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataHash:"",
    };
  }
  /* define the method to be called when you go on next step */
  storeData = async (value, email) => {
    try {
      console.log("email" + email ? email : "notfound" );
      let encodedVal;
      email !== undefined ? encodedVal = md5(email) : encodedVal = md5('6f69cff44b1e5f40b1af3b3267517632');
      console.log("store data :" + encodedVal);
      if (value != null || value != undefined || value != '') {
        let jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(`${encodedVal}`, jsonValue)  
      }
    } catch (e) {
      // saving error
      // jangan lupa log errornya
      console.log('error store data', e)
    }
  }
  convertMD5 = () => {
    let encodedVal = md5('smith@gmail.com');
    this.setState({dataHash:encodedVal});
  }
  componentDidMount = () =>{
    // this.getData();
    this.getAllFromAsynStorage();
    // AsyncStorage.clear();
    // consol.log(md5());
    // this.convertMD5();
  }
  getData = async () => {
    let getValue;
    try {
      const value = await AsyncStorage.getItem('7f3863b197eeff650876bb89eca08e57')
      if(value !== null) {
        console.log(value);
        getValue=value;
      }
    } catch(e) {
      // error reading value
      console.log("Error Get Data AsynStorage :"+e);
    }
    this.setState({data: getValue});
    return getValue;
  }
  getAllFromAsynStorage = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      
      if(result.length !== 0){
        result.map((data)=>{
          console.log(data);
        });
      }
    } catch (error) {
      console.error(error)
    }
  }
  onNext = () => {
    console.log("Next");
  };

  /* define the method to be called when you go on back step */

  onBack = () => {
    console.log("Back");
  };

  /* define the method to be called when the wizard is finished */

  finish = finalState => { // nah kalo di klik sekali lagi dia otomatis ngerun yang ini
    
    // console.log(this.props);
    console.log('cekkk', finalState)
    this.storeData(finalState, finalState.email); 
    const { navigation } = this.props;
    navigation.navigate("Home");

  };


  /* render MultiStep */
  render() {
    // console.log("From Local Storage :" + this.state.dataHash);
    return (
      <View style={{ flex: 1 }}>
        <AnimatedMultistep
          steps={allSteps}
          onFinish={this.finish}
          onBack={this.onBack}
          onNext={this.onNext}
          // comeInOnNext="bounceInUp"
          // OutOnNext="bounceOutDown"
          // comeInOnBack="bounceInDown"
          // OutOnBack="bounceOutUp"
        />
      </View>
    );
  }
}

export default Register