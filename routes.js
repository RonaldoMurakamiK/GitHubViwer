import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
console.disableYellowBox = true;

import FirstPage from './screens/FirstPage/index';
import MainPage from './screens/MainPage/index';
import ProfilePage from './screens/ProfilePage/index';
import ProjectPage from './screens/ProjectPage/index';

const navigator = createStackNavigator({
  MainPage: {
    screen: MainPage,
    navigationOptions: { header: null }
  },
  FirstPage: {
    screen: FirstPage, 
    navigationOptions: { header: null }
  },
  ProfilePage: {
    screen: ProfilePage,
    navigationOptions: { headerBackgroundColor: 'yellow' }
  },
});

const App = createAppContainer(navigator);

export default App;