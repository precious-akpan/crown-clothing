import "./category-preview.styles";
import ProductCardComponent from "../product-card/product-card.component";
import {
  CategoryPreview,
  CategoryPreviewContainer,
  CategoryTitleLink,
} from "./category-preview.styles";

const CategoryPreviewComponent = ({ title, product }) => {
    console.log(title);
    return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitleLink to={title}>{title.toUpperCase()}</CategoryTitleLink>
      </h2>
      <CategoryPreview>
        {product
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCardComponent key={product.id} product={product} />
          ))}
      </CategoryPreview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreviewComponent;
