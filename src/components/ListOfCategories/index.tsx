import React, { useEffect, useState } from 'react';
import { Category, CategorySkeleton } from '../Category';
import { List, Item } from './styles';
import db from '../db.json';

interface Category {
  id: number;
  name: string;
  cover: string;
  emoji: string;
  path: string;
}

interface CategoryRecord {
  categories: Category[];
}

function useCategoriesData () {
  const [categoryList, setCategoryList] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        setTimeout(async () => {
          const response = await fetch('https://api.jsonbin.io/v3/b/645d4b8c8e4aa6225e9b2d5c');
          const responseA = await response.json() as { record: CategoryRecord };
          const categoriesA = responseA.record.categories.map(category => <Item key={category.id}><Category {...category} /></Item>);
          setCategoryList(categoriesA);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return { categoryList, loading };
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState<boolean>(false);
  const { categoryList, loading } = useCategoriesData();

  const renderList = (fixed: boolean): JSX.Element => (
    <List fixed={fixed}>{categoryList}</List>
  );

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [showFixed]);



  if (loading) {
    return (
      <List>
        {db.categories.map((category: any) => (
          <Item key={category.id}>
            <CategorySkeleton light={true} />
          </Item>
        ))}
      </List>
    );
  }

  return (
    <>
      {renderList(false)}
      {showFixed && renderList(true)}
    </>
  );
}; 
// el rest operator {...} le pasa todas las props por defecto
