import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

const circleImage = require('./assets/circle.png')

class StartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.onStartHandler}>
          <Image source={circleImage} style={styles.buttonImage} />
          <Text style={styles.readyText}>I am ready to relax...</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#889dad',
  },
  readyText: {
    fontSize: 22,
    fontStyle: 'italic',
    marginTop: 20,
    color: '#ffffff'
  },
  button: {
    backgroundColor: '#889dad',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  buttonImage: {
    width: 200,
    height: 200
  }
});

export default StartScreen
