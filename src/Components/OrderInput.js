import { useState } from "react";

export default function OrderInput(props) {
  const { products, onSetProducts, availableProducts, onSetAvailableProducts } =
    { ...props };
  const [productName, setProductName] = useState(availableProducts[0]);
  const [boxQuantity, setBoxQuantity] = useState(1);
  const [packQuantity, setPackQuantity] = useState(0);
  const [giveAway, setGiveAway] = useState(0);

  function handleAddProduct(p) {
    const remainProductNames = availableProducts.filter(
      (name) => name != p.productName
    );
    onSetAvailableProducts(remainProductNames);
    onSetProducts([...products, p]);
    setProductName(remainProductNames[0]);
  }

  return (
    <>
      {!!availableProducts.length && (
        <tr>
          <td>
            <select onChange={(e) => setProductName(e.target.value)}>
              {availableProducts.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </td>
          <td>
            <input
              type="number"
              className="add-product"
              name="boxQuantity"
              value={boxQuantity}
              onChange={(e) => {
                setBoxQuantity(e.target.value);
              }}
            ></input>
          </td>
          <td>
            <input
              type="number"
              className="add-product"
              name="packQuantity"
              value={packQuantity}
              onChange={(e) => {
                setPackQuantity(e.target.value);
              }}
            ></input>
          </td>
          <td>
            <input
              type="number"
              className="add-product"
              name="giveAway"
              value={giveAway}
              onChange={(e) => {
                setGiveAway(e.target.value);
              }}
            ></input>
          </td>
          <td>
            <button
              onClick={() => {
                const product = {
                  productName,
                  boxQuantity,
                  packQuantity,
                  giveAway,
                };
                handleAddProduct(product);
              }}
            >
              Add
            </button>
          </td>
        </tr>
      )}
    </>
  );
}
