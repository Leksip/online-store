export interface Product {
  id: number,
  title: string,
  price: number,
  image: string,
  configure: ProductConfig
}

export interface ProductConfig {
  chip: string,
  ssd: string,
  memory: string,
  display: string
}
