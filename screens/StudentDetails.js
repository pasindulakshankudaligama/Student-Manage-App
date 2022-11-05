import { View,StyleSheet, LogBox } from 'react-native'
import React,{useState} from 'react'
import { NativeBaseProvider, Box, Button, Switch, VStack, TextArea,Heading, Text, Input, Icon,Pressable,HStack,ScrollView } from "native-base";
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default function StudentDetails({navigation}){

  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [contactNumber, setContactNumber] = useState('');
  let [email, setEmail] = useState('');
  let [parentName, setParentName] = useState('');
  let [parentContactNum, setParentContactNumber] = useState('');
  let [parentEmail, setParentEmail] = useState('');
  let [qualification, setQualification] = useState('');
  let [instituteName, setInstituteName] = useState('');
  let [startedDate, setStartedDate] = useState('');
  let [endDate, setEndDate] = useState('');
  let [grade, setGrade] = useState('');

  let add_student=()=>{
    if (!firstName) {
      alert('Please fill First Name');
      return;
    }
    if (!lastName) {
      alert('Please fill Last Name');
      return;
    }
    if (!contactNumber) {
      alert('Please fill Contact Number');
      return;
    }
    if (!email) {
      alert('Please fill email');
      return;
    }
    if (!parentName) {
      alert('Please fill Parent Name');
      return;
    }
    if (!parentContactNum) {
      alert('Please fill parent Contact Number');
      return;
    }
    if (!qualification) {
      alert('Please fill Qualificaion');
      return;
    }
    if (!instituteName) {
      alert('Please fill Institute Name');
      return;
    }
    if (!startedDate) {
      alert('Please fill Started Date');
      return;
    }
    if (!endDate) {
      alert('Please fill End Date');
      return;
    }
    if (!grade) {
      alert('Please fill Grade');
      return;
        }
    console.log(firstName )

    db.transaction(function (tx) {
      console.log('jeewa')
      console.log(tx);
      console.log(firstName, lastName, contactNumber, email, parentName, parentContactNum ,parentEmail)

      tx.executeSql(
        'INSERT INTO table_student (firstName, lastName, contactNumber, email, parentName, parentContactNum, parentEmail) VALUES (?,?,?,?,?,?,?)',
        [firstName, lastName, contactNumber, email, parentName, parentContactNum ,parentEmail],

        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Student Successfully Added',
              [
                {
                  text: 'Ok',
                  // onPress: () => navigation.navigate('Login'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Failed');
        }
      );
    });

    // db.transaction(function (tx) {
    //   tx.executeSql(
    //     'INSERT INTO table_education (qualification, instituteName, startedDate, endDate, grade, student_id) VALUES (?,?,?,?,?,?)',
    //     [qualification, instituteName, startedDate, endDate, grade, 1],
    //     (tx, results) => {
    //       console.log('Results', results.rowsAffected);
    //       if (results.rowsAffected > 0) {
    //         Alert.alert(
    //           'Success',
    //           'You are Student Successfully Added',
    //           [
    //             {
    //               text: 'Ok',
    //               // onPress: () => navigation.navigate('Login'),
    //             },
    //           ],
    //           { cancelable: false }
    //         );
    //       } else alert('Failed');
    //     }
    //   );
    // });
  }
    return(
<NativeBaseProvider>
<ScrollView>
    <VStack style={style.container} space={5}>
    <Heading style={style.heading} mt="10%" size="xl" color="blue.500" bold>Student Details</Heading> 
    <Input mx="3" 
    placeholder="First Name" 
    onChangeText={(firstName) => setFirstName(firstName)}
    w="80%"/>
    <Input 
    mx="3" 
    placeholder="Last Name" 
    onChangeText={(lastName) => setLastName(lastName)}
    w="80%"/>
    <Input 
    mx="3" 
    placeholder="Contact Number" 
    onChangeText={(contactNumber) => setContactNumber(contactNumber)}
    w="80%"/>
    <Input 
    mx="3" 
    placeholder="Email" 
    onChangeText={(email) => setEmail(email)}
    w="80%"/>
    <Input 
    mx="3" 
    placeholder="Parent Name" 
    onChangeText={(parentName) => setParentName(parentName)}
    w="80%"/>
    <Input 
    mx="3" 
    placeholder="Parent Contact Number"
    onChangeText={(parentContactNum) => setParentContactNumber(parentContactNum)} 
    w="80%"/>
    <Input 
    mx="3" 
    placeholder="Parent Email" 
    onChangeText={(parentEmail) => setParentEmail(parentEmail)}
    w="80%"/>


    <Heading style={style.heading} mt="10%" size="xl" color="blue.500" bold>Educational Details</Heading> 
    <Input 
    mx="3" 
    placeholder="Qualification"
    onChangeText={(qualification) => setQualification(qualification)} 
    w="80%"/>
    <Input 
    mx="3" 
    placeholder="Institute Name"
    onChangeText={(instituteName) => setInstituteName(instituteName)} 
    w="80%"/>
    <Input 
    mx="3" 
    placeholder="Started Date"
    onChangeText={(startedDate) => setStartedDate(startedDate)} 
    w="80%"/>
    <Input 
    mx="3" 
    placeholder="End Date"
   onChangeText={(endDate) => setEndDate(endDate)} 
    w="80%"/>
    <Input 
    mx="3" 
    placeholder="Grade"
onChangeText={(grade) => setGrade(grade)} 
    w="80%"/>


    <HStack style={{alignItems: 'center'}}>
          <Text style={{marginTop: '5%'}}>Have You Another Educational Details?</Text>
          <Button
            style={{marginTop: '5%'}}
            title="Submit"
            variant="link"
            onPress={() => {
              navigation.navigate('Register');
            }} 
            >
            Add
          </Button>
        </HStack>

    <Button 
    style={style.btn} 
    mb="5%"
    title="Submit"
    onPress={add_student}   
    w="50%">
      Save Student</Button>
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