import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import './styles.scss'

//  This is the header component.

const Header = () => {

  // This is where the cart link state is handled.
  const { cart } = useSelector(state => state)

  // This is the cart counter logic. 
  let totalQuantity = 0;
  for (let i = 0; i < cart.length; i++) {
    totalQuantity += cart[i].count;
  }

  return (
    <>
      <header className="header">
        {/* This is where the link buttons are. */}
        <div className="header-buttons">

          {/* This is the button that returns the customer to the Storefont. */}
          <Button className="header-button1" variant='text'>
            <Link className="our-store" to="/" default > Virtual E-Store </Link>
          </Button>

          {/* Cart button with counter. */}
          <Button className="header-button2" variant="text">
            <Link className="cart-link" to="/cart">Cart({totalQuantity}) </Link>
          </Button>
        </div>
      </header>
    </>
  )
};

export default Header;
