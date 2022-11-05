import { View,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { NativeBaseProvider, Box, Button, Switch, VStack, TextArea,Heading, Text, Input, HStack } from "native-base";

export default function Login({navigation}) {
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');

let login_user=()=>{
  if (!email) {
    alert('Please fill email');
    return;
  }
  if (!password) {
    alert('Please fill password');
    return;
  }
  navigation.navigate('Root');
}
  return (
    <NativeBaseProvider>
      <VStack style={style.container} space={5}>
        <Heading style={style.heading} size="xl" color="blue.500" bold>
          WELCOME BACK
        </Heading>
        <Input 
        mx="3" 
        placeholder="Email"
        onChangeText={(email) => setEmail(email)} 
        w="80%" />
        <Input
          type={false ? 'text' : 'password'}
          mx="3"
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          w="80%"
        />
        <Button
          style={style.btn}
          onPress={login_user}
          w="50%">
          Login
        </Button>

        <HStack style={{alignItems: 'center'}}>
          <Text style={{marginTop: '15%'}}>Don’t have an account?</Text>
          <Button
            style={{marginTop: '15%'}}
            variant="link"
            onPress={() => {
              navigation.navigate('Register');
            }}>
            Register
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