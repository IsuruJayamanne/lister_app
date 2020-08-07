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
        marginLeft: 3,
        marginRight: 3,
    },
    name: {
        flex: 0.8,
        marginLeft: 10,
    },
    button: {
        flex: 0.2,
        backgroundColor: "darkseagreen",
        alignItems: 'center',
    },
    info: {
        flexDirection: 'row', 
        flex: 1,
        justifyContent: 'space-between'
    }
});

function Todo({ id, name, status, description, time }) {
    console.log(name + time);
  async function toggleComplete() {
    var user = auth().currentUser;
    await firestore()
      .collection(user.uid)
      .doc(id)
      .update({
        status: false,
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
            onlyIcon 
            icon="check" 
            iconFamily="antdesign" 
            iconSize={20} 
            color="success" 
            iconColor="#fff" 
            style={{ width: 40, height: 40 }}
            onPress={() => toggleComplete()}
            >
              complete
            </Button>
          </View>


          {/* <Text>{name}</Text> */}
          {/* <List.Item
            title="My name"
            onPress={() => toggleComplete()}
            left={props => (
                <List.Icon {...props} icon={status ? 'check' : 'cancel'} />
            )}
            /> */}
      </View>
    
  );
}

export default React.memo(Todo);