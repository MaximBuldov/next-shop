import { IOrder } from '@/models/order.model'
import dayjs from 'dayjs'
import Link from 'next/link'

interface OrderItemProps {
  order: IOrder
}

export const OrderItem = ({ order }: OrderItemProps) => {

  return (
    <div className="orders__item">
      <div className="orders__item-id">
        <Link href={`orders/${order.id}`}>{order.id}</Link>
      </div>
      <div className="orders__item-date">
        {dayjs(order.date_created).format('MM/DD/YYYY')}
      </div>
      <div className="orders__list">
        {order.line_items?.map(el => (
          <div key={el.id} className="orders__single-item">{`${el.quantity}x - ${el.name}`}inch</div>
        ))}
      </div>
      <div className="orders__total-price">
        ${order.total}
      </div>
    </div>
  )
}
