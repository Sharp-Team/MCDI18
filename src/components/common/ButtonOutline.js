import React from 'react'
import { TouchableHighlight, StyleSheet, Text } from 'react-native'
import { Icon } from 'expo'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  outlineButton: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 1,
  },

  textOb: {
    paddingVertical: 14,
    color: '#F24033',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
})

const ButtonOutline = ({ color, size, title, iconName }) => (
  <TouchableHighlight style={[styles.outlineButton, { borderColor: color }]}>
    <Text style={[styles.textOb, { color }]}>
      {iconName !== '' && <Icon.Ionicons name={iconName} style={{ color, fontSize: size }} />}
      {`  ${title}`}
    </Text>
  </TouchableHighlight>
)

ButtonOutline.defaultProps = {
  color: '#ccc',
  size: 16,
  title: 'BUTTON',
  iconName: '',
}

ButtonOutline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string,
  iconName: PropTypes.string,
}

export default ButtonOutline
