import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import { View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

function Done({ id, name, status, description }) {
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
      <View style={{flexDirection: 'row'}}>
          {/* <Text>{name}</Text> */}
          
          <List.Item
            title="My name"
            onPress={() => toggleComplete()}
            left={props => (
                <List.Icon {...props} icon={status ? 'check' : 'cancel'} />
            )}
            />
      </View>
    
  );
}

export default React.memo(Done);