import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import { ProductContext } from "./GlobalProvider/ProductProvider";

function App() {
  const { state, gridView, listView, productList } = useContext(ProductContext);
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <Container>
        <div className="header">
          <h1>Product List</h1>
          <AddProduct />
        </div>
        <div className="inputAndButton">
          <div>
            <input
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Name"
            />
          </div>
          {/* <ul>
            {productList
              .filter((pro) => pro.name.toLowerCase().includes(query))
              .map((pro) => (
                <li key={pro.name}>{pro.name}</li>
              ))}
          </ul> */}
          <div className="gridAndListButtons">
            <Button variant="outline-secondary" onClick={listView}>
              List View
            </Button>
            <Button variant="outline-secondary" onClick={gridView}>
              Grid View
            </Button>
          </div>
        </div>
        <div
          style={{
            display: state ? "flex" : "block",
            justifyContent: state ? "flex-start" : null,
            gap: "1vw",
            flexWrap: "wrap",
            margin: "1vw",
          }}
        >
          <ProductList />
        </div>
      </Container>
    </div>
  );
}

export default App;
