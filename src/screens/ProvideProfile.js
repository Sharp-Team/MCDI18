import React from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native'
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
    userState: [
      {
        label: 'Khách hàng',
        value: 'Khách hàng',
        color: '#2dd754',
      },
      {
        label: 'Người làm việc',
        value: 'Người làm việc',
        color: '#2dd754',
      },
    ],
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
    this.setState({ citySelected: selected, districtSelected: '' })
  }

  handleSelectDistrict = selected => {
    this.setState({ districtSelected: selected })
  }

  clickRadio = userState => {
    this.setState({ userState })
  }

  render() {
    const { citySelected, districtSelected, userState } = this.state
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
          <InputCustom placeholder="Họ và tên đầy đủ" />
          <InputCustom placeholder="Số điện thoại" />
          <Dropdown
            label="Chọn tỉnh hoặc thành phố"
            data={city}
            value={citySelected}
            onChangeText={value => {
              this.handleSelectCity(value)
            }}
          />
          <Dropdown
            label="Chọn quận hoặc huyện"
            data={districts}
            value={districtSelected}
            onChangeText={value => {
              this.handleSelectDistrict(value)
            }}
          />
          <View style={{ height: 12 }} />
          <InputCustom placeholder="Địa chỉ cụ thể: Số nhà, Ngõ, Phố..." />
          <View style={{ flexDirection: 'row', alignContent: 'flex-start', marginTop: 5 }}>
            <Text style={{ color: '#ccc', fontSize: 16, marginTop: 2 }}>Chọn đối tượng</Text>
            <View style={{ marginLeft: 'auto' }}>
              <RadioGroup radioButtons={userState} onPress={this.clickRadio} />
            </View>
          </View>
          <TouchableOpacity style={{ borderRadius: 4, backgroundColor: '#2dd754', marginTop: 20 }}>
            <Text style={styles.update}>Cập nhật</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}
