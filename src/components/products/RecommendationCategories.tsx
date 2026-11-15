'use client'

import { useEffect, useState } from "react"
import { ProductCardComponent, ProductResponse } from "./ProductCardComponent"

type CategoryType ={

    category: string

}

export default function RecommendationCategories({category}: CategoryType) {
  
    // const response = await fetch(`api/products/category/${category}`);
    // const products = await response.json();

    const [Products, setProducts] = useState<ProductResponse[]>([]);
    
    useEffect(() => {
        async function fetchRecommendCategories() {
          const response = await fetch(`/api/products/category?category=${category}`
)
            const products = await response.json();
            setProducts(products)
        }
        fetchRecommendCategories();
    },[category])
        
        

  
    return (
        <section className="flex gap-4">
        
        {
            Products.map((pro)=> (
                <ProductCardComponent 
                images={pro.images} 
                title={pro.title} 
                description={pro.description} 
                price={pro.price}/>
            ))
        }

        </section>
  )
}
