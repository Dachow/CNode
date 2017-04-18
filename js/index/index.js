// 2017年4月18日 抽屉列表首页入口

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-vector-icons/Ionicons'

import List from './list'

class AllScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '全部',
  };

  render() {
    return (
      <List />
    );
  }
}

class PraiseScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '精华',
  };

  render() {
    return (
      <Text>2222</Text>
    );
  }
}
class ShareScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '分享',
  };

  render() {
    return (
      <Text>2222</Text>
    );
  }
}
class AskScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '问答',
  };

  render() {
    return (
      <Text>2222</Text>
    );
  }
}
class HireScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '招聘',
  };

  render() {
    return (
      <Text>2222</Text>
    );
  }
}

const styles = StyleSheet.create({

});

const Index = TabNavigator({
  All: {
    screen: AllScreen,
  },
  Praise: {
    screen: PraiseScreen,
  },
  Share: {
    screen: ShareScreen,
  },
  Ask: {
    screen: AskScreen,
  },
  Hire: {
    screen: HireScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showIcon: true,
  },
});

export default Index