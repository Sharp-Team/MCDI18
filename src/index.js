/* eslint-disable react/prop-types */
import React from 'react'
import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import { Icon } from 'expo'
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

const MyTabNavigator = createBottomTabNavigator(
  {
    MapScreen: {
      screen: MapScreen,
      navigationOptions: {
        title: 'Bản đồ',
        tabBarIcon: ({ tintColor }) => (
          <Icon.Ionicons name="md-locate" size={25} color={tintColor} />
        ),
      },
    },
    CardScan: {
      screen: CardScan,
      navigationOptions: {
        title: 'Quét',
        tabBarIcon: ({ tintColor }) => (
          <Icon.Ionicons name="md-qr-scanner" size={25} color={tintColor} />
        ),
      },
    },
    RocketNoti: {
      screen: RocketNoti,
      navigationOptions: {
        title: 'Phát',
        tabBarIcon: ({ tintColor }) => (
          <Icon.Ionicons name="ios-send" size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#37d613',
      inactiveTintColor: 'gray',
    },
  },
)

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
  },
  {
    contentComponent: DrawerScreen,
    drawerWidth: 300,
  },
)
