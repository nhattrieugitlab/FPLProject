import { View, Text,FlatList} from 'react-native'
import React,{useState} from 'react'
import TranScirptsItem from '../components/TranScirptsItem'

const TranScirpts = () => {


    const [semesterData, setsemesterData] = useState([{
        id: 0,
        Semester: 'Fall 2023',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        term:'5',
        subjectCodeChange: 'MOB402',
        status: 'Passed',
        score: '9.5',
        creadits: '3',
    },
    {
        id: 1,
        Semester: 'Fall 2023',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        term:'5',
        subjectCodeChange: 'MOB402',
        status: 'Passed',
        score: '9.5',
        creadits: '3',
    },{
        id: 2,
        Semester: 'Fall 2023',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        term:'5',
        subjectCodeChange: 'MOB402',
        status: 'Passed',
        score: '9.5',
        creadits: '3',
    },
    {
        id: 3,
        Semester: 'Fall 2023',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        term:'5',
        subjectCodeChange: 'MOB402',
        status: 'Passed',
        score: '9.5',
        creadits: '3',
    },
    {
        id: 4,
        Semester: 'Fall 2023',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        term:'5',
        subjectCodeChange: 'MOB402',
        status: 'Passed',
        score: '9.5',
        creadits: '3',
    },
    {
        id: 5,
        Semester: 'Fall 2023',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        term:'5',
        subjectCodeChange: 'MOB402',
        status: 'Passed',
        score: '9.5',
        creadits: '3',
    }
])


    const handlePress = (item) => {
        item.isExpanded = !item.isExpanded;
        const newData = [...semesterData];
        setsemesterData(newData);
           }
  return (
    <View  style={{ paddingTop: 16, paddingHorizontal: 12, flex: 1 }}>
        <View style={{ backgroundColor: '#f2f2f2', flexDirection: 'row', borderWidth: 1, borderColor: '#cacaca',borderRadius:5,padding:16}}>
            <View style={{flexDirection:'row'}}>
                <View style={{width:'100%'}}>
                    <Text style={{color:'blue',padding:8}}>
                       Điểm Trung Bình: 9.5
                    </Text>
                    <Text style={{color:'black',padding:8}}>
                       Tín Chỉ:72/97(Đạt Tổng) -0 miễn giảm
                    </Text>

                    <Text style={{color:'black',padding:8,fontWeight: 'bold',fontSize:16}}>
                        Thống kê
                    </Text>
                    <View style={{ backgroundColor: '#f2f2f2', flexDirection: 'row', borderWidth: 1, borderColor: '#cacaca',marginTop:6}}>
                    <View style={{ flexDirection: 'row', width: '25%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', flex: 3, textAlign: 'center' }}>
                            Tổng Môn Chưa Đạt
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '25%' }}>
                    <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                          Tổng Môn Đạt
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '25%' }}>
                    <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                          Tổng Môn Học Lại
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '25%' }}>
                    <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                          Tổng Môn Đang Học
                        </Text>
                    </View>
                </View>
                </View>
            </View> 
        </View>
        <View style={{ backgroundColor: '#f2f2f2', flexDirection: 'row', borderWidth: 1, borderColor: '#cacaca',marginTop:6}}>
                    <View style={{ flexDirection: 'row', width: '70%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', flex: 3, textAlign: 'center' }}>
                           Học Kỳ
                        </Text>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                          Môn
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '30%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                            Trạng thái
                        </Text>
                    </View>
                </View>
                <FlatList 
                 showsVerticalScrollIndicator={false}
                 data={semesterData}
                 keyExtractor={item => item.id}
                 renderItem={({ item }) => <TranScirptsItem item={item} handlePress={handlePress} />
                    }
                />
    </View>
  )
}

export default TranScirpts