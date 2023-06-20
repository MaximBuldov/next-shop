import cartStore from '@/store/cart-store'
import { observer } from 'mobx-react'
import Link from 'next/link'
import React from 'react'

const SmallCart = observer(() => {
  return (
    <div className="header__cart">
      <Link href="/cart" className="button button--cart">
        <span>${cartStore.totalProductsSum}</span>
        <div className="button__delimiter"></div>
        <span>{cartStore.totalProductsCount}</span>
      </Link>
    </div>
  )
})

export default SmallCart;
