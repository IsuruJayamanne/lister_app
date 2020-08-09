import React, {Component} from 'react'
import { View, StyleSheet, TextInput, Dimensions, KeyboardAvoidingView, StatusBar } from 'react-native'
import { Block, Button, Text, theme, Input } from 'galio-framework'
import auth from '@react-native-firebase/auth'

const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'palegoldenrod',
        alignItems: 'center',
        justifyContent: 'center',
    },
    c2: {
        width: '100%',
        flex: 0.3,
        backgroundColor: 'palegoldenrod',
        alignItems: 'center',
        justifyContent: 'center',
    },
    padded: {
        paddingHorizontal: theme.SIZES.BASE * 1,
        position: 'relative',
        bottom: theme.SIZES.BASE*3,
      },
      button: {
        width: width - theme.SIZES.BASE * 10,
        height: theme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0,
      },
      input: {
        width: width - theme.SIZES.BASE * 4,
        height: theme.SIZES.BASE * 3,
        borderColor:"white",
        borderBottomColor: "black",
        backgroundColor:"white"
      },
});



export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={
          mobile_number : "",
          email : "",
          username : "",
          password : "",
          error_mobile_number : "",
          error_password : "",
          errorMessage: "",
          isLoading: false,
    
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
      }

    updateInputVal = (val, prop) => {
        console.log(prop+" "+val);
        const state = this.state;
        state[prop] = val;
        this.setState(state);
        this.setState({errorMessage: ""});
    }

    async handleLogin() {
        console.log("test2");
        const { email, password } = this.state;
        if (email != ""){
            if (password != ""){
                this.setState({isLoading: true});
                await auth()
                    .signInWithEmailAndPassword(email.toString(), password.toString())
                    .then(() => {
                        console.log('signed in!');
                    })
                    .catch(error => {
                        if (error.code === 'auth/wrong-password') {
                            //console.log('That email address is already in use!');
                            this.setState({ errorMessage: 'Password is incorrect!' });
                        }
                        if (error.code === 'auth/invalid-email') {
                            this.setState({ errorMessage: 'That email address is invalid!' });
                        
                        }
                        if (error.code === 'auth/user-not-found') {
                            this.setState({ errorMessage: 'email not registered. use sign up to register' });
                        
                        }
                        
                        console.error(error);
                    });
                this.setState({isLoading: false});
            }
        }
    }

    async handleSignUp() {
        console.log("test1");
        const { email, password } = this.state;
        if (email != ""){
            if (password != ""){
                console.log("test3");
                this.setState({isLoading: true});
                await auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        console.log('User account created & signed in!');
                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                            //console.log('That email address is already in use!');
                            this.setState({ errorMessage: 'That email address is already in use!' });
                        }

                        if (error.code === 'auth/invalid-email') {
                            this.setState({ errorMessage: 'That email address is invalid!' });
                        
                        }
                        if (error.code === 'auth/weak-password') {
                            this.setState({ errorMessage: 'weak password! minimum length is 6 characters' });
                        
                        }
                        console.error(error);
                });
                this.setState({isLoading: false});
        }   }
    }

    render() {
        //const { navigation } = this.props;

        return (
    
            <View style={styles.container}>
                <View style={styles.c2}></View>
                <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
            <StatusBar barStyle="light-content" />

            <Block row flex space="around" style={{ zIndex:2 }}>
            <Block flex center>            
                <Block>
                    <Text color="black" size={60}>LOGIN</Text>
                </Block>
                <Block>
                    <Input placeholder="Email Address"  placeholderTextColor="black" color="black" style={styles.input}

                         onChangeText={(val) => this.updateInputVal(val, 'email')}
                         value={this.state.email}
    //                  onBlur = {()=>this.empty_mobile_number_validator()}
                    />
                    {/* <Text style={{color : 'red',marginLeft:20}}>{this.state.error_mobile_number}</Text> */}
                    <Input placeholder= "Password" password viewPass placeholderTextColor="black" color="black" iconColor="black" style={styles.input}
                          onChangeText={(val) => this.updateInputVal(val, 'password')}
                          value={this.state.password}
                    //onBlur = {()=>this.empty_password_validator()}
                    />
                    {/* <Text style={{color : 'red',marginLeft:20}}>{this.state.error_password}</Text> */}
                </Block>
                    <Text style={{color : 'red',marginLeft:20}}>{this.state.errorMessage}</Text>
                
                <Button
                    shadowless
                    style={styles.button}
                    color={'orange'}
                    loading={this.state.isLoading}
                    onPress={() => this.handleLogin()}
                    >
                    Login
                </Button>
                <Button
                    shadowless
                    style={styles.button}
                    color={'yellowgreen'}
                    loading={this.state.isLoading}
                    onPress={() => this.handleSignUp()}
                    >
                    Sign Up
                </Button>
                {/* <Block row>
                <Text color="black"> Do not have an account? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}>
                <Text color={materialTheme.COLORS.GREEN} style={{fontWeight:"bold"}}>Signup</Text> 
                </TouchableOpacity>
                </Block> */}
                
            </Block>
            </Block>
            </KeyboardAvoidingView>
            <View style={styles.c2}></View>
            </View>
        );
    }
}

