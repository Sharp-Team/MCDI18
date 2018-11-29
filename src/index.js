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
  ProvideProfile,
  RocketNoti,
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
  RocketNoti: {
    screen: RocketNoti,
    navigationOptions: {
      title: 'Phát',
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
  ProvideProfile,
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
