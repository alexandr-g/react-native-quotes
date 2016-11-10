import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native'
import StartScreen from './StartScreen'
import QuoteScreen from './QuoteScreen'

const { quotes } = require('./quotes.json')

export default class RelaxationStation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quoteIndex: 2,
    }
  }
  render() {
    const quote = quotes[this.state.quoteIndex]
    return (
      <Navigator
        initialRoute={{ name: 'StartScreen' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'StartScreen':
              return <StartScreen onStartHandler={() => navigator.push({ name: 'QuoteScreen' })} />
            case 'QuoteScreen':
              return <QuoteScreen text={quote.text} source={quote.source} />
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff'
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  buttonImage: {
    width: 200,
    height: 200
  }
});

AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
