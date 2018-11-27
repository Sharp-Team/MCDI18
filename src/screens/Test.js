import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import Profile from './Profile'
// import Map from './Map'
import ModalConfirm from '../components/Modal/ModalConfirm'
import ModalDetail from '../components/Modal/ModalDetail'

const styles = {
  profileWraper: {
    flex: 1,
  },
}

export default class Test extends Component {
  state = {
    isVisible: false,
    isVisible1: false,
    popupDetail: {
      requiredWorking: 'Sửa xe máy',
      distance: '6,9km',
      requirerName: 'Đoàn Ngọc Thạch',
      requiredTime: '15:30',
      requiredDate: '28/11/2018',
      requiredMessage: 'Xe máy tôi bị thủng xăm ở đường đại lộ Thăng Long cần sửa gấp.',
    },
  }

  setIsVisible = boo => {
    this.setState({ isVisible: boo })
  }

  setIsVisible1 = boo => {
    this.setState({ isVisible1: boo })
  }

  render() {
    const { isVisible, isVisible1, popupDetail } = this.state
    return (
      <View style={styles.profileWraper}>
        <View>
          <TouchableOpacity
            style={{ position: 'absolute', top: 10, right: 20 }}
            onPress={() =>
              this.setState({
                isVisible: true,
              })
            }
          >
            <Text>Show modal confirm {isVisible}</Text>
          </TouchableOpacity>
          <ModalConfirm
            title="Bạn có muốn hủy không?"
            isVisible={isVisible}
            onBackdropPress={() => this.setIsVisible(false)}
          />
        </View>
        <View style={{ width: 50, height: 100 }} />
        <View>
          <TouchableOpacity
            style={{ position: 'absolute', top: 10, right: 20 }}
            onPress={() =>
              this.setState({
                isVisible1: true,
              })
            }
          >
            <Text>Show popup detail {isVisible1}</Text>
          </TouchableOpacity>
          <ModalDetail
            isVisible={isVisible1}
            data={popupDetail}
            closeModal={() => this.setIsVisible1(false)}
          />
        </View>
        {/* <Map /> */}
      </View>
    )
  }
}
