import { View, Text } from 'react-native';

import { ListItem } from 'react-native-elements'

import React, { Component } from 'react';

import computeTime from '../config/computeTime'

class RenderRow extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const data = this.props.data;
    return (
      <View>
        <ListItem
          roundAvatar
          title={data.title}
          subtitle={computeTime(data.last_reply_at)}
          avatar={data.author.avatar_url}
          onPress={this.props.handleClick}
        />
      </View>
    );
  }
}

export default RenderRow;