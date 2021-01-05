import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CreateEntry } from './CreateEntry';

type Item = {
  key: string;
  title: string;
}

const styles = StyleSheet.create({
  summary: {
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  itemView: {
    flexDirection: 'row',
    padding: 12,
    borderTopColor: 'silver',
    borderTopWidth: 1,
  }
});

export const Todos = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: string) => setItems([...items, { key: `item${items.length}`, title: item }]);

  return (
    <View>
      <Text style={styles.summary}>There {items.length == 1 ? 'is' : 'are'} {items.length > 0 ? items.length : 'no'} item{items.length == 1 ? '' : 's'}</Text>
      <CreateEntry onSave={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View key={item.key} style={styles.itemView}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  )

};