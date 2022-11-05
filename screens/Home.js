import { View, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, VStack, HStack, Heading, Text, Container, Center, Button, Input } from "native-base";
import TouchableCard from './../components/TouchableCard';
import { openDatabase } from 'react-native-sqlite-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
var db = openDatabase({ name: 'UserDatabase.db' });
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';


export default function Home({navigation}) {
 
    // const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.transaction(function (txn) {
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
            [],
            function (tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                txn.executeSql(
                    'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), email VARCHAR(10), password VARCHAR(20))',
                  []
                );
              }
            }
          );
        });
      }, []);


      useEffect(() => {
        db.transaction(function (txn) {
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_student'",
            [],
            function (tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS table_student', []);
                txn.executeSql(
                    'CREATE TABLE IF NOT EXISTS table_student(student_id INTEGER PRIMARY KEY AUTOINCREMENT, firstName VARCHAR(20), lastName VARCHAR(20), contactNumber INT(10), email VARCHAR(20), parentName VARCHAR(20), parentContactNum INT(10))',
                  []
                );
              }
            }
          );
        });
      }, []);


      useEffect(() => {
        db.transaction(function (txn) {
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_education'",
            [],
            function (tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS table_education', []);
                txn.executeSql(
                    'CREATE TABLE IF NOT EXISTS table_education(edu_id INTEGER PRIMARY KEY AUTOINCREMENT, qualification VARCHAR(20), instituteName VARCHAR(20), startedDate Date, endDate Date, grade VARCHAR(10), student_id INTEGER, FOREIGN KEY(student_id) REFERENCES table_student(student_id) ON UPDATE CASCADE)',
                  []
                );
              }
            }
          );
        });
      }, []);


      let [flatListItems, setFlatListItems] = useState([]);

      useEffect(() => {
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setFlatListItems(temp);
          });
        });
      }, []);


      // let listViewItemSeparator = () => {
      //   return (
      //     <View
      //       style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }}
      //     />
      //   );
      // };
    
      // let listItemView = (item) => {
      //   return (
      //     <View
      //       key={item.user_id}
      //       style={{ backgroundColor: 'red', padding: 20 }}>
      //       <Text>Id: {item.user_id}</Text>
      //       <Text>Name: {item.name}</Text>
      //       <Text>Email: {item.email}</Text>
      //       <Text>Password: {item.password}</Text>
      //     </View>
      //   );
      // };

      let [inputUserId, setInputUserId] = useState('');
      let [userData, setUserData] = useState({});

      let searchUser = () => {
        console.log(inputUserId);
        setUserData({});
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM table_user where user_id = ?',
            [inputUserId],
            (tx, results) => {
              var len = results.rows.length;
              console.log('len', len);
              if (len > 0) {
                setUserData(results.rows.item(0));
              } else {
                alert('No user found');
              }
            }
          );
        });
      };
    

  return (
    <NativeBaseProvider>
             {/* <VStack style={style.containerOne} space={7}> */}
        <Center>
      <Heading style={style.heading} mt="10%" size="xl" color="blue.500" bold>
         Home Page
        </Heading>
            <Input 
              mx="3" 
              placeholder="Enter User Id" 
              onChangeText={(inputUserId) => setInputUserId(inputUserId)}
              w="80%"/>
          <Button
            style={style.btn}
            // style={{marginTop: '5%'}}
            variant="link"
            onPress={searchUser}>
            Search
          </Button>

          </Center>
          <VStack style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }} space={5}>
            <Text>User Id: {userData.user_id}</Text>
            <Text>User Name: {userData.name}</Text>
            <Text>User Email: {userData.email}</Text>
            {/* <Text>User Password: {userData.password}</Text> */}
          </VStack>

          
          {/* </VStack> */}
          
      {/* <SafeAreaView style={{ flex: 1 }}> */}
        <Center>
        {/* <View style={{ flex: 1 }}>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
            </VStack>
        </View> */}
         
        <View style={style.container}>
            <FlatList
                // data={posts}
                renderItem={({ item }) =>
                    <TouchableCard data={item} nav={navigation}/>
                }
            />
        </View>
        
        </Center>
        {/* </SafeAreaView> */}
      
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({
  containerOne:{
    justifyContent:'center',
    alignItems:'center',
     marginTop: '20%',
    backgroundColor:'red',
    flex: 1,
   },

    container:{
        paddingTop: 20, 
        paddingHorizontal: 20,
        // width:'80%'
    },

    card:{
        // borderWidth:1,
        marginBottom:'5%',
        padding:5,
        backgroundColor:"white",
        borderRadius: 10,
        
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        
        elevation: 5,
    },

    logo: {
        width: 100,
        height: 100,
        resizeMode:"contain",
        // backgroundColor:"pink"
      },
      heading:{
        marginBottom: 30
       },
    
       btn:{
        backgroundColor:"#469AFF",
        width:"80%",
        marginTop:"5%",
        
       },
})