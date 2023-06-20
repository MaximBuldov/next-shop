import { $api } from "@/configs";

class Variations {
  async getVariations(id: number) {
    const { data } = await $api.get(`/variations/${id}`);
    return data;
  }
}

const variationsService = new Variations();

export default variationsService;

