import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'types/root-state';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.mainPage || initialState;

export const products = (state: RootState) => selectDomain(state).products;
export const productsLoading = (state: RootState) => selectDomain(state).productsLoading;

/* export const selectedEnrichedPartnerships = createSelector([selectedProjectPartnerships], data => {
  const sortedData = [...data].sort((...args) =>
    numberSortFunc({
      a: args[0],
      b: args[1],
      fieldName: 'marketCap',
      sortDirection: SortingValues.DESC,
    })
  );

  const transformedData = sortedData.map((item, index) => ({
    id: String(index + 1),
    ...item,
  }));

  return transformedData;
});
 */
