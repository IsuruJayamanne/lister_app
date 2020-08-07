import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'palegoldenrod',
        alignItems: 'center',
    },
    c2: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: 'center'
    },
    c3: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: 'center'
    }
});

const Lists = () => {
    return (
        <View style={styles.container}>
            <View style={styles.c2}>
                <Text style={{fontSize: 60, fontWeight: 'bold', color: 'mediumseagreen'}}>Lister..</Text>
                <Text style={{fontSize: 10}}> </Text>
                <Text style={{fontSize: 15, color: 'brown'}}>A Mobile App to Create and manage shopping Lists</Text>
            </View>
            <View style={styles.c3}>
                <Text style={{fontSize: 25}}>J M A I U Jayamanne</Text>
                <Text style={{fontSize: 25}}>17000645</Text>
            </View>

        </View>
    )
}

export default Lists
