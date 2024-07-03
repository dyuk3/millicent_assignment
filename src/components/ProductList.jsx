import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  // function to fetch products
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const url = `https://dummyjson.com/products?skip=${skip}`;
      const data = await fetch(url);
      const products = await data.json();
      setProductData((prevProducts) => {
        return [...prevProducts, ...products.products];
      });
      setSkip((value) => value + 30);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    console.log(skip);
  };

  // handler to fetch more products on scrolling down
  const handleScroll = () => {
    if (isLoading) return;
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      fetchProducts();
    }
  };

  // to add eventlistener on scrolling
  useEffect(() => {
    if (isLoading) return;
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  return (
    <div className='grid grid-flow-row grid-cols-4 gap-10'>
      {productData.map((product) => (
        <ProductCard key={product.id} data={{ ...product }} />
      ))}
    </div>
  );
};

export default ProductList;
