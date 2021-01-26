export type ProductItem = {
  name: string;
  price: number;
  id: number;
  count: number;
}

export type Product = {
  name: string;
  items: ProductItem[];
}

export type ProductsDict = {
  [key in string | number]: {
    items: ProductItem[];
    name: string;
  };
}

export type ProductResponse = {
  C: number;
  T: number;
  G: number;
  P: number;
}

export type NameResponse = {
  [key in string | number]: {
    G: string;
    B: {
      [key in string | number]: {
        N: string;
        T: number | string;
      };
    };
  };
}
