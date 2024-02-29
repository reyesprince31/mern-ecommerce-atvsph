import products from "../products";
import Product from "./Product";

function HomeScreen() {
  return (
    <>
      <h1>Latest Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:grid-cols-4 max-w-screen-xl mx-auto py-10">
        {products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
    </>
  );
}

export default HomeScreen;
