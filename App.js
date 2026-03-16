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
import BoxScreen from './src/screens/BoxScreen';
import Mc11 from './src/screens/MiniChallenge11';
import PostsScreen from './src/screens/PostsScreen';
import UsersScreen from './src/screens/UsersScreen';
import Modul13 from './src/screens/Modul13';
import CountriesScreen from './src/screens/CountriesScreen';
import CountryDetails from './src/screens/CountryDetails';
import ProductScreen from './src/screens/ProductScreen';

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
        <Stack.Screen name='Box' component={BoxScreen}/>
        <Stack.Screen name='Mc11' component={Mc11}/>
        <Stack.Screen name='Posts' component={PostsScreen}/>
        <Stack.Screen name='Users' component={UsersScreen}/>
        <Stack.Screen name='Modul13' component={Modul13}/>
        <Stack.Screen name='Countries' component={CountriesScreen}/>
        <Stack.Screen name='Country' component={CountryDetails}/>
        <Stack.Screen name='Products' component={ProductScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}