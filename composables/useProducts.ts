import productsData from "./productsData";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    brand: string;
    rating?: number;
    description?: string;
}

export const useProducts = () => {
    const newProducts = productsData.newProducts
    const allProducts = productsData.allProducts
    return {newProducts, allProducts}
}
