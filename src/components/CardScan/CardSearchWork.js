import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'expo'
import PropTypes from 'prop-types'
import TagWork from './TagWork'

const styles = StyleSheet.create({
  cardScopeScan: {
    marginTop: 15,
    backgroundColor: '#fff',
    padding: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: 7,
    marginVertical: 5,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#979797',
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
  },
  iconSearch: {
    margin: 5,
  },
  titleText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
})

export default class CardSearchWork extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  render() {
    const { tagWork, onHandleTag, onHandleSubmitInput } = this.props
    const { value } = this.state
    return (
      <View style={styles.cardScopeScan}>
        <Text style={styles.titleText}>Chọn công việc</Text>
        <View style={styles.inputContainer}>
          <Icon.Ionicons style={styles.iconSearch} name="ios-search" size={20} color="#bbb" />
          <TextInput
            onChangeText={text => {
              this.setState({ value: text })
            }}
            numberOfLines={1}
            onSubmitEditing={() => onHandleSubmitInput(value)}
            style={styles.input}
            placeholder="Nhập công việc bạn làm được"
          />
        </View>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {tagWork.map((item, id) => (
            <TagWork key={id.toString()} name={item} onHandleTag={onHandleTag} />
          ))}
        </View>
      </View>
    )
  }
}

CardSearchWork.propTypes = {
  tagWork: PropTypes.shape.isRequired,
  onHandleTag: PropTypes.func.isRequired,
  onHandleSubmitInput: PropTypes.func.isRequired,
}
