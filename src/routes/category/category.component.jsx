import "./category.styles";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCardComponent from "../../components/product-card/product-card.component";
import {CategoryContainer, CategoryContainerBody} from "./category.styles";

const CategoryComponent = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <>
      <h2>{category.toUpperCase()}</h2>
      <CategoryContainerBody>
        {products &&
          products.map((product) => (
            <ProductCardComponent key={product.id} product={product} />
          ))}
      </CategoryContainerBody>
    </>
  );
};
export default CategoryComponent;
