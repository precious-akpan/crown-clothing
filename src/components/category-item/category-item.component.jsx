import "./category-item.styles";
import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryItemContainer,
} from "./category-item.styles";
import { useNavigate } from "react-router-dom";

const CategoryItemComponent = ({ title, imageUrl, linkUrl }) => {
  const navigate = useNavigate();
    console.log(linkUrl);
    const handleNavigate = () => navigate(linkUrl);
  return (
    <CategoryItemContainer onClick={handleNavigate}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryItemContainer>
  );
};

export default CategoryItemComponent;
