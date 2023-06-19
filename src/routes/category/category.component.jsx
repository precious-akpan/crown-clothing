import "./category.styles";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCardComponent from "../../components/product-card/product-card.component";
import { CategoryContainerBody } from "./category.styles";

const CategoryComponent = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const updatedCategory =
    category === "womens"
      ? category.slice(0, -1).toUpperCase() + "'S"
      : category === "mens"
      ? category.slice(0, -1).toUpperCase() + "'S"
      : category.toUpperCase();
  console.log(updatedCategory);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  console.log(products);
  return (
    <>
      <h2>{updatedCategory}</h2>
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
