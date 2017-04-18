import React, { Component } from 'react';
import { Text } from 'react-native'

class ContentScene extends Component {
  
  
  render() {
    console.log(this.props);
    return (
      <Text>content</Text>
    );
  }
}

export default ContentScene;