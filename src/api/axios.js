import AxiosMockAdapter from "axios-mock-adapter";
import axios from "axios";
import ProductsData from "./ProductsData";

const mock = new AxiosMockAdapter(axios, { delayResponse: 500 });

mock.onGet("/api/products").reply(() => {
  return [200, ProductsData];
});

mock.onGet(/\/api\/products\/\d+/).reply((config) => {
  const id = parseInt(config.url.split("/").pop() || "0", 10);
  const product = ProductsData.find((p) => p.id === id);
  if (product) {
    return [200, product];
  }
  return [404, { message: "Sorry! Product not found" }];
});

export default axios;
