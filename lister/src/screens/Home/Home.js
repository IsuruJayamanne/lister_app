import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'palegoldenrod'
    }
});

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home 1</Text>
        </View>
    )
}

export default Home;
