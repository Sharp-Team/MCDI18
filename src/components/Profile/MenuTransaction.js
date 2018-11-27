import React from 'react'
import { Text, View } from 'react-native'

const MenuTrans = () => {
  const styles = {
    menuTransContainer: {
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textMenu: {
      fontSize: 12,
      color: '#828282',
      fontWeight: '500',
      paddingTop: 25,
    },
    textWork: {
      fontSize: 12,
      color: '#828282',
      fontWeight: '500',
      paddingTop: 25,
      paddingRight: 10,
    },
    textStatus: {
      fontSize: 12,
      color: '#828282',
      fontWeight: '500',
      paddingTop: 25,
      paddingRight: 10,
    },
  }
  return (
    <View style={styles.menuTransContainer}>
      <Text style={styles.textMenu}>THỜI GIAN</Text>
      <Text style={styles.textWork}>CÔNG VIỆC</Text>
      <Text style={styles.textStatus}>TRẠNG THÁI</Text>
    </View>
  )
}

export default MenuTrans
