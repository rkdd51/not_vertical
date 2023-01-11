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

  const addProduct = (product) => {
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

  return (
    <ProductContext.Provider
      value={{
        productList,
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
