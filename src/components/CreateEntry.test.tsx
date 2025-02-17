import 'react-native';
import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';


import { CreateEntry } from './CreateEntry';

describe('<CreateEntry />', () => {
  it('saves item', () => {
    const onSaveMock = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(<CreateEntry onSave={onSaveMock} />);

    fireEvent.changeText(getByPlaceholderText('Name'), "Some item");
    fireEvent.press(getByTestId('addButton'));

    expect(onSaveMock).toHaveBeenCalledWith({ name: 'Some item', points: 0 });
  });

  it('does not save empty item', () => {
    const onSaveMock = jest.fn();

    const { getByTestId, getByPlaceholderText } = render(<CreateEntry onSave={onSaveMock} />);

    fireEvent.changeText(getByPlaceholderText('Name'), "");
    fireEvent.press(getByTestId('addButton'));

    expect(onSaveMock).not.toHaveBeenCalled();
  });

  it('parses points', () => {
    const onSaveMock = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(<CreateEntry onSave={onSaveMock} />);

    fireEvent.changeText(getByPlaceholderText('Name'), "Drink coffee 20pts");
    fireEvent.press(getByTestId('addButton'));

    expect(onSaveMock).toHaveBeenCalledWith({ name: 'Drink coffee', points: 20 });
  })
});