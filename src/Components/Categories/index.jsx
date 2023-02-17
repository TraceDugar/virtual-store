import { useDispatch, useSelector } from 'react-redux';
import { getCategories, selectCategory } from '../../store/categories';
import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import './styles.scss';

// This is where the categories component lives.
const Categories = () => {

  // This is the Categories State.
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.category);

  // This is where we get the Categories from the API.
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>

      {/* Category Title. */}
      <h4 className='categories'>Browse our Categories</h4>

      {/* Category Button Group. */}
      <ButtonGroup className='categories-buttons' variant='text' aria-label='text button group'>
        {categories.map((category, index) => (

          // Category button.
          <Button data-testid={`category-${index}`} size="large" key={`category-${index}`} onClick={() => dispatch(selectCategory(category.name))}>{category.name}</Button>
        ))}
      </ButtonGroup>
    </>
  )
};

export default Categories;
