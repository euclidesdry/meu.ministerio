import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { Icon } from 'expo';
import moment from 'moment';

function Temporizador({ intervaloTemp, style })
{
  const pad = (n) => n < 10 ? '0' + n : n
  const duration = moment.duration(intervaloTemp)
  const centiseconds = Math.floor(duration.milliseconds() / 10)

  return (
    <View style={{flexDirection: 'row', textAlign: 'center', alignContent: 'center', alignItems: 'center', width: '100%',}}>
      <Text style={style}>{pad(duration.hours())}:</Text>
      <Text style={style}>{pad(duration.minutes())}:</Text>
      <Text style={[style, {width: 70,}]}>{pad(duration.seconds())}</Text>
      <Text style={[style, {fontSize: 32, width: 50,}]}>,{pad(centiseconds)}</Text>
    </View>
  )
}

export default class PregacaoScreen extends React.Component {

  static navigationOptions = {
    title: 'Pregação Diária',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button transparent rounded style={{backgroundColor: 'transparent', shadowOpacity: 0, width: '100%', height: '100%', marginLeft: 10, paddingHorizontal: 15,}}>
          <Icon.Ionicons
            name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
            size={32}
            style={{}}
            color="#fff"
          />
      </Button>
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
      time: '',
      iniciar: 0,
      agora: 0,
      etapas: [],
    };
  }

  componentDidMount() {
    var that = this;
    var day = new Date().getDay() + 1; //Current Date
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    
    switch (month)
    {
      case 1:
        month = 'Janeiro';
        break;
      case 2:
        month = 'Fevereiro';
        break;
      case 3:
        month = 'Março';
        break;
      case 4:
        month = 'Abril';
        break;
      case 2:
        month = 'Maio';
        break;
      case 2:
        month = 'Junho';
        break;
        case 2:
        month = 'Julho';
        break;
        case 2:
        month = 'Agosto';
        break;
        case 2:
        month = 'Setembro';
        break;
        case 2:
        month = 'Outubro';
        break;
        case 2:
        month = 'Novembro';
        break;
        case 2:
        month = 'Dezembro';
        break;
      default:
        month = month;
        break;
    }

    switch (day)
    {
      case 1:
        day = 'Domingo';
        break;
      case 2:
        day = 'Segunda';
        break;
      case 3:
        day = 'Terça';
        break;
      case 4:
        day = 'Quarta';
        break;
      case 5:
        day = 'Quinta';
        break;
      case 6:
        day = 'Sexta';
        break;
      case 7:
        day = 'Sábado';
        break;
      default:
        day = day;
        break;
    }

    that.setState({
      //Setting the value of the date time
      date:
      day + ', ' + (date.toString().length == 1 ? '0'+date : date) + ' de ' + month + ' de ' + year,
      time:
        (hours.toString().length == 1 ? '0'+hours : hours) + ':' + ( min.toString().length == 1 ? '0'+min : min ) + ':' + (sec.toString().length == 1 ? '0'+sec : sec),
    });
  }

  horaAtual()
  {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    this.setState({
      //Setting the value of the time
      time: (hours.toString().length == 1 ? '0'+hours : hours) + ':' + ( min.toString().length == 1 ? '0'+min : min ) + ':' + (sec.toString().length == 1 ? '0'+sec : sec),
    });
  }

  componentWillMount()
  {
    this.timer = setInterval(() => {this.horaAtual()}, 1000)
  }

  iniciar = () => {
    const agora = new Date().getTime()
    this.setState({
      iniciar: agora,
      agora,
      etapas: [],
    })
    this.timerCronometro = setInterval(() => {
      this.setState({ agora: new Date().getTime()})
    }, 100)
  }

  parar = () => {
    clearInterval(this.timerCronometro)
    const { agora, iniciar, etapas } = this.state
    //const [firstLap, ...other] = laps
    this.setState({
      etapas: []/*[firstLap + now - start, ...other]*/,
      iniciar: 0,
      agora: 0,
    })
  }

  render() {
    const { agora, iniciar, etapas } = this.state
    const temporizador = agora - iniciar

    return (
        <ScrollView style={styles.container}>
          <View style={[styles.boxDataHora, styles.alinharItensCentro, styles.marginHornzontalBoxes]}>
            <Text style={styles.boxHoraText}>{this.state.time}</Text>
            <Text style={styles.boxDataText}>{this.state.date}</Text>
          </View>

          <View style={[styles.suporteBoxCronometro, styles.alinharItensCentro, styles.marginHornzontalBoxes]}>
            <View style={[styles.boxCronometro, styles.alinharItensCentro]}>
              <View style={styles.boxCronometroContador}>
                <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', paddingTop: 5,}}>Parado</Text>
                <Temporizador intervaloTemp={temporizador} style={styles.temporizador}/>
              </View>
            </View>
            <View style={styles.suporteBotaoIniciar}>
              {iniciar > 0 && (
                <Button rounded style={[styles.botaoIniciarCronometro, {paddingLeft: 14,}]} onPress={this.parar}>
                  <Icon.Ionicons
                    name={Platform.OS === 'ios' ? 'ios-hand' : 'md-hand'}
                    size={54}
                    style={styles.botaoIniciarCronometroIcon}
                    color="#ffffff"
                  />
                </Button>
              )}
              {etapas.length === 0 && iniciar === 0 && (
                <Button rounded style={styles.botaoIniciarCronometro} onPress={this.iniciar}>
                  <Icon.Ionicons
                    name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'}
                    size={54}
                    style={styles.botaoIniciarCronometroIcon}
                    color="#fff"
                  />
                </Button>
              )}
            </View>
          </View>

          <View style={[styles.boxAtividades, styles.alinharItensCentro, styles.marginHornzontalBoxes]}>
            <Icon.Ionicons
              name={Platform.OS === 'ios' ? 'ios-alert' : 'md-alert'}
              size={64}
              style={{}}
              color="#f4511e"
            />
            <Text style={styles.boxAtividadesTextInfo}>Ainda não tens nenhuma actividade registrada hoje, por favor, clique no botão "Play" para iniciar sua actividade ministerial.</Text>
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: '2%',
    paddingBottom: 10,
  },
  boxDataHora: {
    width: '98%',
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 5,
    overflow: 'hidden',
    padding: 8,
    elevation: 1,
  },
  boxHoraText: {
    fontSize: 38,
  },
  boxDataText: {
    fontSize: 16,
  },
  marginHornzontalBoxes: {
    marginHorizontal: '1%',
  },
  temporizador: {
    fontSize: 58,
    color: '#fff',
    fontWeight: '100',
    width: 80,
  },
  suporteBoxCronometro: {
    width: '98%',
  },
  boxCronometro: {
    width: '100%',
    height: 140,
    backgroundColor: '#332982',
    borderRadius: 8,
    elevation: 2,
    paddingBottom: 60,
    paddingVertical: 10,
  },
  alinharItensCentro: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  suporteBotaoIniciar: {
    width: 120,
    height: 45,
    bottom: 50,
    alignContent: 'center',
  },
  botaoIniciarCronometro: {
    width: 65,
    height: 65,
    borderRadius: 80,
    elevation: 6,
    borderColor: '#fff',
    backgroundColor: '#f4511e',
    marginHorizontal: 30,
    marginVertical: 20,
    overflow: 'hidden',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    padding: 10,
    paddingLeft: 18,
  },
  botaoIniciarCronometroText: {
    color: 'yellow',
    fontSize: 18,
  },
  botaoIniciarCronometroIcon: {
    width: 54,
    height: 54,
    textAlign: 'center',
    alignItems: 'center',
  },
  boxAtividades: {
    width: '98%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  boxAtividadesTextInfo: {
    padding: 15,
    fontSize: 16,
  },
});
