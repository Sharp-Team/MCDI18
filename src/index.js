import { createStackNavigator } from 'react-navigation'
import { Home, Test, PopupDetail } from './screens'

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Go Green',
      header: null,
    },
  },
  Test: {
    screen: Test,
  },
  PopupDetail: {
    screen: PopupDetail,
  },
})
