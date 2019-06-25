import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import PlaceCard from '../../components/placeCard/placeCard';

const places = [{
  id: '1',
  imageUrl: 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  name: 'feria del libro usado',
  from : '11:00',
  to: '17:00',
  address: 'lastarria #2283 (a 30 mt.)',
  sellersCount: 23,
  likes: 18
}, {
  id: '2',
  imageUrl: 'https://cdn.mindful.org/Meditation_Goleman.jpg',
  name: 'feria espiritual',
  from : '09:00',
  to: '17:00',
  address: 'avda. apoquindo #2283 (a 30 mt.)',
  sellersCount: 11,
  likes: 10
}, {
  id: '3',
  imageUrl: 'http://www.perpetualpc.com.au/c/wp-content/uploads/2012/07/sustainability.jpg',
  name: 'feria sustentable',
  from : '12:00',
  to: '17:00',
  address: 'pedro de valdivia #2283 (a 30 mt.)',
  sellersCount: 8,
  likes: 3
}, {
  id: '4',
  imageUrl: 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  name: 'feria del libro usado',
  from : '11:00',
  to: '17:00',
  address: 'lastarria #2283 (a 30 mt.)',
  sellersCount: 23,
  likes: 18
}];

class HomePage extends Component {

  getPlaces = () => {
    return places;
  }

  _keyExtractor = (item) => item.id;

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.getPlaces()}
          renderItem={({item}) => <PlaceCard id={item.id} place={item} />}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default HomePage;
