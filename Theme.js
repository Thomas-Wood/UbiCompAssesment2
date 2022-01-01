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
      card: colours.primary,
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
        margin: 10,
        borderRadius: 20,
        elevation: 10,
        padding: 10,
        width: screen.width*0.95,
    },
    inputText: {
        backgroundColor: colours.background,
        height: 50,
        width: '75%',
        padding: 10,
        borderRadius: 10,
        marginLeft: 10
    },
    inputPrefixText: {
        color: colours.buttonText,
        fontSize: 20,
        padding: 5,
    },
    inputLabelText: {
        color: colours.buttonText,
        fontSize: 25,
        paddingBottom: 5,
    },
    inputInfoIcon: {
        position: 'absolute',
        left: '95%',
        top: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionButton: {
        backgroundColor: colours.button,
        margin: 10,
        borderRadius: 20,
        elevation: 10,
        padding: 10,
        width: screen.width*0.95,
    },
    sectionTickIcon: {
        position: 'absolute',
        left: '95%',
        top: '45%'
    },
    heading: {
        textAlign: 'center',
        margin: 10,
        fontSize: 18,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
    },
    multipleChoiceText: {
        color: colours.buttonText,
        fontSize: 20,
        padding: 5,
    },
    multipleChoiceRow: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        margin: 5
    },
    multipleChoiceInputBox: {
        backgroundColor: colours.button,
        justifyContent: 'center',
        margin: 10,
        borderRadius: 20,
        elevation: 10,
        padding: 10,
        width: screen.width*0.95,
    },
    multipleChoiceTickIcon: {
        position: 'absolute',
        left: '90%',
        top: 6
    },
    modalContainerOuter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainerInner: {
        backgroundColor: colours.background,
        padding: 5,
        paddingTop: 20,
        borderRadius: 20,
        alignItems: "center",
        elevation: 5,
        width: '90%',
    },
    modalText: {
        textAlign: "center",
        fontSize: 20,
    },
    listItemBox: {
        backgroundColor: colours.button,
        margin: 10,
        borderRadius: 10,
        elevation: 10,
        padding: 10,
        width: '95%',
    },
    listText: {
        textAlign: "center",
        fontSize: 20,
        color: colours.background,
        width: '30%',
        margin: 5
    },
    customCardContainer: {
        backgroundColor: colours.button,
        margin: 5,
        borderRadius: 5,
        elevation: 1,
        padding: 10,
        flex: 1,
        width: screen.width*0.95,
    },
    resultsText: {
        color: colours.buttonText,
        fontSize: 20,
    },
}