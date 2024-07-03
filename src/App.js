import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <h1 className='text-2xl font-semibold text-center my-8'>All Products</h1>
      <ProductList />
    </div>
  );
}

export default App;
