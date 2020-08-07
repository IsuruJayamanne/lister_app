import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import  Completed1 from '../../components/Completed1'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'palegoldenrod',
        //alignItems: 'center',
    }
});

const Completed = () => {
    return (
        <View style={styles.container}>
            <Text>Completed</Text>
            <Completed1 />
        </View>
    )
}

export default Completed
