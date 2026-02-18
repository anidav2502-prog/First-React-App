import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

// var, let, const
const ExerciseScreen = () => {
    let message='Hi there!!';
    message='Hi there from DS!';

    return (
        <View>
            <Text>Hi there</Text>
            <Text>{message}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
});

export default ExerciseScreen;