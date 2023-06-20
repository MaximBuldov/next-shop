import { $wcApi } from '@/configs/wooConfig';
import { ICartProduct } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const products = req.body?.map(({ product_id, variation_id, quantity }: ICartProduct) => ({
      product_id,
      variation_id,
      quantity
    }))

    try {
      const data = await $wcApi.post('orders', {
        payment_method: "cod",
        payment_method_title: "Cash on delivery",
        billing: {
          first_name: "Guest",
          last_name: "Guest",
          company: "",
          address_1: "606 3rd Ave",
          address_2: "304",
          city: "San Diego",
          state: "CA",
          postcode: "92101",
          country: "US",
          email: "guest@buldov.com",
          phone: "6194445566"
        },
        shipping: {
          first_name: "Guest",
          last_name: "Guest",
          company: "",
          address_1: "606 3rd Ave",
          address_2: "304",
          city: "San Diego",
          state: "CA",
          postcode: "92101",
          country: "US",
          phone: "6194445566"
        },
        line_items: products,
        shipping_lines: []
      })

      res.status(200).json(data.data);
    } catch (e) {
      res.status(500).json({ message: e })
    }

  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
