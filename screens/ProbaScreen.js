import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ProbaScreen = () => {
    let message='Proba 1!!';
    const message2='Proba text 2.';

    return (
        <View>
            <Text style={styles.mystyle}>Proba 1!!</Text>
            <Text style={styles.mystyle2}>{message2}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    mystyle:{
        fontSize:30,
    },
    mystyle2:{
        fontSize:60,
    },
});

export default ProbaScreen;