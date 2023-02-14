import * as React from 'react';
import { Card, CardContent, CardActions, Button, TextField, Typography, Popper } from "@mui/material";
import { Box } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../store/cart";
import { When } from 'react-if';
import './styles.scss';

const ShoppingCart = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <Card className="cart-card">
        <CardContent className="order-data">
          <Typography variant="h6">
            Order Summary
          </Typography>
          <Typography>
            <When condition={cart.length > 0}>
              <div className="simple-cart">
                <ul>
                  {cart.map((product, index) => (
                    <li key={`cart-${index}`}>{product.name}
                      {` $${product.price}`}
                      <Button className="delete-item" color='error' onClick={() => dispatch(removeItem(product))}>Remove</Button>
                    </li>
                  ))}
                </ul>
              </div>
            </When>
          </Typography>
          <Typography variant="subtitle1" component="div">
            total:
          </Typography>
        </CardContent>
        <CardContent className="form-wrapper">
          <CardContent>
            <div className="billing-fields">
              <Typography className="billing-details" >
                Billing Address
              </Typography>
              <TextField className="text-field" size="small" id="standard-basic" label="Full Name" variant="standard" />
              <TextField disabled className="text-field" size="small" id="standard-basic" label="Address" variant="standard" />
              <TextField disabled className="text-field" size="small" id="standard-basic" label="City" variant="standard" />
              <TextField disabled className="text-field" size="small" id="standard-basic" label="State" variant="standard" />
              <TextField disabled className="text-field" size="small" id="standard-basic" label="Zip" variant="standard" />
            </div>
          </CardContent>
          <CardContent className="payment-details" variant="subtitle1">
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
        <CardActions>
          <div className="button">
            <Button className="place-order" color="success" size="small" variant='contained' onClick={handleClick} >Place Your Order</Button>
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