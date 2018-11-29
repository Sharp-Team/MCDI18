import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { ProfileValueItem, TabbarProfile } from '../components/Profile'
import { TEXT_GRAY_DARKER } from '../../constants/color'

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    alignSelf: 'center',
  },
  imageAvatar: {
    alignSelf: 'center',
    width: 58,
    height: 58,
    borderRadius: 29,
    marginTop: 35,
  },
  nameUser: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: '500',
    color: TEXT_GRAY_DARKER,
  },
  profileValueContainer: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class Profile extends React.Component {
  state = {}

  render() {
    const { navigation } = this.props
    const data = navigation.state.params
    return (
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.imageAvatar}
            source={{
              uri: data.avatar,
            }}
          />
          <Text style={styles.nameUser}>{data.name}</Text>
        </View>
        <View style={styles.profileValueContainer}>
          <ProfileValueItem value="100đ" title="Điểm tích lũy" />
          <ProfileValueItem value="3.000.000đ" title="Tổng tiền sử dụng" />
          <ProfileValueItem value="500.000đ" title="Tiền kiếm được" />
        </View>
        <TabbarProfile />
      </View>
    )
  }
}
