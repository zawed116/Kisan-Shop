import { useLocation } from "react-router-dom";
import products from "../data/products"; 
import ProductCard from "../components/common/ProductCard";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query) || 
    p.category?.toLowerCase().includes(query)
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          Showing results for: <span className="text-green-600">"{query}"</span>
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-dashed">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-700">No matching products found</h3>
            <p className="text-gray-500 mt-2">Try searching for generic terms like "Seeds" or "UPL"</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;