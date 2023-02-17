import * as React from 'react';
import { Button, Card, CardActions, CardContent, Popper, TextField, Typography } from "@mui/material";
import { Box } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../store/cart";
import { When } from 'react-if';
import './styles.scss';


// This is where the Shopping Cart Component and Functionality lives within the App.
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state);

  // -------------- Cart Functionality -----------------
  // Cart Total Functionality.
  const initialValue = 0;

  // Products are accumulated here.
  const total = cart.reduce((accumulator, current) => {
    if (typeof current.price !== 'number' || isNaN(current.price)) {
      return accumulator;
    }

    // Price is set to 2 decimal places and counted here along with items.
    return accumulator + (parseFloat(current.price) * current.count);
  }, initialValue).toFixed(2);

  //  Formatting of the total cost happens here.
  const formattedTotal = parseFloat(total).toFixed(2);


  // ----------- Popper functionality -------------
  // Popper State.
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Popper Handle Click.
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  // Popper Conditional logic.
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <Card className="cart-card" style={{ backgroundColor: "#f0f0f0", color: "#00459a" }}>
        <CardContent className="order-data">
          <Typography variant="h5" mb='2vh' >
            Order Summary
          </Typography>
          <Typography>
            <When condition={cart.length > 0}>
              <div className="simple-cart">
                <ul backgroundColor='#ffffff'>

                  {/*  The Cart map is below. */}
                  {cart.map((product, index) => (
                    <li key={`cart-${index}`}>

                      {/* The product name and how many are in the cart. */}
                      {product.name} x {product.count}

                      {/* The price per item and quantity of the item is here.  */}
                      {` $${(parseFloat(product.price) * product.count).toFixed(2)}`}

                      {/* This button removes one of each item from the cart. */}
                      <Button className="delete-item" color='error' onClick={() => dispatch(removeItem(product))}>Remove</Button>
                    </li>
                  ))}
                </ul>
              </div>
            </When>
          </Typography>

          {/* The total is shown here below the list of items and their cost. */}
          <Typography mt='1vh' variant="h6" component="div">
            Total: $ {formattedTotal}
          </Typography>
        </CardContent>
        <CardContent className="form-wrapper">

          {/* Customer shipping and payment information go here. */}
          <CardContent>
            <div className="billing-fields">

              {/* Billing address column. */}
              <Typography className="billing-details" >
                Billing Details
              </Typography>
              <TextField className="text-field" size="small" id="standard-basic" label="Full Name" variant="standard" />
              <TextField disabled className="text-field" size="small" id="standard-basic" label="Address" variant="standard" />
              <TextField disabled className="text-field" size="small" id="standard-basic" label="City" variant="standard" />
              <TextField disabled className="text-field" size="small" id="standard-basic" label="State" variant="standard" />
              <TextField disabled className="text-field" size="small" id="standard-basic" label="Zip" variant="standard" />
            </div>
          </CardContent>
          <CardContent className="payment-details" variant="subtitle1">

            {/* Card info column. */}
            <div className="right-column">
              <Typography>
                Payment Details
              </Typography>
            </div>
            <TextField
              disabled
              className="text-field"
              id="standard-disabled"
              defaultValue="Credit Card #"
              variant="standard"
            />
            <TextField
              disabled
              className="text-field"
              id="standard-disabled"
              defaultValue="CVV"
              variant="standard"
            />
          </CardContent>
        </CardContent>

        {/* False Order placement button along with message are here. */}
        <CardActions>

          {/* False Order button. */}
          <div className="button">
            <Button className="place-order" color="success" size="small" variant='contained' onClick={handleClick} >Place Your Order</Button>

            {/* "Order Simulated" message. */}
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                Your order has been simulated!
              </Box>
            </Popper>
          </div>
        </CardActions>
      </Card>
    </>
  )
}

export default ShoppingCart;