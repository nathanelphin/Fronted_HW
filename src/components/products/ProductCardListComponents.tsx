
"use client"
import { useEffect, useState } from "react";
import { ProductCardComponent } from "./ProductCardComponent";
import Link from "next/link";



export default function ProductCardListComponents() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const respones = await fetch(`/api/products`); 
      const data = await respones.json(); 
      setProducts(data.products);
    }
    fetchData();
  },[])

  
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8 mx-auto">
      {
        products?.map(({id, images, title, description, price, category}) => (
  <Link
    href={`/products/${id}?category=${category}`}
    key={id}
  >
    <ProductCardComponent
      images={images}
      title={title}
      description={description}
      price={price}
    />
  </Link>
))
      }
    </section>
  )
}
