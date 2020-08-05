import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListCard from '../../components/ListCard/ListCard'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'palegoldenrod',
        alignItems: 'center',
    }
});

const All = () => {
    return (
        <View style={styles.container}>
            <Text>All</Text>
            <ListCard/>
        </View>
    )
}

export default All
