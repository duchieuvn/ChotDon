export default function StatsTable({ orderList }) {
  const sum = {
    BAY: 2,
    BB702: 7,
    MATCHA: 0,
    HAPPYLIFE: 0,
    SALTED: 1,
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
          <th>Tên SP</th>
          <th>Số lượng</th>
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
