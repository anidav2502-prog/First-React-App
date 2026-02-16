import {React} from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';

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
            <TouchableOpacity onPress={()=>props.navigation.goBack()}>
            <Text style={styles.buttonText}>Go back</Text></TouchableOpacity>
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
    touchableButton: {
        backgroundColor: 'purple',
        marginVertical: 15,
        paddingVertical: 2,
        borderRadius: 6,
        marginHorizontal: 20,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
    },
});

export default ListScreen;