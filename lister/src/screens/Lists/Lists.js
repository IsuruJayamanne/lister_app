import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'palegoldenrod',
        alignItems: 'center',
    }
});

const Lists = () => {
    return (
        <View style={styles.container}>
            <Text>Lists</Text>

        </View>
    )
}

export default Lists
