import React, { Component, useState } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import { BackHandler } from 'react-native'



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
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
    
    render() {
        const { navigation } = this.props;

        return (
            <View>
                <Text> HomePagess </Text>
                <Button title="Go To Profile" onPress={() => navigation.navigate('Profile')} />
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={text => this.setState(text)}
                    defaultValue={this.state.text}
                />
            </View>
        )
    }
}

export default Home