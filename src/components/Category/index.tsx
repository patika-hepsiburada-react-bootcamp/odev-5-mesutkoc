import { useCat } from "../../contexts/CategoryContext";

const Category = () => {
  const { category, setCategory } = useCat();
  const setActiveCategory = (category: string) => {
    setCategory(category);
  };
  return (
    <div className="category">
      <div className="buttonGroup">
        {category.map((item) => (
          <button
            className="categoryButtons"
            key={item.id}
            onClick={() => setActiveCategory(item.category)}
          >
            {item.category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
