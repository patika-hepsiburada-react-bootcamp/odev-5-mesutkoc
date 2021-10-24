import { useCat } from "../../contexts/CategoryContext";
import { useTodo } from "../../contexts/TodoContext";
import Trash from "../../assets/trashicon.png";
const Category = () => {
  const { allTodo, setAllTodo, deletedTodo, setDeletedTodo } = useTodo();
  const { category, setCategory } = useCat();
  const setActiveCategory = (category: string) => {
    setCategory(category);
  };
  const deleteAll = () => {
    allTodo.splice(0, allTodo.length);
    deletedTodo.splice(0, deletedTodo.length);
    setAllTodo([]);
    setDeletedTodo([]);
  };
  return (
    <div className="category">
      <div className="buttons" style={{ display: "flex" }}>
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
        <div className="trash">
          <img src={Trash} alt="trash" width="30" onClick={() => deleteAll()} />
        </div>
      </div>
    </div>
  );
};

export default Category;
