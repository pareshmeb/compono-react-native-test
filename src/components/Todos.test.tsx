import 'react-native';
import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';


import { Todos } from './Todos';

describe('<Todos />', () => {
  it('renders', () => {
    const { getAllByTestId, getByTestId } = render(<Todos />);

    const items = getAllByTestId('item');
    expect(items).toHaveLength(3);

    expect(getByTestId('summary').props.children).toBe('There are 3 items');
  });

  it('adds items', () => {

    const { getAllByTestId, getByTestId, getByPlaceholderText } = render(<Todos />);

    fireEvent.changeText(getByPlaceholderText('Name'), "Some item");
    fireEvent.press(getByTestId('addButton'));

    const items = getAllByTestId('item');
    expect(items).toHaveLength(4);

    expect(getByTestId('summary').props.children).toBe('There are 4 items');
  })
});