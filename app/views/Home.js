import React, { Component } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import RNAccountKit from 'react-native-facebook-account-kit'
import Login from '../sections/Login';

export default class Home extends Component {

    render() {
        return (
            <View>
             <Login/>
            </View>
        )
    }
}
