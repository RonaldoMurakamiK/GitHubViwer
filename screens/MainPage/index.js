import React, { Component } from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  FlatList,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import styles from './styles';
import api from '../services/api';

var counter = 1;

export default class MainPage extends Component {
  constructor(props){
    super(props);
    
    this.state={
      idUser: '',
      return: false,
      listData: [{id: "53627880", loginUser: "RonaldoMurakamiK", name: "Ronaldo Murakami", image: "https://avatars3.githubusercontent.com/u/53627880?v=4", bio: "Iniciante em desenvolvimento mobile com React Native, Node.js e Firebase. Preparando para começar os estudos de matemática. "}]
    };

    this.addUser = this.addUser.bind(this);
    this.delUser = this.delUser.bind(this);
    this.profilePage = this.profilePage.bind(this);
  }

  async componentDidMount() {
    AsyncStorage.getItem("listData").then((value) => {
      if(value != null) this.setState({listData: JSON.parse(value)});
    })
  }

  profilePage(loginUser){
    this.props.navigation.navigate('ProfilePage', {loginUser: loginUser});
  }

  async addUser(){
    try {
      const { listData } = this.state;

      var response = await api.get(this.state.idUser);

      for(let i=0; i<=listData.length-1; i++){
        if(response.data.id == listData[i].id){
          var cont = 1;
        } 
      }
      if(cont != 1){
        listData.push({id: response.data.id, loginUser: response.data.login, name: response.data.name, image: response.data.avatar_url, bio: response.data.bio})
        AsyncStorage.setItem("listData", JSON.stringify(listData));
        this.textInput.clear();
      } else{
        Alert.alert("Error", "User already added!")
      }
    }
    catch(err) {
      Alert.alert("Error", "Name/ID not found!")
    }
  }

  delUser(id){
    const { listData } = this.state;

    for(let i=0; i<=listData.length-1; i++){
      if(id == listData[i].id){
        const index = listData.findIndex(x => x.id === id);
        if (index !== undefined) {
          listData.splice(index, 1);
          AsyncStorage.setItem("listData", JSON.stringify(listData));
        }
      } 
    }
  }

  renderData(item) {
    return(
      <View>
        <Image resizeMode="contain" source={{uri: item.image}} style={styles.image}/>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.bio}>{item.bio}</Text>
        <View style={styles.profileButtons}>
          <TouchableOpacity style={styles.profileButton} onPress={() => this.profilePage(item.loginUser)}>
            <Text style={styles.profileButtonText}>See profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.delButton} onPress={() => this.delUser(item.id)}>
            <Icon style={styles.iconHeader} name="trash" size={responsiveHeight(5)} color="#e6293f"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <StatusBar backgroundColor="#1F1D1D" barStyle="light-content"/>
          <Icon style={styles.iconHeader} name="github" size={responsiveHeight(5)} color="white"/>
          <Text style={styles.headerfont}>Users</Text>    
        </View>
        <View style={styles.background}>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={styles.input} placeholder="Add new user..."  
                       onChangeText={(value) => this.setState({idUser: value})}
                       ref={input => { this.textInput = input }}
            />
            <TouchableOpacity style={styles.button} onPress={this.addUser}>
                <Icon style={styles.icon} name="plus" size={responsiveHeight(3)} color="#1F1D1D"/>
            </TouchableOpacity>
          </View>

          <View style={styles.line}/>

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