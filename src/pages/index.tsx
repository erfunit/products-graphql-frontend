import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/queries";
import Link from "next/link";

export default function Home() {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col gap-5 justify-start items-start">
      <h1>Products</h1>
      <Link
        href={"/products/create"}
        className="py-2 px-3 bg-blue-600 text-white rounded-lg"
      >
        Create new one!
      </Link>
      <ul>
        {data.getProducts.map((product: any) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
