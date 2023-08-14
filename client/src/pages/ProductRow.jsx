import { useNavigate } from "react-router-dom";

const ProductRow = ({ product, handleShow }) => {
  const navigate = useNavigate();

  // for modal

  const { img, productName, quantity, totalPrice, unitPrice, _id } = product;

  const handleEdit = () => {
    navigate(`/update/${_id}`);
  };

  return (
    <>
      <tr>
        <td
          className="p-4 rounded-circle object-fit-cover"
          style={{ width: "80px", height: "80px" }}
        >
          <img className="w-100 h-100 rounded-circle" src={img} alt="" />
        </td>
        <td className="p-4">{productName}</td>
        <td className="p-4">{unitPrice}</td>
        <td className="p-4">{quantity}</td>
        <td className="p-4">{totalPrice}</td>
        <td className="p-4">
          <button
            className="btn btn-customColor  btn-sm mx-1"
            onClick={handleEdit}
          >
            Edit
          </button>

          <button
            type="button"
            className="btn btn-danger  btn-sm mx-1 btn btn-primary"
            onClick={() => handleShow(_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
