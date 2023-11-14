function OrderProductCard({ product }) {
  return (
    <div className="productInputCard">
      <div>ảnh</div>
      <div>
        <input
          placeholder="Tên sản phẩm"
          defaultValue={product.name}
          disabled
        ></input>
      </div>
      <div>
        <label>Số lượng</label>
        <input
          placeholder="Số lượng"
          defaultValue={product.quantity}
          disabled
        ></input>
        <input
          placeholder="Giá bán"
          defaultValue={product.price}
          disabled
        ></input>
        <button type="button">x</button>
      </div>
    </div>
  );
}

export default OrderProductCard;
