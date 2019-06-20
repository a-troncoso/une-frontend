import React, { Component } from 'react';
import Stepper from '../../components/stepper/Stepper';
import { View, Text, Button } from 'react-native';
import { goHome } from '../../navigation';

class Welcome extends Component {

  goHomeScreen = () => {
    goHome();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Stepper></Stepper>
      </View>
    );
  }
}

export default Welcome;
