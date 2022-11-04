import { View, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, VStack, HStack, Heading, Text, Container, Center } from "native-base";
import TouchableCard from './../components/TouchableCard';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

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
                    'CREATE TABLE IF NOT EXISTS table_education(edu_id INTEGER PRIMARY KEY AUTOINCREMENT, Qualification VARCHAR(20), instituteName VARCHAR(20), startedDate Date, endDate Date, grade VARCHAR(10), student_id INTEGER,FOREIGN KEY (student_id) REFERENCES table_student(student_id))',
                  []
                );
              }
            }
          );
        });
      }, []);

  return (
    <NativeBaseProvider>
        <Center>
        <View style={style.container}>
            <FlatList
                // data={posts}
                renderItem={({ item }) =>
                    <TouchableCard data={item} nav={navigation}/>
                }
            />
        </View>
        </Center>
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({
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
})