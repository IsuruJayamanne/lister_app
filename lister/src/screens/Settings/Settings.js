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

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    )
}

export default Settings
