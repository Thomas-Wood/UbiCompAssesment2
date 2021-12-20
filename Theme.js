import { Dimensions } from "react-native";

const colours = {
    primary: '#0C7489',
    background: '#ffffff',
    card: '#bad9b5',
    button: '#0C7489',
    buttonText: '#FFFFFF',
}

const screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

const NavigationTheme = {
    dark: false,
    colors: {
      primary: colours.primary,
      background: colours.background,
      card: colours.card,
      text: colours.buttonText,
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

export default {
    colours: colours,
    navigationTheme: NavigationTheme,
    screen: screen,
    container: {
        flex: 1,
        backgroundColor: colours.background,
        alignItems: 'center',
        justifyContent: 'center',
      },
    card: {
        flex: 1,
        backgroundColor: colours.card,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonBox: {
        backgroundColor: colours.button,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 20,
        elevation: 10,
        padding: 10,
        width: screen.width*0.95,
    },
    buttonText: {
        color: colours.buttonText,
        fontSize: 30,
    },
    inputBox: {
        backgroundColor: colours.button,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 20,
        elevation: 10,
        padding: 10,
        width: screen.width*0.95,
    },
    inputText: {
        backgroundColor: colours.background,
        height: 50,
        width: '85%',
        padding: 10,
        borderRadius: 10,
        marginLeft: 10
    },
    inputPrefixText: {
        color: colours.buttonText,
        fontSize: 30,
        padding: 5,
    },
    inputLabelText: {
        color: colours.buttonText,
        fontSize: 30,
        paddingBottom: 10,
    },
}