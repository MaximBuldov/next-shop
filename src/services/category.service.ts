import { $wcApi } from "@/configs";

class Categories {
  async getAll() {
    const res = await $wcApi.get('products/categories');
    return res.data;
  }
}

const catService = new Categories();

export default catService;
