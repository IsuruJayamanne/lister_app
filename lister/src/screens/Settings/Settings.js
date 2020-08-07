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
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:40}}>
                    <Text style={{fontSize:20, color:'chocolate'}}>Current User: </Text>
                    <Text style={{fontSize:20}}>{user.email}</Text>
                </View>
                <Button
                    color="orangered"
                    onPress={() => this.handleSignOut()}
                    style={{marginTop:25}}
                >
                    Sign Out
                </Button>
            </View>
        )
    }
}


