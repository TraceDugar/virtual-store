import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../store/actions';
import { Button, ButtonGroup } from '@mui/material';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.category)

  return (
    <>
      <ButtonGroup variant='text' aria-label='text button group'>
        {categories.map((category, index) => (
          <Button data-testid={`categories-${index}`} key={`categories-${index}`} onClick={() => dispatch(selectCategory(category.name))}>{category.displayName}</Button>
        ))}
      </ButtonGroup>
    </>
  )
};

export default Categories;
