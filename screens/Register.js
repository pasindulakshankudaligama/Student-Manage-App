import { View,StyleSheet, Image } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Button, Switch, VStack, TextArea,Heading, Text, Input, Icon,Pressable,HStack } from "native-base";


export default function Register({navigation}) {
  return (
    <NativeBaseProvider>
      <VStack style={style.container} space={5}>
        <Heading style={style.heading} size="xl" color="blue.500" bold>CREATE ACCOUNT</Heading>
        
        <Input mx="3" placeholder="Name" w="80%"/>
        <Input mx="3" placeholder="Email" w="80%"/>
        <Input type={false ? "text" : "password"} mx="3" placeholder="Password" w="80%"/>
        {/* <Input mx="3" placeholder="Password" w="80%"/> */}

        <Button style={style.btn} onPress={() => console.log("hello world")} w="50%">Register</Button>
        
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