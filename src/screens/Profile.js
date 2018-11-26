import React from 'react'
import { Text, View, Image } from 'react-native'
import { ProfileValueItem, TabbarProfile } from '../components/Profile'

const Profile = () => {
  const styles = {
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
      color: '#333',
    },
    profileValueContainer: {
      marginVertical: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
  return (
    <View style={styles.profileContainer}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.imageAvatar}
          source={{
            uri: 'https://img4.androidappsapk.co/poster/e/0/0/new.everwingguide.top_1.png',
          }}
        />
        <Text style={styles.nameUser}>Trần Minh Quang</Text>
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

export default Profile
