import { FormEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "../../graphql/mutations";
import { useRouter } from "next/router";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createProduct({
      variables: { name, description, price },
    });
    setName("");
    setDescription("");
    setPrice(0);

    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex flex-col items-center w-full max-w-xl mt-10 bg-blue-400 gap-4 [&>*]:w-full [&>*]:rounded-md [&>*]:p-2 p-4 rounded-lg"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <button type="submit">Create Product</button>
    </form>
  );
}
