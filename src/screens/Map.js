import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { MapView, Icon } from 'expo'
import PropTypes from 'prop-types'

const Map = ({ navigation }) => {
  const styles = {
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
      zIndex: 1,
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
  }
  return (
    <View style={styles.mapViewContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer(true, { userName: 'Nguyễn Doãn Tú', userID: 1 })}
        >
          <Icon.Ionicons style={styles.icon} name="ios-menu" size={35} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
          <Icon.Ionicons style={styles.icon} name="ios-notifications" size={35} color="#bbb" />
        </TouchableOpacity>
      </View>
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
    </View>
  )
}

Map.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default Map
