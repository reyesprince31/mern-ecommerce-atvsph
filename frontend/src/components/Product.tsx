import Rating from "./shared/Rating";

function Product({ product }) {
  return (
    <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <a href="#">
          <img src={product.image} alt="Shoes" />
        </a>
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{product.name}</h2>
        <p className="line-clamp-2">{product.description}</p>
        <Rating />
        <span className="font-semibold text-lg">P {product.price}</span>
      </div>
    </div>
  );
}

export default Product;
