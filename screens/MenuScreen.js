import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const MenuScreen = (props) => {
    console.log(props.navigation)
    return (
        <View>
            <Text style={styles.text}>Welcome to Menu Screen</Text>
            <Button
            title='Go to list screen'
            color='green'
            onPress={()=>props.navigation.navigate('List')}/>
            <Button
            title='Go to main screen'
            color='blue'
            onPress={()=>props.navigation.navigate('Main')}/>
            <Button
            color='red'
            title='Go to button screen'
            onPress={()=>props.navigation.navigate('Button')}/>
        </View>
    );
};

const styles=StyleSheet.create({
    text: {
        marginVertical: 20,
        fontSize: 20,
        textAlign: 'center',
    },
});

export default MenuScreen;