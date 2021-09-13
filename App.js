import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, SafeAreaView } from 'react-native';
import TodoList from './components/TodoList';
import Form from './components/Form';

export default function App() {

  const list = useState(
    [
      { id: 1, text: 'abc' },
      { id: 2, text: 'def' }
    ]
  )

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Form />
        <TodoList list={list} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    paddingLeft: 15,
    paddingRight: 15,

  },
});
