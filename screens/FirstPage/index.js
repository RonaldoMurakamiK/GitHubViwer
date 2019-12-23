import React, { Component } from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

export default class FirstPage extends Component {
  constructor(props){
    super(props);

    this.mainPage = this.mainPage.bind(this);
  }

  mainPage(){
    this.props.navigation.navigate('MainPage');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.background}>
        <StatusBar backgroundColor="black" barStyle="light-content"/>
          <View style={styles.container}>
            <Text style={styles.titleFont}>GitHubViwer</Text>
            <Image resizeMode="contain" source={require('../../img/github.jpg')} style={styles.image}/>
            <Text style={styles.descfont}>The best viwer for GitHub</Text>
            <TouchableOpacity style={styles.button} onPress={() => this.mainPage()}>
              <Text style={styles.buttonfont}>Get started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}