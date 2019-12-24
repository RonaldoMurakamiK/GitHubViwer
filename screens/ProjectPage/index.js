import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';
import { loadPartialConfig } from '@babel/core';

export default class ProfilePage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const ProjectPage = navigation.getParam('ProjectPage');

    return (
        <WebView
          source={{uri: ProjectPage}}
          style={{flex: 1}}
        />
    );
  }
}