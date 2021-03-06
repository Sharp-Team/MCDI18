import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, AsyncStorage } from 'react-native'
import PropTypes from 'prop-types'
import axios from 'axios'
import { InputCustom, ButtonOutline } from '../components/common'
import { PRIMARY, TEXT_GRAY_DARKER } from '../../constants/color'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingTop: 70,
  },

  formTitle: {
    fontSize: 32,
    color: TEXT_GRAY_DARKER,
    letterSpacing: 1.2,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },

  buttonGroup: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  titleUse: {
    paddingTop: 8,
    paddingBottom: 18,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 1.5,
  },

  textPocicy: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    justifyContent: 'center',
  },

  textPi: {
    color: '#8B999F',
    fontSize: 12,
  },

  highlightLink: {
    color: PRIMARY,
    fontSize: 12,
    textDecorationLine: 'underline',
  },

  btnEnd: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  buttonSignUp: {
    height: 56,
    backgroundColor: PRIMARY,
    borderRadius: 4,
    marginBottom: 30,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  textSignUp: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
})

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errorUserName: false,
      errrorPassword: false,
    }
  }

  saveLocalStorage = async object1 => {
    const newObj = {
      name: object1.full_name ? object1.full_name : object1.name,
      email: object1.email,
      avatar: object1.photoUrl,
    }
    try {
      await AsyncStorage.setItem('oj', JSON.stringify(newObj))
    } catch (err) {
      console.log(`logs: ${err}`)
    }
  }

  signInWithFacebookAsync = async () => {
    const { navigation } = this.props
    try {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
        '2313158672248133',
        {
          permissions: ['public_profile'],
        },
      )
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`,
        )
        const userInfo = await response.json()
        if (userInfo) {
          this.saveLocalStorage(userInfo)
          navigation.navigate('MapScreen', { ...userInfo, type: 'facebook' })
        }
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      // navigation.navigate('MapScreen', { ...userInfo, type: 'facebook' })
      alert(`Facebook Login Error: ${message}`)
    }
  }

  signInWithGoogleAsync = async () => {
    const { navigation } = this.props
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '88908170629-ljjlothv906vrdrbv7gu11urcdbbqpgp.apps.googleusercontent.com',
        iosClientId: '88908170629-qan82lra2eofabrpe2babuqo3fo2cdfe.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
        behavior: 'web',
      })
      if (result.type === 'success') {
        this.saveLocalStorage(result.user)
        navigation.navigate('MapScreen', { type: 'google', ...result.user })
      }
      return { cancelled: true }
    } catch (e) {
      return { error: true }
    }
  }

  checkIsProvideInfo = username => {
    axios
      .post('https://wcdi18.herokuapp.com/api/user/profile', {
        username,
      })
      .then(response => {
        if (!response.data.error) {
          console.log(result)
        } else {
          alert(response.data.error)
        }
      })
      .catch(error => {
        console.log('dd', error)
      })
  }

  onChangeUser = username => {
    this.setState({ username })
    if (!username) {
      this.setState({ errorUserName: true })
    } else {
      this.setState({ errorUserName: false })
    }
  }

  onChangePassword = password => {
    this.setState({ password })
    if (!password) {
      this.setState({ errrorPassword: true })
    } else {
      this.setState({ errrorPassword: false })
    }
  }

  loginNormal() {
    const { username, password } = this.state
    const { navigation } = this.props
    if (username && password) {
      axios
        .post('https://wcdi18.herokuapp.com/api/user/signinmobile', {
          username,
          password,
        })
        .then(response => {
          if (!response.data.error) {
            this.saveLocalStorage(response.data)
            navigation.navigate('MapScreen', { type: 'normal', name: username })
          } else {
            alert(response.data.error)
          }
        })
        .catch(error => {
          console.log('dd', error)
        })
    } else {
      this.setState({
        errorUserName: !username,
        errrorPassword: !password,
      })
    }
  }

  render() {
    const { navigation } = this.props
    const { errorUserName, errrorPassword } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.formTitle}>Đăng nhập</Text>
        <InputCustom
          placeholder="Nhập tên đăng nhập của bạn"
          inputLabel="Tên đăng nhập"
          error={errorUserName}
          onChangeText={this.onChangeUser}
        />
        <InputCustom
          secure
          placeholder="Nhập mật khẩu"
          inputLabel="Mật khẩu"
          error={errrorPassword}
          onChangeText={this.onChangePassword}
        />
        <View style={styles.textPocicy}>
          <Text style={styles.textPi}>Quên </Text>
          <TouchableOpacity
            style={styles.helpLink}
            onPress={() => navigation.navigate('ChangePwd')}
          >
            <Text style={styles.highlightLink}>mật khẩu</Text>
          </TouchableOpacity>
          <Text style={styles.textPi}> hoặc </Text>
          <TouchableOpacity style={styles.helpLink} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.highlightLink}>đăng ký tài khoản mới</Text>
          </TouchableOpacity>
          <Text style={styles.textPi}>?</Text>
        </View>
        <Text style={styles.titleUse}>Hoặc sử dụng</Text>
        <View style={styles.buttonGroup}>
          <ButtonOutline
            color="#F24033"
            title="google"
            iconName="logo-googleplus"
            login={() => this.signInWithGoogleAsync()}
          />
          <View style={{ width: 20 }} />
          <ButtonOutline
            color="#43619C"
            title="facebook"
            iconName="logo-facebook"
            login={() => this.signInWithFacebookAsync()}
          />
        </View>
        <View style={styles.btnEnd}>
          <TouchableOpacity style={styles.buttonSignUp} onPress={() => this.loginNormal()}>
            <Text style={styles.textSignUp}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}
