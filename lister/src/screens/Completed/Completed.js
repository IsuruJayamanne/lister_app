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

const Completed = () => {
    return (
        <View style={styles.container}>
            <Text>Completed</Text>
        </View>
    )
}

export default Completed
