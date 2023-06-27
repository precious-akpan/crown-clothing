import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {categoriesSelector} from "../../store/categories/categories.selector";

const CategoriesPreviewComponent = () => {
const categoriesMap = useSelector(categoriesSelector)
    return <>
        {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title]
            return <CategoryPreviewComponent title={title} key={title} product={products}/>

        })}
    </>;
};
export default CategoriesPreviewComponent;
