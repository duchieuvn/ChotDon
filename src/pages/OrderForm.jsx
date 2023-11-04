import NavBar from "../components/NavBar";
import ProductTable from "../components/ProductTable";
import ProductInput from "../components/ProductInput";

function OrderForm() {
  return (
    <div>
      <NavBar />
      <h1>TẠO ĐƠN HÀNG</h1>
      <div>
        <ProductTable>
          <ProductInput />
        </ProductTable>
      </div>
    </div>
  );
}

export default OrderForm;
