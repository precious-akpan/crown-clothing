import Button from "../button/button.component";
import './product-card.style.scss'

const ProductCardComponent = ({product}) => {
    const {name,price,imageUrl} = product
    return <div className={'product-card-container'}>
        <img src={imageUrl} alt={name}/>
        <footer className={'footer'}>
            <span className="name">{name}</span>
            <span className="price">₦{price}</span>
        </footer>
        <Button buttonType={'inverted'}>Add To Cart</Button>
    </div>
}
export default ProductCardComponent;