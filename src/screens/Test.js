import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import Profile from './Profile'
// import Map from './Map'
import ModalConfirm from '../components/Modal/ModalConfirm'
import ModalDetail from '../components/Modal/ModalDetail'
import ModalInfo from '../components/Modal/ModalInfo'

const styles = {
  profileWraper: {
    flex: 1,
  },
}

export default class Test extends Component {
  state = {
    isVisible: false,
    isVisible1: false,
    isVisible2: false,
    popupDetail: {
      requiredWorking: 'Sửa xe máy',
      distance: '6,9km',
      requirerName: 'Đoàn Ngọc Thạch',
      requiredTime: '15:30',
      requiredDate: '28/11/2018',
      requiredMessage: 'Xe máy tôi bị thủng xăm ở đường đại lộ Thăng Long cần sửa gấp.',
    },
    info: {
      requiredWorking: 'Sửa xe máy',
      requirerName: 'Nguyễn Doãn Tú',
      requirerAddress: 'Km29, Đại Lộ Thăng Long, Thạch Thất, Hà Nội',
      requiredTime: '08:30',
      requiredTime2: '18:00',
      requiredMessage: 'Hỏng gương xe máy Honda, xe thủng xăm, thủng lốp. hết xăng.',
    },
  }

  setIsVisible = boo => {
    this.setState({ isVisible: boo })
  }

  setIsVisible1 = boo => {
    this.setState({ isVisible1: boo })
  }

  setIsVisible2 = boo => {
    this.setState({ isVisible2: boo })
  }

  render() {
    const { isVisible, isVisible1, isVisible2, popupDetail, info } = this.state
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
            <Text>Show modal confirm</Text>
          </TouchableOpacity>
          <ModalConfirm
            title="Bạn có muốn hủy không?"
            isVisible={isVisible}
            onBackdropPress={() => this.setIsVisible(false)}
          />
        </View>
        <View style={{ width: 50, height: 50 }} />
        <View>
          <TouchableOpacity
            style={{ position: 'absolute', top: 10, right: 20 }}
            onPress={() =>
              this.setState({
                isVisible1: true,
              })
            }
          >
            <Text>Show popup detail</Text>
          </TouchableOpacity>
          <ModalDetail
            isVisible={isVisible1}
            data={popupDetail}
            closeModal={() => this.setIsVisible1(false)}
          />
        </View>

        <View style={{ width: 50, height: 50 }} />
        <View>
          <TouchableOpacity
            style={{ position: 'absolute', top: 10, right: 20 }}
            onPress={() =>
              this.setState({
                isVisible2: true,
              })
            }
          >
            <Text>Show popup detail</Text>
          </TouchableOpacity>
          <ModalInfo
            isVisible={isVisible2}
            data={info}
            closeModal={() => this.setIsVisible2(false)}
          />
        </View>
        {/* <Map /> */}
      </View>
    )
  }
}
