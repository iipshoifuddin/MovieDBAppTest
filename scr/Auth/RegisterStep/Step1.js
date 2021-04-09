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
import DynamicInput from '../../../components/InputText/DynamicInput';
import TextInputPrimary from '../../../components/InputText/InputTextPrimary';
import ItemSelectPrimary from '../../../components/ItemSelect/ItemSelectPrimary';
import MyButton from '../../../components/Button/TertiaryButton';

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      getState: [],
      jobDesc: [],
      firstName:"",
      lastName: "",
      gender: "Man",
      email: "",
      emailErrorMessage: "",
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
      firstName: getState.firstName,
      lastName: getState.lastName,
      jobDesc: getState.jobDesc,
      gender: getState.gender,
      email: getState.email,
    });    

    // })
  }
  nextStep = () => {
    const { next, saveState } = this.props;
    // Save state for use in other steps
    saveState({ 
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      jobDesc: this.state.jobDesc,
      gender: this.state.gender,
      email: this.state.email,
    });

    // Go to next step
    next();
  };

  goBack() {
    const { back } = this.props;
    // Go to previous step
    back();
  }

  getData = value => this.setState({
      jobDesc: value
  })
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
    const { getState } = this.state;
    return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Header />
                <Text style={textStyles.label1}>Informasi A</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                      <Text style={textStyles.label2}>First Name</Text>
                      <TextInputPrimary 
                        borderWidth={1} 
                        style={inputStyles.inputText}
                        onChange={(e)=>{this.setState({firstName: e.nativeEvent.text})}}
                        value={this.state.firstName}
                        placeholder="First Name"
                      />
                    </View>
                    <View style={styles.column}>
                      <Text style={textStyles.label2}>Last Name</Text>
                      <TextInputPrimary borderWidth={1} style={inputStyles.inputText}
                        // onChange={(e)=>{}}
                        onChange={(e)=>{this.setState({lastName: e.nativeEvent.text})}}
                        value={this.state.lastName}
                        placeholder="Last Name"
                      />
                    </View>
                </View>
                <View style={dynamicStyles.row}>
                    <View style={dynamicStyles.column}>
                      <Text style={textStyles.label2}>Jobdesc</Text>
                      <DynamicInput 
                        stateData={getState.jobDesc ? getState.jobDesc :[{
                          id: 0,
                          value: ''
                        }]}
                        getData={this.getData}
                        style={{width: "100%"}}
                      />
                    </View>
                </View>
                <View style={singleCol.row}>
                    <View style={singleCol.column}>
                      <Text style={textStyles.label2}>Gender</Text>
                      <ItemSelectPrimary 
                          data={[{name : "-"},{name : "Man"},{ name : "Woman"}, { name : "Other"}]}
                          // valueChanged={(e)=>{this.setState({
                          //     gender: e.nativeEvent.text
                          // })}}
                          onValueChange={(value)=>{this.setState({ gender : value })}}
                          selectedValue={this.state.gender}
                      />
                    </View>
                </View>
                <View style={singleCol.row}>
                    <View style={singleCol.column}>
                      <Text style={textStyles.label2}>Email</Text>
                      <TextInputPrimary 
                        borderWidth={1} 
                        style={singleCol.inputText}
                        // onChange={(e)=>{}}
                        onChangeText={(text)=>{this.setState({email: text})}}
                        onChange={()=>{this.onHandlePressButton()}}
                        // onBlur={()=>{this.onHandlePressButton()}}
                        value={this.state.email}
                        placeholder="ex. jhon@gmail.com"
                      />
                      <Text style={textStyles.errorText}>{this.state.emailErrorMessage}</Text>
                    </View>
                </View>
                <View style={buttonStyles.row}>
                    <View style={buttonStyles.column}></View>
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
      width: '50%', 
      // height: 55, 
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderWidth: 0,
      padding:0,
  },
});

const inputStyles = StyleSheet.create({
  inputText:{
    width: 140,
    height: 38,
    borderRadius: 5,
    borderWidth:1.5,
    padding: 10,
  }
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
      width: '50%', 
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