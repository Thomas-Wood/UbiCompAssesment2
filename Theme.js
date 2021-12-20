const colours = {
    primary: '#0C7489',
    background: '#ffffff',
    card: '#bad9b5',
    button: '#0C7489',
    buttonText: '#FFFFFF'
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
        padding: 10
    },
    buttonText: {
        color: colours.buttonText,
        fontSize: 30
    }
}