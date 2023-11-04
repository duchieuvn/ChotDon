import { useState } from "react";
import ProductTable from "./ProductTable";
import ProductInput from "./ProductInput";

export const priceTable = {
  BAY: { inPrice: 117, boxPrice: 135, packPrice: 16 },
  BB702: { inPrice: 117, boxPrice: 135, packPrice: 16 },
  MATCHA: { inPrice: 117, boxPrice: 135, packPrice: 16 },
  HAPPYLIFE: { inPrice: 117, boxPrice: 135, packPrice: 16 },
  SALTED: { inPrice: 117, boxPrice: 135, packPrice: 16 },
};

function Order({ orderList, onSetOrderList }) {
  const [products, setProducts] = useState([]);
  const [availableProducts, setAvailableProducts] = useState(
    Object.keys(priceTable)
  );

  return (
    <div>
      <ProductTable
        products={products}
        onSetProducts={setProducts}
        availableProducts={availableProducts}
        onSetAvailableProducts={setAvailableProducts}
      >
        <ProductInput
          products={products}
          onSetProducts={setProducts}
          availableProducts={availableProducts}
          onSetAvailableProducts={setAvailableProducts}
        ></ProductInput>
      </ProductTable>

      <button
        onClick={() => {
          onSetOrderList([...orderList, products]);
        }}
      >
        CHỐT ĐƠN
      </button>
    </div>
  );
}

export default Order;
