import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from '@mui/material';
import { addItem } from '../../store/cart';
import { adjustInventory, getProducts } from '../../store/products';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      {activeCategory && renderList.map((product, index) => (
        <Card data-testid={`product-${index}`} key={`product-${index}`} variant='outlined'>
          {product.name}
          <img alt={product.name} src={`https://source.unsplash.com/random?${product.name}`} />
          <Button variant="text" onClick={() => handler(product)}>Add Item</Button>
          <Button component={Link} to={`/product/${product._id}`} variant="text">View Details</Button>
        </Card>
      ))}
    </>
  )
};

export default Products;
