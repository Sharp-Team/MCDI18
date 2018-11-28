import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'expo'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import TagWork from './TagWork'
import { TEXT_GRAY, TEXT_GRAY_DARKER } from '../../../constants/color'

const styles = StyleSheet.create({
  cardScopeScan: {
    marginTop: 15,
    backgroundColor: '#fff',
    padding: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: 3,
    marginVertical: 5,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: TEXT_GRAY,
    borderRadius: 4,
  },
  input: {
    flex: 1,
    color: '#333',
  },
  iconSearch: {
    margin: 5,
  },
  titleText: {
    fontSize: 15,
    color: TEXT_GRAY_DARKER,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    width: 300,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemModal: {
    fontSize: 18,
    marginTop: 10,
  },
})

export default class CardSearchWork extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  onItemModal = item => {
    const { onSelectTag } = this.props
    this.setState({ modalVisible: false })
    onSelectTag(item)
  }

  render() {
    const { tagWork, onHandleTag, initialData } = this.props
    const { modalVisible } = this.state
    return (
      <View style={styles.cardScopeScan}>
        <Text style={styles.titleText}>Chọn công việc</Text>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => {
            this.setState({ modalVisible: true })
          }}
        >
          <Icon.Ionicons style={styles.iconSearch} name="ios-search" size={20} color="#bbb" />
          <Text style={styles.input}>Chọn một công việc</Text>
        </TouchableOpacity>
        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => {
            this.setState({ modalVisible: false })
          }}
          style={styles.modalContainer}
        >
          <View style={styles.modal}>
            {initialData.map((item, id) => (
              <TouchableOpacity key={id.toString()} onPress={() => this.onItemModal(item)}>
                <Text style={styles.itemModal}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
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
  tagWork: PropTypes.arrayOf(PropTypes.string).isRequired,
  onHandleTag: PropTypes.func.isRequired,
  onSelectTag: PropTypes.func.isRequired,
  initialData: PropTypes.arrayOf(PropTypes.string).isRequired,
}
