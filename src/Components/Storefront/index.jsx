import Categories from "../Categories";
import Products from "../Products";
import './styles.scss';


// The Landing page of the App that houses the Categories and Products Components. 
const StoreFront = () => {
  return (
    <>
      <Categories />
      <Products />
    </>
  )
}

export default StoreFront;