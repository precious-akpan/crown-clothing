import CategoryItemComponent from "../category-item/category-item.component";
import {CategoriesContainer} from "./Directory.styles";

const DirectoryComponent = () => {
    const categories = [
        {
            title: "hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            id: 1,
            linkUrl: "shop/hats",
        },
        {
            title: "jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            id: 2,
            linkUrl: "shop/jackets",
        },
        {
            title: "sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            id: 3,
            linkUrl: "shop/sneakers",
        },
        {
            title: "women's",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            size: "large",
            id: 4,
            linkUrl: "shop/womens",
        },
        {
            title: "men's",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
            size: "large",
            id: 5,
            linkUrl: "shop/mens",
        },
    ];

    return (
        <CategoriesContainer >
            {categories.map(({title, id, linkUrl, imageUrl}) => (
                <CategoryItemComponent key={id} title={title} linkUrl={linkUrl} imageUrl={imageUrl}/>
            ))}
        </CategoriesContainer>);
}


export default DirectoryComponent;