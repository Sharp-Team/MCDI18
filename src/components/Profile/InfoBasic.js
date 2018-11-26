import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native'
import ChangeJob from './ChangeJob'
import ProfileItem from './ProfileItem'
import { TEXT_GRAY, PRIMARY } from '../../../constants/color'

const styles = StyleSheet.create({
  changeJobWrapper: {
    paddingVertical: 20,
    backgroundColor: '#efefef',
  },
  enterPassContainer: {},
  enterPassTitle: {
    fontSize: 10,
    color: '#ccc',
    marginLeft: 15,
    marginVertical: 5,
  },
  formEnterPass: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputEnterPass: {
    height: 30,
    width: 150,
    borderWidth: 1,
    borderColor: '#bbbb',
  },
  requestSendPassText: {
    color: TEXT_GRAY,
    fontSize: 14,
  },
  buttonAccuracy: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  accuracyText: {
    color: '#fff',
    fontSize: 14,
  },
})

export default class InfoBasic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmPass: false,
    }
  }

  render() {
    const { confirmPass } = this.state
    return (
      <ScrollView contentContainerStyle={styles.infoBasicContainer}>
        <View style={styles.changeJobWrapper}>
          <ChangeJob />
        </View>
        <TouchableOpacity>
          <ProfileItem title="Email" value="quangt1297@gmail.com" />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProfileItem title="Địa chỉ" value="Hà Nội" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({ confirmPass: !confirmPass })
          }}
        >
          <ProfileItem
            title="Số điện thoại"
            value="0906767235"
            confirmPhone="Chưa xác thực"
            confirmPass={confirmPass}
          />
        </TouchableOpacity>
        {confirmPass && (
          <View style={styles.enterPassContainer}>
            <Text style={styles.enterPassTitle}>Nhập mã xác thực</Text>
            <View style={styles.formEnterPass}>
              <TextInput style={styles.inputEnterPass} />
              <Text style={styles.requestSendPassText}>Yêu cầu gửi mã</Text>
              <TouchableOpacity style={styles.buttonAccuracy}>
                <Text style={styles.accuracyText}>Xác thực</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <TouchableOpacity>
          <ProfileItem title="Đổi mật khẩu" />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProfileItem title="Trung tâm hỗ trợ" />
        </TouchableOpacity>
        <TouchableOpacity>
          <ProfileItem title="Đăng xuất" />
        </TouchableOpacity>
      </ScrollView>
    )
  }
}
