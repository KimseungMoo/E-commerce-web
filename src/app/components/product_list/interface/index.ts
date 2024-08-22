
export interface ProductType {
  id?: number
  title?: string
  price?: string
  category?: string
  description?: string
  image?: string
}

// export interface ProductListType {
//   list: ProductType[]
// }
export enum CategoryEnum {
  electronics = "electronics",
  jewelery = "jewelery",
  mens_clothing = "men's clothing",
  womens_clothing = "women's clothing"
}