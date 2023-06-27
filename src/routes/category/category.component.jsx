import "./category.styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCardComponent from "../../components/product-card/product-card.component";
import { CategoryContainerBody } from "./category.styles";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../store/categories/categories.selector";

const CategoryComponent = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categoriesSelector);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  const updatedCategory =
    category === "womens"
      ? category.slice(0, -1).toUpperCase() + "'S"
      : category === "mens"
      ? category.slice(0, -1).toUpperCase() + "'S"
      : category.toUpperCase();

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
