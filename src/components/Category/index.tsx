import { useCat } from '../../contexts/CategoryContext';

const Category = () => {
  const { category } = useCat();
    return (
      <div>
        {category.map(item => (<label key={item.id}>{item.category}</label>))}
      </div>
    );
};

export default Category;
