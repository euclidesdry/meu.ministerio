import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';
import { Button } from 'native-base';

export default class InicioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <LinearGradient colors={['#18d0f7', '#24126a']}>
                <View style={styles.welcomeContainer}>
                  <Image
                    source={
                      __DEV__
                        ? require('../assets/images/Inicio/Publicador.png')
                        : require('../assets/images/Inicio/Publicador.png')
                    }
                    style={styles.welcomeImage}
                  />
                </View>
              </LinearGradient>
            </ScrollView>

            <View style={styles.tabBarInfoContainer}>
              <Text style={styles.tabBarInfoText}>Para começar, toque em:</Text>
              <Button rounded style={[styles.InicBotao]} onPress={() => this.props.navigation.navigate('Pregacao')}>
                <Text style={styles.InicBotaoTexto}>Iniciar Pregação</Text>
              </Button>
            </View>
        </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24126a',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 30,
  },
  welcomeImage: {
    height: 320,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  InicBotao: {
    backgroundColor: '#18d0f7',
    borderRadius: 50,
    padding: 25,
    paddingVertical: 6,
    paddingTop: 4,
    elevation: 3,
    marginTop: 10,
    width: '70%',
    height: 50,
    marginLeft: '15%',
  },
  InicBotaoTexto: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 26,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#24126a',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(255,255,255, 1)',
    textAlign: 'center',
  }
});
