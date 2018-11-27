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
    fontSize: 16,
    paddingBottom: 6,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingRight: 35,
  },

  textInputLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#828282',
    paddingTop: 10,
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
    const { secure, placeholder, inputLabel } = this.props
    return (
      <View style={styles.inputGroup}>
        <View style={styles.inputWithEyes}>
          <TextInput
            style={styles.textInputField}
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
        {inputLabel !== '' && <Text style={styles.textInputLabel}>{inputLabel}</Text>}
      </View>
    )
  }
}

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

// import React from 'react'
// import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'
// import PropTypes from 'prop-types'
// import { Icon } from 'expo'

// const styles = StyleSheet.create({
//   inputGroup: {
//     position: 'relative',
//     flexDirection: 'column',
//     marginBottom: 15,
//     marginTop: 3,
//   },

//   textInputField: {
//     fontSize: 16,
//     paddingBottom: 6,
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//   },

//   textInputLabel: {
//     fontSize: 12,
//     textTransform: 'uppercase',
//     color: '#828282',
//     paddingTop: 10,
//     fontWeight: '500',
//   },

//   inputWithEyes: {
//     position: 'relative',
//   },
// })

// const InputCustom = ({ secure, placeholder, inputLabel }) => (
//   <View style={styles.inputGroup}>
//     <View style={styles.inputWithEyes}>
//       <TextInput
//         style={styles.textInputField}
//         secureTextEntry={!!secure}
//         placeholderStyle={{ fontSize: 16, color: '#ccc' }}
//         placeholder={placeholder}
//       />
//       {secure && (
//         <TouchableOpacity style={{ position: 'absolute', right: 5 }}>
//           <Icon.Ionicons name="ios-eye" style={{ color: '#333', fontSize: 20 }} />
//         </TouchableOpacity>
//       )}
//     </View>
//     {inputLabel !== '' && <Text style={styles.textInputLabel}>{inputLabel}</Text>}
//   </View>
// )

// InputCustom.defaultProps = {
//   secure: false,
//   placeholder: '',
//   inputLabel: '',
// }

// InputCustom.propTypes = {
//   secure: PropTypes.bool,
//   placeholder: PropTypes.string,
//   inputLabel: PropTypes.string,
// }

// export default InputCustom
