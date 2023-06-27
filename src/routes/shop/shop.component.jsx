import {Route, Routes} from "react-router-dom";
import CategoriesPreviewComponent from "../categories-preview/categories-preview.component";
import CategoryComponent from "../category/category.component";
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase.utils";
import {setCategories} from "../../store/categories/categories.action";
import {useDispatch} from "react-redux";

const ShopComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function getCategoriesMap() {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray));
        }

        getCategoriesMap();
    }, []);

    return (
        <>
            <Routes>
                <Route index element={<CategoriesPreviewComponent/>}/>
                <Route path={':category'} element={<CategoryComponent/>}/>
            </Routes>
        </>
    );
};
export default ShopComponent;
