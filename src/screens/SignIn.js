import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import InputCustom from '../components/common/InputCustom'
import ButtonOutline from '../components/common/ButtonOutline'

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
    textDecorationLine: 'underline',
  },

  btnEnd: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
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

export default () => (
  <View style={styles.container}>
    <Text style={styles.formTitle}>Đăng nhập</Text>
    <InputCustom placeholder="Nhập tên đăng nhập của bạn" inputLabel="Tên đăng nhập" />
    <InputCustom secure placeholder="Nhập mật khẩu" inputLabel="Mật khẩu" />
    <View style={styles.textPocicy}>
      <Text style={styles.textPi}>Quên </Text>
      <TouchableOpacity style={styles.helpLink}>
        <Text style={styles.highlightLink}>tên đăng nhập</Text>
      </TouchableOpacity>
      <Text style={styles.textPi}> hoặc </Text>
      <TouchableOpacity style={styles.helpLink}>
        <Text style={styles.highlightLink}>mật khẩu</Text>
      </TouchableOpacity>
      <Text style={styles.textPi}>?</Text>
    </View>
    <Text style={styles.titleUse}>Hoặc sử dụng</Text>
    <View style={styles.buttonGroup}>
      <ButtonOutline color="#F24033" title="google" iconName="logo-googleplus" />
      <View style={{ width: 20 }} />
      <ButtonOutline color="#43619C" title="facebool" iconName="logo-facebook" />
    </View>
    <View style={styles.btnEnd}>
      <TouchableOpacity style={styles.buttonSignUp}>
        <Text style={styles.textSignUp}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  </View>
)
