export interface ShoppingItem {
  id: number;
  title: string;
  price: number;
  imageUrl?: string;
  description: string;
};

export type ShoppingItemMap = Partial<{
  [key: number]: ShoppingItem;
}>;
