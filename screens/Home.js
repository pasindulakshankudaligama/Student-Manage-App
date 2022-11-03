import { View, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, VStack, HStack, Heading, Text, Container, Center } from "native-base";
import TouchableCard from './../components/TouchableCard';

export default function Home({navigation}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://192.168.8.167:4000/vehicle')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    })

  return (
    <NativeBaseProvider>
        <Center>
        <View style={style.container}>
            <FlatList
                data={posts}
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