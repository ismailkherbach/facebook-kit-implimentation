import React, {
  Component
} from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch
} from 'react-native'

import AccountKit, {
  LoginButton,
  Color,
  StatusBarStyle,
} from 'react-native-facebook-account-kit'
import Home from "./app/views/Home";

class App extends Component {
  render() {
    return (
        <View style={style.container}>
          <Home/>
        </View>
    )
  }
}

const style = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default App;