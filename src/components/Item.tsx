import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

// import { Item } from './types';

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopColor: 'silver',
    borderTopWidth: 1,
  }
});

export const Item = ({ item }) => (
  <View key={item.key} testID="item" style={styles.layout}>
    <Text testID="itemName">{item.name}</Text>
    <Button testID="itemDeleteButton" onPress={_ => deleteItem(item.key)} title="Delete" />
  </View>
);