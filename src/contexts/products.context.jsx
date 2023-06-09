import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
  addProduct: (product) => {},
  removeProduct: (productId) => null,
});
const productsPriceUpdated = PRODUCTS.map((product) => {
  product.price *= 100;
  return { ...product };
});
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsPriceUpdated);
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (productId) => {
    products.filter((currentProduct) => currentProduct.id !== productId);
  };
  // const value = {products,addProduct,removeProduct}
  const value = {products}
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
