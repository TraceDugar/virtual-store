import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { id } = useParams();
  let products = useSelector(state => state.products);

  let theProduct = products.find(product => product._id === id)

  return (
    <>
      <h2>Product Details</h2>
      <img alt={theProduct.name} src={`https://source.unsplash.com/random?${theProduct.name}`} />
      {theProduct && <h4>{theProduct.name}</h4>}
    </>
  )
}

export default ProductDetails;