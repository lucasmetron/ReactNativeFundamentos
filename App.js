import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
