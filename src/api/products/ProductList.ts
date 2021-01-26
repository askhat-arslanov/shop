import data from './data.json'
import names from './names.json'

import ProductListConverter from './ProductListConverter'
import { Product } from './types'

export class ProductList {
  async makeRequest(): Promise<Product[] | undefined> {
    try {
      return new ProductListConverter().convert(data.Value.Goods, names)
    } catch (e) {
      // Throw error to logger
    }
  }
}
