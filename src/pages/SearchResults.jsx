import { useLocation } from "react-router-dom";
import products from "../data/products"; // Aapka data file
import ProductCard from "../components/common/ProductCard";
import Header from "../components/layout/Header";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  // Filtering products based on search query
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Search Results for: <span className="text-green-600">"{query}"</span>
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="animate-fadeIn">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border">
            <span className="text-6xl">🔍</span>
            <h3 className="text-xl font-bold mt-4 text-gray-700">No Products Found</h3>
            <p className="text-gray-500">Try searching for "Seeds", "Spray" or "Fertilizer"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;