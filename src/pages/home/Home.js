import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PlaceCard from '../../components/placeCard/placeCard';

class HomePage extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <PlaceCard></PlaceCard>
      </View>
    );
  }
}

export default HomePage;
