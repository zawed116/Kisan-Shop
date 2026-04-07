import { useState } from "react";
import ProductCard from "../common/ProductCard";

const TrendingProducts = () => {
  const [showAll, setShowAll] = useState(false);

  const allTrendingProducts = [
    { 
      id: 101, 
      name: "Syngenta Isabion Tonic", 
      price: 850, 
      // Naya working link jo agriculture tonic ko properly represent karta hai
      image: "https://www.syngenta.co.in/sites/g/files/kgtney376/files/styles/syngenta_half_width_auto/public/media/image/2022/04/26/new_isabion_increased_width_lesser_height_croppped_r.jpg?itok=Y8U5lLb0", 
      category: "Growth Promoters", 
      badge: "Trending" 
    },
    { 
      id: 102, 
      name: "Premium Onion Seeds", 
      price: 340, 
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=600&auto=format&fit=crop", 
      category: "Seeds", 
      badge: "Hot" 
    },
    { 
      id: 103, 
      name: "NPK 19:19:19 Soluble", 
      price: 180, 
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop", 
      category: "Fertilizer", 
      badge: "Bulk Deal" 
    },
    { 
      id: 104, 
      name: "Electric Sprayer Pump", 
      price: 3200, 
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=600&auto=format&fit=crop", 
      category: "Equipment", 
      badge: "Best Seller" 
    },
    { 
      id: 105, 
      name: "Organic Bio-Pesticide", 
      price: 450, 
      image: "https://infinitylearn.com/surge/wp-content/uploads/2024/06/Biopesticides-copy.jpg", 
      category: "Protection", 
      badge: "Eco-Safe" 
    },
    { 
      id: 106, 
      name: "Bayer Nativo Fungicide", 
      price: 1200, 
      image: "https://e2vctdhnq76.exactdn.com/wp-content/uploads/2025/05/nativo-fungicide-1080x703.png?strip=all&lossy=1&ssl=1", 
      category: "Protection", 
      badge: "" 
    },
    { 
      id: 107, 
      name: "Multiplex Micro Nutrients", 
      price: 560, 
      image: "https://5.imimg.com/data5/ECOM/Default/2023/12/372419848/AH/ZK/KQ/59373149/multiplex-fruits-2-1000x1000.png", 
      category: "Nutrients", 
      badge: "" 
    },
    { 
      id: 108, 
      name: "UPL Saaf Fungicide", 
      price: 280, 
      image: "https://www.agriplexindia.com/cdn/shop/products/Saaf_1.png?v=1679921658", 
      category: "Protection", 
      badge: "" 
    },
    { 
      id: 109, 
      name: "Kitchen Garden Kit", 
      price: 899, 
      image: "https://tse2.mm.bing.net/th/id/OIP.p0ZvZC0pZ7VXcca6T701eQHaFM?pid=Api&P=0&h=180", 
      category: "Home Garden", 
      badge: "New" 
    },
    { 
      id: 110, 
      name: "Zinc EDTA 12%", 
      price: 420, 
      image: "https://cpimg.tistatic.com/08516626/b/7/Zinc-Cheleted-Edta-ZN-12-.jpg", 
      category: "Nutrients", 
      badge: "" 
    }
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