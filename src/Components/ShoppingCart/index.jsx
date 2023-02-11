import { Card, CardContent, CardActions, Button, TextField, Typography } from "@mui/material";
import './styles.scss';

const ShoppingCart = () => {
  return (
    <>
      <Card className="cart-card">
        <CardContent className="order-data">
          <Typography  variant="h6">
            Order Summary
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
            <Button className="place-order" size="small" variant='contained' >Place Your Order</Button>
          </div>
        </CardActions>
      </Card>
    </>
  )
}

export default ShoppingCart;