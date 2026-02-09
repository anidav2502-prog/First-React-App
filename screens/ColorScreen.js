import {React} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const colours = [
    {colour: 'blue'},
    {colour: 'red'},
    {colour: 'green'},
    {colour: 'yellow'},
];

const ColorScreen = () => {
    return (
        <View>
            <Text>ColorScreen</Text>
            <FlatList
                keyExtractor={(colours)=>colours.colour}
                data={colours}
                renderItem={({item}) => {
                    return (
                        <Text>{item.colour}</Text>
                    );
                }}
            />
        </View>
    );
};


export default ColorScreen;