import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ThongTinChiTiet = ({ navigation }) => {

  return (
    <View>
      <View style={{ height: 64, flexDirection: 'row', paddingHorizontal: 12, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fe930f' }}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image source={require('../assets/icons/arrow_back_48.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <Text style={{ flex: 1, textAlign: 'center', marginRight: 24, fontWeight: 'bold', fontSize: 18, color: 'white' }}>
          Bảng Điểm
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Thông báo về việc nhận bằng tốt nghiệp (Đợt tốt nghiệp tháng 06/2023)</Text>
        <Text style={styles.content1}>Địa điểm: Phòng Đào Tạo - Tầng trệt Tòa nhà T (QTSC9) - Công viên phần mềm Quang Trung, Phường Tân Chánh Hiệp, Quận 12.</Text>
        <Text style={styles.content1}>Thời gian: Bắt đầu ngày 24/07/2023</Text>
        <Text style={styles.content1}>Thứ 2 đến thứ 6: Sáng : 08h30 – 11h30 và Chiều : 13:30 – 16:30</Text>
        <Text style={styles.content1}>Thứ 7: Sáng : 08h30 – 11h30</Text>
        <Text style={styles.content1}>Danh sách sinh viên nhận bằng: DANH SÁCH SINH VIÊN TỐT NGHIỆP ĐỢT THÁNG 06 NĂM 2023</Text>
        <Text style={styles.content1}>Lưu ý:</Text>
        <Text style={styles.content1}>Khi nhận bằng : Sinh viên là người trực tiếp đến nhận, mang theo 1 CMND/CCCD bản chính và 1 bản sao có công chứng trong vòng 6 tháng</Text>
        <Text style={styles.content1}>Bản gốc bằng Tốt nghiệp chỉ được cấp 1 lần, sinh viên mất bản gốc chỉ được cấp lại bản sao</Text>
        <Text style={styles.content1}>Trường hợp nhận thay phải có ủy quyền bằng văn bản có chứng thực theo quy định của Pháp luật, CMND/CCCD photo công chứng của người ủy quyền và người được ủy quyền (trong 6 tháng)</Text>
        <Text style={styles.content1}>Bằng Tốt nghiệp sẽ giữ lại trong vòng 1 năm tại trường cơ sở HCM, sau thời gian trên nếu chưa nhận sẽ chuyển về Hà Nội.</Text>
        <View style={styles.content2Container}>
          <Text style={styles.content2}>Người đăng: nhuntq20</Text>
          <Text style={styles.content2}>Ngày đăng: 24/07/2023 11:45</Text>
          <Text style={styles.content2}>Cập nhật lần cuối bởi nhuntq20 vào lúc 11:47:25 ngày 20/07/2023</Text>
        </View>
      </View>
    </View>
  )
}

export default ThongTinChiTiet

const styles = StyleSheet.create({
  content2Container: {
    bottom: -150,
    position: 'relative',
  },
  content2: {
    color: 'black',
  },
  content1: {
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
  },
  title: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
  },
  body: {
    padding: 20,
  },

})