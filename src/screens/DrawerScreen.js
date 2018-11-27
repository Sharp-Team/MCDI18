import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'expo'

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    paddingBottom: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
  },

  userName: {
    fontSize: 21,
    color: '#2dd754',
    fontWeight: '500',
  },

  iconSetting: {
    color: '#ccc',
    fontSize: 26,
  },

  textDrawer: {
    color: '#c3c3c3',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.6,
    paddingVertical: 5,
  },
})

const DrawerScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.userName}>Nguyễn Doãn Tú</Text>
      <TouchableOpacity style={{ marginLeft: 'auto' }}>
        <Icon.Ionicons name="ios-settings" style={styles.iconSetting} />
      </TouchableOpacity>
    </View>
    <View style={{ paddingTop: 20 }}>
      <TouchableOpacity>
        <Text style={styles.textDrawer}>Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textDrawer}>Logout</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default DrawerScreen
