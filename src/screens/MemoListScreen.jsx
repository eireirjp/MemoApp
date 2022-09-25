import React from 'react';
import { View,StyleSheet } from 'react-native';

import MemoList from '../compornents/MemoList';
import CircleButton from '../compornents/CircleButton'

export default function MemoListScreen(props){
  const {navigation} =props;
  return(
    <View style={styles.container}>
      <MemoList />
      <CircleButton
      onPress={()=>{ navigation.navigate('MemoCreate') }}
      >+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
