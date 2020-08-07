import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import auth from '@react-native-firebase/auth'
import { Button } from 'galio-framework';
import firestore from '@react-native-firebase/firestore';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'palegoldenrod',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        height: 400,
        backgroundColor: 'palegoldenrod',
        alignItems: 'center',
        marginTop: 10,
    },
    row:  {
        flexDirection: "row",
        marginTop: 15,
        marginBottom: 10
    }
});

export default class Settings extends React.Component {
    constructor(props){
        super(props);
        this.state={
          item : "",
          description: "",
          isLoading: false,
          
        }
        this.handleAdd = this.handleAdd.bind(this);
      }


    updateInputVal = (val, prop) => {
        console.log(prop+" "+val);
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    async handleAdd() {
        var user = auth().currentUser;
        const { item, description} = this.state;
        var timeN = new Date();
        console.log(timeN);

        this.setState({isLoading: true});
        await firestore()
            .collection(user.uid)
            .add({
                name: item,
                description: description,
                status: true,
                time: timeN,
            })
            .then(() => {
                console.log('User added!');
            });

        this.setState({item: "", description: ""});
        this.setState({isLoading: false});
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>New</Text>
                <View style={styles.card}>
                    <View style={styles.row}>
                        <Text style={{fontSize: 25}}>    Item: </Text>
                        <TextInput
                            style={{ height: 40, fontSize: 16, width: 200, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={(val) => this.updateInputVal(val, 'item')}
                            value={this.state.item}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={{fontSize: 15}}>Description: </Text>
                        <TextInput
                            style={{ height: 80, fontSize: 15, width: 200, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={(val) => this.updateInputVal(val, 'description')}
                            value={this.state.description}
                            textAlignVertical="top"
                            multiline={true}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text>                </Text>
                        <Button
                            color="#ff7f50"
                            onPress={() => this.handleAdd()}
                            loading={this.state.isLoading}
                        >
                            Add
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

