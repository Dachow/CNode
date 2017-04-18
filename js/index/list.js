// 2017年4月18日 首页列表展示组件

import React, { Component } from 'react'

import { ListView, RefreshControl, ActivityIndicator, View, StyleSheet } from 'react-native'

import RenderRow from './renderRow'


class Lists extends Component {
  constructor (props) {
    super(props)
    this.data = [];
    this.dataLength = null;
    this.state = {
      initFetch: true,
      isRefreshing: true,
      isShowBottomRefresh: false,
      page: 1,
    }
    this.fetchUri = 'https://cnodejs.org/api/v1/topics/?page='
    this._renderComplete = false;

    // 如果在bind内传递参数，后面的调用都会使用该固定参数
    this._fetchData = this._fetchData.bind(this)
  }

  // append的意思是非首次加载，即上拉列表的时候用到
  _fetchData (url='https://cnodejs.org/api/v1/topics/?page=', append=false) {
    
    // console.log('url ' + url);
    
    // console.log('append ' + append);
    
    // 上拉列表时不需要顶部加载指示器
    if (!append) {
      this.setState({
        isRefreshing: true,
      })
    }

    fetch(url)
    .then(
      res => (
        res.json()
      ))
    .then(
      res => {
        if (res.data.length) {

          if (append || this.state.initFetch) {
            // console.log('in1');
            
            // 只有在初始化数据和append方式下连接新数据
            this.data = this.data.concat(res.data)
            this.dataLength = this.data.length;
            // console.log(this.dataLength);
            
            this.setState({
              initFetch: false,
              isRefreshing: false,
              isShowBottomRefresh: false,
            }) 
          } else {
            // console.log('in2');
            
            // 否则只刷新
            this.data = this.data
            this.dataLength = this.data.length;
            // console.log(this.dataLength);
            
            this.setState({
              isRefreshing: false,
              isShowBottomRefresh: false,
            }) 
          }

        }
      })
    .catch(err => {
      alert(err.message)
    })
    .done()
  }

  componentWillMount () {
    this._fetchData(this.fetchUri, false)
  }

  _renderRow (rowData, sid, rowID) {

    this._renderComplete = false;
    // 保证滑到列表底部，并且只触发一次
    // 注释掉的不可行，每次下拉加载还是会触发
    // 所以配合_onEndReached
    // _renderRow为render内的函数，因此其内部不能setState
    if (rowID == this.dataLength-1) {
      // let nextPage = this.state.page + 1
      // this.setState({
      //   page: nextPage,
      //   isShowBottomRefresh: true,
      // })
      // console.log(this.fetchUri);
      
      // this._fetchData(this.fetchUri, true)
      this._renderComplete = true;
    }
    return (
      <RenderRow
        data={rowData}
        handleClick={this._handleRowClick.bind(this, rowData)}
      />
    )
  }

  _renderFooter () {
    if (this.state && this.state.isShowBottomRefresh) {
      return (
        <View style={{marginVertical: 10}}>
          <ActivityIndicator />
        </View>)
    }

    return <View style={{marginVertical: 10}} />;
  }

  _onEndReached () {
    if (this._renderComplete) {
      let nextPage = this.state.page + 1;
      this.setState({
        page: nextPage,
        isShowBottomRefresh: true,
      })
      // console.log(nextPage);
      
      // 使用新的url请求，并指定为append方式
      this._fetchData(this.fetchUri + nextPage, true);
      // console.log(this.fetchUri + this.state.page);
    }
  }


  _handleRowClick(data) {
    this.props.handleRowClick(data);
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._fetchData}
              colors={['#DE5145', '#FFCE44', '#1FA463', '#4C8BF5']}
            />
          }
          dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.data)}
          renderRow={this._renderRow.bind(this)}
          renderFooter={this._renderFooter.bind(this)}
          onEndReached={this._onEndReached.bind(this)}
          enableEmptySections={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default Lists
