import { $api, $wcApi } from "@/configs";
import { ICartProduct } from "@/models";

class Order {
  async create(products: ICartProduct[]) {
    try {
      const data = await $api.post('order', products)
      return data.data;
    } catch (e) {
      throw e;
    }
  }

  async getAll() {
    try {
      const { data } = await $wcApi.get('orders?_fields=id,date_created,total,line_items')
      return data;
    } catch (e) {
      throw e
    }
  }

  async getOne(id: number | number) {
    const { data } = await $wcApi.get(`orders/${id}`)
    return data;
  }
}

const orderService = new Order();

export default orderService;