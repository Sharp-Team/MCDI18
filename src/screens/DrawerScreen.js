import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Switch, AsyncStorage } from 'react-native'
import { Icon } from 'expo'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },

  header: {
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

  cardStatus: {
    marginTop: 15,
    flexDirection: 'row',
  },
})

export default class DrawerScreen extends React.Component {
  state = {
    isLogged: true, // fake logged in
    userState: true,
    data: null,
  }

  componentWillMount = async () => {
    await AsyncStorage.getItem('oj').then(res => {
      console.log({ res })
      this.setState({ data: JSON.parse(res) })
    })
  }

  handleToggleSwitch = boo => {
    this.setState({ userState: !boo })
  }

  render() {
    const { navigation } = this.props
    const { isLogged, userState, data } = this.state
    return (
      <View style={styles.container}>
        {isLogged ? (
          <View>
            <View style={styles.header}>
              <View style={{ flexDirection: 'row' }}>
                {data && <Text style={styles.userName}>{data.name}</Text>}
                <TouchableOpacity
                  style={{ marginLeft: 'auto' }}
                  onPress={() => navigation.navigate('Profile', data)}
                >
                  <Icon.Ionicons name="ios-settings" style={styles.iconSetting} />
                </TouchableOpacity>
              </View>
              <View style={styles.cardStatus}>
                <Text style={{ color: '#ccc', fontSize: 20, fontWeight: '500' }}>
                  {userState ? 'Sẵn sàng làm việc' : 'Đang nghỉ ngơi'}
                </Text>
                <View style={{ marginLeft: 'auto' }}>
                  <Switch
                    onValueChange={() => {
                      this.handleToggleSwitch(userState)
                    }}
                    value={userState}
                  />
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
                <Text style={styles.textDrawer}>Feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.textDrawer}>Đăng xuất</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity>
              <Text style={styles.textDrawer}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}
