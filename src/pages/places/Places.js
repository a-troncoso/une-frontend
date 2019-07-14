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

class PlacesPage extends Component {

  getPlaces = () => places;

  _keyExtractor = item => item.id;

  _onPressPlace = place => {
    Navigation.push('MainStack', {
      bottomTabs: {
        children: [{
          component: {
            name: 'UneFront.PlaceInformation',
            options: {
              bottomTab: {
                text: 'Información',
                icon: require('../../assets/img/tab1.png')
              }
            },
            passProps: {
              place
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
        }]
      }
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.getPlaces()}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this._onPressPlace(item)}>
                <PlaceCard id={item.id} place={item} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default PlacesPage;
