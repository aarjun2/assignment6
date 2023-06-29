import { useProductsContext } from "../App";

function TotalPrice() {
    const { products } = useProductsContext();
    const totalPrice = products.reduce((accumulator, product) => accumulator + product.price, 0);
    return (
        <>
            <h1> Total Price </h1>
            <h1> {totalPrice} </h1>
        </>
    )
}

export default TotalPrice;