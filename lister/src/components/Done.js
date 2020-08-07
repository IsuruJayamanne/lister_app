import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import { View, Text, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {Button } from 'galio-framework';
import moment from 'moment';

const styles = StyleSheet.create({
    listCard: {
        flexDirection: 'row', 
        height: 55, 
        backgroundColor: "darkseagreen",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 3,
        marginRight: 3,
    },
    name: {
        flex: 0.7,
        marginLeft: 10,
    },
    button: {
        flex: 0.3,
        backgroundColor: "darkseagreen",
        alignItems: 'flex-end',
    },
    info: {
        flexDirection: 'row', 
        flex: 1,
        justifyContent: 'space-between'
    }
});

function Done({ id, name, status, description, time }) {
    console.log(name);
  async function toggleComplete() {
    var user = auth().currentUser;
    await firestore()
      .collection(user.uid)
      .doc(id)
      .update({
        status: true,
      });
  }

  return (
    <View style={styles.listCard}>
        <View style={styles.name}>
            <Text style={{fontWeight: "bold", fontSize: 25}}>{name}</Text>
            <View style={styles.info}>
                    <Text >{" "+description}</Text>
                    <Text >{moment(time).fromNow()}</Text>
            </View>
        </View>
        <View style={styles.button}>
            <Button 
            color="#e9967a" 
            style={{ width: 80, height: 40 }}
            onPress={() => toggleComplete()}
            >
            Restore
            </Button>
        </View>
    </View>
        
 );
}

export default React.memo(Done);