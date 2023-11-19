import { Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav>
      <Container maxWidth="xl">
        <Stack direction="row" spacing={3} paddingY={2}>
          <img src="../public/logo.png" height="30px" />
          <NavLink className="navLink" to="/">
            Shop của tôi
          </NavLink>
          <NavLink className="navLink" to="/order">
            Đơn hàng
          </NavLink>
          <NavLink className="navLink" to="/order/form">
            Tạo đơn hàng
          </NavLink>
        </Stack>
      </Container>
    </nav>
  );
}

export default NavBar;
