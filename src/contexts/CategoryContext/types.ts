export interface Category {
  id: string;
  category: string;
}

export interface CategoryContexts {
  category: Category[];
  selectedCategory: string;
  setCategory:(data: string)=>void;
}
