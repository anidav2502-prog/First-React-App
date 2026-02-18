import React from 'react';
import {View, Text,  FlatList} from 'react-native';

const info = [
    {id: 1, name: 'Anida', surname: 'Veledar', birthday: '25th February', age: 14},
]

const hobby = [
    {name: 'Reading'},
    {name: 'Karate'},
    {name: 'Skiing'}
]

const SPIScreen = () => {
    return (
        <View>
            <Text>Student Personal Info</Text>
            <FlatList
                keyExtractor={(info)=>info.name}
                data={info}
                renderItem={({item})=>{
                    return (
                        <Text>{item.id}. Name: {item.name} Surname: {item.surname} Birthday: {item.birthday} Age: {item.age}</Text> );
                }}
            />
        </View>
    );
};

export default SPIScreen;