import productsData from "./productsData";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    brand: string;
    rating?: number;
}

export const useProducts = () => {
    const newProducts = productsData.newProducts
    return {newProducts}
}
