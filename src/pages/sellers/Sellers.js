import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import UserCard from '../../components/user-card/UserCard';

const sellers = [{
  id: '1',
  imageUrl: 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  name: 'Teresa Machuca',
  description: 'libros para grandes y chicos',
  portraitImageUrl : 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  likes: 7
}, {
  id: '2',
  imageUrl: 'https://cdn.mindful.org/Meditation_Goleman.jpg',
  name: 'Camila Rincón',
  description: 'Libros para bebés',
  portraitImageUrl : 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  likes: 5
}, {
  id: '3',
  imageUrl: 'http://www.perpetualpc.com.au/c/wp-content/uploads/2012/07/sustainability.jpg',
  name: 'Miranda Carrasco',
  description: 'Repostería vegana hecha con amor',
  portraitImageUrl : 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  likes: 2
}, {
  id: '4',
  imageUrl: 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  name: 'Celina Gómez',
  description: 'Plantas medicinales para que cultives en casa',
  portraitImageUrl : 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  likes: 1
}];

class SellersPage extends Component {

  getSellers = () => sellers;

  _renderItem = ({item, idx}) => {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => this._onPressSeller(item)}>
          <UserCard id={item.id} user={item} />
        </TouchableOpacity>
      </View>
    )
  }

  _keyExtractor = item => item.id;

  _onPressSeller = seller => {
    console.log('seller', seller);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={this.getSellers()}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          numColumns={2}
        />
      </View>
    );
  }
}

export default SellersPage;
