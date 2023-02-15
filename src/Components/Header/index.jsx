import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import './styles.scss'

const Header = () => {
  const { cart } = useSelector(state => state)

  let totalQuantity = 0;
  for (let i = 0; i < cart.length; i++) {
    totalQuantity += cart[i].count;
  }

  return (
    <>
      <header className="header">
        <div className="header-buttons">
          <Button className="header-button1" variant='text'>
            <Link className="our-store" to="/" default >Our Store</Link>
          </Button>
          <Button className="header-button2" variant="text">
            <Link className="cart-link" to="/cart">Cart({totalQuantity}) </Link>
          </Button>
        </div>
      </header>
    </>
  )
};

export default Header;
