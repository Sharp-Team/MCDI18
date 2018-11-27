import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },

  buttonGroup: {
    flexDirection: 'row',
    marginTop: 40,
  },

  tou: {
    flex: 1,
  },

  button: {
    borderRadius: 4,
    borderWidth: 1,
  },

  buttonText: {
    textAlign: 'center',
    paddingVertical: 6,
    fontSize: 14,
    fontWeight: '500',
  },

  grayButton: {
    color: '#979797',
  },

  greenButton: {
    color: '#fff',
    backgroundColor: '#2DD754',
  },
})

const ModalConfirm = ({ title, isVisible, onBackdropPress }) => (
  <Modal
    isVisible={isVisible}
    onBackdropPress={onBackdropPress}
    animationIn="slideInDown"
    animationOut="slideOutDown"
  >
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.tou}>
          <View style={[styles.button, { borderColor: '#979797' }]}>
            <Text style={[styles.buttonText, styles.grayButton]}>Quay lại</Text>
          </View>
        </TouchableOpacity>
        <View style={{ width: 20 }} />
        <TouchableOpacity style={styles.tou}>
          <View style={[styles.button, { borderColor: '#2DD754' }]}>
            <Text style={[styles.buttonText, styles.greenButton]}>Đồng ý</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
)

ModalConfirm.defaultProps = {
  isVisible: false,
  title: 'Bạn có chắc không?',
}

ModalConfirm.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  onBackdropPress: PropTypes.func.isRequired,
}

export default ModalConfirm
