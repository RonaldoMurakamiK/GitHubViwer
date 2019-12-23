import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

export default class ProfilePage extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
        <WebView
            source={{uri: 'https://github.com/RonaldoMurakamiK'}}
            style={{flex: 1}}
        />
    );
  }
}