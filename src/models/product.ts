export interface Product {
    id: number
    title: string
    price: number
    quantity: number
    image: string
    isNew: boolean
    isSoonEnding: boolean
}

export interface BackendProductsData {
    products: Product[]
}