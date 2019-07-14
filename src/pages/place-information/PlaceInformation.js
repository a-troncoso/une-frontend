import React, { Component } from 'react';
import { View, Text} from 'react-native';

class PlaceInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>This is Place Information Page</Text> 
        <Text>This is detail of place: {this.props.place.name}</Text>
        <Text>ID: {this.props.place.id}</Text>
        <Text>Image: {this.props.place.imageUrl}</Text>       
      </View>
    );
  }
}

export default PlaceInformation;
