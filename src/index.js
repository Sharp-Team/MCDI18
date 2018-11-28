import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import {
  Home,
  ChangePwd,
  SignIn,
  SignUp,
  MapScreen,
  NotificationScreen,
  Profile,
  CardScan,
  DrawerScreen,
  Feedback,
} from './screens'

const MyTabNavigator = createBottomTabNavigator({
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      title: 'Bản đồ',
      header: null,
    },
  },
  CardScan: {
    screen: CardScan,
    navigationOptions: {
      title: 'Quét',
      header: null,
    },
  },
})

const MyStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  MyTabNavigator: {
    screen: MyTabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  ChangePwd,
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
    },
  },
  SignUp,
  NotificationScreen,
  Profile,
  Feedback,
})

export default createDrawerNavigator(
  {
    MyStackNavigator,
    DrawerScreen,
  },
  {
    contentComponent: DrawerScreen,
    drawerWidth: 300,
  },
)
