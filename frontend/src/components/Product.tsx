import { Link } from "react-router-dom";
import Rate from "./Rating";

import { Card } from "flowbite-react";

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
    <Card
      className="max-w-full"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={product.image}
      href={`product/${product._id}`}>
      <div className="">
        <Link to={`product/${product._id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
            {product.name}
          </h5>
          <h3 className="text-sm leading-relaxed text-gray-400 mt-2.5 line-clamp-3">
            {product.description}
          </h3>
        </Link>
        <div className="mt-4 flex items-center">
          <Rate />
        </div>
        <div className="flex items-center justify-between mt-2.5">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default Product;
