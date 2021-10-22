import { useState, createContext, useContext, FC } from "react";
import { CategoryContexts, Category } from "./types";

const defaultCategpries: CategoryContexts = {
  category: [
    { id: "1", category: "ACTIVE"},
    { id: "2", category: "DONE" },
    { id: "3", category: "DETAIL"},
  ],
};

export const CategoryContext = createContext<CategoryContexts>(defaultCategpries);

const CategoryProvider: FC = ({ children }) => {
  const [category] = useState<Category[]>(defaultCategpries.category);
  return (
    <CategoryContext.Provider value={{ category }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCat = () => useContext(CategoryContext);

export default CategoryProvider;
