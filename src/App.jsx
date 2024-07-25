import { useEffect, useState } from 'react';
import Filter from './components/Filter/Filter';
import PostList from './components/PostList/PostList';
import dataJs from './data/data';

import './App.scss';

function App() {
  const [data, setData] = useState(dataJs);
  // стек - сюда мы кладем все теги, на которые кликаем.
  //        выводим как список в плашке с фильтрами
  const [stack, setStack] = useState([]);

  // флаг - отвечает за показ/скрытие панельки с фильтрами
  const [isShowFilter, setIsShowFilter] = useState(true);

  // отслеживаем пустой ли стек, если да - скрываем фильтр
  useEffect(() => {
    if (stack.length === 0) {
      setIsShowFilter(false);
    } else {
      setIsShowFilter(true);
    }
  }, [stack]);

  // функция, которая будет добавлять тег в стек
  const addTag = (tag) => {
    //проверка на то, есть ли такой тег в стеке
    if (stack.includes(tag)) {
      return stack;
    } else {
      setStack([...stack, tag]);
    }
  };

  //полностью очистить стек и скрыть плашку с фильтром
  const clearFilter = () => {
    setStack([]);
    console.log('clear filter');
  };

  // на основе стека вывести ваканасии, в которых есть наши теги

  const finedTag = () => {};

  return (
    <>
      <h1 style={{ display: 'none' }}>Static job listings master</h1>
      {isShowFilter && (
        <Filter stack={stack} setStack={setStack} clearFilter={clearFilter} />
      )}
      <PostList data={data} addTag={addTag} finedTag={finedTag} />
    </>
  );
}

export default App;
