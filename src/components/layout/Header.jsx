// src/components/layout/Header.jsx
import { useState, useContext } from "react";
import { FaTruck, FaHeart, FaUser, FaShoppingCart, FaSearch, FaMicrophone } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Navigation ke liye
import { CartContext } from "../../context/CartContext"; // Cart count dikhane ke liye

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { cart } = useContext(CartContext); // Cart context se data liya
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Search page par bhej dega query ke saath
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="bg-white border-b sticky top-0 z-[100] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 gap-4">
        
        {/* LOGO - Clickable to Home */}
        <Link to="/" className="text-3xl font-black text-green-600 tracking-tighter shrink-0">
          Kisan<span className="text-orange-500">Shop</span>
        </Link>

        {/* SEARCH BAR - Functional */}
        <form 
          onSubmit={handleSearch}
          className="flex flex-1 max-w-[600px] border-2 border-gray-100 rounded-2xl overflow-hidden focus-within:border-green-500 transition-all bg-gray-50"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Seeds, Pesticides, Tools..."
            className="w-full px-5 py-2.5 outline-none bg-transparent text-sm"
          />
          <div className="flex items-center bg-white">
            <button type="button" className="px-3 text-gray-400 hover:text-blue-500 border-l border-gray-100">
              <FaMicrophone />
            </button>
            <button type="submit" className="bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition">
              <FaSearch />
            </button>
          </div>
        </form>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-6 text-gray-600">
          
          {/* Track Order */}
          <Link to="/track-order" className="flex flex-col items-center group cursor-pointer">
            <FaTruck className="text-xl group-hover:text-green-600 transition-colors" />
            <span className="text-[10px] font-bold mt-1 uppercase">Track</span>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" className="flex flex-col items-center group cursor-pointer relative">
            <FaHeart className="text-xl group-hover:text-red-500 transition-colors" />
            <span className="text-[10px] font-bold mt-1 uppercase">Wishlist</span>
            {/* Red dot for notification */}
            <span className="absolute top-0 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </Link>

          {/* Login */}
          <Link to="/login" className="flex flex-col items-center group cursor-pointer border-l pl-6 border-gray-100">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
              <FaUser className="text-sm group-hover:text-green-600" />
            </div>
            <span className="text-[10px] font-bold mt-1 uppercase">Login</span>
          </Link>

          {/* Cart - Dynamic Count */}
          <Link to="/cart" className="flex items-center gap-3 bg-gray-900 text-white px-5 py-2.5 rounded-2xl hover:bg-green-600 transition-all shadow-lg active:scale-95">
            <div className="relative">
              <FaShoppingCart className="text-lg" />
              {cart.length > 0 && (
                <span className="absolute -top-3 -right-3 bg-orange-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-black border-2 border-gray-900">
                  {cart.length}
                </span>
              )}
            </div>
            <span className="font-bold text-sm hidden md:block">₹0.00</span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Header;