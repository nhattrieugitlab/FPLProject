import React from 'react'
import { View, Text, Image } from 'react-native'
import TopTab from '../components/TopTab'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestSchedule from '../screens/TestSchedule';
import Schedule from '../screens/Schedule';
import Attendence from '../screens/Attendance';
import AttendenceDetail from '../screens/AttendenceDetail';
import HocTap from '../screens/HocTap';
import HocPhi from '../screens/HocPhi';
import HoatDong from '../screens/HoatDong';
import ThongTinChiTiet from '../screens/ThongTinChiTiet';

const Stack = createNativeStackNavigator();

const tabs = [{
    name: 'Học tập',
    screen: HocTap
}, {
    name: 'Hoạt động',
    screen: HoatDong
}, {
    name: 'Học phí',
    screen: HocPhi
}];

const user = {
    name: 'Nguyễn Nhật Triều',
    image: require('../assets/images/avatar.jpg')
}

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    header: () => (
                        <View style={{ backgroundColor: '#fe930f', height: 64, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={user.image} style={{ width: 48, height: 48, borderRadius: 24 }} />
                                <Text style={{ color: 'white', marginLeft: 10 }}>
                                    {user.name}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../assets/icons/qr-code_64.png')} style={{ width: 24, height: 24 }} />
                                <Image source={require('../assets/icons/notification_64.png')} style={{ width: 24, height: 24, marginLeft: 24 }} />
                            </View>
                        </View>
                    ),
                }}
                name='Schedule'>
                {() => <TopTab tabs={tabs} />}
            </Stack.Screen>
            <Stack.Screen name='ThongTinChiTiet' component={ThongTinChiTiet} options={{ headerShown: false }} />
        </Stack.Navigator>

    )
}

export default HomeNavigator