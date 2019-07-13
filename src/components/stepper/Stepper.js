import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

const steps = [{
  id: 1,
  image: require('../../assets/img/placeholder.png'),
  title: 'Bienvenido a Emprende Comunidad',
  text: 'Aquí podrás encontrar ferias y vendedores',
  active: false
}, {
  id: 2,
  image: require('../../assets/img/placeholder.png'),
  text: 'Sigue a tus vendedores favoritos y ten noticias de ellos',
  active: false
}, {
  id: 3,
  image: require('../../assets/img/placeholder.png'),
  text: '¡Conviértete en un vendedor, crea y participa de ferias!',
  active: false
}];

class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = { steps, active: {} };
  }

  componentDidMount() {
    // Set first step as active
    let steps = this.state.steps;
    steps[0].active = true;

    this.setState({
      steps,
      active: steps[0]
    });

  }

  // Get active step index
  // FIXME: doesn't works
  getActiveStepIndex =() => {
    let steps = this.state.steps;
    return steps.findIndex(step => !!step.active);
  }

  nextStep = () => {
    let steps = this.state.steps;
    let activeStepIdx = steps.findIndex(step => !!step.active);
    
    steps[activeStepIdx].active = false;

    let active = this.state.active;
    if (activeStepIdx === steps.length - 1) {
      // Si llegamos al paso final, volvemos al primer paso
      // steps[0].active = true;
      // active = steps[0];
      this.props.onCompletedSteps();
    }
    else {
      steps[activeStepIdx + 1].active = true;
      active = steps[activeStepIdx + 1];
    }
    
    this.setState({
      steps,
      active
    });
  }

  gotoStep = (step, index) => {
    let steps = this.state.steps;
    let activeStepIdx = steps.findIndex(step => !!step.active);
    steps[activeStepIdx].active = false;

    steps[index].active = true;

    this.setState({
      steps,
      active: step
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.nextStep}>
        <View style={styles.container}>
          <View style={[styles.section, styles.imageSection]}>
            <Image
              source={this.state.active.image}
              style={styles.image}
            ></Image>
          </View>

          <View style={[styles.section]}>
            <Text style={[styles.title, styles.text]}>
              {this.state.active.title && this.state.active.title}
            </Text>
            <Text style={styles.text}>{this.state.active.text}</Text>
          </View>

          <View style={styles.section}>
            <View style={[styles.stepIndicators]}>
              { this.state.steps.map((step, i) =>
                <TouchableHighlight
                  key={step.id}
                  onPress={() => this.gotoStep(step, i)}
                  style={[
                    styles.circle,
                    step.id === this.state.active.id ? styles.circleActive : null
                  ]}>
                    <Text></Text>
                </TouchableHighlight>
              ) }
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Stepper.propTypes = {
  onCompletedSteps: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: 'space-between',
    justifyContent: 'center',
    backgroundColor: '#0fbcb0',
    alignItems: 'center'
  },
  section: {
    flex: 1,
    // borderBottomWidth: 3
  },
  imageSection: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200
  },
  text: {
    color: '#fff'
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  stepIndicators: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    // borderTopWidth: 1
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: '#167871'
  },
  circleActive: {
    backgroundColor: '#0f5752'
  }
});

export default Stepper;
