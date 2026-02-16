import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MovieScreen from './screens/MovieScreen';
import ButtonScreen from './screens/ButtonScreen';
import SPIScreen from './screens/SPIScreen';
import MenuScreen from './screens/MenuScreen';
import MainScreen from './screens/MainScreen';
import ListScreen from './screens/ListScreen';
import ProfilesScreen from './screens/ProfilesScreen';

const Stack =createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Menu' component={MenuScreen}/>
        <Stack.Screen name='Profiles' component={ProfilesScreen}/>
        <Stack.Screen name='Main' component={MainScreen}/>
        <Stack.Screen name='Button' component={ButtonScreen}/>
        <Stack.Screen name='List' component={ListScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}