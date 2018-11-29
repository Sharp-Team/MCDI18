import React from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { Dropdown } from 'react-native-material-dropdown'
import RadioGroup from 'react-native-radio-buttons-group'
import InputCustom from '../components/common/InputCustom'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: '#fff',
    flex: 1,
  },

  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 0.5,
  },

  warming: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 3,
    marginBottom: 10,
  },

  update: {
    paddingVertical: 12,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
})

export default class Feedback extends React.Component {
  state = {
    citySelected: '',
    districtSelected: '',
    jobSelected: '',
    role: 'Khách hàng',
    userState: [
      {
        label: 'Khách hàng',
        value: 'Khách hàng',
        color: '#2dd754',
        selected: true,
      },
      {
        label: 'Người làm việc',
        value: 'Người làm việc',
        color: '#2dd754',
        selected: false,
      },
    ],
    listJob: [
      { value: 'Thợ sửa điện lạnh' },
      { value: 'Thợ sửa điện tử' },
      { value: 'Thợ sửa điện thoại' },
      { value: 'Thợ sửa xe máy' },
      { value: 'Thợ sửa ô tô' },
      { value: 'Thu mua phế liệu' },
      { value: 'Bác sĩ' },
      { value: 'Thợ sửa máy tính/laptop' },
      { value: 'Thợ sửa đồ gia dụng' },
    ],
    username: '',
    phone: '',
    // userRole: '',
    address: '',
    errorUsername: false,
    errorPhone: false,
    errorAddress: false,
    errorDistricts: false,
    errorCity: false,
    errorJob: false,
  }

  getCity = data => {
    const cityArrayString = [...new Set(data.features.map(i => i.properties.Ten_Tinh))]
    return cityArrayString.map(i => Object.assign({ value: i }))
  }

  getDistricts = (data, citySelected) => {
    const districtsArrayString = [
      ...new Set(data.features.filter(i => i.properties.Ten_Tinh === citySelected)),
    ].map(j => j.properties.Ten_Huyen)
    return districtsArrayString.map(i => Object.assign({ value: i }))
  }

  handleSelectCity = selected => {
    this.setState({ citySelected: selected, districtSelected: '', errorCity: false })
  }

  handleSelectDistrict = selected => {
    this.setState({ districtSelected: selected, errorDistricts: false })
  }

  handleSelectJob = selected => {
    this.setState({ jobSelected: selected, errorJob: false })
  }

  clickRadio = userState => {
    this.setState({ userState })
    const r = userState.filter(i => i.selected === true)
    this.setState({ role: r[0].value })
  }

  onChangeUser = username => {
    this.setState({ username })
    if (!username) {
      this.setState({ errorUsername: true })
    } else {
      this.setState({ errorUsername: false })
    }
  }

  onChangePhone = phone => {
    this.setState({ phone })
    if (!phone) {
      this.setState({ errorPhone: true })
    } else {
      this.setState({ errorPhone: false })
    }
  }

  onChangeAddress = address => {
    this.setState({ address })
    if (!address) {
      this.setState({ errorAddress: true })
    } else {
      this.setState({ errorAddress: false })
    }
  }

  updateAC = () => {
    const {
      username,
      phone,
      citySelected,
      districtSelected,
      address,
      role,
      jobSelected,
    } = this.state
    const { navigation } = this.props
    if (username && phone && citySelected && districtSelected && address && jobSelected) {
      axios
        .post('https://wcdi18.herokuapp.com/api/user/update', {
          username: navigation.state.params.id,
          full_name: username,
          phone_number: phone,
          province: citySelected,
          district: districtSelected,
          address_detail: address,
          object: role,
          career: jobSelected,
        })
        .then(response => {
          if (!response.data.error) {
            navigation.navigate('MapScreen', { type: navigation.state.params.type, name: username })
          } else {
            alert(response.data.error)
          }
        })
        .catch(error => {
          console.log('dd', error)
        })
    } else {
      this.setState({
        errorDistricts: !districtSelected,
        errorUsername: !username,
        errorPhone: !phone,
        errorAddress: !address,
        errorCity: !citySelected,
      })
    }
  }

  render() {
    const {
      citySelected,
      districtSelected,
      jobSelected,
      userState,
      errorUsername,
      errorPhone,
      errorAddress,
      errorDistricts,
      errorCity,
      errorJob,
      listJob,
      role,
    } = this.state
    const vietnam = require('../../constants/city.json')
    const city = this.getCity(vietnam)
    const districts = this.getDistricts(vietnam, citySelected)
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Cập nhật thông tin</Text>
          <Text style={styles.warming}>(Bạn phải cung cấp đầy đủ thông tin để thực hiện tiếp)</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <InputCustom
            placeholder="Họ và tên đầy đủ"
            error={errorUsername}
            onChangeText={this.onChangeUser}
          />
          <InputCustom
            placeholder="Số điện thoại"
            error={errorPhone}
            onChangeText={this.onChangePhone}
          />
          <Dropdown
            label="Chọn tỉnh hoặc thành phố"
            data={city}
            error={errorCity ? 'Bạn cần phải chọn 1 thành phố' : ''}
            value={citySelected}
            onChangeText={value => {
              this.handleSelectCity(value)
            }}
          />
          <Dropdown
            label="Chọn quận hoặc huyện"
            data={districts}
            error={errorDistricts ? 'Bạn cần phải chọn 1 quận huyện' : ''}
            value={districtSelected}
            onChangeText={value => {
              this.handleSelectDistrict(value)
            }}
          />
          <View style={{ height: 12 }} />
          <InputCustom
            placeholder="Địa chỉ cụ thể: Số nhà, Ngõ, Phố..."
            error={errorAddress}
            onChangeText={this.onChangeAddress}
          />
          <View style={{ flexDirection: 'row', alignContent: 'flex-start', marginTop: 5 }}>
            <Text style={{ color: '#ccc', fontSize: 16, marginTop: 2 }}>Chọn đối tượng</Text>
            <View style={{ marginLeft: 'auto' }}>
              <RadioGroup radioButtons={userState} onPress={this.clickRadio} />
            </View>
          </View>
          {role === 'Người làm việc' && (
            <Dropdown
              label="Chọn nghề nghiệp"
              data={listJob}
              error={errorJob ? 'Bạn cần phải chọn 1 nghề nghiệp' : ''}
              value={jobSelected}
              onChangeText={value => {
                this.handleSelectJob(value)
              }}
            />
          )}
          <TouchableOpacity
            style={{ borderRadius: 4, backgroundColor: '#2dd754', marginTop: 20 }}
            onPress={() => {
              this.updateAC()
            }}
          >
            <Text style={styles.update}>Cập nhật</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}
