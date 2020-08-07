import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

import { ScrollView, FlatList, View, Text, TextInputt } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import Done from './Done';

import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

function Completed1() {
    var user = auth().currentUser;
    const ref = firestore().collection(user.uid);

    const [ loading, setLoading ] = useState(true);
    const [ todos, setTodos ] = useState([]);

    useEffect(() => {
        return ref.onSnapshot((querySnapshot) => {
            const list = [];
            querySnapshot.forEach(doc => {
              const { name, status, description, time } = doc.data();
              if (!status){
                list.push({
                    id: doc.id,
                    name,
                    status,
                    description,
                    time,
                });
                }
            });
      
            setTodos(list);
      
            if (loading) {
              setLoading(false);
            }
        });
      }, []);

      if (loading) {
        return null; // or a spinner
      }

  return (
      <PaperProvider>
    <>
      {/* <Appbar>
        <Appbar.Content title={'Shopping List'} style={{color:'orange'}}/>
      </Appbar> */}
      <FlatList 
        style={{flex: 1}}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Done {...item} />}
      />

    </>
    </PaperProvider>
  );
}

export default Completed1;