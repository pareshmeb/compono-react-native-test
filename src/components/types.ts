export type Item = {
  key: string;
  name: string;
  points: number;
}

export type NewItem = Omit<Item, 'key'>;