import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getComicsByCategory, getProducts } from './Comics';

const ItemListContainer = () => {
  const [comics, setComics] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const asyncFunc = category ? getComicsByCategory(category) : getProducts();
    asyncFunc
      .then((response) => {
        setComics(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [category]);

  return (
    <div>
      <h1>{category}</h1>
      <ItemList comics={comics} category={category} />
    </div>
  );
};


export default ItemListContainer;
