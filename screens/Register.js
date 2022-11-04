import { View,StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { NativeBaseProvider, Box, Button, Switch, VStack, TextArea,Heading, Text, Input, Icon,Pressable,HStack } from "native-base";
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default function Register({navigation}) {
 
   let [name, setName] = useState('');
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');

  let register_user=()=>{
    if (!name) {
      alert('Please fill name');
      return;
    }
    if (!email) {
      alert('Please fill email');
      return;
    }
    if (!password) {
      alert('Please fill password');
      return;
    }
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (name, email, password) VALUES (?,?,?)',
        [name, email, password],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                   onPress: () => navigation.navigate('Login'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        }
      );
    });

  }

  return (
    <NativeBaseProvider>
      <VStack style={style.container} space={5}>
        <Heading style={style.heading} size="xl" color="blue.500" bold>CREATE ACCOUNT</Heading>
        
        <Input 
        mx="3" 
        placeholder="Name" 
        onChangeText={(name) => setName(name)}
        w="80%"/>

        <Input 
        mx="3" 
        placeholder="Email" 
        onChangeText={(email) => setEmail(email)}
        w="80%"/>
        <Input 
        type={false ? "text" : "password"} 
        mx="3" 
        placeholder="Password" 
        onChangeText={(password) => setPassword(password)}
        w="80%"/>
        <Button 
        style={style.btn} 
        title="Submit"
        onPress={register_user}
        // onPress={() => console.log("hello world")} 
        w="50%">Register</Button>
        
        <HStack style={{alignItems: 'center'}}>
        <Text style={{marginTop:'15%',}}>Have an account?</Text>
          <Button
            style={{marginTop: '15%'}}
            variant="link"
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login
          </Button>
        </HStack>

      </VStack>
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    // marginTop: '10%',
    backgroundColor:'white',
    flex: 1,
   },

   heading:{
    marginBottom: 30
   },

   btn:{
    backgroundColor:"#469AFF",
    
   },
})