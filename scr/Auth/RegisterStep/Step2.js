import React, { Component } from "react";
import { 
    View, 
    Text,
    StyleSheet,
    SafeAreaView, 
    ScrollView,
} from "react-native";

// import styles from "./styles";

import Header from '../../../components/Header/MainHeader';
import TextInputPrimary from '../../../components/InputText/InputTextPrimary';
import MyButton from '../../../components/Button/TertiaryButton';
import RadioButtonPrimary from '../../../components/RadioButton/RadioButtonPrimary';
import TextAreaInput from '../../../components/InputText/TextAreaInput';
import ButtonOutline from '../../../components/Button/ButtonOutline';

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      getState: [],
      radio: 0,
      address: "",
      phone: "",
      enableButton: false,
    };
  }

  static getDerivedStateFromProps = props => {
    const { getTotalSteps, getCurrentStep, getState } = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep(),
      getState: getState()
    };
  };
  componentDidMount=()=>{
    const { getState } = this.state;
    this.setState({
      radio : getState.radio ? getState.radio : 0 ,
      address : getState.address,
      phone : getState.phone 
    });    

    // })
  }
  nextStep = () => {
    const { next, saveState } = this.props;
    // Save state for use in other steps
    saveState({ 
      radio : this.state.radio,
      address : this.state.address,
      phone : this.state.phone, 
      password: "12345",
    });

    // Go to next step
    next();
  };

  goBack() {
    const { back } = this.props;
    // Go to previous step
    back();
  }
  getRadioValue = value => this.setState({
      radio: value
  })
  render() {
    const { getState } = this.state;
    return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Header />
                <Text style={textStyles.label1}>Informasi B</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                      <Text style={textStyles.label2}>Have a Lapotop / Pc ?</Text>
                      <RadioButtonPrimary
                        getRadioValue={this.getRadioValue}
                        radioState={getState.radio !== undefined ? getState.radio : this.state.radio}
                      />
                    </View>
                </View>
                <View style={dynamicStyles.row}>
                    <View style={dynamicStyles.column}>
                      <Text style={textStyles.label2}>Address</Text>
                      <TextAreaInput 
                        placeholder="Address"
                        onChangeText={(text)=>{this.setState({address: text})}}
                        value={this.state.address}
                      />
                    </View>
                </View>
                <View style={singleCol.row}>
                    <View style={singleCol.column}>
                      <Text style={textStyles.label2}>Mobile  Number</Text>
                      <TextInputPrimary 
                        borderWidth={1} 
                        style={singleCol.inputText}
                        // onChange={(e)=>{}}
                        onChangeText={(text)=>{this.setState({phone: text})}}
                        // onBlur={()=>{this.onHandlePressButton()}}
                        value={this.state.phone}
                        placeholder="Mobile Number"
                      />
                    </View>
                </View>
                <View style={buttonStyles.row}>
                  <View style={[buttonStyles.column, {maxWidth: '21.4%'}]}></View>
                    <View style={buttonStyles.column}>
                      <ButtonOutline 
                        name="Back"
                        onPress={()=>{this.goBack()}}
                      />
                    </View>
                    <View style={buttonStyles.column}>
                        <MyButton 
                          name="Next"
                          onPress={()=>{this.nextStep()}}
                        />
                    </View>
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
  row:{
    flex: 1, 
    flexDirection: 'row',
    padding: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  column:{
      // width: '50%', 
      // height: 55, 
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderWidth: 0,
      padding:0,
  },
});


const dynamicStyles = StyleSheet.create({
  row:{
    flex: 1, 
    flexDirection: 'row',
    padding: 30,
    paddingTop: 0,
    paddingBottom: 0,
  },
  column:{
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderWidth: 0,
      padding:0,
  },
});

const singleCol = StyleSheet.create({
  row:{
    flex: 1, 
    flexDirection: 'row',
    padding: 30,
    paddingTop: 20,
    paddingBottom: 10,
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
      width: '40%', 
      justifyContent: 'center',
      alignItems: "flex-end",
      borderWidth: 0,
      padding:0,
  },
});

const textStyles = StyleSheet.create({
  label1:{
      fontSize: 18,
      fontWeight: "bold",
      color: '#22211F',
      padding: 30,
      paddingTop: 50,
      paddingBottom:0,
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

export default Step1;