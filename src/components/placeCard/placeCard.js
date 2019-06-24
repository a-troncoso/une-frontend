import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class PlaceCard extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png'}}
            style={{ height: 150}} />
            <Text style={styles.placeName}>feria del libro usado</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={{flex:1}}>
              <Text>Hoy desde las 11:00 hrs.</Text>
              <Text>Lastarria 2283 (a 30 mt.)</Text>
              <Text>23 vendedores</Text>
            </View>
            <View style={styles.likes}>
              <Icon name='favorite-border' type="material" />
              <Text style={{marginLeft: 5}}>23</Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    alignContent: 'flex-end',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d3d3d3'
  },
  imageContainer: {
    position: 'relative'
  },
  placeName: {
    position: 'absolute',
    bottom: 2,
    left: 5,
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
