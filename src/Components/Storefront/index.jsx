import Categories from "../Categories";
import Products from "../Products";
import SimpleCart from "../SimpleCart";
import './styles.scss';

const StoreFront = () => {
  return (
    <>
      <Categories />
      <Products />
      <SimpleCart />
    </>
  )
}

export default StoreFront;