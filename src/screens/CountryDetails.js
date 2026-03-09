import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import data from '../data/countries.json';

export default class CountryDetails extends Component {
  constructor() {
    super();
    this.state = {
        countries: [],
    };
  }

  componentDidMount(){
    this.setState({
        countries: data,
    }); }

  render() {
    return (
      <View>
        <Text> Country Details </Text>
        
      </View>
    );

    
  }
}

const styles = StyleSheet.create({
    
});