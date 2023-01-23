import { useDispatch, useSelector } from 'react-redux';
import { getCategories, selectCategory } from '../../store/categories';
import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import './styles.scss';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.category);

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
    <h4 className='categories'>Browse our Categories</h4>
      <ButtonGroup className='categories-buttons' variant='text' aria-label='text button group'>
        {categories.map((category, index) => (
          <Button data-testid={`category-${index}`} key={`category-${index}`} onClick={() => dispatch(selectCategory(category.name))}>{category.name}</Button>
        ))}
      </ButtonGroup>
    </>
  )
};

export default Categories;
