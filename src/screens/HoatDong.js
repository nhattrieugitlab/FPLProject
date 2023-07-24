import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState} from 'react'
import HocTapItem from '../components/HocTapItem'



const HoatDong = () => {
  const [notifyData, setNotifyData] = useState([{
    id: 0,
    title: 'P.CTSV THÔNG BÁO XÁC NHẬN ĐĂNG KÝ THÀNH CÔNG BHYT ĐỢT 02 - T6/2023',
    nguoiDang: 'phitdp',
    time: '24/07/2023 11:45',
  },
  {
    id: 2,
    title: 'THÔNG BÁO HỖ TRỢ SINH VIÊN ĐĂNG KÝ THAM GIA BHYT ĐỢT 2- THÁNG 06/2023) VÀ CÀI ĐẶT ỨNG DỤNG VSSID ĐỂ SỬ DỤNG CHO BHYT',
    nguoiDang: 'phitdp',
    time: '24/07/2023 11:45',
  },
  {
    id: 3,
    title: 'P.DVSV_THÔNG BÁO DSSV BẢO LƯU HỌC KỲ SUMMER 2023',
    nguoiDang: 'phitdp',
    time: '24/07/2023 11:45',
  },
  {
    id: 4,
    title: 'P.DVSV_THÔNG BÁO DSSV THÔI HỌC TỰ NGUYỆN HỌC KỲ SUMMER 2023',
    nguoiDang: 'phitdp',
    time: '24/07/2023 11:45',
  },
  {
    id: 5,
    title: 'P.DVSV_THÔNG BÁO: DANH SÁCH SINH VIÊN ĐÃ CÓ GIẤY XÁC NHẬN SINH VIÊN/VAY VỐN/BẢNG ĐIỂM_HỌC KỲ SUMMER 2023',
    nguoiDang: 'phitdp',
    time: '24/07/2023 11:45',
  },
  {
    id: 6,
    title: 'TÌM NHÀ TRỌ KHÔNG KHÓ, MỌI THỨ ĐÃ CÓ NHÀ F LO',
    nguoiDang: 'phitdp',
    time: '24/07/2023 11:45',
  },
  ])
  return (
    <View style={styles.body}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={notifyData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <HocTapItem item={item} />} >
      </FlatList>
    </View>
  )
}

export default HoatDong

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 15,
    backgroundColor: '##f8f4f4',
  },

})