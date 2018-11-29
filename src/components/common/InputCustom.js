import React from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Icon } from 'expo'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  inputGroup: {
    position: 'relative',
    flexDirection: 'column',
    marginBottom: 15,
    marginTop: 3,
  },

  textInputField: {
    flex: 1,
    fontSize: 16,
    paddingBottom: 6,
    borderBottomWidth: 1,
    paddingRight: 35,
  },

  textInputLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#828282',
    paddingBottom: 10,
    fontWeight: '500',
  },

  inputWithEyes: {
    position: 'relative',
  },
})

export default class InputCustom extends React.Component {
  state = {
    isShowPwd: false,
  }

  setHideShowPwd = boo => {
    this.setState({ isShowPwd: boo })
  }

  render() {
    const { isShowPwd } = this.state
    const { secure, placeholder, inputLabel, onChangeText, error } = this.props
    return (
      <View style={styles.inputGroup}>
        <View style={styles.inputWithEyes}>
          {inputLabel !== '' && <Text style={styles.textInputLabel}>{inputLabel}</Text>}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={[styles.textInputField, { borderBottomColor: error ? '#f33636' : '#ccc' }]}
              onChangeText={text => onChangeText(text)}
              secureTextEntry={secure && !isShowPwd}
              placeholderStyle={{ fontSize: 16, color: '#ccc' }}
              placeholder={placeholder}
            />
            {secure && (
              <TouchableOpacity
                style={{ position: 'absolute', right: 5, top: -4 }}
                onPress={() => {
                  this.setHideShowPwd(!isShowPwd)
                }}
              >
                <Icon.Ionicons
                  name={isShowPwd ? 'ios-eye-off' : 'ios-eye'}
                  style={{ color: '#333', fontSize: 25, paddingVertical: 3 }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    )
  }
}

InputCustom.defaultProps = {
  secure: false,
  placeholder: '',
  inputLabel: '',
  onChangeText: null,
  error: false,
}

InputCustom.propTypes = {
  secure: PropTypes.bool,
  placeholder: PropTypes.string,
  inputLabel: PropTypes.string,
  onChangeText: PropTypes.func,
  error: PropTypes.bool,
}
