import { $wcApi } from '@/configs/wooConfig';
import { IVariation } from '@/models';
import { AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    try {
      const data = await $wcApi.get(`products/${id}/variations?_fields=id,price,attributes`) as AxiosResponse<IVariation[]>

      res.status(200).json(data.data);
    } catch (e) {
      res.status(500).json({ message: 'failed to load data' })
    }

  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
