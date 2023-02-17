import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { adjustInventory, getProducts } from '../../store/products';
import { addItem } from '../../store/cart';
import { useParams } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.scss';

// This is the part of the App where the products detail page lives.

const ProductDetails = () => {

  // This is where state is handled within the ProductDetails component.
  const dispatch = useDispatch();
  let { id } = useParams();
  let product = useSelector(state => state.products);
  let theProduct = product.find(product => product._id === id);

  // This is where the product is retrieved from the API for the ProductDetails Component.
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // This is the handler from adding an item to the cart as well as adjusting the inventory in the API once that happens.
  const handler = (product) => {
    dispatch(addItem(product));
    dispatch(adjustInventory(product));
  };

  return (
    <>
      {/* This is the Product name title of the page. */}
      {theProduct && <h1 className="title" >{theProduct.name}</h1>}

      {/* This is the product card. */}
      <Card className="card" sx={{ width: 380, height: 620 }} style={{ backgroundColor: "#f0f0f0", color: "#00459a" }}>
        <CardActionArea>

          {/* This is the image of the product being displayed. */}
          <CardMedia
            component='img'
            height='540'
            image={`https://source.unsplash.com/random?${theProduct.name}`}
            alt={theProduct.name}
          />

          {/* Theses are the words at the bottom of the card. */}
          <CardContent className="card-words">
            <Typography className="card-stock" >In Stock: {theProduct.inStock}</Typography>
            <Typography className="card-price" >${theProduct.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* This is the buy button. */}
      <Button className="buy-button" variant="contained" onClick={() => handler(theProduct)}>Buy</Button>

      {/* This is the group of suggestion cards. */}
      <Typography className="related-items" variant="h4">Related Items</Typography>
      <div className="suggestions">

        {/* This is the individual cards. */}
        <Card className="suggestions-card" style={{ backgroundColor: "#f0f0f0", color: "#00459a" }}>Suggestion 1</Card>
        <Card className="suggestions-card" style={{ backgroundColor: "#f0f0f0", color: "#00459a" }}>Suggestion 2</Card>
        <Card className="suggestions-card" style={{ backgroundColor: "#f0f0f0", color: "#00459a" }}>Suggestion 3</Card>
      </div>

      {/* This is where the product details are. */}
      <Typography className="product-details" variant="h4">Product Details</Typography>

      {/* This where the accordion is for product details. */}
      <div className="accordion">

        {/* Accordion for Product Details. */}
        <Accordion style={{ backgroundColor: "#f0f0f0", color: "#00459a" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Specifications
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Product Specs.</Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion for Reviews. */}
        <Accordion style={{ backgroundColor: "#f0f0f0", color: "#00459a" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              User Reviews
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>A list of reviews...</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}

export default ProductDetails;