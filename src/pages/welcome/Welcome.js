import React, { Component } from 'react';
import Stepper from '../../components/stepper/Stepper';
import { View, Alert} from 'react-native';
import { Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';

class Welcome extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    componentId: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  handleCompletedSteps = async () => {
    try {
      await Navigation.push('MainStack', {
        component: {
          id: 'HomeScreen',
          name: 'UneFront.Home'
        }
      })
    } catch (error) {
      console.log('[ERROR]', error);
    }
    
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
