import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextCounter from './components/TextCounter';

export default function App() {
  return (
    <View style={styles.container}>
      <TextCounter limit={20} />
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
