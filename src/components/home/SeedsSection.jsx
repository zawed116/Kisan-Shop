// src/components/home/SeedsSection.jsx
import { useState } from "react";
import ProductCard from "../common/ProductCard";

const SeedsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Real Seed Products with working High-Quality Images
  const seedProducts = [
    { id: 301, name: "Hybrid Tomato Seeds", price: 299, originalPrice: 450, image: "https://organicbazar.net/cdn/shop/files/TomatoSeeds_tamatarKeBeej.jpg?v=1770811704&width=823", type: "Vegetable", badge: "High Yield" },
    { id: 302, name: "Basmati Paddy Seeds", price: 1250, originalPrice: 1500, image: "https://5.imimg.com/data5/SELLER/Default/2026/1/576023992/FC/FB/ZO/38262764/basmati-seeds-500x500.jpg", type: "Field Crop", badge: "Popular" },
    { id: 303, name: "Marigold Flower Seeds", price: 150, originalPrice: 200, image: "https://organicbazar.net/cdn/shop/files/MarigoldOrangeFlowerSeedsOrganicbazarFlowerSeeds.jpg?v=1754912126", type: "Flower", badge: "Easy Grow" },
    { id: 304, name: "F1 Hybrid Chilli Seeds", price: 340, originalPrice: 420, image: "https://agriplexindia.com/cdn/shop/files/Armour-F1-Hybrid-Chilli-Seeds.png?crop=center&height=940&v=1743241709&width=940", type: "Vegetable", badge: "Disease Resistant" },
    { id: 305, name: "Sweet Corn Seeds", price: 480, originalPrice: 600, image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=400", type: "Vegetable", badge: "Best Seller" },
    { id: 306, name: "Papaya Thai Selection", price: 890, originalPrice: 1100, image: "https://m.media-amazon.com/images/I/61DA5yZYWSL._SY879_.jpg", type: "Fruit", badge: "Premium" },
  ];

  const filteredSeeds = activeTab === "All" 
    ? seedProducts 
    : seedProducts.filter(s => s.type === activeTab);

  const tabs = ["All", "Vegetable", "Field Crop", "Flower", "Fruit"];

  return (
    <div id="seeds" className="max-w-7xl mx-auto mt-20 px-4">
      
      {/* SECTION HEADER */}
      <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-green-900/5 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
              <p className="text-green-600 font-black text-xs uppercase tracking-widest">Certified 99% Germination</p>
            </div>
            <h2 className="text-4xl font-black text-gray-900 leading-tight">High-Quality Seeds</h2>
            <p className="text-gray-500 font-medium">Sow the best to reap the best harvest</p>
          </div>

          {/* TAB FILTERS */}
          <div className="flex flex-wrap justify-center gap-2 bg-gray-100 p-1.5 rounded-2xl">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  activeTab === tab 
                  ? "bg-green-600 text-white shadow-lg shadow-green-200" 
                  : "text-gray-500 hover:bg-white hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredSeeds.map((product) => (
          <div key={product.id} className="relative group animate-fadeIn">
            {/* Seed Quality Badge */}
            <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md text-green-700 text-[10px] font-black px-3 py-1 rounded-lg shadow-sm border border-green-100">
               {product.badge}
            </div>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* SEED CARE TIP BANNER */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-blue-200 text-xs font-bold uppercase mb-2">Free Guide</p>
                <h3 className="text-xl font-black mb-4">Seed Treatment <br/> Steps</h3>
                <button className="text-sm font-bold border-b-2 border-white pb-1 hover:text-yellow-400 transition-colors">Read More</button>
              </div>
              <div className="absolute -right-4 -bottom-4 text-7xl opacity-20 transform -rotate-12 group-hover:rotate-0 transition-transform">🧪</div>
          </div>

          <div className="bg-orange-500 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-orange-200 text-xs font-bold uppercase mb-2">Expert Advice</p>
                <h3 className="text-xl font-black mb-4">Best Time to <br/> Sow Wheat</h3>
                <button className="text-sm font-bold border-b-2 border-white pb-1 hover:text-yellow-400 transition-colors">Check Calendar</button>
              </div>
              <div className="absolute -right-4 -bottom-4 text-7xl opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform">📅</div>
          </div>

          <div className="bg-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-emerald-200 text-xs font-bold uppercase mb-2">Video Tutorial</p>
                <h3 className="text-xl font-black mb-4">Nursery Bed <br/> Preparation</h3>
                <button className="text-sm font-bold border-b-2 border-white pb-1 hover:text-yellow-400 transition-colors">Watch Now</button>
              </div>
              <div className="absolute -right-4 -bottom-4 text-7xl opacity-20 transform -rotate-12 group-hover:rotate-0 transition-transform">🎥</div>
          </div>
      </div>

    </div>
  );
};

export default SeedsSection;