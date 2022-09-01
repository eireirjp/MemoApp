import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppBar from './src/compornents/AppBar';
import MemoList from './src/compornents/MemoList';
import CircleButton from './src/compornents/CircleButton'

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
