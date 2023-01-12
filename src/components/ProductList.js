import React, { useContext, useState } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ProductContext } from "../GlobalProvider/ProductProvider";
const ProductList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    productList,
    removeProduct,
    updateProduct,
    state,
    search,
    setProduct,
  } = useContext(ProductContext);
  const handleDelete = (index) => {
    removeProduct(index);
    handleClose();
  };
  const handleEdit = () => {
    handleShow();
  };

  const handleUpdate = (e, index) => {
    e.preventDefault();
    // updateProduct(index, product);
    handleClose();
  };

  return (
    <>
      {productList
        .filter((searchedValue) => {
          if (search === "") {
            return searchedValue;
          } else if (
            searchedValue.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return searchedValue;
          }
        })
        .map((product, index) => (
          <div>
            <Card
              style={{ marginBottom: "1vw", width: state ? "18rem" : "80rem" }}
              key={index}
            >
              <div
                className="insideCard"
                style={{ display: state ? null : "flex" }}
              >
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/id/237/200/150"
                  style={{ width: state ? "fit-content !important" : "18rem" }}
                />
                <Card.Body
                  style={{
                    display: state ? null : "flex",
                    justifyContent: state ? "space-between" : "space-around",
                  }}
                >
                  <div
                    style={{
                      display: state ? null : "flex",
                      justifyContent: "space-around",
                      width: "-webkit-fill-available",
                    }}
                  >
                    <div className="nameAndDescription">
                      <div>
                        <b>Name</b>
                        {product.name}
                      </div>
                      <div>
                        <b>Description</b>
                        {product.description}
                      </div>
                    </div>
                    <div>
                      <b>Amount</b>
                      {product.amount}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      gap: "2em",
                    }}
                  >
                    <div className="editButton">
                      <Button variant="primary" onClick={handleEdit}>
                        Edit
                      </Button>
                    </div>
                    <div className="deleteButton">
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </div>
            </Card>

            {/* //Modal for Edit */}
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                {" "}
                <form onSubmit={handleUpdate}>
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
                      aria-describedby="Edit Name"
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
                    <InputGroup.Text id="product">
                      Product Amount
                    </InputGroup.Text>
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
                  <Button type="submit">Edit Product</Button>
                </form>
              </Modal.Body>
            </Modal>
          </div>
        ))}
    </>
  );
};

export default ProductList;
