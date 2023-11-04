import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/order">Order List</NavLink>
        </li>
        <li>
          <NavLink to="/order/form">Tạo Đơn Hàng</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
