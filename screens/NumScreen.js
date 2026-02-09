import {React} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const numbers = [
    {num: 1},
    {num: 2},
    {num: 3},
    {num: 4},
    {num: 5},
    {num: 6},
    {num: 7},
    {num: 8},
    {num: 9},
    {num: 10},
    {num: 11},
    {num: 12},
    {num: 13},
    {num: 14},
    {num: 15},
    {num: 16},
    {num: 17},
    {num: 18},
    {num: 19},
    {num: 20},
    
];

const NumScreen = () => {
    return (
        <View>
            <Text>NumScreen</Text>
            <FlatList
                keyExtractor={(numbers)=>numbers.num}
                data={numbers}
                renderItem={({item}) => {
                    return (
                        <Text>{item.num}</Text>
                    );
                }}
            />
        </View>
    );
};


export default NumScreen;