import { useCat } from '../../contexts/CategoryContext';

const Category = () => {
  const { category, setCategory } = useCat();
  const setActiveCategory = (category:string) => {
    setCategory(category);
  }
    return (
      <div className="category">
        {category.map((item) => (
          <label
            key={item.id}
            style={{ paddingLeft: "1rem" }}
            onClick={() => setActiveCategory(item.category)}
          >
            {item.category}
          </label>
        ))}
      </div>
    );
};

export default Category;
