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
          <Card sx={{ width: 200, height: 300 }}>
            <CardMedia
              component='img'
              alt='product'
              height='170'
              image={`https://source.unsplash.com/random?${product.name}`}
            />
            <Typography className='product-name'>
              {product.name}
            </Typography>
            <CardActions className='links'>
              <Button className='button-1' variant="text" size="small" onClick={() => handler(product)}>Add Item</Button>
              <Button className='details-link' component={Link} size="small" to={`/product/${product._id}`} variant="text">Details</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  )
};

export default Products;
