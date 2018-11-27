import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'
import Swiper from 'react-native-swiper'
import { RectButton } from 'react-native-gesture-handler'
import { BACKGROUND_LIGHT } from '../../constants/color'
import { SwiperOne, SwiperTwo, SwiperThree } from '../components/Swiper'

const styles = StyleSheet.create({
  swWraper: {
    flex: 1,
    backgroundColor: BACKGROUND_LIGHT,
  },
  swiper: {
    flex: 8,
  },
  swButton: {
    paddingHorizontal: 70,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  contentText: {
    fontSize: 18,
    color: '#000',
  },
  buttonWraper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BACKGROUND_LIGHT,
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      position: 0,
    }
  }

  swiperChange() {
    const { navigation } = this.props
    const { position } = this.state
    if (position === 2) {
      navigation.navigate('SignIn')
    } else {
      this.swiper.scrollBy(1)
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={styles.swWraper}>
        <View style={styles.swiper}>
          <Swiper
            loop={false}
            activeDotColor="#469c29"
            onIndexChanged={index => this.setState({ position: index })}
            ref={swiper => {
              this.swiper = swiper
            }}
          >
            <SwiperOne />
            <SwiperTwo navigation={navigation} />
            <SwiperThree navigation={navigation} />
          </Swiper>
        </View>
        <View style={styles.buttonWraper}>
          <RectButton style={styles.swButton} onPress={() => this.swiperChange()}>
            <Text style={styles.buttonText}>Tiếp tục</Text>
          </RectButton>
        </View>
      </SafeAreaView>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}
