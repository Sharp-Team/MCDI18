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
    paddingTop: 35,
    paddingBottom: 20,
    position: 'relative',
  },

  header: {
    borderBottomColor: '#979797',
    borderBottomWidth: 0.5,
    paddingBottom: 4,
  },

  iconClose: {
    color: '#2dd754',
    fontSize: 42,
  },

  requiredWorking: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  distance: {
    fontSize: 14,
    lineHeight: 18,
    marginVertical: 8,
    color: '#979797',
  },

  content: {
    paddingVertical: 8,
  },

  requirerName: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '600',
    color: '#2DD754',
  },

  requiredTime: {
    fontSize: 14,
    lineHeight: 18,
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
    width: 65,
    height: 65,
    marginRight: 10,
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

  grayButton: {
    color: '#979797',
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
    distance,
    requirerName,
    requiredTime,
    requiredDate,
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
          <Text style={styles.requiredWorking}> Yêu cầu {requiredWorking} </Text>
          <Text style={styles.distance}> Cách bạn {distance} </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.requirerName}> {requirerName} </Text>
          <View>
            <Text style={styles.requiredTime}> {`${requiredTime} | ${requiredDate}`} </Text>
          </View>
          <Text style={styles.messageTitle}> Nội dung công việc </Text>
          <TextInput
            style={styles.inputArea}
            editable={false}
            value={requiredMessage}
            multiline
            numberOfLines={6}
          />
          <View style={styles.listImages}>
            <Image
              style={styles.squareImage}
              source={{
                uri: 'https://i.imgur.com/wf9tvKR.jpg',
              }}
            />
            <Image
              style={styles.squareImage}
              source={{
                uri: 'https://i.imgur.com/wf9tvKR.jpg',
              }}
            />
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.tou}>
              <View style={[styles.button, { borderColor: '#979797' }]}>
                <Text style={[styles.buttonText, styles.grayButton]}>Từ chối</Text>
              </View>
            </TouchableOpacity>
            <View style={{ width: 20 }} />
            <TouchableOpacity style={styles.tou}>
              <View style={[styles.button, { borderColor: '#2DD754' }]}>
                <Text style={[styles.buttonText, styles.greenButton]}>Kết nối</Text>
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
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  isVisible: PropTypes.bool,
  data: PropTypes.shape({
    requiredWorking: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
    requirerName: PropTypes.string.isRequired,
    requiredTime: PropTypes.string.isRequired,
    requiredDate: PropTypes.string.isRequired,
    requiredMessage: PropTypes.string.isRequired,
    // requiredImages: PropTypes.objectOf({
    //   url: PropTypes.string.isRequired,
    // }).isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default PopupDetail
