import { Link, useParams } from "react-router-dom";
import products from "../products";
import Rate from "../components/shared/Rating";

function ProductScreen() {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);

  console.log(product);

  return (
    <div>
      <Link className="btn btn-outline mb-4" to={"/"}>
        Back
      </Link>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={product?.image} alt={product?.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>
          <div className="flex items-center">
            <Rate
              product_id={product?._id}
              value={product?.rating}
              text={product?.numReviews}
            />
          </div>

          <p>Price: ${product?.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
