import { useState } from "react";
import ProductCard from "../common/ProductCard";

const TrendingProducts = () => {
  const [showAll, setShowAll] = useState(false);

  const allTrendingProducts = [
    { id: 101, name: "Syngenta Isabion Tonic", price: 850, image: "https://cdn.pixabay.com/photo/2016/11/29/05/04/agriculture-1867458_1280.jpg", category: "Growth Promoters", badge: "Trending" },
    { id: 102, name: "Premium Onion Seeds", price: 340, image: "https://cdn.pixabay.com/photo/2020/03/31/13/46/onion-4987679_1280.jpg", category: "Seeds", badge: "Hot" },
    { id: 103, name: "NPK 19:19:19 Soluble", price: 180, image: "https://cdn.pixabay.com/photo/2017/07/31/04/11/tomato-2556426_1280.jpg", category: "Fertilizer", badge: "Bulk Deal" },
    { id: 104, name: "Electric Sprayer Pump", price: 3200, image: "https://cdn.pixabay.com/photo/2021/08/29/07/31/sprayer-6582570_1280.jpg", category: "Equipment", badge: "Best Seller" },
    { id: 105, name: "Organic Bio-Pesticide", price: 450, image: "https://cdn.pixabay.com/photo/2015/05/26/17/51/pesticide-785133_1280.jpg", category: "Protection", badge: "Eco-Safe" },
    { id: 106, name: "Bayer Nativo Fungicide", price: 1200, image: "https://cdn.pixabay.com/photo/2016/11/18/16/04/corn-1835532_1280.jpg", category: "Protection", badge: "" },
    { id: 107, name: "Multiplex Micro Nutrients", price: 560, image: "https://cdn.pixabay.com/photo/2016/08/01/17/08/tomatoes-1561565_1280.jpg", category: "Nutrients", badge: "" },
    { id: 108, name: "UPL Saaf Fungicide", price: 280, image: "https://cdn.pixabay.com/photo/2017/10/10/11/49/vegetables-2836852_1280.jpg", category: "Protection", badge: "" },
    { id: 109, name: "Kitchen Garden Kit", price: 899, image: "https://cdn.pixabay.com/photo/2017/03/13/11/35/seedlings-2139413_1280.jpg", category: "Home Garden", badge: "New" },
    { id: 110, name: "Zinc EDTA 12%", price: 420, image: "https://cdn.pixabay.com/photo/2014/07/06/17/20/tractor-385681_1280.jpg", category: "Nutrients", badge: "" }
  ];

  const visibleProducts = showAll ? allTrendingProducts : allTrendingProducts.slice(0, 5);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Trending <span className="text-green-600"></span> Products
            </h2>
            <div className="h-1 w-20 bg-green-600 mt-2 rounded-full"></div>
          </div>

          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-green-600 font-semibold text-lg hover:text-green-700 transition-colors flex items-center gap-1 group"
          >
            {showAll ? "Show Less" : "View All Categories"} 
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {visibleProducts.map((product) => (
            <div 
              key={product.id} 
              className="relative group transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm 
              hover:shadow-2xl hover:border-green-400 transition-all duration-300">

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-2 left-2 z-10">
                    <span className="bg-green-600 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase shadow-sm">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-300 z-0"></div>

                {/* Product Card */}
                <ProductCard product={product} />

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrendingProducts;