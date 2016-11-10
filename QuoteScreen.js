import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Image,
  LayoutAnimation
} from 'react-native'
import Quote from './Quote'
import NextQuoteButton from './NextQuoteButton'

const bgImage = require('./assets/bg.png')

class QuoteScreen extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  render() {
    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Quote
              key={this.props.qId}
              quoteText={this.props.text}
              quoteSource={this.props.source}
          />
          <NextQuoteButton onPress={this.props.onNextQuotePress} />
        </View>
      </Image>
    );
  }
}

QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  onNextQuotePress: PropTypes.func.isRequired,
  qId: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuoteScreen
