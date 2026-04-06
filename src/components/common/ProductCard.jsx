const ProductCard = ({ product }) => {
    return (
      <div className="bg-white p-3 shadow rounded">
        <img src={product.image} className="h-40 w-full object-cover" />
  
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
  
        <button className="bg-green-600 text-white w-full mt-2">
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;