// 2017年4月18日 抽屉列表首页入口

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-vector-icons/Ionicons'

import List from './list'

import ContentScene from './contentScene'


class AllScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '全部',
  };

  _handleRowClick(data) {
    console.log(data);
    
    this.props.navigation.navigate('Content', {data: data})
  }

  render() {
    return (
      <List
        handleRowClick={this._handleRowClick.bind(this)}
      />
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
// class HireScreen extends Component {
//   static navigationOptions = {
//     tabBarLabel: '招聘',
//   };

//   render() {
//     return (
//       <Text>2222</Text>
//     );
//   }
// }

const styles = StyleSheet.create({

});

// Scene不是Screen
const AllScene = StackNavigator({
  TabShow: {
    screen: AllScreen,
  },
  Content: {
    screen: ContentScene,
  }
})


const Index = TabNavigator({
  All: {
    screen: AllScene,
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
  // Hire: {
  //   screen: HireScreen,
  // },
}, {
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#ddd',
    showIcon: true,
    labelStyle: {
      fontSize: 17,
    },
    style: {
      // height: 70,
      // backgroundColor: '#fff',
    }
  },
});

export default Index
