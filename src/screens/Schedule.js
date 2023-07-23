import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import SelectDialog from '../components/SelectDialog';
import DateSelect from '../components/DateSelect'
import ScheduleItem from '../components/ScheduleItem';

const dateData = [
    { id: 0, label: '7 ngày tới' },
    { id: 1, label: '30 ngày tới' },
    { id: 2, label: '90 ngày tới' },
    { id: 3, label: '7 ngày trước' },
    { id: 4, label: '30 ngày trước' },
    { id: 5, label: '90 ngày trước' },
];

const Schedule = () => {
    const [isDialogVisible, setDialogVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [scheduleData, setScheduleData] = useState([{
        id: 0,
        amphitheater: 'Phan Mem Quang Trung',
        room: 'T1103 (Nha T)',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        time: '09:45 - 11:45',
        date: '24/07/2023',
        class: 'MD18101',
        teacher: 'thohv3'
    }, {
        id: 1,
        amphitheater: 'Phan Mem Quang Trung',
        room: 'T1008 (Nha T)',
        subjectCode: 'MOB401',
        subjectName: 'Lập trình game 2D nâng cao',
        time: '09:45 - 11:45',
        date: '25/07/2023',
        class: 'MD18101',
        teacher: 'dinhnt24'
    }, {
        id: 2,
        amphitheater: 'Phan Mem Quang Trung',
        room: 'T1103 (Nha T)',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        time: '09:45 - 11:45',
        date: '26/07/2023',
        class: 'MD18101',
        teacher: 'thohv3'
    }, {
        id: 3,
        amphitheater: 'Phan Mem Quang Trung',
        room: 'T1008 (Nha T)',
        subjectCode: 'MOB401',
        subjectName: 'Lập trình game 2D nâng cao',
        time: '09:45 - 11:45',
        date: '27/07/2023',
        class: 'MD18101',
        teacher: 'dinhnt24'
    }, {
        id: 4,
        amphitheater: 'Phan Mem Quang Trung',
        room: 'T1103 (Nha T)',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        time: '09:45 - 11:45',
        date: '28/07/2023',
        class: 'MD18101',
        teacher: 'thohv3'
    }, {
        id: 5,
        amphitheater: 'Phan Mem Quang Trung',
        room: 'T1008 (Nha T)',
        subjectCode: 'MOB401',
        subjectName: 'Lập trình game 2D nâng cao',
        time: '09:45 - 11:45',
        date: '29/07/2023',
        class: 'MD18101',
        teacher: 'dinhnt24'
    }, {
        id: 6,
        amphitheater: 'Phan Mem Quang Trung',
        room: 'T1103 (Nha T)',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        time: '09:45 - 11:45',
        date: '30/07/2023',
        class: 'MD18101',
        teacher: 'thohv3'
    }, {
        id: 7,
        amphitheater: 'Phan Mem Quang Trung',
        room: 'T1008 (Nha T)',
        subjectCode: 'MOB401',
        subjectName: 'Lập trình game 2D nâng cao',
        time: '09:45 - 11:45',
        date: '31/07/2023',
        class: 'MD18101',
        teacher: 'dinhnt24'
    }, {
        id: 8,
        amphitheater: 'Phan Mem Quang Trung',
        room: 'T1103 (Nha T)',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình server cho Android',
        time: '09:45 - 11:45',
        date: '01/08/2023',
        class: 'MD18101',
        teacher: 'thohv3'
    }, {
        id: 9,
        amphitheater: 'Phan Mem Quang Trung',
        room: 'T1008 (Nha T)',
        subjectCode: 'MOB401',
        subjectName: 'Lập trình game 2D nâng cao',
        time: '09:45 - 11:45',
        date: '02/08/2023',
        class: 'MD18101',
        teacher: 'dinhnt24'
    }])

    const handleSelect = (item) => {
        setSelectedItem(item);
        setDialogVisible(false);
    };

    const handleCancel = () => {
        setDialogVisible(false);
    };

    const handlePress = (item) => {
        item.isExpanded = !item.isExpanded;
        const newData = [...scheduleData];
        setScheduleData(newData);
    }

    return (
        <View style={{ paddingTop: 16, paddingHorizontal: 12, flex: 1 }}>
            <TouchableOpacity style={{ marginBottom: 8 }} onPress={() => { setDialogVisible(true) }}>
                <DateSelect title={selectedItem ? selectedItem.label : dateData[0].label} />
            </TouchableOpacity>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={scheduleData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ScheduleItem item={item} handlePress={handlePress} />} />
            <SelectDialog
                visible={isDialogVisible}
                data={dateData}
                onSelect={handleSelect}
                onCancel={handleCancel}
            />
        </View>
    )
}

export default Schedule