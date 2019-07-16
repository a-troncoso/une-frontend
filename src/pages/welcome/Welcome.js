import React, { Component } from 'react';
import Stepper from '../../components/stepper/Stepper';
import { View } from 'react-native';
import { Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';

class Welcome extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    componentId: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.navigationEventListener = Navigation.events().bindComponent(this, 'UneFront.Welcome');
  }

  componentDidMount() { 
    console.log('<<< Welcome componentDidMount >>>');
  }

  componentWillUnmount() {
    console.log('<<< Welcome componentWillUnmount >>>');
  }

  componentDidAppear() {
    console.log('<<< Welcome componentDidAppear >>>');
  }

  componentDidDisappear() {
    console.log('<<< Welcome componentDidDisappear >>>');
  }
  

  handleCompletedSteps = async () => {
    try {
      await Navigation.push('MainStack', {
        bottomTabs: {
          children: [{
            component: {
              name: 'UneFront.Places',
              options: {
                bottomTab: {
                  text: 'Lugares',
                  icon: require('../../assets/img/tab1.png')
                }
              }
            }
          }, {
            component: {
              name: 'UneFront.Sellers',
              options: {
                bottomTab: {
                  text: 'Vendedores',
                  icon: require('../../assets/img/tab1.png')
                }
              }
            }
          }, {
            component: {
              name: 'UneFront.Search',
              options: {
                bottomTab: {
                  text: 'Buscar',
                  icon: require('../../assets/img/tab1.png')
                }
              }
            }
          }, {
            component: {
              name: 'UneFront.Profile',
              options: {
                bottomTab: {
                  text: 'Perfil',
                  icon: require('../../assets/img/tab1.png')
                }
              }
            }
          }],
          options: {
            topBar: {
              drawBehind: true,
              visible: false
            }
          }
        }
      })
    } catch (error) {
      console.log('[ERROR: Navigation.push(...)]', error);
    }
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
