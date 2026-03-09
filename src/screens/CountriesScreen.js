import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import data from '../data/countries.json';
import { Touchable } from 'react-native/types_generated/index';

export default class CountriesScreen extends Component {
  constructor() {
    super();
    this.state = {
        countries: [],
    };
  }

  componentDidMount(){
    this.setState({
        countries: data,
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.screenTitle}> Countries Screen </Text>
        <FlatList 
        data={this.state.countries}
        keyExtractor={(countries)=>countries.id}
        renderItem={({item})=> (
            <View style={styles.cardWrapper}>
                <TouchableOpacity>
                <Text>City name: {item.name}</Text>
                <Text>Country name: {item.country}</Text>
                <Text>Desc: {item.description}</Text>
                <Text>Population: {item.population}</Text></TouchableOpacity>
            </View>
        )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold',
    },
    cardWrapper: {
        backgroundColor: '#d6d6d6',
        marginBottom: 10,
    },
});