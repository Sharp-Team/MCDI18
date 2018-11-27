import { createStackNavigator } from 'react-navigation'
import {
  Home,
  Test,
  ChangePwd,
  SignIn,
  SignUp,
  MapScreen,
  NotificationScreen,
  Profile,
  CardScan,
} from './screens'

export default createStackNavigator({
  MapScreen,
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Go Green',
      header: null,
    },
  },
  Test,
  ChangePwd,
  SignIn,
  SignUp,
  NotificationScreen,
  Profile,
  CardScan,
})
