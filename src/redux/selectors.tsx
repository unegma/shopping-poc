/**
 * Items
 */

import { ITEM_STATE_FILTERS } from "../constants";

export const getItemListState = (store: any) => store.items;

export const getItemList = (store: any) =>
  getItemListState(store) ? getItemListState(store).allIds : [];

// todo rename?
export const getItemById = (store: any, id: any) =>
  getItemListState(store) ? { ...getItemListState(store).byIds[id], id } : {};

export const getItems = (store: any) =>
  getItemList(store).map((id: any) => getItemById(store, id));

// todo rename?
export const getItemsByItemListStateFilter = (store: any, statusFilter: any) => {
  const allItems = getItems(store);
  switch(statusFilter) {
    case ITEM_STATE_FILTERS.SOLD:
      return allItems.filter((item: any) => item.sold);
    case ITEM_STATE_FILTERS.FOR_SALE:
      return allItems.filter((item: any) => !item.sold);
    case ITEM_STATE_FILTERS.ALL:
    default:
      return allItems;
  }
}

/**
 * Transactions/Account Balances
 */

export const getTransactionsState = (store: any) => store.transactions;
export const getTransactions = (store: any) =>
  getTransactionsState(store) ? getTransactionsState(store).allTimestamps : [];

export const getUserBalance = (store: any, type: string, id: number) => {
  console.log('here');
  console.log(store);
  getTransactions(store) // todo return specifics
}


