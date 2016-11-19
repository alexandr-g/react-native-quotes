import React, { Component, PropTypes } from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

class NextQuoteButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>Next Thought</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: '#ffffff',
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  }
})

NextQuoteButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default NextQuoteButton
