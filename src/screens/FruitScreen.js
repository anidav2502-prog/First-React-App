import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const FruitScreen = () => {
    let message='Banana';
    const message2='Jabuka';

    return (
        <View>
            <Text>Banana</Text>
            <Text>{message2}</Text>
        </View>
    );
};

export default FruitScreen;