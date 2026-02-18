import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const ButtonScreen = () => {
    let counter=0
    return (
        <View>
            <Text style={styles.textStyle}>Button Screen</Text>
            <Button title='Click me!'
                    color='purple'
                    style={styles.b}
                    onPress={() => console.log('Button clicked num: ', counter++)}/>

                    <TouchableOpacity 
                        style={styles.touchableButton}
                        onPress={()=>console.log('TouchableOpacity clicked!')}>
                        <Text style={styles.btnText}>This is a link.</Text>
                    </TouchableOpacity>
        </View>
    );
};

const styles=StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 15,
        marginBottom: 10,
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

export default ButtonScreen;