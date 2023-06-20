export interface IOrder {
  id: number,
  total: string,
  line_items: IOrderItems[],
  date_created: 'string'
}

export interface IOrderItems {
  id: number,
  name: "string",
  quantity: number,
  total: string,
  meta_data: IMetaData[],
  image: {
    src: string
  },
  parent_name: string,
  price: string
}

export interface IMetaData {
  id: number,
  display_key: string,
  value: string
}