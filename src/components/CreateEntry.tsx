import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

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
    borderColor: 'silver',
    borderWidth: 1,
    paddingHorizontal: 5,
    marginRight: 10,
  }
})

type Props = {
  onSave: (value: string) => void;
}

export const CreateEntry = ({ onSave }: Props) => {
  const [value, setValue] = useState<string>('');

  const handleAdd = () => {
    value && onSave(value);
    setValue('');
  }

  return (
    <View style={styles.layout}>
      <TextInput placeholder="Name" style={styles.input} onChangeText={setValue} value={value} onSubmitEditing={handleAdd} />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};