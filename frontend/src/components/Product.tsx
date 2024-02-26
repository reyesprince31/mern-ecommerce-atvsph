import Rating from "./Rating";

interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

function Product({ product }: { product: Product }) {
  return (
    <div key={product._id} className="card w-80 bg-base-100 shadow-xl">
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
