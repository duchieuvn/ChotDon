import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Shop của tôi</NavLink>
        </li>
        <li>
          <NavLink to="/order">Đơn Hàng</NavLink>
        </li>
        <li>
          <NavLink to="/order/form">Tạo Đơn Hàng</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
