import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import UserCard from '../../components/user-card/UserCard';

const sellers = [{
  id: '1',
  imageUrl: 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  name: 'Teresa Machuca',
  description: 'libros para grandes y chicos',
  portraitImageUrl : 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png'
}, {
  id: '2',
  imageUrl: 'https://cdn.mindful.org/Meditation_Goleman.jpg',
  name: 'Camila Rincón',
  description: 'Libros para bebés',
  portraitImageUrl : 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png'
}, {
  id: '3',
  imageUrl: 'http://www.perpetualpc.com.au/c/wp-content/uploads/2012/07/sustainability.jpg',
  name: 'Repostería vegana hecha con amor',
  description: 'asd',
  portraitImageUrl : 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png'
}, {
  id: '4',
  imageUrl: 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  name: 'Celina Gómez',
  description: 'Plantas medicinales para que cultives en casa',
  portraitImageUrl : 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png'
}];

class SellersPage extends Component {

  getSellers = () => sellers;

  _keyExtractor = item => item.id;

  _onPressSeller = seller => {
    console.log('seller', seller);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.getSellers()}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this._onPressSeller(item)}>
                <UserCard id={item.id} user={item} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default SellersPage;
