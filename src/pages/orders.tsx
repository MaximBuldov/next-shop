import { OrderItem } from '@/components/order-item'
import { MainLayout } from '@/layouts'
import { IOrder } from '@/models/order.model'
import orderService from '@/services/order.service'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

interface OrdersPageProps {
  orders: IOrder[]
}

const OrdersPage: NextPage<OrdersPageProps> = ({ orders }) => {
  return (
    <MainLayout title='Orders'>
      <div className="container">
        <div className="orders">
          <h2 className="content__title">
            Orders
          </h2>
          <div className="orders-list">
            {orders.length > 0 && orders.map(el => <OrderItem key={el.id} order={el} />)}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const orders = await orderService.getAll();

  return { props: { orders } }
}

export default OrdersPage;
