import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import * as selectors from '../selectors';
import { useDispatchAction } from '../slice';

export function useMainPage() {
  const { fetchProductsData } = useDispatchAction();
  const products = useSelector(selectors.products);
  const productsLoading = useSelector(selectors.productsLoading);

  useEffect(() => {
    fetchProductsData();
  }, []);

  return { products, productsLoading };
}
