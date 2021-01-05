import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: { height: 40, borderColor: 'silver', borderWidth: 1, paddingHorizontal: 5, width: '90%' }
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
    <View style={{ padding: 8, flexDirection: 'row' }}>
      <TextInput placeholder="Name" style={styles.input} onChangeText={setValue} value={value} onSubmitEditing={handleAdd} />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};