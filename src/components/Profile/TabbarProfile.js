import React from 'react'
import { Dimensions } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import InfoBasic from './InfoBasic'
import TransactionHistory from './TransactionHistory'

export default class TabbarProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'THÔNG TIN CƠ BẢN' },
        { key: 'second', title: 'LỊCH SỬ GIAO DỊCH' },
      ],
    }
  }

  render() {
    const { index, routes } = this.state
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          first: InfoBasic,
          second: TransactionHistory,
        })}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#2dd754' }}
            labelStyle={{
              fontSize: 13,
              fontWeight: '500',
              marginHorizontal: 0,
              marginVertical: 5,
              color: '#333',
            }}
            style={{ backgroundColor: '#fff', color: '#2dd754' }}
          />
        )}
        onIndexChange={ind => this.setState({ index: ind })}
        initialLayout={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      />
    )
  }
}
