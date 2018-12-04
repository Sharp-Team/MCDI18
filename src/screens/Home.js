import React, { PureComponent } from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'
import Swiper from 'react-native-swiper'
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
  contentText: {
    fontSize: 18,
    color: '#000',
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
            activeDotColor="#fff"
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
      </SafeAreaView>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}
