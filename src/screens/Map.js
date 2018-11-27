import React from 'react'
import { View, StyleSheet, Platform, Text } from 'react-native'
import { Constants, Location, Permissions, MapView } from 'expo'

const styles = StyleSheet.create({
  radius: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
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
    borderColor: '#eee',
    overflow: 'hidden',
    borderWidth: 3,
  },
})

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      errorMessage: null,
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
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      })
    }
    const location = await Location.getCurrentPositionAsync({})
    this.setState({ location })
  }

  render() {
    const { errorMessage, location } = this.state
    let text = 'Waiting..'
    if (errorMessage) {
      text = errorMessage
    }
    return (
      <View style={{ flex: 1 }}>
        {location && (
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation
          >
            <MapView.Circle
              center={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              radius={10000}
              strokeColor="#eee"
              fillColor="rgba(234,140,140,0.5)"
            />
          </MapView>
        )}
      </View>
    )
  }
}
