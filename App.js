import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QuoteScreen from './screens/QuoteScreen';

const Stack =createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={QuoteScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}