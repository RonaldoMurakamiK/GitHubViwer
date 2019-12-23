import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        height: '8%',
        width: '100%',
        backgroundColor: '#1F1D1D',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },    
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: '#141414' 
    },
    iconHeader: {
        marginHorizontal: '5%'
    }, 
    icon: {
        margin: '30%'
    },  
    input: {
        height: '50%', 
        width: '68%',
        color: 'black', 
        fontSize: responsiveFontSize(2.5),
        backgroundColor: 'white',
        margin: '5%',
        borderRadius: 5
    },  
    button: {
        marginTop: '5%',
        height: '60%',
        width: '15%',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 5
    },
    headerfont: {
        fontSize: responsiveFontSize(2.3), 
        fontWeight: 'bold', 
        color: 'white'
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
    profileButton: {
        height: responsiveHeight(6),
        width: '50%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },  
    delButton: {
        height: responsiveHeight(6),
        width: '10%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: '-10%'
    },
    profileButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%',
        height: responsiveHeight(10),
    },
    profileButtonText: {
        fontSize: responsiveFontSize(2),
        alignSelf: 'center' 
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