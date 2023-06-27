import {createAction} from "../../utils/reducer/reducer.utils";
import {CATEGORIES_ACTION} from "./categories.types";

export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION.SET_CATEGORIES, categoriesArray)