import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextCounter from './components/TextCounter';
import { Constants } from 'expo'

export default function App() {
  return (
    <View style={styles.container}>
      <TextCounter />
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
