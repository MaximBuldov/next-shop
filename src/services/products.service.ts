import { $wcApi } from "@/configs";

class Products {
  async getByCatId(id: string) {
    const { data } = await $wcApi.get(`products?category=${id}&_fields=id,name,price,categories,images,attributes,variations`)
    return data;
  }
  async getAll() {
    try {
      const { data } = await $wcApi.get('products?_fields=id,name,price,categories,images,attributes,variations')
      return data;
    } catch (e) {
      throw e
    }
  }
  async getOne(id: number | number) {
    const { data } = await $wcApi.get(`products/${id}`)
    return data;
  }
}

const productsService = new Products();

export default productsService;