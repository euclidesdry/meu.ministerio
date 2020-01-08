import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tab, Tabs } from 'native-base';

/**
 * TAB -> Páginas
 */
import SemanalScreen from './Relatorios/SemanalScreen';
import MensalScreen from './Relatorios/MensalScreen';
import AnualScreen from './Relatorios/AnualScreen';

export default class RelatoriosScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading/>;
    }
    return (
      <Container style={styles.container}>
        <StatusBar hidden={true}/>

        <Header noShadow hasTabs style={{zIndex: 99}}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body>
            <Title>Relatórios</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu"/>
            </Button>
          </Right>
        </Header>
        <Tabs noShadow style={{elevation: 0, shadowOpacity: 0,}}>
          <Tab heading="Semanal">
            <SemanalScreen/>
          </Tab>
          <Tab heading="Mensal">
            <MensalScreen/>
          </Tab>
          <Tab heading="Anual">
            <AnualScreen/>
          </Tab>
        </Tabs>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
