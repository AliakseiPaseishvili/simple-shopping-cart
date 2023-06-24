import { ShoppingItem, ShoppingItemMap } from "../../types";

export const getDataIdArray = (data: ShoppingItem[]): number[] =>
  data.map(({ id }) => id);

export const getMapData = (data: ShoppingItem[]): ShoppingItemMap =>
  data.reduce((obj, item) => {
    obj[item.id] = item;

    return obj;
  }, {} as ShoppingItemMap);
