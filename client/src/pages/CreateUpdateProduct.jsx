import { useEffect, useState } from "react";
import {
  createProduct,
  singleProduct,
  updateProduct,
} from "../API Services/product/productApi";
import Loading from "../components/Loading";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

function CreateUpdateProduct() {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [postBody, setPostBody] = useState({
    productName: "",
    productCode: "",
    img: "",
    unitPrice: "",
    quantity: "",
    totalPrice: "",
  });

  useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await singleProduct(id);
        setPostBody(data);
      })();
    }
  }, [id]);

  const inputChangeHandler = (propertyName, propertyValue) => {
    setPostBody({
      ...postBody,
      [propertyName]: propertyValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (id) {
      const result = await updateProduct(id, postBody);
      if (result.status === "ok") {
        toast.success("Successfully updated!");
      }
    } else {
      const result = await createProduct(postBody);
      if (result.status === "ok") {
        toast.success("Successfully created!");
        // form state reset and empty
        setPostBody({
          productName: "",
          productCode: "",
          img: "",
          unitPrice: "",
          quantity: "",
          totalPrice: "",
        });
      }
    }

    setIsLoading(false);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="container shadow-sm p-5 mt-5 rounded-2">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="ProductName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductName"
            value={postBody.productName}
            onChange={(e) => inputChangeHandler("productName", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="link" className="form-label">
            Product image link
          </label>
          <input
            type="text"
            className="form-control"
            id="link"
            value={postBody.img}
            onChange={(e) => inputChangeHandler("img", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="ProductCode" className="form-label">
            Product code
          </label>
          <input
            type="number"
            className="form-control"
            id="ProductCode"
            value={postBody.productCode}
            onChange={(e) => inputChangeHandler("productCode", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Unit" className="form-label">
            Unit price
          </label>
          <input
            type="number"
            className="form-control"
            id="Unit"
            value={postBody.unitPrice}
            onChange={(e) => inputChangeHandler("unitPrice", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="Quantity"
            value={postBody.quantity}
            onChange={(e) => inputChangeHandler("quantity", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="TotalPrice" className="form-label">
            Total Price
          </label>
          <input
            type="number"
            className="form-control"
            id="TotalPrice"
            value={postBody.totalPrice}
            onChange={(e) => inputChangeHandler("totalPrice", e.target.value)}
            required
          />
        </div>

        <div className="col-12 ">
          <button type="submit" className="btn btn-customColor">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUpdateProduct;
