export type Item = {
  id: number;
  count: number;
  name: string;
  price: number;
  inCart: number;
}

export type State = {
  itemList: Item[];
}
