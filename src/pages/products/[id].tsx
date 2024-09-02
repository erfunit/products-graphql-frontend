import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../graphql/queries";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.getProduct.name}</h1>
      <p>{data.getProduct.description}</p>
      <p>${data.getProduct.price}</p>
    </div>
  );
}
