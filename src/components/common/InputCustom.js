import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  inputGroup: {
    position: 'relative',
    flexDirection: 'column',
    marginBottom: 15,
    marginTop: 3,
  },

  textInputField: {
    fontSize: 16,
    paddingBottom: 6,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },

  textInputLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#828282',
    paddingTop: 10,
    fontWeight: '500',
  },
})

const InputCustom = ({ secure, placeholder, inputLabel }) => (
  <View style={styles.inputGroup}>
    <TextInput
      style={styles.textInputField}
      secureTextEntry={!!secure}
      placeholderStyle={{ fontSize: 16, color: '#ccc' }}
      placeholder={placeholder}
    />
    {inputLabel !== '' && <Text style={styles.textInputLabel}>{inputLabel}</Text>}
  </View>
)

InputCustom.defaultProps = {
  secure: false,
  placeholder: '',
  inputLabel: '',
}

InputCustom.propTypes = {
  secure: PropTypes.bool,
  placeholder: PropTypes.string,
  inputLabel: PropTypes.string,
}

export default InputCustom
