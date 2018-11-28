import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: '#fff',
    flex: 1,
  },

  textHeading: {
    textAlign: 'center',
    color: '#2dd754',
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 15,
  },

  title: {
    color: '#ccc',
    fontSize: 14,
    marginVertical: 10,
  },

  textArea: {
    height: 90,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#cecece',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#cecece',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  buttonSignUp: {
    backgroundColor: '#2DD754',
    borderRadius: 4,
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  textSignUp: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
})

export default class Feedback extends React.Component {
  state = {
    data: [
      {
        label: 'Tệ',
        value: -1,
        color: '#7bd48f',
      },
      {
        label: 'Trung bình',
        value: 0,
        color: '#52d46f',
      },
      {
        label: 'Tốt',
        value: 1,
        color: '#2dd754',
      },
    ],
  }

  clickRadio = data => {
    this.setState({ data })
  }

  render() {
    const { data } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.textHeading}>Feedback</Text>
        <Text style={{ color: '#333', fontSize: 16, fontWeight: '500', marginBottom: 35 }}>
          Vui lòng điền phản hồi bên dưới:
        </Text>
        <Text style={styles.title}>Bạn đánh giá thế nào về trải nghiệm tổng thể của mình?</Text>
        <RadioGroup radioButtons={data} onPress={this.clickRadio} flexDirection="row" />
        <Text style={styles.title}>Nội dung phản hồi:</Text>
        <TextInput multiline numberOfLines={4} placeholder="Text here..." style={styles.textArea} />
        <Text style={styles.title}>Họ và tên</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.textInput} />
        <TouchableOpacity style={styles.buttonSignUp}>
          <Text style={styles.textSignUp}>Gửi phản hồi</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
