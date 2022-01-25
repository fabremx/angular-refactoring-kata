export interface Product {
    id: number
    title: string
    price: number
    quantity: number
    image: string
    isNew: boolean
    isSoonEnding: boolean
    [key: string]: number | boolean | string
}

export interface BackendProductsData {
    products: Product[]
}