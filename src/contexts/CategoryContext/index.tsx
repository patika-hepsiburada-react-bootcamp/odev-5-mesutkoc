import { useState, createContext, useContext, FC } from "react";
import { CategoryContexts, Category } from "./types";

const defaultCategpries: CategoryContexts = {
  category: [
    { id: "1", category: "ACTIVE" },
    { id: "2", category: "DONE" },
    { id: "3", category: "DETAIL" },
  ],
  selectedCategory: "ACTIVE",
  setCategory:()=>{},
};

export const CategoryContext =
  createContext<CategoryContexts>(defaultCategpries);

const CategoryProvider: FC = ({ children }) => {
  const [category] = useState<Category[]>(defaultCategpries.category);
  const [selectedCategory, setCategory] = useState<string>(
    defaultCategpries.selectedCategory
  );

  return (
    <CategoryContext.Provider
      value={{ category, selectedCategory, setCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCat = () => useContext(CategoryContext);

export default CategoryProvider;
