import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { NewItem } from './types';

const styles = StyleSheet.create({
  layout: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 8,
    marginRight: 10,
  }
})

type Props = {
  onSave: (newItem: NewItem) => void;
}

export const CreateEntry = ({ onSave }: Props) => {
  const [value, setValue] = useState<string>('');

  const handleAdd = () => {
    let actualPoint: number = 0;
    let points = value.substr(-5);
    let name: string = value.substr(0, value.length-5);
    let actualPointString: string = points.substr(0, 2);
    if (isNaN(parseInt(actualPointString))) {
      actualPoint = 0;
      name = value;
    } else {
      actualPoint = parseInt(actualPointString.trim());
    }
    value && onSave({ name: name.trim(), points: actualPoint });
    setValue('');
  }

  return (
    <View style={styles.layout}>
      <TextInput placeholder="Name" style={styles.input} onChangeText={setValue} value={value} onSubmitEditing={handleAdd} />
      <Button testID="addButton" title="Add" onPress={handleAdd} />
    </View>
  );
};