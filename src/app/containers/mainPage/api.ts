import { axios } from 'api';
import type { ProductDTO } from 'types/api';

// рассказать про методы

export async function getProductsData() {
  return axios.get<ProductDTO[]>('products');
}
