import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class UserCard extends Component {
  render() {
    return (
      <View>
        <Text>This is user Information Page</Text> 
        <Text>This is detail of user: {this.props.user.name}</Text>
        <Text>ID: {this.props.user.id}</Text>
        <Text>Image: {this.props.user.imageUrl}</Text>       
      </View>
    );
  }
}

UserCard.propTypes = {
  id: PropTypes.string,
  user: PropTypes.object.isRequired
}

export default UserCard;
