import React, { Component } from 'react';

class PlaceDetail extends Component {
  render() {
    return (
      <View>
        <Text>This is detail of place: {this.props.place.name}</Text>
        <Text>ID: {this.props.place.id}</Text>
        <Text>Image: {this.props.place.nameimageUrl}</Text>
      </View>
    );
  }
}

export default PlaceDetail;
