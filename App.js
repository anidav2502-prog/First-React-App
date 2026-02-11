import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MovieScreen from './screens/MovieScreen';
import ButtonScreen from './screens/ButtonScreen';
import SPIScreen from './screens/SPIScreen';

const Stack =createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={SPIScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}