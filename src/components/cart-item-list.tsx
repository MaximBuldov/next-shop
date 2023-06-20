import cartStore from '@/store/cart-store'
import dynamic from 'next/dynamic';
import React from 'react'

const DynamicCartItem = dynamic(() => import('./cart-item'), { ssr: false });

export const CartItemList = () => {
  return (
    <div className="content__items">
      {cartStore.products.length > 0 && cartStore.products.map((product) => (
        <DynamicCartItem
          key={`${product.product_id}_${product.variation_id}`}
          product={product}
        />
      ))}
    </div>
  )
}
