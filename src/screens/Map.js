import React from 'react'
import { View } from 'react-native'
import { MapView, Marker } from 'expo'

const Map = () => {
  const styles = {
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
  }
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapView.Marker coordinate={{ latitude: 21.027763, longitude: 105.83416 }}>
        <View style={styles.radius}>
          <View style={styles.marker} />
        </View>
      </MapView.Marker>
    </MapView>
  )
}

export default Map
