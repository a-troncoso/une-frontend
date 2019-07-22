import React, { Component } from 'react';
import propTypes from 'prop-types';
import { View, Text, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const { height, width } = Dimensions.get( 'window' );

class PlaceDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>
          {this.props.place.description}
        </Text>
        <Text>Desde el {this.props.place.from} hasta el {this.props.place.to}</Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex: 1}}
          region={{
            latitude: this.props.place.lat,
            longitude: this.props.place.long,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
          showsUserLocation
        >
          <Marker
            coordinate={{latitude: this.props.place.lat, longitude: this.props.place.long}}
          ></Marker>
        </MapView>
      </View>
    );
  }
}

PlaceDetail.propTypes = {
  place: propTypes.object.isRequired
}

export default PlaceDetail;
