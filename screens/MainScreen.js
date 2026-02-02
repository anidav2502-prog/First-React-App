//library
import React from 'react';
import {Text, StyleSheet, View} from "react-native";

//components
const MainScreen= () => {
    return (
        <View>
            <Text style={styles.textStyle}>Main Screen</Text>
        </View>
    );
};

//styles
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
});

//export
export default MainScreen;