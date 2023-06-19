import {useContext} from "react";
import {CategoriesContext} from "../../contexts/categories.context";
import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";

const CategoriesPreviewComponent = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title]
                console.log(title);
                return <CategoryPreviewComponent title={title} key={title} product={products}/>

            })}
        </>
    );
};
export default CategoriesPreviewComponent;
