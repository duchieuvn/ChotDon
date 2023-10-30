export default function StatsTable({ orderList }) {
  console.log(orderList);
  const sum = {
    BAY: 0,
    BB702: 0,
    MATCHA: 0,
    HAPPYLIFE: 0,
    SALTED: 0,
  };
  orderList.forEach((order) => {
    order.forEach((product) => {
      const pName = product.productName;
      const quantity = product.boxQuantity;
      sum[pName] += Number(quantity);
    });
  });
  return (
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
        {Object.keys(sum).map((pName) => {
          return (
            <tr key={pName}>
              <td>{pName}</td>
              <td>{sum[pName]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
