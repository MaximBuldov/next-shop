import { IProduct } from '@/models'
import dynamic from 'next/dynamic';
import React from 'react'

const DynamicProduct = dynamic(() => import('./product'), { ssr: false });


export const ProductsList = ({ products }: { products: IProduct[] }) => {
  return (
    <>
      {products.length > 0 ?
        products.map(product => <DynamicProduct key={product.id} product={product} />) :
        <>No products</>}
    </>
  )
}
