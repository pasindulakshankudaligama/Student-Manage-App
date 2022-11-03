import { View,StyleSheet, Image } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Button, Switch, VStack, TextArea,Heading, Text, Input, Icon,Pressable,HStack,ScrollView } from "native-base";
import AddStudentDetails from '../components/AddStudentDetails';


export default function StudentDetails({navigation}){
    return(
<NativeBaseProvider>
<ScrollView>
    <VStack style={style.container} space={5}>
    <Heading style={style.heading} mt="10%" size="xl" color="blue.500" bold>Student Details</Heading> 
    <Input mx="3" placeholder="First Name" w="80%"/>
    <Input mx="3" placeholder="Last Name" w="80%"/>
    <Input mx="3" placeholder="Contact Number" w="80%"/>
    <Input mx="3" placeholder="Email" w="80%"/>
    <Input mx="3" placeholder="Parent Name" w="80%"/>
    <Input mx="3" placeholder="Parent Contact Number" w="80%"/>

    <Heading style={style.heading} mt="10%" size="xl" color="blue.500" bold>Educational Details</Heading> 
    <Input mx="3" placeholder="Qualification" w="80%"/>
    <Input mx="3" placeholder="Institute Name" w="80%"/>
    <Input mx="3" placeholder="Started Date" w="80%"/>
    <Input mx="3" placeholder="End Date" w="80%"/>
    <Input mx="3" placeholder="Grade" w="80%"/>


    <HStack style={{alignItems: 'center'}}>
          <Text style={{marginTop: '15%'}}>Have You Another Educational Details?</Text>
          <Button
            style={{marginTop: '15%'}}
            variant="link"
            onPress={() => {
              navigation.navigate('Register');
            }}>
            Add
          </Button>
        </HStack>

    <Button style={style.btn} onPress={() => console.log("hello world")} w="50%">Save Student</Button>
    </VStack>

    </ScrollView>
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