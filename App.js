import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TodoList from './components/TodoList';


export default function App() {

  const [list, setList] = useState([])

  return (
    <View style={styles.container}>
      <TodoList list={list} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '8%',
    paddingLeft: 15,
    paddingRight: 15,

  },
});
