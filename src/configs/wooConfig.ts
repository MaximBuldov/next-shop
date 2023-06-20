import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const $wcApi = new WooCommerceRestApi({
  url: process.env.WP_API || '',
  consumerKey: process.env.WC_CONSUMER_KEY || '',
  consumerSecret: process.env.WC_CONSUMER_SECRET || '',
  version: "wc/v3"
});