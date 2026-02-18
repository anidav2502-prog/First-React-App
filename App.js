import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MovieScreen from './src/screens/MovieScreen';
import ButtonScreen from './src/screens/ButtonScreen';
import SPIScreen from './src/screens/SPIScreen';
import MenuScreen from './src/screens/MenuScreen';
import MainScreen from './src/screens/MainScreen';
import ListScreen from './src/screens/ListScreen';
import ProfilesScreen from './src/screens/ProfilesScreen';
import StudentScreen from './src/screens/StudentScreen';

const Stack =createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen name='Menu' component={MenuScreen}/>
        <Stack.Screen name='Profiles' component={ProfilesScreen}/>
        <Stack.Screen name='Main' component={MainScreen}/>
        <Stack.Screen name='Button' component={ButtonScreen}/>
        <Stack.Screen name='List' component={ListScreen}/>
        <Stack.Screen name='Student' component={StudentScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}