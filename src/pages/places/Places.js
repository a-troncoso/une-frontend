import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import PlaceCard from '../../components/placeCard/placeCard';
import { Navigation } from 'react-native-navigation';

const places = [{
  id: '1',
  imageUrl: 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  name: 'feria del libro usado',
  from : '11:00',
  to: '17:00',
  address: 'lastarria #2283 (a 30 mt.)',
  sellersCount: 23,
  likes: 18,
  description: 'Bienvenidos',
  lat: -33.4308119,
  long: -70.6843836
}, {
  id: '2',
  imageUrl: 'https://cdn.mindful.org/Meditation_Goleman.jpg',
  name: 'feria espiritual',
  from : '09:00',
  to: '17:00',
  address: 'avda. apoquindo #2283 (a 30 mt.)',
  sellersCount: 11,
  likes: 10,
  description: 'Bienvenidos',
  lat: -33.430654,
  long: -70.685543
}, {
  id: '3',
  imageUrl: 'http://www.perpetualpc.com.au/c/wp-content/uploads/2012/07/sustainability.jpg',
  name: 'feria sustentable',
  from : '12:00',
  to: '17:00',
  address: 'pedro de valdivia #2283 (a 30 mt.)',
  sellersCount: 8,
  likes: 3,
  description: 'Bienvenidos',
  lat: -33.431497,
  long: -70.685128
}, {
  id: '4',
  imageUrl: 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  name: 'feria del libro usado',
  from : '11:00',
  to: '17:00',
  address: 'lastarria #2283 (a 30 mt.)',
  sellersCount: 23,
  likes: 18,
  description: 'Bienvenidos',
  lat: -33.428169,
  long: -70.685832
}];

class PlacesPage extends Component {

  getPlaces = () => places;

  _keyExtractor = item => item.id;

  _renderItem = ({item}) => {
    return (
      <View style={{flex: 1, margin: 5}}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => this._onPressPlace(item)}>
          <PlaceCard id={item.id} place={item} />
        </TouchableOpacity>
      </View>
    )
  }

  _onPressPlace = place => {
    Navigation.push('MainStack', {
      component: {
        name: 'UneFront.PlaceInformation',
        passProps: {
          place
        }
      }
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={this.getPlaces()}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default PlacesPage;
