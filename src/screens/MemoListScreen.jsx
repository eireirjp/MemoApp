import React from 'react';
import { View,StyleSheet } from 'react-native';

import AppBar from '../compornents/AppBar';
import MemoList from '../compornents/MemoList';
import CircleButton from '../compornents/CircleButton'

export default function MemoListScreen(){
  return(
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
