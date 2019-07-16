import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

class UserInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text>
        THis is UserInformation Page!
        USER: {this.props.user.name}
      </Text>
    );
  }
}

UserInformation.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserInformation;
