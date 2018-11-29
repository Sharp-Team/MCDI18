import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
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

const SignIn = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.formTitle}>Đăng nhập</Text>
    <InputCustom placeholder="Nhập tên đăng nhập của bạn" inputLabel="Tên đăng nhập" />
    <InputCustom secure placeholder="Nhập mật khẩu" inputLabel="Mật khẩu" />
    <View style={styles.textPocicy}>
      <Text style={styles.textPi}>Quên </Text>
      <TouchableOpacity style={styles.helpLink} onPress={() => navigation.navigate('ChangePwd')}>
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
        onPress={() => navigation.navigate('ProvideProfile')}
        color="#F24033"
        title="google"
        iconName="logo-googleplus"
      />
      <View style={{ width: 20 }} />
      <ButtonOutline
        onPress={() => navigation.navigate('ProvideProfile')}
        color="#43619C"
        title="facebook"
        iconName="logo-facebook"
      />
    </View>
    <View style={styles.btnEnd}>
      <TouchableOpacity
        style={styles.buttonSignUp}
        onPress={() => navigation.navigate('MapScreen')}
      >
        <Text style={styles.textSignUp}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  </View>
)

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default SignIn
