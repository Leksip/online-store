export interface Product {
  id?: number,
  title: string,
  price: number,
  year: string,
  image?: string,
  configure: ProductConfig
}

export interface ProductConfig {
  chip: string,
  ssd: string,
  memory: string,
  display: string
}
