import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SellersList from '../../components/sellers-list/SellersList';

class SellersPage extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <SellersList />
      </View>
    );
  }
}

export default SellersPage;
