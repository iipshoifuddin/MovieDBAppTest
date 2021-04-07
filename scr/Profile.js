import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { BackHandler, ToastAndroid } from 'react-native'


class Profile extends Component {
    constructor(props) {
        super(props)
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
                <Text> Profile Screen </Text>
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        )
    }
}

export default Profile;
