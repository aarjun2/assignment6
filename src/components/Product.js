function Product(props) {
    const {name, price} = props.product;
    return (
        <>
            <h2> {name} </h2>
            <h2> {price} </h2>
        </>
    );
}

export default Product;