/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import Stepper from './react/components/stepper/Stepper';
import Welcome from './pages/welcome/Welcome';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome></Welcome>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
