import { ProductDTO } from 'types/api';

export interface MainPageState {
  products: ProductDTO[];
  productsLoading: boolean;
}

export type ContainerState = MainPageState;
