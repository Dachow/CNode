import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { DrawerNavigator } from 'react-navigation'
import { Icon } from 'react-native-vector-icons/Ionicons'

import Index from './index/index'

class IndexPage extends React.Component {
  static navigationOptions = {
    drawerLabel: '首页',
  };

  render() {
    return (
      <Index />
    );
  }
}

class NewUserPage extends React.Component {
  static navigationOptions = {
    drawerLabel: '新手入门',
  };

  render() {
    return (
      <Text>11</Text>
    );
  }
}
class APIPage extends React.Component {
  static navigationOptions = {
    drawerLabel: 'API',
  };

  render() {
    return (
      <Text>11</Text>
    );
  }
}
class AboutPage extends React.Component {
  static navigationOptions = {
    drawerLabel: '关于',
  };

  render() {
    return (
      <Text>11</Text>
    );
  }
}

const styles = StyleSheet.create({
});

const Entry = DrawerNavigator({
  Index: {
    screen: IndexPage,
  },
  NewUser: {
    screen: NewUserPage,
  },
  API: {
    screen: APIPage,
  },
  About: {
    screen: AboutPage,
  },
});

export default Entry;