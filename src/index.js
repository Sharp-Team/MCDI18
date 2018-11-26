import { createStackNavigator } from 'react-navigation'
import { Home, Test, ChangePwd, SignIn, SignUp } from './screens'

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
})
