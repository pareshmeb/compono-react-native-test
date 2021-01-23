import React, { useEffect, useState } from 'react';
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
  critical: {
    fontWeight: 'bold'
  }
});

const sortItems = (testingITems: Item[]) => {
  testingITems.sort((item, item2)=>{
    if(item.points < item2.points)  {
      return 1;
    } else if (item.points > item2.points){
      return -1;
    }
    return 0;
  });
}

export const Todos = () => {
  const defaultItems = sample.map((item, index) => ({ key: `item${index}`, ...item }));
  sortItems(defaultItems);
  const [items, setItems] = useState<Item[]>(defaultItems);
  
  useEffect(()=>{
    sortItems(items);
  }, [items]);
  

  const addItem = (newItem: NewItem) => {
    const item = { key: `item${items.length}`, ...newItem };
    const sortedItems = [...items, item];
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
            critical = {item.points >= 10 ? true: false}
            key={item.key}
            onDelete={() => deleteItem(item.key)}
          >{item.name}</ItemCard>
        )}
      />
      <Text style={styles.summary} testID="summary">{`There ${items.length == 1 ? 'is' : 'are'} ${items.length > 0 ? items.length : 'no'} item${items.length == 1 ? '' : 's'}`}</Text>
    </View>
  )

};