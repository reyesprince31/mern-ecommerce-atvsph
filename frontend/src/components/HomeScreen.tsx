import products from "../products";
import Product from "./Product";

function HomeScreen() {
  return (
    <>
      <h1>Latest Products</h1>
      <div className="flex flex-wrap gap-4">
        {products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
    </>
  );
}

export default HomeScreen;
