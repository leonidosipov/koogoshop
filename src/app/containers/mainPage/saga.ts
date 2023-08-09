import { put, takeLatest, call } from 'typed-redux-saga';

import { actions as notifierActions } from 'store/notifier/slice';

import { getProductsData } from './api';
import { actions } from './slice';

export function* fetchProductsDataWorker(action: ReturnType<typeof actions.fetchProductsData>) {
  try {
    const { data } = yield* call(getProductsData, action.payload);
    yield* put(actions.fetchProductsDataSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield* put(notifierActions.addNotify({ message, type: 'error' }));
      yield* put(actions.fetchProductsDataError());
    }
  }
}

export function* detailInfoSaga() {
  yield* takeLatest(actions.fetchProductsData, fetchProductsDataWorker);
}
