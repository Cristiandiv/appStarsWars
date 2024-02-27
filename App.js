import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const request = async(callback)=>{
  const response = await fetch('http://swapi.dev/api/people/'); 
  const parsed = await response.json();
  callback(parsed.results);
}

export default function App() {

  const [registros, setRegistros] = useState([]);

  useEffect(()=>{
      request(setRegistros);
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> API do StarWars</Text>
      <FlatList
      data={registros}
      renderItem={({item})=>
      <View style={styles.itens}>
      <Text>Nome:{item.name}{'\n'}</Text>
      <Text>Peso:{item.mass}</Text>
      </View>
      }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
    paddingBottom:25,
    fontSize: 20,
    },

  itens:{
    backgroundColor: '#dcdcdc',
    flex: 1, 
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    paddingVertical: 10,
    color: '#fff',
    fontSize: 20
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
    marginVertical: 30
  },
});
