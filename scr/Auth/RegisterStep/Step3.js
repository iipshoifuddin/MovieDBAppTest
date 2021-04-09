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
import MyButton from '../../../components/Button/TertiaryButton';
import ButtonOutline from '../../../components/Button/ButtonOutline';

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSteps: "",
      currentStep: "",
      getState: [],
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
  nextStep = () => {
    const { next, saveState } = this.props;
    // Save state for use in other steps
    saveState({ 
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
    let showjobList=[
        {
            id: 0,
            value: ''
        },
    ];
    getState.jobDesc !== undefined ? showjobList = getState.jobDesc : showjobList; 
    return (
    <View style={styles.container}>
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Header />
                <Text style={textStyles.label1}>Confirmation Data of Entry</Text>
                <View style={styles.row}>
                    <View style={[styles.column]}>
                      <Text style={textStyles.label2}>Fullname</Text>
                    </View>
                    <View style={[styles.middleColumn,{minWidth: "3%"}]}><Text>:</Text></View>
                    <View style={styles.column}>
                        <Text style={textStyles.label3}>{`${getState.firstName !== undefined ? 
                            getState.firstName : ""} ${getState.lastName !==undefined ? 
                            getState.lastName : ""}`}
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                      <Text style={textStyles.label2}>Jobdesc</Text>
                    </View>
                    <View style={[styles.middleColumn ,{minWidth: "4%"}]}><Text>:</Text></View>
                    <View style={styles.column}>
                        {
                            showjobList.map((data, index)=>{
                                return(
                                    <Text 
                                        key={index}
                                        style={textStyles.label3}
                                    >
                                        {`${data.value}`}
                                    </Text>
                                )
                            })
                        }
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                      <Text style={textStyles.label2}>Gender</Text>
                    </View>
                    <View style={[styles.middleColumn ,{minWidth: "4%"}]}><Text>:</Text></View>
                    <View style={styles.column}>
                        <Text style={textStyles.label3}>{`${getState.gender !== undefined ? 
                            getState.gender :""}`}
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                      <Text style={textStyles.label2}>Email</Text>
                    </View>
                    <View style={[styles.middleColumn ,{minWidth: "4%"}]}><Text>:</Text></View>
                    <View style={styles.column}>
                        <Text style={textStyles.label3}>{`${getState.email !== undefined ? 
                            getState.email :""}`}
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                      <Text style={textStyles.label2}>Have a Laptop/PC ?</Text>
                    </View>
                    <View style={[ styles.middleColumn ,{minWidth: "4%"}]}><Text>:</Text></View>
                    <View style={styles.column}>
                        <Text style={textStyles.label3}>{`${getState.radio !== undefined ? 
                            getState.radio ? "Yes" : "No" :""}`}
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                      <Text style={textStyles.label2}>Mobile Number</Text>
                    </View>
                    <View style={[ styles.middleColumn,{minWidth: "4%"}]}><Text>:</Text></View>
                    <View style={styles.column}>
                        <Text style={textStyles.label3}>{`${getState.phone !== undefined ? 
                            getState.phone :""}`}
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                      <Text style={textStyles.label2}>Address</Text>
                    </View>
                    <View style={[styles.middleColumn,{minWidth: "4%"}]}><Text>:</Text></View>
                    <View style={styles.column}>
                        <Text style={textStyles.label3}>{`${getState.address !== undefined ? 
                            getState.address :""}`}
                        </Text>
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
                          name="Submit"
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
    paddingTop: 0,
    paddingBottom:10,
  },
  column:{
      width: '40%', 
      // height: 55, 
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderWidth: 0,
      padding:0,
  },
  middleColumn:{
    // width: '40%', 
    // height: 55, 
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 0,
    padding:0,
  },

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
      paddingBottom:30,
  },
  label2:{
    fontSize: 16,
    fontWeight: "700",
    color: '#22211F',
  },
  label3:{
    fontSize: 15,
    fontWeight: "500",
    color: '#22211F',

  }
});

export default Step3;