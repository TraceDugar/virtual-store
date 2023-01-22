import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const {cart} = useSelector(state => state)
  return (
    <>
      <header>
        <Link to="/" default >Our Store</Link>
        <Link to="/cart">Cart({cart.length}) </Link>
      </header>
    </>
  )
};

export default Header;
