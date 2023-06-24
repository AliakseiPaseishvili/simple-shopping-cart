export interface ShoppingItem {
  id: number;
  title: string;
  price: number;
  image?: string;
};

export type ShoppingItemMap = Partial<{
  [key: number]: ShoppingItem;
}>;
