import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SearchResults from "./pages/SearchResults";

// Providers ko yahan ek hi baar wrap karein
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            
            {/* Cart Page */}
            <Route path="/cart" element={<Cart />} />
            
            {/* Login Page */}
            <Route path="/login" element={<Login />} />
            
            {/* Search Results Page */}
            <Route path="/search" element={<SearchResults />} />
            
            {/* Wishlist aur Track Order ke liye bhi yahan route bana sakte hain */}
            <Route path="/wishlist" element={<div className="p-10 text-center font-bold">Wishlist Page Coming Soon!</div>} />
            <Route path="/track-order" element={<div className="p-10 text-center font-bold">Track Order Page Coming Soon!</div>} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;