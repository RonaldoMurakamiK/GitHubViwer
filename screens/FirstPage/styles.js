import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  background: {
      flex: 1,
      width: '100%',
      backgroundColor: 'black'
  },
  image: {
    height: '43%',
    width: '80%',
    marginBottom: '40%'
  },    
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 60,
    height: '10%',
    width: '80%',
    marginBottom: '15%',
    elevation: 5.5,
    borderBottomWidth: 0
  },
  buttonfont: {
    marginTop: '15%', 
    fontSize: responsiveFontSize(3), 
    fontWeight: 'bold', 
    color: 'black'
  },
  titleFont: {
    marginTop: '15%', 
    fontSize: responsiveFontSize(5.5), 
    fontWeight: 'bold', 
    color: 'white',
    flex: 1
  },
  descfont: {
    fontSize: responsiveFontSize(2), 
    color: 'white'
  }
});