import "../assets/styles/navBar.css";
import logo from "../assets/images/logo.jpg";

function Navbar() {
  return (
    <header className="d-flex align-items-center p-5">
      <img src={logo} alt="logo" />
      <p>Atlas Home</p>
    </header>
  );
}

export default Navbar;
