import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class Modul13 extends React.Component{
  constructor() {
    super();
    this.state = {
        users:[],
    };
  }

  async componentDidMount(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonData = await data.json()
    this.setState({
        users: jsonData,
    });
  }

  render() {
    const {users}=this.state;
    return (
      <View>
        <Text style={{fontSize:35, fontStyle:'italic'}}> Modul13 </Text>

        <FlatList
        keyExtractor={(users)=>users.id}
        data={users}
        renderItem={({item})=>(
            <View style={{
                flex:1,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignContent: 'stretch',
                padding: 20,
                margin: 5,
                backgroundColor: 'pink',
            }}>
                <Text style={styles.text}>User id: {item.id}</Text>
                <Text style={styles.text2}>Name: {item.name}</Text>
                <Text style={styles.text}>Username: {item.username}</Text>
                <Text style={styles.text2}>Email: {item.email}</Text>
            </View>
        )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    text:{
        color: 'green',
        fontWeight: 'bold',
    },
    text2:{
        color: 'blue',
        fontWeight: 'bold',
    }
    
});

export default Modul13;
