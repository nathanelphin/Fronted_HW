'use client'

import { ProductCardDetailComponent } from "./ProductDetailComponent";
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `HTTP Error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
};

type ProductIdType = {
  proId: number
}

export default function ProductDetailUseSWRComponent({
  proId
}: ProductIdType) {

  console.log("===> ProductId in detail: ", proId);

  const { data, error, isLoading } = useSWR(
    `/api/products/${proId}`,
    fetcher
  );

  if (error) {
    console.error("Product fetching error:", error);
    return <div>{error.message}</div>;
  }

  if (isLoading || !data) {
    return <div>loading...</div>;
  }

  return (
    <ProductCardDetailComponent
      num={1}
      images={data.images}
      title={data.title}
      description={data.description}
      price={data.price}
    />
  );
}