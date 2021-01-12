import 'react-native';
import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import { Todos } from './Todos';

describe('<Todos />', () => {
  it('renders default items and add items', () => {
    const { getAllByTestId, getByTestId, getByPlaceholderText } = render(<Todos />);

    const items = getAllByTestId('itemCard');
    expect(items).toHaveLength(3);

    expect(getByTestId('summary').props.children).toBe('There are 3 items');

    fireEvent.changeText(getByPlaceholderText('Name'), "Some item");
    fireEvent.press(getByTestId('addButton'));

    const moreItems = getAllByTestId('itemCard');
    expect(moreItems).toHaveLength(4);

    expect(getByTestId('summary').props.children).toBe('There are 4 items');
  });
  it('renders items in order', () => {
    const { getAllByTestId } = render(<Todos />);

    const itemNames = getAllByTestId('itemName');
    expect(itemNames).toHaveLength(3);
    expect(itemNames[0].props.children).toBe('Get the job 👍🏼');
    expect(itemNames[1].props.children).toBe('Make a list');
    expect(itemNames[2].props.children).toBe('Check it twice');
  });

  it('renders items as critical', () => {
    const { getAllByTestId } = render(<Todos />);

    const itemNames = getAllByTestId('itemName');
    expect(itemNames).toHaveLength(3);
    expect(itemNames[0].props.style.fontWeight).toBe('bold');
    expect(itemNames[1].props.style.fontWeight).toBe(undefined);
    expect(itemNames[2].props.style.fontWeight).toBe(undefined);
  });
});