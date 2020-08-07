import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListCard from '../../components/ListCard/ListCard'
import  Todos from '../../components/Todos'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'palegoldenrod',
        //alignItems: 'center',
    }
});

const All = () => {
    return (
        <View style={styles.container}>
            <Todos/>
        </View>
    )
}

export default All
