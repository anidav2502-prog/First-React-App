import {React} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const movies = [
    { title: 'Jumanji IV', ry: 2020},
    { title: 'The Maze Runner', ry: 2010},
    { title: 'Mean Girls', ry: 1999},
    { title: 'Climate Change: Documentary', ry: 2020},
];

const MovieScreen = () => {
    return (
        <View>
            <Text>MovieScreen</Text>
            <FlatList
                keyExtractor={(movies)=>movies.title}
                data={movies}
                renderItem={({item}) => {
                    return (
                        <Text style={styles.style2}>{item.title}  -  {item.ry}</Text>
                    );
                }}
            />
        </View>
    );
};

const styles=StyleSheet.create({
    style2020: {
        fontSize:35,
        color: 'red',
    },
    style1999: {
        fontSize:30,
        color: 'blue',
    },
    style2010: {
        fontSize: 20,
        color: 'green',
    },
});

export default MovieScreen;