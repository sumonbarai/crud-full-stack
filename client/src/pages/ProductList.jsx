import { useEffect, useState } from "react";
import {
  deleteProduct,
  getAllProduct,
} from "../API Services/product/productApi";
import Loading from "../components/Loading";
import ProductRow from "./ProductRow";
import DeleteModal from "../components/DeleteModal";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = (id) => {
    setShow(true);
    setId(id);
  };

  const handleConfirm = async () => {
    if (id) {
      await deleteProduct(id);
    }
    setShow(false);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await getAllProduct();
      setIsLoading(false);
      if (data) setProducts(data.data);
    })();
  }, [show]);

  // what is render in UI
  let content;
  if (isLoading) {
    content = <Loading />;
  }

  if (products.length) {
    content = (
      <table className="table text-center product-list-container">
        <thead>
          <tr>
            <th>Image</th>
            <th>product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product._id}
              product={product}
              handleShow={handleShow}
            />
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div className="container shadow-sm mt-5 product-list-table">
      {products.length === 0 && (
        <div className="text-center">NO Product found</div>
      )}
      {content}
      {show && (
        <DeleteModal
          show={show}
          setShow={setShow}
          handleConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default ProductList;
