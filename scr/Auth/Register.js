import React, { Component } from "react";
import { View } from "react-native";
import AnimatedMultistep from "react-native-animated-multistep";
import AsyncStorage from '@react-native-async-storage/async-storage';


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
    };
  }
  /* define the method to be called when you go on next step */
  storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  componentDidMount = () =>{
    this.getData();
  }
  getData = async () => {
    let getValue;
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
        // console.log(value);
        // return value;
        getValue=value;
      }
    } catch(e) {
      // error reading value
    }
    this.setState({data: getValue});
    return getValue;
  }

  onNext = () => {
    console.log("Next");
  };

  /* define the method to be called when you go on back step */

  onBack = () => {
    console.log("Back");
  };

  /* define the method to be called when the wizard is finished */

  finish = finalState => {
    // console.log(finalState);
    this.storeData(finalState);
  };


  /* render MultiStep */
  render() {
    console.log("From Local Storage :" + this.state.data);
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