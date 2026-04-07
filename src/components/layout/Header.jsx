import { useState, useContext } from "react";
import { FaTruck, FaHeart, FaUser, FaShoppingCart, FaSearch, FaLeaf } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { cart, wishlist } = useContext(CartContext);
  const navigate = useNavigate();

  // Cart total price calculation
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-[100] shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-4 gap-4">
        
        {/* Logo with Icon */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-green-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <FaLeaf className="text-white text-xl" />
          </div>
          <span className="text-2xl font-black text-gray-800 tracking-tighter">
            Kisan<span className="text-green-600">Shop</span>
          </span>
        </Link>

        {/* Search Bar with Glass Effect */}
        <form onSubmit={handleSearch} className="flex flex-1 w-full max-w-xl border-2 border-gray-100 rounded-2xl overflow-hidden focus-within:border-green-500 focus-within:shadow-md transition-all bg-gray-50/50">
          <input
            type="text"
            placeholder="Search Seeds, Fertilizers, Smart Tools..."
            className="w-full px-4 py-2.5 outline-none bg-transparent text-sm font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="bg-green-600 px-6 text-white hover:bg-green-700 transition-colors flex items-center justify-center">
            <FaSearch className="text-lg" />
          </button>
        </form>

        {/* Action Buttons */}
        <div className="flex items-center gap-6 text-gray-600">
          {/* Wishlist */}
          <Link to="/wishlist" className="flex flex-col items-center group relative pt-1">
            <div className="relative">
              <FaHeart className={`text-2xl transition-colors ${wishlist.length > 0 ? 'text-red-500' : 'group-hover:text-red-500'}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-white animate-bounce">
                  {wishlist.length}
                </span>
              )}
            </div>
            <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">Wishlist</span>
          </Link>

          {/* Cart with Dynamic Price */}
          <Link to="/cart" className="flex items-center gap-3 bg-gray-900 text-white px-5 py-2.5 rounded-2xl hover:bg-green-600 transition-all shadow-lg active:scale-95 group">
            <div className="relative">
              <FaShoppingCart className="text-xl group-hover:shake" />
              {cart.length > 0 && (
                <span className="absolute -top-4 -right-4 bg-orange-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-gray-900">
                  {cart.length}
                </span>
              )}
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-bold opacity-70 uppercase">My Cart</span>
              <span className="font-bold text-sm">₹{totalPrice.toLocaleString()}</span>
            </div>
          </Link>
          
          {/* User Profile */}
          <Link to="/login" className="flex flex-col items-center group pt-1">
            <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-green-100 group-hover:shadow-inner transition-all">
              <FaUser className="text-base group-hover:text-green-600" />
            </div>
            <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;