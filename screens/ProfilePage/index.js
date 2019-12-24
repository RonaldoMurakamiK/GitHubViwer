import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import styles from './styles';
import api from '../services/api';

export default class ProfilePage extends Component {
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

  constructor(props){
    super(props);
    this.state={
      listData: '',
      name: '',
      image: '',
      bio: ''
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const loginUser = navigation.getParam('loginUser');

    var response = await api.get(loginUser);
    var responseProjects = await api.get(loginUser+ "/subscriptions")

    this.setState({
      name: response.data.name,
      image: response.data.avatar_url,
      bio: response.data.bio,
      listData: responseProjects.data
    })
  }

  projectPage(projectUrl){
    this.props.navigation.navigate('ProjectPage', {projectUrl: projectUrl});
  }

  renderData(item) {
    return(
      <TouchableOpacity style={styles.projects} onPress={() => this.projectPage(item.html_url)}>
        <Image resizeMode="contain" source={{uri: item.owner.avatar_url}} style={styles.Projectimage}/>
        <View>
          <Text style={styles.projectName}>{item.name}</Text>
          <Text style={styles.projectLanguage}>Language: {item.language}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { name, image, bio } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.background}>
          <Image resizeMode="contain" source={{uri: image}} style={styles.image}/>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>

          <View style={styles.line}/>

          <Text style={[styles.name, {marginTop: '7%'}]}>Projects</Text>
          <FlatList 
            data={this.state.listData}
            renderItem={({item}) => this.renderData(item)}
            style={{marginBottom: '21.3%'}}
          />
        </View>
      </SafeAreaView>
    );
  }
}