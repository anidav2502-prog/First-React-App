import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const QuoteScreen = () => {
    let message='Live your life to the fullest!';
    const message2='Anonimno';

    return (
        <View>
            <Text style={styles.mystyle}>Live your life to the fullest!</Text>
            <Text style={styles.mystyle2}>{message2}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    mystyle:{
        fontSize:30,
    },
    mystyle2:{
        fontSize:20,
    },
});

export default QuoteScreen;