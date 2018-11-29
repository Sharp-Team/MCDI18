import React from 'react'
import { useScreens } from 'react-native-screens'
import { Permissions } from 'expo'
import App from './src'

useScreens()

export default class Main extends React.Component {
  componentWillMount() {
    Permissions.askAsync(Permissions.LOCATION)
  }

  render() {
    return <App />
  }
}
