
import ProductDetailDisplayComponent from "@/components/products/detail/ProductDetailDisplayComponent";
import RecommendationCategories from "@/components/products/RecommendationCategories";
import { Suspense } from "react";

export const instant = false

const getSingleProduct = (proId: number) => 
  fetch(`${process.env.DUMMY_BASE_URL}/products/${proId}`)
  .then(data => data.json())
  .then(product => product)
  .catch(error => error)

export default async function ProductDetailPage({
  params,
  searchParams
}:{
   params: Promise<{id: number}>,
   searchParams: Promise<{[key: string]: string}>
}) {
  const {id} = await params;
  console.log(`ProductId = `, id)

  const singleProduct = getSingleProduct(id);
  console.log(`==> single product: `, singleProduct);

  const {category=''} = await searchParams;

  return (
    <section>

      <Suspense fallback={<h1>Loading</h1>}>

        <ProductDetailDisplayComponent product={singleProduct}/>

        <h1>Product Recommendation</h1>

        <RecommendationCategories 
        category={category}/>

      </Suspense>

      {/* <h1>Category: {category}</h1> */}
      
    </section>
  )
}
