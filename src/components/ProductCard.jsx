const ProductCard = ({ data }) => {
  // accessing the props from the parent component
  const { title, price, brand, thumbnail, rating } = data;
  return (
    <div className='w-80 border shadow-lg cursor-pointer'>
      <img className='object-cover w-full' src={thumbnail} alt='productImage' />
      <div className='px-12 py-4 flex flex-col gap-4'>
        <div className='text-center'>
          <p className=' text-blue-600 font-semibold'>{title}</p>
          <p className='text-gray-800 '>{brand}</p>
        </div>
        <p className='text-gray-400 font-semibold'>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
