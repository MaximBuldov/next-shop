import { ICartProduct } from "@/models";
import localforage from "localforage";
import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class Cart {
  products: ICartProduct[] = [];

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'cart',
      properties: ['products'],
      storage: typeof localStorage === 'undefined' ? undefined : localforage
    });
  }

  private productIndex(product: ICartProduct) {
    return this.products.findIndex(el => el.product_id === product.product_id && el.variation_id === product.variation_id)
  }

  addToCart(product: ICartProduct) {
    const index = this.productIndex(product)
    if (index === -1) {
      this.products.push(product)
    } else {
      this.products[index].quantity += 1;
    }
  }

  minusOne(product: ICartProduct) {
    const index = this.productIndex(product)

    if (index === -1) return;
    const el = this.products[index];
    if (el.quantity === 1) {
      this.products.splice(index, 1);
    } else {
      el.quantity -= 1;
    }
  }

  removeFromCart(product: ICartProduct) {
    const index = this.productIndex(product);
    this.products.splice(index, 1);
  }

  get totalProductsCount() {
    return this.products ? this.products.reduce((acc, el) => {
      return acc + el.quantity;
    }, 0) : 0;
  }

  get totalProductsSum() {
    return this.products ? this.products.reduce((acc, el) => {
      return acc + (el.price * el.quantity);
    }, 0) : 0;
  }

  getSingleProductsCount(id: number) {
    return this.products ? this.products.reduce((acc, el) => {
      if (el.product_id === id) {
        return acc + el.quantity
      }
      return acc;
    }, 0) : 0;
  }

  clearCart() {
    this.products = []
  }
}

const cartStore = new Cart();

export default cartStore;