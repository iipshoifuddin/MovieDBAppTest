import React from 'react';
import Modal from 'react-native-modalbox';
// import Slider from 'react-native-slider';

import MyButton from '../Button/TertiaryButton';

import {
  Text,
  Button,
  StyleSheet,
  View,
} from 'react-native';

const ModalCenter = (props) =>{
    return (
      <View style={styles.wrapper}>

        <View style={[styles.layer1, { zIndex : props.isOpen ? 5 : 0}]}>
            <Modal 
                isOpen={props.isOpen}
                onClosed={props.onClosed}
                style={[styles.modal, styles.modal3]} 
                position={"center"} 
                isDisabled={false}
                swipeToClose={false}
                >
                <Text style={styles.text}>Thank you for submiting form</Text>
                <MyButton 
                    name="Home"
                    onPress={props.onPressButton} 
                />
            </Modal>
        </View>
      </View>
    );
}



const styles = StyleSheet.create({

  wrapper: {
    flex: 1
  },
  layer1:{
      minWidth: '100%',
      minHeight: '100%',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 100,
    zIndex: 9,
    position: 'absolute',
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22,
    padding: 35,
    textAlign: 'center',
  }

});

export default ModalCenter