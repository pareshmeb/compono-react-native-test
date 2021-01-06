import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

import { CreateEntry } from './CreateEntry';
import { sample } from '../data/sample';

type Item = {
  key: string;
  title: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  summary: {
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopColor: 'silver',
    borderTopWidth: 1,
  }
});

function compare( a: Item, b: Item ) {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}

export const Todos = () => {
  const defaultSet = sample.map((title, index) => ({ key: index.toString(), title }));
  const [items, setItems] = useState<Item[]>(defaultSet);

  const addItem = (item: string) => {
    const sortedItems = [...items, { key: `item${items.length}`, title: item }].sort(compare)
    setItems(sortedItems);
  }

  const deleteItem = (itemKey: string) => {
    setItems(items.filter(item => item.key !== itemKey));
  }

  return (
    <View style={styles.container}>
      <CreateEntry onSave={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View key={item.key} testID="item" style={styles.itemView}>
            <Text>{item.title}</Text>
            <Button testID="deleteButton" onPress={_ => deleteItem(item.key)} title="Delete" />
          </View>
        )}
      />
      <Text style={styles.summary} testID="summary">{`There ${items.length == 1 ? 'is' : 'are'} ${items.length > 0 ? items.length : 'no'} item${items.length == 1 ? '' : 's'}`}</Text>
    </View>
  )

};