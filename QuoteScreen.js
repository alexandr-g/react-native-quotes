import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import Quote from './Quote'

class QuoteScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Quote quoteText='Quote' quoteSource='~ Great Source!' />
      </View>
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
});

export default QuoteScreen
