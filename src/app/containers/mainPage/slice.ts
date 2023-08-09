import { useActions } from 'hooks';
import type { ProductDTO } from 'types/api';
import { createSlice, PayloadAction } from 'utils/@reduxjs/toolkit';

import { ContainerState } from './types';
import { sliceKey as name } from './utils';

export const initialState: ContainerState = {
  products: [],
  productsLoading: false,
};

const mainPageSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchProductsData(state) {
      state.productsLoading = true;
    },
    fetchProductsDataSuccess(state, action: PayloadAction<ProductDTO[]>) {
      state.products = action.payload;
      state.productsLoading = false;
    },
    fetchProductsDataError(state) {
      state.productsLoading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = mainPageSlice;
export const useDispatchAction = () => useActions(actions);
