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
        backgroundColor: "darkkhaki",
        marginTop: 5,
        marginLeft: 3,
        marginRight: 3,
    },
    name: {
        flex: 0.67,
        marginLeft: 10,
    },
    button: {
        flexDirection: 'row',
        flex: 0.33,
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
  async function toggleDelete() {
    var user = auth().currentUser;
    await firestore()
      .collection(user.uid)
      .doc(id)
      .delete()
        .then(() => {
            console.log('User deleted!');
        });
  }

  return (
    <View style={styles.listCard}>
        <View style={styles.name}>
            <Text style={{fontWeight: "bold", fontSize: 25}}>{name}</Text>
            <View style={styles.info}>
                    <Text >{" "+description}</Text>
                    <Text style={{color: 'slategray'}}>{moment(time).fromNow()}</Text>
            </View>
        </View>
        <View style={styles.button}>
            <Button 
            color="darkseagreen" 
            style={{ width: 60, height: 40 }}
            onPress={() => toggleComplete()}
            >
            Restore
            </Button>
            <Button 
            onlyIcon 
            icon="close" 
            iconFamily="antdesign" 
            iconSize={20} 
            color="danger" 
            iconColor="#fff" 
            style={{ width: 40, height: 40 }}
            onPress={() => toggleDelete()}
            >Delete</Button>
        </View>
    </View>
        
 );
}

export default React.memo(Done);