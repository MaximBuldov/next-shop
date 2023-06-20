import { ICartProduct } from '@/models'
import cartStore from '@/store/cart-store';
import { observer } from 'mobx-react';
import Image from 'next/image';
import React from 'react'

interface CartItemProps {
  product: ICartProduct
}

const CartItem = observer(({ product }: CartItemProps) => {
  const { image, name, type, size, quantity, price } = product;
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <Image
          className="pizza-block__image"
          src={image}
          alt={name}
          width={80}
          height={80}
        />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>{type}, {size} inch</p>
      </div>
      <div className="cart__item-count">
        <div
          onClick={() => cartStore.minusOne(product)}
          className="button button--outline button--circle cart__item-count-minus">-</div>
        <b>{quantity}</b>
        <div
          onClick={() => cartStore.addToCart(product)}
          className="button button--outline button--circle cart__item-count-plus">+</div>
      </div>
      <div className="cart__item-price">
        <b>${price * quantity}</b>
      </div>
      <div onClick={() => cartStore.removeFromCart(product)} className="cart__item-remove">
        <div className="button button--outline button--circle">x</div>
      </div>
    </div>
  )
})

export default CartItem;
