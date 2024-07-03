import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const url = 'https://dummyjson.com/products';
    const data = await fetch(url);
    const products = await data.json();
    console.log(products);
    setProductData(products.products);
  };

  return (
    <div className='grid grid-flow-row grid-cols-3 gap-10'>
      {productData.map((product) => (
        <ProductCard key={product.id} data={{ ...product }} />
      ))}
    </div>
  );
};

export default ProductList;
