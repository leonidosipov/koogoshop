import { NotifierTypesState } from 'store/notifier/types';
import { PageTypesState } from 'store/pageStore/types';

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  pageStore: PageTypesState;
  notifierStore: NotifierTypesState;
}
