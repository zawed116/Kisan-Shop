import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useContext(CartContext);
  
  const isWishlisted = wishlist.find((item) => item.id === product.id);

  return (
    <div className="bg-white p-3 shadow-md rounded-2xl group relative border border-gray-100 hover:shadow-xl transition-all duration-300">
      {/* Wishlist Button */}
      <button 
        onClick={() => toggleWishlist(product)}
        className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:scale-110 transition-transform"
      >
        {isWishlisted ? (
          <FaHeart className="text-red-500 text-lg" />
        ) : (
          <FaRegHeart className="text-gray-400 text-lg hover:text-red-400" />
        )}
      </button>

      <div className="aspect-square overflow-hidden rounded-xl bg-gray-50">
        <img 
          src={product.image} 
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" 
          alt={product.name}
        />
      </div>

      <div className="mt-3">
        <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider">{product.category}</p>
        <h3 className="font-bold text-gray-800 text-sm md:text-base line-clamp-1">{product.name}</h3>
        <p className="text-green-700 font-black text-lg mt-1">₹{product.price}</p>
        
        <button 
          onClick={() => addToCart(product)}
          className="bg-green-600 text-white w-full mt-3 py-2.5 rounded-xl font-bold text-sm hover:bg-green-700 active:scale-95 transition-all shadow-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;