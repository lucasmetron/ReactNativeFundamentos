import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, SafeAreaView } from 'react-native';
import TodoList from './components/TodoList';
import Form from './components/Form';

import { TodoService } from './services/TodoService';

export default function App() {

  // const [list, setList] = useState([]);

  const list = useState(
    [
      { id: 1, text: 'abc' },
      { id: 2, text: 'def' },
    ]
  )
  // useEffect(() => {

  //   async function getInitialList() {
  //     const newList = await TodoService.list()
  //     return newList
  //   }

  //   setList(getInitialList())

  // }, []);

  async function add(text) {
    const newItem = await TodoService.create({ text })
    const newList = [...list, newItem]
    setList({ newList })
  }

  async function remove(item) {
    await TodoService.remove(item.id)
    const newList = list.filter(oldItem => oldItem.id !== item.id)
    setList({ newList })
  }



  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Form onAdd={add} />
        <TodoList list={list} onRemove={remove} />
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
