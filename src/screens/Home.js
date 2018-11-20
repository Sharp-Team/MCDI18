import React from 'react'
import PropTypes from 'prop-types'
import Swiper from 'react-native-swiper'
import { SwiperOne, SwiperTwo, SwiperThree } from '../components/Swiper'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
    this.changeIndex = this.changeIndex.bind(this)
  }

  changeIndex(value) {
    this.setState({ index: value })
  }

  render() {
    const { navigation } = this.props
    const { index } = this.state
    return (
      <Swiper loop={false} activeDotColor="#469c29" onIndexChanged={index}>
        <SwiperOne changeIndex={this.changeIndex} />
        <SwiperTwo changeIndex={this.changeIndex} />
        <SwiperThree navigation={navigation} />
      </Swiper>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.func.isRequired,
}
