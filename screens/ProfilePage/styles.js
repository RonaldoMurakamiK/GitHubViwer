import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },   
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: '#141414' 
    },
    icon: {
        margin: '30%'
    },  
    line: {
        height: 1,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: '4%'
    },
    image: {
        height: responsiveHeight(17),
        width: responsiveWidth(30),
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: '8%',
        marginBottom: '3%'
    },
    Projectimage: {
      height: responsiveHeight(7),
      width: responsiveWidth(20),
      borderRadius: 100,
      alignSelf: 'center'
    },
    projectName: {
      fontSize: responsiveFontSize(2.5), 
      color: 'black',
      marginLeft: '3%'
    },
    projectLanguage: {
      fontSize: responsiveFontSize(1.5), 
      color: 'black',
      marginLeft: '3%'
    },
    name: {
        fontSize: responsiveFontSize(2.5), 
        color: 'white',
        marginHorizontal: '10%',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '3%'
    },
    bio: {
        fontSize: responsiveFontSize(1.8), 
        color: 'white',
        marginHorizontal: '10%',
        textAlign: 'center'
    },
    projects: {
      height: responsiveHeight(10),
      borderRadius: 5,
      width: '90%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      marginTop: '3%',
      flexDirection: 'row'
    }
});