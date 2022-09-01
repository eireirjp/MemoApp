import React from 'react';
import {View,ScrollView,StyleSheet,Text} from 'react-native';

import AppBar from '../compornents/AppBar';
import CircleButton from '../compornents/CircleButton';

export default function MemoDetailScreen(){
  return(
    <View>
      <AppBar />
      <View>
        <Text>買い物リスト</Text>
        <Text>2020年12月24日 10:00</Text>
      </View>
      <ScrollView>
        <Text>
          買い物リスト
          書体やレイアウトなどを確認するために用います。
          本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>
      <CircleButton>+</CircleButton>
    </View>
  );
}
