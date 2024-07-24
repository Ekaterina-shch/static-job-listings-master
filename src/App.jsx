import Filter from './components/Filter/Filter';
import PostList from './components/PostList/PostList';
import './App.scss';

function App() {
  return (
    <>
      <h1 style={{ display: 'none' }}>Static job listings master</h1>
      <Filter />
      <PostList />
    </>
  );
}

export default App;
