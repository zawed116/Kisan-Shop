import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/common/ProductCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Wishlist = () => {
  const { wishlist } = useContext(CartContext);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-black mb-8">My Wishlist ❤️</h1>
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl font-bold">Your wishlist is empty!</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;