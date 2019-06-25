import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

class PlaceCard extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: this.props.place.imageUrl}}
            style={{ height: 150}} />
            <Text style={styles.placeName}>{this.props.place.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={{flex:1}}>
              <Text style={{fontSize: 16, color: '#000'}}>
                Hoy desde las {this.props.place.from} hasta las {this.props.place.to} hrs.
              </Text>
              <Text style={{fontSize: 14, color: '#000'}}>{this.props.place.address}</Text>
              <Text style={{fontSize: 12, color: '#000'}}>
                {this.props.place.sellersCount} vendedores
              </Text>
            </View>
            <View style={styles.likes}>
              <Icon name='favorite-border' type="material" />
              <Text style={{marginLeft: 5}}>{this.props.place.likes}</Text>
            </View>
          </View>
      </View>
    );
  }
}

PlaceCard.propTypes = {
  id: PropTypes.string,
  place: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    alignContent: 'flex-end',
    padding: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3'
  },
  imageContainer: {
    position: 'relative'
  },
  placeName: {
    position: 'absolute',
    bottom: 2,
    left: 10,
    color: '#fff',
    fontSize: 25,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowColor: '#000',
    textShadowRadius: 10
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 0.5,
    // borderColor: '#d3d3d3'
  }
})

export default PlaceCard;
