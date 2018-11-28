import React from 'react'
import { View, TouchableOpacity, StyleSheet, Platform, Image, Text } from 'react-native'
import { Constants, Location, Permissions, MapView, Icon, PROVIDER_GOOGLE } from 'expo'
import MapViewDirections from 'react-native-maps-directions'
import PropTypes from 'prop-types'
import { ModalDetail } from '../components/Modal'

const GOOGLE_MAPS_APIKEY = 'AIzaSyBQjtj0TxFDfqm8uQbovjJ0pEVtkCgePCw'

const styles = StyleSheet.create({
  mapViewContainer: {
    flex: 1,
    position: 'relative',
  },
  titleContainer: {
    marginHorizontal: 15,
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderRadius: 7,
    zIndex: 10,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 122, 225, 0.1)',
    borderColor: 'rgba(0, 112, 225, 0.3)',
  },
  marker: {
    backgroundColor: '#007aff',
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderColor: 'white',
    overflow: 'hidden',
    borderWidth: 3,
  },
})

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      errorMessage: null,
      isVisible: false,
      features: [
        {
          position: { lat: 21.1186188, lng: 105.5698639 },
          type: 'electric',
          fullname: 'Phan Văn Đức',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE',
        },
        {
          position: { lat: 21.2186188, lng: 105.1408639 },
          type: 'car',
          fullname: 'Phạm Ngọc Hòa',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE',
        },
        {
          position: { lat: 21.3186188, lng: 105.2418639 },
          type: 'doctor',
          fullname: 'Trần Quang Nhật',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE',
        },
        {
          position: { lat: 21.4186188, lng: 105.4428639 },
          type: 'motorcycle',
          fullname: 'Đỗ Quang Hiệp',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE',
        },
        {
          position: { lat: 21.5186188, lng: 105.3438639 },
          type: 'fridge',
          fullname: 'Nguyễn Xuân Cường',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE',
        },
        {
          position: { lat: 21.6186188, lng: 105.9448639 },
          type: 'laptop',
          fullname: 'Nguyễn Phương Hồng Thủy',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE',
        },
        {
          position: { lat: 21.7186188, lng: 105.7458639 },
          type: 'fan',
          fullname: 'Nguyễn Hải Nam',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE',
        },
        {
          position: { lat: 21.8106188, lng: 105.8468639 },
          type: 'phone',
          fullname: 'Phạm Quang Hiệp',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE',
        },
        {
          position: { lat: 21.9196188, lng: 105.6478639 },
          type: 'waste',
          fullname: 'Lê Đức Anh Quân',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE',
        },
        {
          position: { lat: 20.0186188, lng: 105.0488639 },
          type: 'doctor',
          fullname: 'Nguyễn Minh Chiến',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE',
        },
        {
          position: { lat: 20.8176188, lng: 105.5488639 },
          type: 'car',
          fullname: 'Nguyễn Phương Anh',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE',
        },
        {
          position: { lat: 20.7166188, lng: 105.5498639 },
          type: 'phone',
          fullname: 'Phạm Văn A',
          email: 'thaycacac@gmail.com',
          phone: '0123456789',
          address: 'Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội',
          content: 'Hỏng gương xe máy honda ABCDE',
        },
      ],
    }
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage:
          'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      })
    } else {
      this.getLocationAsync()
    }
  }

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({})
      this.setState({ location })
    } else {
      console.log('Location permission not granted')
    }
  }

  setIsVisible = boo => {
    this.setState({ isVisible: boo })
  }

  render() {
    const { navigation } = this.props
    const { errorMessage, location, features, isVisible } = this.state
    let text = 'Waiting..'
    if (errorMessage) {
      text = errorMessage
    }
    return (
      <View style={styles.mapViewContainer}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon.Ionicons style={styles.icon} name="ios-menu" size={35} color="#000" />
          </TouchableOpacity>
          <Text>Hello {navigation.state.params.name}</Text>
          <Image
            style={{ width: 20, height: 20 }}
            source={{ uri: navigation.state.params.picture.data.url }}
          />
          <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
            <Icon.Ionicons style={styles.icon} name="ios-notifications" size={35} color="#bbb" />
          </TouchableOpacity>
        </View>
        {location ? (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.00001,
              longitudeDelta: 0.00001,
            }}
            showsUserLocation
            followsUserLocation
            showsIndoorLevelPicker
            loadingEnabled
          >
            {features.map((item, id) => (
              <MapView.Marker
                key={id.toString()}
                onPress={() => {
                  this.setState({ isVisible: true })
                }}
                coordinate={{
                  latitude: item.position.lat,
                  longitude: item.position.lng,
                }}
              >
                <Image source={require(`../../assets/car.png`)} />
                <ModalDetail
                  isVisible={isVisible}
                  data={item}
                  closeModal={() => this.setIsVisible(false)}
                />
              </MapView.Marker>
            ))}
            <MapViewDirections
              origin={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
              destination={{
                latitude: features[0].position.lat,
                longitude: features[0].position.lng,
              }}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="hotpink"
            />
            <MapView.Circle
              center={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              radius={30000}
              strokeColor="#eee"
              fillColor="rgba(234,140,140,0.5)"
            />
          </MapView>
        ) : (
          <Text>{text}</Text>
        )}
      </View>
    )
  }
}

MapScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}
