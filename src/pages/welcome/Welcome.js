import React, { Component } from 'react';
import Stepper from '../../components/stepper/Stepper';
import { View, Alert} from 'react-native';
import { goHome } from '../../navigation';

class Welcome extends Component {
  handleCompletedSteps = () => {
    goHome();
    // Alert.alert('Vuelta completa',  'Debería ir al home');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Stepper onCompletedSteps={this.handleCompletedSteps}></Stepper>
      </View>
    );
  }
}

export default Welcome;
