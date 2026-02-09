import {React} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const students = [
    {id: 0, name: 'Alek', surname: 'Novakovic', age: 17},
    {id: 1, name: 'Anida', surname: 'Veledar', age: 14},
    {id: 2, name: 'Danin', surname: 'Zulfic', age: 17},
    {id: 3, name: 'Marko', surname: 'Forcan', age: 17},
];

const ListScreen = () => {
    return (
        <View>
            <Text style={styles.style1}>ListScreen</Text>
            <FlatList
                keyExtractor={(students)=>students.id}
                data={students}
                renderItem={({item}) => {
                    return (
                        <Text style={styles.style2}>{item.id}. {item.name} {item.surname} - {item.age}</Text>
                    );
                }}
                //horizontal={true}
                //showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles=StyleSheet.create({
    style1: {
        fontSize:35,
        color: 'red',
    },
    style2: {
        fontSize:30,
        color: 'blue',
    },
});

export default ListScreen;