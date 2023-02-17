import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardActions, CardMedia, Typography } from '@mui/material';
import { addItem } from '../../store/cart';
import { adjustInventory, getProducts } from '../../store/products';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';


// This is the area of the App where the cards that appear on the StoreFront component Live.
const Products = () => {

  // This is where the state is handled within the Products component.
  const dispatch = useDispatch();
  const { products } = useSelector(state => state);
  const { activeCategory } = useSelector(state => state.category);

  //  This is where the products are retrieved from the API via getProducts funcitonality.
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  //  This is where the list of products is rendered based upon the user selection of the category.
  const renderList = products.filter(product => product.category === activeCategory);

  // Actions that happen whenever a Item is added to the cart.
  const handler = (product) => {
    dispatch(addItem(product));
    dispatch(adjustInventory(product));
  };

  return (
    <>
      {/* Product Card */}
      <div className='card-container'>
        {activeCategory && renderList.map((product, index) => (
          <Card sx={{ width: 300, height: 400 }} style={{ backgroundColor: "#f0f0f0", color: "#00459a" }}>

            {/* Card Image */}
            <CardMedia
              component='img'
              alt='product'
              height='250'
              image={`https://source.unsplash.com/random?${product.name}`}
            />

            {/* Product Name */}
            <Typography className='product-name' fontSize='1.5rem'>
              {product.name}
            </Typography>

            {/* Card buttons */}
            <CardActions className='links'>
              <Button className='button-1' variant="text" size="large" onClick={() => handler(product)}>Add Item</Button>
              <Button className='details-link' component={Link} size="large" to={`/product/${product._id}`} variant="text">Details</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  )
};

export default Products;
