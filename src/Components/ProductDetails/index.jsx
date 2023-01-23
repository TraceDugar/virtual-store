import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Button, Typography, CardMedia, CardActionArea } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.scss';

const ProductDetails = () => {
  let { id } = useParams();
  let products = useSelector(state => state.products);

  let theProduct = products.find(product => product._id === id)

  return (
    <>
      {theProduct && <h1 className="title" >{theProduct.name}</h1>}
      <Card className="card" sx={{ maxWidth: 280 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='410'
            image={`https://source.unsplash.com/random?${theProduct.name}`}
            alt={theProduct.name}
          />
          <CardContent className="card-words">
            <Typography className="card-stock" >In Stock: {theProduct.inStock}</Typography>
            <Typography className="card-price" >${theProduct.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Button className="buy-button" variant="contained">Buy</Button>
        <Typography className="related-items">Related Items</Typography>
      <div className="suggestions">
        <Card className="suggestions-card">Suggestion 1</Card>
        <Card className="suggestions-card">Suggestion 2</Card>
        <Card className="suggestions-card">Suggestion 3</Card>
      </div>
      <Typography className="product-details">Product Details</Typography>
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