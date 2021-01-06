import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

import { CreateEntry } from './CreateEntry';
import { sample } from '../data/sample';
import { Item, NewItem } from './types';
import { ItemCard } from './ItemCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  summary: {
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
  },
});

function byPointsAndName( a: Item, b: Item ) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

export const Todos = () => {
  const defaultItems = sample.map((item, index) => ({ key: `item${index}`, ...item }));
  defaultItems.sort(byPointsAndName);
  const [items, setItems] = useState<Item[]>(defaultItems);

  const addItem = (newItem: NewItem) => {
    const item = { key: `item${items.length}`, ...newItem };
    const sortedItems = [...items, item].sort(byPointsAndName);
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
          <ItemCard
            key={item.key}
            onDelete={() => deleteItem(item.key)}
          >{item.name}</ItemCard>
        )}
      />
      <Text style={styles.summary} testID="summary">{`There ${items.length == 1 ? 'is' : 'are'} ${items.length > 0 ? items.length : 'no'} item${items.length == 1 ? '' : 's'}`}</Text>
    </View>
  )

};