import { useProductsContext } from "../App";
import { useState } from "react";

function ProductList() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState("");
    const { products, setProducts } = useProductsContext();
    const handleClick = () => {
        if (productName && productPrice) {
            const newProduct = {
                id: products.length + 1,
                name: productName,
                price: parseInt(productPrice)
            };
            setProducts([...products, newProduct]);
            setProductName("");
            setProductPrice("");
        }
    };
    return (
        <>
             <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <input
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
            />
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default ProductList;