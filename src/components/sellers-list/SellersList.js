import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';
import UserCard from '../../components/user-card/UserCard';
import { Navigation } from 'react-native-navigation';

const sellers = [{
  id: '1',
  imageUrl: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
  name: 'Teresa Machuca',
  description: 'libros para grandes y chicos',
  portraitImageUrl : 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  likes: 7
}, {
  id: '2',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-760x506.jpg',
  name: 'Camila Rincón',
  description: 'Libros para bebés',
  portraitImageUrl : 'https://www.enasco.com/medias/EL13770-main-530Wx530H?context=bWFzdGVyfHJvb3R8MTIwMzc1fGltYWdlL2pwZWd8aDE2L2hkNy84ODQyNzU5NTY5NDM4LmpwZ3w3NjNlNDE4YWMwOGEyZmYwMGVlMWNiZjIzZmU0YjYwODRiNmE2ZGZkODllZjcwZDQwNjc2YWFiZmFmMzUzMmY0',
  likes: 5
}, {
  id: '3',
  imageUrl: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
  name: 'Miranda Carrasco',
  description: 'Repostería vegana hecha con amor',
  portraitImageUrl : 'https://tul.imgix.net/content/article/SoulKitchen-AmyHiggPhoto-5.jpg?auto=format,compress&w=740&h=486&fit=crop',
  likes: 2
}, {
  id: '4',
  imageUrl: 'https://avatarfiles.alphacoders.com/865/86573.jpg',
  name: 'Celina Gómez',
  description: 'Plantas medicinales para que cultives en casa',
  portraitImageUrl : 'https://media.mercola.com/ImageServer/Public/2014/September/medicinal-plant.jpg',
  likes: 1
}, {
  id: '5',
  imageUrl: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
  name: 'Teresa Machuca',
  description: 'libros para grandes y chicos',
  portraitImageUrl : 'https://acustiknoticias.com/wp-content/uploads/2018/12/libros.png',
  likes: 7
}, {
  id: '6',
  imageUrl: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-760x506.jpg',
  name: 'Camila Rincón',
  description: 'Libros para bebés',
  portraitImageUrl : 'https://www.enasco.com/medias/EL13770-main-530Wx530H?context=bWFzdGVyfHJvb3R8MTIwMzc1fGltYWdlL2pwZWd8aDE2L2hkNy84ODQyNzU5NTY5NDM4LmpwZ3w3NjNlNDE4YWMwOGEyZmYwMGVlMWNiZjIzZmU0YjYwODRiNmE2ZGZkODllZjcwZDQwNjc2YWFiZmFmMzUzMmY0',
  likes: 5
}, {
  id: '7',
  imageUrl: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
  name: 'Miranda Carrasco',
  description: 'Repostería vegana hecha con amor',
  portraitImageUrl : 'https://tul.imgix.net/content/article/SoulKitchen-AmyHiggPhoto-5.jpg?auto=format,compress&w=740&h=486&fit=crop',
  likes: 2
}, {
  id: '8',
  imageUrl: 'https://avatarfiles.alphacoders.com/865/86573.jpg',
  name: 'Celina Gómez',
  description: 'Plantas medicinales para que cultives en casa',
  portraitImageUrl : 'https://media.mercola.com/ImageServer/Public/2014/September/medicinal-plant.jpg',
  likes: 1
}];

class SellersList extends Component {
  getSellers = () => sellers;

  _renderItem = ({item}) => {
    return (
      <View style={{flex: 1, margin: 5}}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => this._onPressSeller(item)}>
          <UserCard user={item} />
          {/* <Text>Hola</Text> */}
        </TouchableOpacity>
      </View>
    )
  }

  _keyExtractor = item => item.id;

  _onPressSeller = async seller => {
    console.log('seller', seller);
    try {
      await Navigation.push('MainStack', {
        component: {
          name: 'UneFront.UserInformation',
          passProps: {
            user: seller
          }
        }
      })
    } catch (error) {
      console.log('[ERROR: Navigation.push(...)]', error);
    }
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

export default SellersList;
