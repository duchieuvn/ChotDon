import { useState } from "react";

function OrderAddProductCard({ products, setProducts, inputMode = true }) {
  const tempProduct = {
    name: "",
    quantity: 1,
    price: 0,
  };
  const [selectedProduct, setSelectedProduct] = useState(tempProduct);
  function addProduct(curProduct) {
    setProducts([...products, curProduct]);
    setSelectedProduct(tempProduct);
  }

  return (
    <div className="productInputCard">
      <div>ảnh</div>
      <div>
        <input
          placeholder="Tên sản phẩm"
          value={selectedProduct.name}
          onChange={(e) => {
            setSelectedProduct({
              ...selectedProduct,
              name: e.target.value,
            });
          }}
        ></input>
      </div>
      <div>
        <label>Số lượng</label>
        <input
          placeholder="Số lượng"
          type="number"
          min={1}
          value={selectedProduct.quantity}
          onChange={(e) => {
            setSelectedProduct({
              ...selectedProduct,
              quantity: e.target.value,
            });
          }}
        ></input>
        <input
          placeholder="Giá bán"
          value={selectedProduct.price}
          onChange={(e) => {
            setSelectedProduct({
              ...selectedProduct,
              price: Number(e.target.value),
            });
          }}
        ></input>
        <button
          type="button"
          onClick={() => {
            addProduct(selectedProduct);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default OrderAddProductCard;
