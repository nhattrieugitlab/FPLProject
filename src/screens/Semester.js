import { View, Text,TouchableOpacity, FlatList} from 'react-native'
import React,{useState} from 'react'
import DateSelect from '../components/DateSelect';
import SelectDialog from '../components/SelectDialog';
import SemesterItem from '../components/SemesterItem';


const semesterDate = [
    { id: 0, label: 'Fall 2023' },
    { id: 1, label: 'Summer 2023' },
    { id: 2, label: 'Spring 2023' },
    { id: 3, label: 'Fall 2022' },
    { id: 4, label: 'Summer 2022' },
    { id: 5, label: 'Spring 2022' }
];



const Semester = ({navigation}) => {
    const [isDialogVisible, setDialogVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [semesterData,setSemesterData] = useState([{
        id: 0,
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        Score: '9.5',
        Status: 'Passed',
        attendences: [
            {
                name:"Lab1",
                weight: 3.5,
                score: 10
            },
            {
                name:"Lab2",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab3",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab4",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab5",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab6",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab7",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab8",
                weight: 3.5,
                score: 8
            },
            {
                name:"Asm1",
                weight: 3.5,
                score: 10
            },
            {
                name:"Asm2",
                weight: 3.5,
                score: 8
            }
        ]
    }
    , {
        id: 1,
        subjectCode: 'MOB401',
        subjectName: 'Lập trình game 2D nâng cao',
        Score: '9.5',
        Status: 'Passed',
        attendences: [
            {
                name:"Lab1",
                weight: 3.5,
                score: 10
            },
            {
                name:"Lab2",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab3",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab4",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab5",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab6",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab7",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab8",
                weight: 3.5,
                score: 8
            },
            {
                name:"Asm1",
                weight: 3.5,
                score: 10
            },
            {
                name:"Asm2",
                weight: 3.5,
                score: 8
            }
        ]
    }, {
        id: 2,
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        Score: '9.5',
        Status: 'Failed',
        attendences: [
            {
                name:"Lab1",
                weight: 3.5,
                score: 10
            },
            {
                name:"Lab2",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab3",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab4",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab5",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab6",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab7",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab8",
                weight: 3.5,
                score: 8
            },
            {
                name:"Asm1",
                weight: 3.5,
                score: 10
            },
            {
                name:"Asm2",
                weight: 3.5,
                score: 8
            }
        ]
    }, {
        id: 3,
        subjectCode: 'MOB401',
        subjectName: 'Lập trình game 2D nâng cao',
        Score: '9.5',
        Status: 'Passed',
        attendences: [
            {
                name:"Lab1",
                weight: 3.5,
                score: 10
            },
            {
                name:"Lab2",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab3",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab4",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab5",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab6",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab7",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab8",
                weight: 3.5,
                score: 8
            },
            {
                name:"Asm1",
                weight: 3.5,
                score: 10
            },
            {
                name:"Asm2",
                weight: 3.5,
                score: 8
            }
        ]
    }, {
        id: 4,
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        Score: '9.5',
        Status: 'Failed',
        attendences: [
            {
                name:"Lab1",
                weight: 3.5,
                score: 10
            },
            {
                name:"Lab2",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab3",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab4",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab5",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab6",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab7",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab8",
                weight: 3.5,
                score: 8
            },
            {
                name:"Asm1",
                weight: 3.5,
                score: 10
            },
            {
                name:"Asm2",
                weight: 3.5,
                score: 8
            }
        ]
    }, {
        id: 5,
        subjectCode: 'MOB401',
        subjectName: 'Lập trình game 2D nâng cao',
        Score: '9.5',
        Status: 'Failed',
        attendences: [
            {
                name:"Lab1",
                weight: 3.5,
                score: 10
            },
            {
                name:"Lab2",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab3",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab4",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab5",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab6",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab7",
                weight: 3.5,
                score: 9
            },
            {
                name:"Lab8",
                weight: 3.5,
                score: 8
            },
            {
                name:"Asm1",
                weight: 3.5,
                score: 10
            },
            {
                name:"Asm2",
                weight: 3.5,
                score: 8
            }
        ]
    }])
    

    const handleSelect = (item) => {
        setSelectedItem(item);
        setDialogVisible(false);
    };

    const handleCancel = () => {
        setDialogVisible(false);
    };

    const handlePress = (item) => {
        navigation.navigate('SemesterDetail', item);
    }


  return (
    <View style={{ paddingTop: 16, paddingHorizontal: 12, flex: 1 }}>
    <TouchableOpacity style={{ marginBottom: 8 }} onPress={() => { setDialogVisible(true) }}>
                <DateSelect title={selectedItem ? selectedItem.label : semesterDate[0].label} />
            </TouchableOpacity>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={semesterData}
          keyExtractor={item => item.id}
            renderItem={({ item }) => <SemesterItem item={item} handlePress={handlePress} />}
          />
            <SelectDialog
                visible={isDialogVisible}
                data={semesterDate}
                onSelect={handleSelect}
                onCancel={handleCancel}
            />
    </View>
  )
}

export default Semester