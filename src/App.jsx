import { useEffect, useState } from 'react';
import Filter from './components/Filter/Filter';
import PostList from './components/PostList/PostList';
import dataJs from './data/data';

import './App.scss';
import bgImage from './../public/images/bg-header-desktop.svg';

function App() {
  const [data, setData] = useState(dataJs);
  const [stackSelectedCategory, setStackSelectedCategory] = useState([]);
  const [isShowFilter, setIsShowFilter] = useState(true);

  const mergeCategories = (item) => {
    return [item.role, item.level, ...item.languages, ...item.tools];
  };

  const filterData = dataJs.filter((item) => {
    return stackSelectedCategory.every((tag) => {
      return mergeCategories(item).includes(tag);
    });
  });

  useEffect(() => {
    // отслеживаем пустой ли стек, если да - скрываем фильтр
    if (stackSelectedCategory.length === 0) {
      setIsShowFilter(false);
      setData(dataJs);
    } else {
      setIsShowFilter(true);
      setData(filterData);
    }
  }, [stackSelectedCategory]);

  const addTag = (tag) => {
    if (stackSelectedCategory.includes(tag)) {
      return stackSelectedCategory;
    } else {
      setStackSelectedCategory([...stackSelectedCategory, tag]);
    }
  };

  const clearFilter = () => {
    setStackSelectedCategory([]);
    setData(dataJs);
  };

  return (
    <>
      <header className="header">
        <h1 style={{ display: 'none' }}>Static job listings master</h1>
        <img src={bgImage} alt="" />
      </header>
      <div className="bodyApp">
        <div className="container">
          {isShowFilter && (
            <Filter
              stackSelectedCategory={stackSelectedCategory}
              setStackSelectedCategory={setStackSelectedCategory}
              clearFilter={clearFilter}
            />
          )}
          <PostList data={filterData} addTag={addTag} />
        </div>
      </div>
    </>
  );
}

export default App;
