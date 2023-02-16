import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { adjustInventory, getProducts } from '../../store/products';
import { addItem } from '../../store/cart';
import { useParams } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.scss';

const ProductDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  let product = useSelector(state => state.products);
  let theProduct = product.find(product => product._id === id);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  const handler = (product) => {
    dispatch(addItem(product));
    dispatch(adjustInventory(product));
  };

  return (
    <>
      {theProduct && <h1 className="title" >{theProduct.name}</h1>}
      <Card className="card" sx={{ width: 380, height: 620 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='540'
            image={`https://source.unsplash.com/random?${theProduct.name}`}
            alt={theProduct.name}
          />
          <CardContent className="card-words">
            <Typography className="card-stock" >In Stock: {theProduct.inStock}</Typography>
            <Typography className="card-price" >${theProduct.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Button className="buy-button" variant="contained" onClick={() => handler(theProduct)}>Buy</Button>
      <Typography className="related-items" variant="h4">Related Items</Typography>
      <div className="suggestions">
        <Card className="suggestions-card">Suggestion 1</Card>
        <Card className="suggestions-card">Suggestion 2</Card>
        <Card className="suggestions-card">Suggestion 3</Card>
      </div>
      <Typography className="product-details" variant="h4">Product Details</Typography>
      <div className="accordion">
        <Accordion >
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
        <Accordion>
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