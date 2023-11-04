function ProductTable(props) {
  const {
    products,
    onSetProducts,
    availableProducts,
    onSetAvailableProducts,
    children,
  } = { ...props };
  function handleDelete(productName) {
    const remainProducts = products.filter((p) => p.productName != productName);
    onSetProducts(remainProducts);
    onSetAvailableProducts([...availableProducts, productName]);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Loại</th>
            <th>Đơn hộp</th>
            <th>Đơn lẻ</th>
            <th>Khuyến mãi</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr key={item.productName}>
                <td>{item.productName}</td>
                <td>{item.boxQuantity}</td>
                <td>{item.packQuantity}</td>
                <td>{item.giveAway}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      handleDelete(item.productName);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
          {children}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
