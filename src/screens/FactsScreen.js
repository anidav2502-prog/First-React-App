import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const FactsScreen = () => {
    let message='Paradajz je voće';
    const message2='Lorem ipsum is a dummy text';
    const message3='Žirafama je jezik ljubičast';

    return (
        <View>
            <Text style={styles.mystyle}>Paradajz je voće</Text>
            <Text style={styles.mystyle2}>{message2}</Text>
            <Text style={styles.mystyle3}>{message3}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    mystyle:{
        fontSize:30,
        color: 'blue',
        fontStyle:'italic',
    },
    mystyle2:{
        fontSize:50,
        color: 'red',
    },
    mystyle3:{
        fontSize:50,
        color: 'green',
    },
});

export default FactsScreen;