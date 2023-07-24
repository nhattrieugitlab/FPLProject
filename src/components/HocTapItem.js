import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const HocTapItem = (props) => {
    const { item } = props;
    return (
        <TouchableOpacity style={styles.body}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.nguoiDangContainer }>
                <Text>Người đăng: </Text>
                <Text>{item.nguoiDang}</Text>
            </View>
            <View style={styles.nguoiDangContainer }>
                <Text>Ngày đăng: </Text>
                <Text>{item.time}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default HocTapItem

const styles = StyleSheet.create({
    nguoiDangContainer: {
        marginTop: 10,
        flexDirection: 'row', 
        justifyContent: 'flex-start',
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    body: {
        marginBottom: 10,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
})