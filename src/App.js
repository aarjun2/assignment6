import './App.css';
import Main from './components/Main';
import ProductList from './components/ProductList';
import TotalPrice from './components/TotalPrice';
import {  useContext, createContext, useState } from "react";

const productsContext = createContext();

function App() {
  let [products,setProducts] = useState([
    {"id": 1, "name": "Product 1", "price": 10},
    {"id": 2, "name": "Product 2", "price": 5},
    {"id": 3, "name": "Product 3", "price": 15},
    {"id": 4, "name": "Product 4", "price": 8},
    {"id": 5, "name": "Product 5", "price": 12}
  ]);
  
  return (
    <>
      <productsContext.Provider value={{products, setProducts}}>
        <Main />
        <ProductList />
        <TotalPrice />
      </productsContext.Provider>
    </>
  );
}

export const useProductsContext = () => useContext(productsContext);
export default App;
