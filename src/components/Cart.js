import { useProductsContext } from "../App";
import Product from "./Product";

function Cart() {
    const { products } = useProductsContext();
    return (
        <>
            <h1> Cart items: </h1>
            {products.map((product, index) => {
                return <Product key={index} product={product} />
            })}
        </>
    )
}

export default Cart;