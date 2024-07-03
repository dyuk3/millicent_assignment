const ProductCard = ({ data }) => {
  const { title, price, thumbnail, rating } = data;
  return (
    <div className='w-80 border '>
      <img className='object-cover w-full' src={thumbnail} alt='productImage' />
      <div className='p-2'>
        <p className='text-center'>{title}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
