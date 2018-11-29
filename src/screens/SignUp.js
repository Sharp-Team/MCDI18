import React from 'react'
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native'
import axios from 'axios'
import PropTypes from 'prop-types'
import { InputCustom, ButtonOutline } from '../components/common'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  formTitle: {
    fontSize: 32,
    color: '#333',
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
    color: '#2DD754',
    fontSize: 12,
  },

  buttonSignUp: {
    height: 56,
    backgroundColor: '#2DD754',
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

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      phone: '',
      password: '',
      errorName: false,
      errorUsername: false,
      errorPhoneNumber: false,
      errorPassword: false,
      errorRePassword: false,
      // rePassword: '',
    }
  }

  onChangeName = name => {
    this.setState({ name })
    if (!name) {
      this.setState({ errorName: true })
    } else {
      this.setState({ errorName: false })
    }
  }

  onChangeUser = username => {
    this.setState({ username })
    if (!username) {
      this.setState({ errorUsername: true })
    } else {
      this.setState({ errorUsername: false })
    }
  }

  onChangePhone = phone => {
    this.setState({ phone })
    if (!phone) {
      this.setState({ errorPhoneNumber: true })
    } else {
      this.setState({ errorPhoneNumber: false })
    }
  }

  onChangePassword = password => {
    this.setState({ password })
    if (!password) {
      this.setState({ errorPassword: true })
    } else {
      this.setState({ errorPassword: false })
    }
  }

  onChangeRePassword = rePassword => {
    this.setState({ rePassword })
    if (!rePassword) {
      this.setState({ errorUsername: true })
    } else {
      this.setState({ errorUsername: false })
    }
  }

  signUpWithFacebookAsync = async () => {
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
          navigation.navigate('MapScreen', { ...userInfo, type: 'facebook' })
        }
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      navigation.navigate('MapScreen', { ...userInfo, type: 'facebook' })
      // alert(`Facebook Login Error: ${message}`)
    }
  }

  signUpWithGoogleAsync = async () => {
    const { navigation } = this.props
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '88908170629-ljjlothv906vrdrbv7gu11urcdbbqpgp.apps.googleusercontent.com',
        iosClientId: '88908170629-qan82lra2eofabrpe2babuqo3fo2cdfe.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      })
      if (result.type === 'success') {
        navigation.navigate('MapScreen', { type: 'google', ...result.user })
      }
      return { cancelled: true }
    } catch (e) {
      return { error: true }
    }
  }

  signUp() {
    const { name, username, phone, password, rePassword } = this.state
    const { navigation } = this.props
    if (name && username && phone && password && rePassword) {
      if (password === rePassword) {
        this.setState({ errorRePassword: false })
        axios
          .post('https://wcdi18.herokuapp.com/api/user/signup', {
            full_name: name,
            username,
            phone_number: phone,
            password,
          })
          .then(response => {
            if (!response.data.error) {
              navigation.navigate('MapScreen', { type: 'normal', name })
            } else {
              alert(response.data.error)
            }
          })
          .catch(error => {
            console.log('dd', error)
          })
      } else {
        this.setState({ errorRePassword: true })
      }
    } else {
      this.setState({
        errorName: !name,
        errorUsername: !username,
        errorPhoneNumber: !phone,
        errorPassword: !password,
        errorRePassword: !rePassword,
      })
    }
  }

  render() {
    const {
      errorName,
      errorUsername,
      errorPhoneNumber,
      errorPassword,
      errorRePassword,
    } = this.state
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.formTitle}>Tạo tài khoản</Text>
        <InputCustom
          placeholder="Nhập tên của bạn"
          inputLabel="Họ và tên"
          error={errorName}
          onChangeText={this.onChangeName}
        />
        <InputCustom
          placeholder="Tên đăng nhập"
          inputLabel="Tên đăng nhập"
          error={errorUsername}
          onChangeText={this.onChangeUser}
        />
        <InputCustom
          placeholder="Nhập số điện thoại của bạn"
          inputLabel="Số điện thoại"
          error={errorPhoneNumber}
          onChangeText={this.onChangePhone}
        />
        <InputCustom
          secure
          placeholder="Tạo mật khẩu của bạn"
          inputLabel="Mật khẩu"
          error={errorPassword}
          onChangeText={this.onChangePassword}
        />
        <InputCustom
          secure
          placeholder="Nhập lại mật khẩu"
          inputLabel="Nhập lại mật khẩu"
          error={errorRePassword}
          onChangeText={this.onChangeRePassword}
        />
        <Text style={styles.titleUse}>Hoặc sử dụng</Text>
        <View style={styles.buttonGroup}>
          <ButtonOutline
            color="#F24033"
            title="google"
            iconName="logo-googleplus"
            login={() => this.signUpWithGoogleAsync()}
          />
          <View style={{ width: 20 }} />
          <ButtonOutline
            color="#43619C"
            title="facebook"
            iconName="logo-facebook"
            login={() => this.signUpWithFacebookAsync()}
          />
        </View>
        <View style={styles.textPocicy}>
          <Text style={styles.textPi}>Khi đăng ký đồng nghĩa răng bạn chấp thuận </Text>
          <TouchableOpacity style={styles.helpLink}>
            <Text style={styles.highlightLink}>Điều khoản dịch vụ</Text>
          </TouchableOpacity>
          <Text style={styles.textPi}> và </Text>
          <TouchableOpacity style={styles.helpLink}>
            <Text style={styles.highlightLink}>chính sách quyền riêng tư</Text>
          </TouchableOpacity>
          <Text style={styles.textPi}>của GoGreen</Text>
        </View>
        <TouchableOpacity style={styles.buttonSignUp} onPress={() => this.signUp()}>
          <Text style={styles.textSignUp}>Đăng ký</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}
