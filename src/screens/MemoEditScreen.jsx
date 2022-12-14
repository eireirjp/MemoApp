import React from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, } from 'react-native';

import CircleButton from '../compornents/CircleButton';

export default function MemoEditScreen(props){
  const {navigation} = props;
  return (
    <KeyboardAvoidingView style={StyleSheet.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton
      style={{right:40,buttom:40}}
      onPress={()=>{ navigation.goBack();}}
      >+</CircleButton>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  inputContainer:{
    paddingVertical:32,
    paddingHorizontal:27,
    //flex:1,
  },
  input:{
    //flex:1,
    textAlignVertical:'top',
    fontSize: 16,
    lineHeight: 24,
  },
});


