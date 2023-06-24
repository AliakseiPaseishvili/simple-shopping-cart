import { SCREENS } from "../../../constants";

export type RootStackParamList = {
  [SCREENS.SHOPPING_LIST_STACK.SHOPPING_LIST]: undefined;
  [SCREENS.SHOPPING_LIST_STACK.SHOPPING_ITEM]: { id: number};
};


