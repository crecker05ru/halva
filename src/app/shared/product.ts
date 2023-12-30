export interface Product {
  id: string
  title: string
  description: string
  price: number
  weight: number
  nutritions: Nutritions
  img: string
}

export interface Nutritions {
  kKal: number
  proteins: number
  fats: number
  carbs: number
}

export interface Products {
  products: Product[]
}