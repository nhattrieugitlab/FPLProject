import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState} from 'react'
import HocTapItem from '../components/HocTapItem'



const HocTap = ({navigation}) => {
  const [notifyData, setNotifyData] = useState([{
    id: 0,
    title: 'Thông báo về việc nhận bằng tốt nghiệp (Đợt tốt nghiệp tháng 06/2023) ',
    nguoiDang: 'phitdp',
    time: '24/07/2023 11:45',
  },
  {
    id: 2,
    title: 'Thông báo Kế hoạch bảo vệ dự án tốt nghiệp_HK SUMMER 2023',
    nguoiDang: 'phitdp',
    time: '24/07/2023 11:45',
  },
  {
    id: 3,
    title: '[Quan trọng] Yêu cầu bổ sung bằng tốt nghiệp THPT',
    nguoiDang: 'phitdp',
    time: '24/07/2023 11:45',
  },
  {
    id: 4,
    title: 'Phòng khảo thí thông báo DSSV kiểm tra tiếng anh đầu vào khóa 19.3.1_ngày thi 22/07.2023',
    nguoiDang: 'phitdp',
    time: '24/07/2023 11:45',
  },
  {
    id: 5,
    title: '[Quan trọng] Yêu cầu bổ sung bằng tốt nghiệp THPT',
    nguoiDang: 'phitdp',
    time: '24/07/2023 11:45',
  },
  {
    id: 6,
    title: 'Thông báo về việc nhận bằng tốt nghiệp (Đợt tốt nghiệp tháng 06/2023) ',
    nguoiDang: 'phitdp',
    time: '24/07/2023 11:45',
  },
  ])

  const handlePress = (item) => {
    navigation.navigate('ThongTinChiTiet', item);
}
  return (
    <View style={styles.body}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={notifyData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <HocTapItem item={item} handlePress={handlePress}/>} >
      </FlatList>
    </View>
  )
}

export default HocTap

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 15,
    backgroundColor: '##f8f4f4',
  },

})