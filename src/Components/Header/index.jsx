import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from '@mui/material';
import './styles.scss'

const Header = () => {
  const { cart } = useSelector(state => state)
  return (
    <>
      <header className="header">
        <div className="header-buttons">
          <Button className="header-button1" variant='text'>
            <Link className="our-store" to="/" default >Our Store</Link>
          </Button>
          <Button className="header-button2" variant="text">
            <Link className="cart-link" to="/cart">Cart({cart.length}) </Link>
          </Button>
        </div>
      </header>
    </>
  )
};

export default Header;
