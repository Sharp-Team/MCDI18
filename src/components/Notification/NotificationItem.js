import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'
import { Icon } from 'expo'

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5E5',
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 5,
    borderRadius: 50 / 2,
    resizeMode: 'cover',
  },
  description: {
    justifyContent: 'center',
    flex: 7,
  },
  title: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  detail: {
    fontSize: 16,
    color: '#281F1F',
  },
  time: {
    fontSize: 12,
    color: '#bbb',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 3,
  },
  textButton: {
    fontSize: 14,
  },
  iconContainer: {
    flex: 1,
  },
})

export default class NotificationItem extends React.Component {
  statusNoti() {
    const { item } = this.props
    switch (item.status) {
      case 0:
        return (
          <View style={styles.buttonGroup}>
            <RectButton style={[styles.button, { backgroundColor: '#2DD754' }]}>
              <Text style={[styles.textButton, { color: '#fff' }]}>Kết nối</Text>
            </RectButton>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]}>
              <Text style={[styles.textButton, { color: '#979797' }]}>Từ chối</Text>
            </TouchableOpacity>
          </View>
        )
      case 1:
        return (
          <View style={[styles.buttonGroup, { justifyContent: 'flex-start' }]}>
            <RectButton style={[styles.button, { backgroundColor: '#2DD754' }]}>
              <Text style={[styles.textButton, { color: '#fff' }]}>Đánh giá</Text>
            </RectButton>
          </View>
        )
      default:
        return <View />
    }
  }

  render() {
    const { item } = this.props
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://img4.androidappsapk.co/poster/e/0/0/new.everwingguide.top_1.png',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.detail}>{item.detail}</Text>
          <Text style={styles.time}>{item.time}</Text>
          {this.statusNoti()}
        </View>
        <View style={styles.iconContainer}>
          <Icon.Ionicons name="ios-more" size={20} color="#bbb" />
        </View>
      </View>
    )
  }
}

NotificationItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    detail: PropTypes.string,
    time: PropTypes.string,
    status: PropTypes.number,
  }).isRequired,
}
