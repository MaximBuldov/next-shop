import { MainLayout } from '@/layouts';
import { IOrder } from '@/models/order.model';
import orderService from '@/services/order.service';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

interface OrderPageProps {
  order: IOrder
}

const OrderPage: NextPage<OrderPageProps> = ({ order }) => {
  return (
    <MainLayout title={`Order ${order.id}`}>
      <div className="container">
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              Order #{order.id}
            </h2>
          </div>
          {order.line_items.map(el => (
            <div key={el.id} className="cart__item">
              <div className="cart__item-img">
                <Image
                  className="pizza-block__image"
                  src={el.image.src}
                  alt={el.name}
                  width={80}
                  height={80}
                />
              </div>
              <div className="cart__item-info">
                <h3>{el.parent_name}</h3>
                <p>{el.meta_data[0].value} inch</p>
              </div>
              <div className="cart__item-count">
                <b>{`$${el.price} x ${el.quantity}`}</b>
              </div>
              <div className="cart__item-price">
                <b>${el.total}</b>
              </div>
            </div>
          ))}
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>Total count: <b>{order.line_items.reduce((acc, el) => {
                return acc + el.quantity
              }, 0)}</b></span>
              <span>Total price: <b>${order.total}</b></span>
            </div>
            <div className="cart__bottom-buttons">
              <Link href="/" className="button button--outline button--add go-back-btn">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Home</span>
              </Link>
              <div className="button pay-btn">
                <Link href="/orders">
                  <span>All orders</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const orders = await orderService.getAll();

  return {
    paths: orders.map((cat: IOrder) => ({ params: { id: cat.id.toString() } })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const order = params?.id ?
    await orderService.getOne((Number(params.id))) :
    null;

  return { props: { order } }
}


export default OrderPage;