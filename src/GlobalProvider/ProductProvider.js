import React, { useState } from "react";

export const ProductContext = React.createContext();

function ProductProvider({ children }) {
  //for css
  const [state, setState] = useState(true);

  const gridView = () => {
    setState(true);
  };
  const listView = () => {
    setState(false);
  };

  //for Crud
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    amount: 0,
    description: "",
  });
  const addProduct = () => {
    setProductList([...productList, product]);
  };

  const removeProduct = (index) => {
    setProductList(productList.filter((e, i) => i !== index));
  };

  const updateProduct = (index, updatedExpense) => {
    const newExpenses = [...productList];
    newExpenses[index] = updatedExpense;
    setProductList(newExpenses);
  };
  //Search States
  const [search, setSearch] = useState("");
  return (
    <ProductContext.Provider
      value={{
        search,
        setSearch,
        product,
        setProduct,
        productList,
        setProductList,
        addProduct,
        removeProduct,
        updateProduct,
        gridView,
        listView,
        state,
        setState,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
export default ProductProvider;
