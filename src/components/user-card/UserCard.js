import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

class UserCard extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: this.props.user.portraitImageUrl}}
            style={{height: 150}}
          />
          <View style={styles.imageNameUserContainer} >
            <Image
              source={{uri: this.props.user.imageUrl}}
              style={{height: 150}}
              style={styles.userImage}
            />
            <Text style={styles.userName}>{this.props.user.name}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={{flex:1}}>
            <Text style={{fontSize: 16, color: '#000'}}>
              {this.props.user.description}
            </Text>
          </View>
          <View style={styles.likes}>
            <Icon name='favorite-border' type="material" />
            <Text style={{marginLeft: 5}}>{this.props.user.likes}</Text>
          </View>
        </View>
      </View>
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  imageNameUserContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end',
    bottom: 10,
    left: 10
  },
  userImage: {
    width: 50,
    height: 50,
    marginRight: 5,
    borderRadius: 25
  },
  infoContainer: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#d3d3d3'
  },
  imageContainer: {
    position: 'relative'
  },
  userName: {
    color: '#fff',
    fontSize: 15,
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
    justifyContent: 'flex-end',
    // borderWidth: 0.5,
    // borderColor: '#d3d3d3'
  }
})

export default UserCard;
