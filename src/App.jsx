import { useEffect, useState } from 'react';
import Filter from './components/Filter/Filter';
import PostList from './components/PostList/PostList';
import dataJs from './data/data';

import './App.scss';

/*
  Дополнительно:
    - подсветить теги, которые попали под фильтер (сделать их активными)
    - сделать на всю высоту. Сейчас наш блок ограничен контентом. Нам надо, чтобы при фильтрации фон не пропадал. Чтобы "условный футер" был внизу страницы
*/

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

  // отслеживаем пустой ли стек, если да - скрываем фильтр
  useEffect(() => {
    if (stackSelectedCategory.length === 0) {
      setIsShowFilter(false);
      setData(dataJs);
    } else {
      setIsShowFilter(true);
      setData(filterData);
    }
  }, [stackSelectedCategory]);

  // функция, которая будет добавлять тег в стек
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
        <img src="/images/bg-header-desktop.svg" alt="" />
      </header>
      <div className="body">
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
