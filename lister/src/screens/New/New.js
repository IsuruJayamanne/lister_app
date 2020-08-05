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

const New = () => {
    return (
        <View style={styles.container}>
            <Text>New</Text>
        </View>
    )
}

export default New
