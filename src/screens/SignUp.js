import React from 'react'
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native'
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

export default () => (
  <ScrollView style={styles.container}>
    <Text style={styles.formTitle}>Tạo tài khoản</Text>
    <InputCustom placeholder="Nhập tên của bạn" inputLabel="Họ và tên" />
    <InputCustom placeholder="vidu@gmail.com" inputLabel="Email" />
    <InputCustom placeholder="Nhập địa chỉ của bạn" inputLabel="Địa chỉ" />
    <InputCustom placeholder="Nhập số điện thoại của bạn" inputLabel="Số điện thoại" />
    <InputCustom secure placeholder="Tạo mật khẩu của bạn" inputLabel="Mật khẩu" />
    <Text style={styles.titleUse}>Hoặc sử dụng</Text>
    <View style={styles.buttonGroup}>
      <ButtonOutline color="#F24033" title="google" iconName="logo-googleplus" />
      <View style={{ width: 20 }} />
      <ButtonOutline color="#43619C" title="facebook" iconName="logo-facebook" />
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
    <TouchableOpacity style={styles.buttonSignUp}>
      <Text style={styles.textSignUp}>Đăng ký</Text>
    </TouchableOpacity>
  </ScrollView>
)
