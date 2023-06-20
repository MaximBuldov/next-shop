import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'

const DynamicCart = dynamic(() => import('../components/cart'), { ssr: false })

const CartPage: NextPage = () => {
  return <DynamicCart />
}

export default CartPage;