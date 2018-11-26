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
} from './screens'

export default createStackNavigator({
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
  MapScreen,
  NotificationScreen,
  Profile,
})
