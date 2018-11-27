import React from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import PropTypes from 'prop-types'
import { Icon } from 'expo'

const styles = StyleSheet.create({
  // style for modal
  modalContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 20,
    position: 'relative',
  },

  header: {
    borderBottomColor: '#979797',
    borderBottomWidth: 0.5,
    paddingBottom: 20,
    flexDirection: 'row',
    overflow: 'visible',
  },

  iconClose: {
    color: '#2dd754',
    fontSize: 42,
  },

  info: {
    flexDirection: 'column',
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2dd754',
  },

  requiredWorking: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: 'bold',
  },

  distance: {
    fontSize: 14,
    lineHeight: 18,
    marginVertical: 8,
    color: '#979797',
  },

  content: {
    paddingVertical: 20,
  },

  requirerName: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '600',
    color: '#2DD754',
  },

  requiredTime: {
    fontSize: 14,
    marginVertical: 4,
    color: '#979797',
  },

  messageTitle: {
    fontSize: 18,
    marginBottom: 8,
    marginTop: 20,
    textTransform: 'uppercase',
    color: '#37474f',
    fontWeight: '600',
  },

  inputArea: {
    marginBottom: 20,
    backgroundColor: '#fbfbfb',
    height: 130,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: 'rgba(0, 0, 0, 0.54)',
    letterSpacing: 0.8,
    fontSize: 16,
  },

  listImages: {
    flexDirection: 'row',
  },

  squareImage: {
    width: 64,
    height: 64,
    marginRight: 10,
    borderRadius: 32,
    borderColor: '#ccc',
    borderWidth: 0.5,
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
    paddingVertical: 12,
    fontSize: 14,
    fontWeight: '500',
  },

  greenButton: {
    color: '#fff',
    backgroundColor: '#2DD754',
  },
  // style for modal
})

const PopupDetail = ({ isVisible, data, closeModal }) => {
  const {
    requiredWorking,
    requirerName,
    requirerAddress,
    requiredTime,
    requiredTime2,
    requiredMessage,
  } = data

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      animationIn="slideInDown"
      animationOut="slideOutDown"
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity style={{ position: 'absolute', top: 10, right: 20 }} onPress={closeModal}>
          <Icon.Ionicons name="ios-close" style={styles.iconClose} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Image
            style={styles.squareImage}
            source={{
              uri:
                'https://instagram.fhan2-2.fna.fbcdn.net/vp/1cd6d30aa5679feb12009329d4dddc38/5C929B13/t51.2885-15/sh0.08/e35/s640x640/31184314_999264203575110_7030377498047152128_n.jpg',
            }}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{requirerName}</Text>
            <Text style={styles.requiredTime}>{requirerAddress}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.requiredWorking}> {requiredWorking} </Text>
          <Text style={styles.requiredTime}>{`Từ ${requiredTime} đến ${requiredTime2}`}</Text>
          <Text style={styles.messageTitle}> Nội dung công việc </Text>
          <TextInput
            style={styles.inputArea}
            editable={false}
            value={requiredMessage}
            multiline
            numberOfLines={6}
          />
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.tou}>
              <View style={[styles.button, { borderColor: '#2DD754' }]}>
                <Text style={[styles.buttonText, styles.greenButton]}>Gửi đề nghị nhận việc</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

PopupDetail.defaultProps = {
  isVisible: false,
}

PopupDetail.propTypes = {
  isVisible: PropTypes.bool,
  data: PropTypes.shape({
    requiredWorking: PropTypes.string.isRequired,
    requirerName: PropTypes.string.isRequired,
    requirerAddress: PropTypes.string.isRequired,
    requiredTime: PropTypes.string.isRequired,
    requiredTime2: PropTypes.string.isRequired,
    requiredMessage: PropTypes.string.isRequired,
    // requiredImages: PropTypes.objectOf({
    //   url: PropTypes.string.isRequired,
    // }).isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default PopupDetail
