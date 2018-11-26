import React from 'react'
import { View, SectionList, Text } from 'react-native'
import { NotificationItem } from '../components/Notification'

const initialData = [
  {
    date: 'Hôm nay',
    data: [
      {
        image: 'https://img4.androidappsapk.co/poster/e/0/0/new.everwingguide.top_1.png',
        title: 'Yêu cầu sửa xe máy',
        detail: 'Km29 Đại lộ Thăng Long, Thạch Hòa Thạch Thất Hà Nội',
        time: '5 phút trước',
        status: 0,
      },
      {
        image: 'https://img4.androidappsapk.co/poster/e/0/0/new.everwingguide.top_1.png',
        title: 'Yêu cầu sửa xe đạp',
        detail: 'Giao dịch đã hoàn thành, cảm ơn bạn đã sử dụng dịch vụ.',
        time: '20 phút trước',
        status: 1,
      },
      {
        image: 'https://img4.androidappsapk.co/poster/e/0/0/new.everwingguide.top_1.png',
        title: 'Yêu cầu sửa xe ô tô',
        detail: 'Khách hàng đã từ chối lời đề nghị của bạn, hãy cố lên.',
        time: '3 giờ trước',
        status: 2,
      },
    ],
  },
  {
    date: 'Hôm qua',
    data: [
      {
        image: 'https://img4.androidappsapk.co/poster/e/0/0/new.everwingguide.top_1.png',
        title: 'Yêu cầu sửa xe máy',
        detail: 'Km29 Đại lộ Thăng Long, Thạch Hòa Thạch Thất Hà Nội',
        time: '5 phút trước',
        status: 0,
      },
      {
        image: 'https://img4.androidappsapk.co/poster/e/0/0/new.everwingguide.top_1.png',
        title: 'Yêu cầu sửa xe máy',
        detail: 'Km29 Đại lộ Thăng Long, Thạch Hòa Thạch Thất Hà Nội',
        time: '5 phút trước',
        status: 0,
      },
      {
        image: 'https://img4.androidappsapk.co/poster/e/0/0/new.everwingguide.top_1.png',
        title: 'Yêu cầu sửa xe máy',
        detail: 'Km29 Đại lộ Thăng Long, Thạch Hòa Thạch Thất Hà Nội',
        time: '5 phút trước',
        status: 0,
      },
    ],
  },
]

const NotificationScreen = () => {
  const styles = {
    notificationContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      color: '#979797',
      fontWeight: '400',
      fontSize: 12,
    },
  }

  return (
    <View style={styles.notificationContainer}>
      <SectionList
        sections={initialData}
        renderItem={({ item }) => <NotificationItem item={item} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.date.toUpperCase()}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  )
}

export default NotificationScreen
