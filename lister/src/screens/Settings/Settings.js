import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
import { Button } from 'galio-framework';


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'palegoldenrod',
        alignItems: 'center',
    }
});



export default class Settings extends React.Component {
    constructor(props){
        super(props);
        this.state={
          //email : "",
          
        }
        this.handleSignOut = this.handleSignOut.bind(this);
      }

    handleSignOut(){
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    render(){
        var user = auth().currentUser;
        console.log(user);
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
                <Text>{user.email}</Text>
                <Button
                    color="#d2b48c"
                    onPress={() => this.handleSignOut()}
                >
                    Sign Out
                </Button>
            </View>
        )
    }
}


