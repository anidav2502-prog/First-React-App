import React from 'react';
import {Text, StyleSheet, View, Button} from "react-native";

const ProfilesScreen= (props) => {
    console.log(props.navigation)
    return (
        <View>
            <Text style={styles.textStyle}>Main Screen</Text>
            <Button
                        title='Go to main screen'
                        color='yellow'
                        onPress={()=>props.navigation.navigate('Main')}/>
        </View>
    );
};

export default ProfilesScreen;