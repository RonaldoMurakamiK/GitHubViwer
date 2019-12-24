import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class ProjectPage extends Component {
  static navigationOptions = {
    title: this.name,
    headerStyle: {
      backgroundColor: '#1F1D1D',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontColor: 'white'
    },
    headerTintColor: 'white'
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