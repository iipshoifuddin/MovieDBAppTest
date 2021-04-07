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

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      dataList: [],
    };
  }

  static getDerivedStateFromProps = props => {
    const { getTotalSteps, getCurrentStep } = props;
    return {
      totalSteps: getTotalSteps(),
      currentStep: getCurrentStep()
    };
  };

  nextStep = () => {
    const { next, saveState } = this.props;
    // Save state for use in other steps
    saveState({ name: "samad" });

    // Go to next step
    next();
  };

  goBack() {
    const { back } = this.props;
    // Go to previous step
    back();
  }

  getData = value => this.setState({
      dataList: value
  })

  render() {
    const { currentStep, totalSteps, dataList } = this.state;
    console.log('dataaaaa', dataList)
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
                        // onChange={(e)=>{}}
                      />
                    </View>
                    <View style={styles.column}>
                      <Text style={textStyles.label2}>Last Name</Text>
                      <TextInputPrimary borderWidth={1} style={inputStyles.inputText}
                        // onChange={(e)=>{}}
                      />
                    </View>
                </View>
                <View style={dynamicStyles.row}>
                    <View style={dynamicStyles.column}>
                      <Text style={textStyles.label2}>Last Name</Text>
                      <DynamicInput getData={this.getData}
                        style={{width: "100%"}}
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
  },
  column:{
      justifyContent: 'center',
      alignItems: 'flex-start',
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
});

export default Step1;