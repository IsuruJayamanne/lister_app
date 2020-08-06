import React, {Component} from 'react'
import { View, StyleSheet, TextInput, Dimensions, KeyboardAvoidingView, StatusBar } from 'react-native'
import { Block, Button, Text, theme, Input } from 'galio-framework'

const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
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



const Login = () => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <StatusBar barStyle="light-content" />

          <Block row flex space="around" style={{ zIndex:2 }}>
          <Block flex center>            
              <Block>
                <Text color="Black" size={60}>LOGIN</Text>
              </Block>
              <Block>
                <Input placeholder="Email Address"  placeholderTextColor="black" color="black" style={styles.input}
//                  onChange = {(Value)=> this.setState({email : Value})}
//                    onChange={this.handleKeywordsChange}
                    // onChangeText={(val) => this.updateInputVal(val, 'email')}
                    // value={this.state.email}
//                  onBlur = {()=>this.empty_mobile_number_validator()}
                />
                <Text style={{color : 'red',marginLeft:20}}>{this.state.error_mobile_number}</Text>
                <Input placeholder= "Password" password viewPass placeholderTextColor="black" color="black" iconColor="black" style={styles.input}
//                  onChange = {(Value)=> this.setState({password : Value})}
                    //  onChangeText={(val) => this.updateInputVal(val, 'password')}
                    //  value={this.state.password}
                  //onBlur = {()=>this.empty_password_validator()}
                />
                {/* <Text style={{color : 'red',marginLeft:20}}>{this.state.error_password}</Text> */}
              </Block>
                {/* <Text style={{color : 'red',marginLeft:20}}>{this.state.errorMessage}</Text> */}
            
              <Button
                shadowless
                style={styles.button}
                //color={materialTheme.COLORS.GREEN}
                
//                onPress={() => navigation.navigate('App')}
                //onPress={() => this.handleLogin()}
                >
                Login
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
        
        </View>
    )
}

export default Login
