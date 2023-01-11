import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ProductContext } from "../GlobalProvider/ProductProvider";

function AddProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { addProduct } = useContext(ProductContext);
  const [product, setProduct] = useState({
    name: "",
    amount: 0,
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ name: "", amount: 0, description: "" });
    handleClose();
  };
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {" "}
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="product">Product Name</InputGroup.Text>
              <Form.Control
                type="text"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                placeholder="Product name"
                name="Product name"
                aria-describedby="Product Name"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="product" style={{ height: "55vh" }}>
                Product Description
              </InputGroup.Text>
              <Form.Control
                type="text"
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                placeholder="Product Description"
                name="Product Description"
                aria-describedby="Product Description"
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="product">Product Amount</InputGroup.Text>
              <Form.Control
                type="number"
                value={product.amount}
                onChange={(e) =>
                  setProduct({ ...product, amount: e.target.value })
                }
                placeholder="Product amount"
                name="Product amount"
                aria-describedby="Product Amount"
                required
              />
            </InputGroup>
            <Button type="submit">Add Product</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddProduct;
