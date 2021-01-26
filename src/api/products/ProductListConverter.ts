import { Product, ProductsDict, ProductResponse, NameResponse } from './types'

export default class ProductListConverter {
  convert(data: ProductResponse[], names: NameResponse): Product[] {
    const productsDict: ProductsDict = {}

    data.forEach((product: ProductResponse) => {
      const {
        C: price,
        P: count,
        T: id,
        G: groupId
      } = product

      const categoryName = names[groupId]['G']
      const name = names[groupId]['B'][id]['N']
      const result = { price, count, name, id }

      if (productsDict[groupId]) {
        productsDict[groupId].items.push(result)
      } else {
        productsDict[groupId] = {
          name: categoryName,
          items: [result]
        }
      }
    })

    return Object.values(productsDict)
  }
}
