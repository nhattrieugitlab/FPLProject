import { View, Text,FlatList} from 'react-native'
import React,{useState} from 'react'
import TranScirptsItem from '../components/TranScirptsItem'
import ChartTranScirpt from './ChartTranScirpt'

const TranScirpts = () => {


    const [CreditsGPA,setCreditsGPA] =useState([{
        GPA: '3.5',
        CreditsGPA: '3.5',
        CreditsTotal: '3.5',
        CreditsPassed: '3.5',
    }])
    const [semesterData, setsemesterData] = useState([{
        id: 0,
        Semester: 'Fall 2023',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        term:'5',
        subjectCodeChange: 'MOB402',
        status: 'Passed',
        score: '9.5',
        Credits: '3',
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
        Credits: '3',
    },{
        id: 2,
        Semester: 'Fall 2023',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        term:'5',
        subjectCodeChange: 'MOB402',
        status: 'Passed',
        score: '9.5',
        Credits: '3',
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
        Credits: '3',
    },
    {
        id: 4,
        Semester: 'Summer 2023',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        term:'5',
        subjectCodeChange: 'MOB402',
        status: 'Passed',
        score: '10',
        Credits: '3',
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
        Credits: '3',
    }
])


    const handlePress = (item) => {
        item.isExpanded = !item.isExpanded;
        const newData = [...semesterData];
        setsemesterData(newData);
           }
  return (
    <View  style={{ paddingTop: 16, paddingHorizontal: 12, flex: 1 }}>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={CreditsGPA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ChartTranScirpt item={item} handlePress={handlePress} />}     
        />
        <View style={{ backgroundColor: '#f2f2f2', flexDirection: 'row', borderWidth: 1, borderColor: '#cacaca',marginTop:6,borderRadius:8}}>
                    <View style={{ flexDirection: 'row', width: '70%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', flex: 3, textAlign: 'center' }}>
                           Học Kỳ
                        </Text>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                          Môn
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '40%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                           Điểm
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