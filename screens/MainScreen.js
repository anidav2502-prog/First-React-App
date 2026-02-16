//library
import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

//components
const MainScreen= (props) => {
    console.log(props.navigation)
    return (
        <View>
            <Text style={styles.textStyle}>Main Screen</Text>
            <Button
                        title='Go to menu screen'
                        color='pink'
                        onPress={()=>props.navigation.navigate('Menu')}/>
            <TouchableOpacity onPress={()=>props.navigation.pop()}>
                <Text>Go to Profiles Screen
                </Text>
            </TouchableOpacity>
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