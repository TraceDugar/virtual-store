import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardActions, CardMedia, Typography } from '@mui/material';
import { addItem } from '../../store/cart';
import { adjustInventory, getProducts } from '../../store/products';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state);
  const { activeCategory } = useSelector(state => state.category);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = products.filter(product => product.category === activeCategory);

  const handler = (product) => {
    dispatch(addItem(product));
    dispatch(adjustInventory(product));
  };

  return (
    <>
      <div className='card-container'>
        {activeCategory && renderList.map((product, index) => (
          <Card sx={{ maxWidth: 145 }}>
            <CardMedia
              component='img'
              alt='product'
              height='70'
              image={`https://source.unsplash.com/random?${product.name}`}
            />
            <Typography textAlign='left' textSize='0.5vw' paddingLeft='1vw' paddingTop='1vh'>
              {product.name}
            </Typography>
            <CardActions >
              <Button className='button-1' variant="text" onClick={() => handler(product)}>Add Item</Button>
              <Button className='details-link' component={Link} to={`/product/${product._id}`} variant="text">View Details</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  )
};

export default Products;
