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
  const [isShowFilter, setIsShowFilter] = useState(true);

  // отслеживаем пустой ли стек, если да - скрываем фильтр
  useEffect(() => {
    if (stack.length === 0) {
      setIsShowFilter(false);
    } else {
      setIsShowFilter(true);
      // filterItems();
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

  // const filterItems = () => {
  //   if (stack.length > 0) {
  //     let tempItems = stack.map((stackItem) => {
  //       console.log('stackItem', stackItem);
  //       let tempRole = data.filter((item) => item.role === stackItem);
  //       let tempLevel = data.filter((item) => item.level === stackItem);
  //       let tempLanguages = data.filter((item) =>
  //         item.languages.includes(stackItem)
  //       );
  //       let tempTools = data.filter((item) => item.tools.includes(stackItem));

  //       return tempTools;
  //     });

  //     setData(tempItems.flat());
  //   } else {
  //     setData([...dataJs]);
  //   }
  // };

  return (
    <>
      <header className="header">
        <h1 style={{ display: 'none' }}>Static job listings master</h1>
        <img src="/public/images/bg-header-desktop.svg" alt="" />
      </header>
      <div className="body">
        <div className="container">
          {isShowFilter && <Filter stack={stack} setStack={setStack} />}
          <PostList data={data} addTag={addTag} />
        </div>
      </div>
    </>
  );
}

export default App;
