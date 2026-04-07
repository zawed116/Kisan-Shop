// src/components/home/GrowthPromoters.jsx
import { useState } from "react";
import ProductCard from "../common/ProductCard";
import { FaLeaf, FaChartLine, FaFlask } from "react-icons/fa";

const GrowthPromoters = () => {
  // State to manage showing more products
  const [showMore, setShowMore] = useState(false);

  // Real Growth Promoter Products with High-Quality Images
  const promoterProducts = [
    { id: 401, name: "Seaweed Liquid Fertilizer", price: 450, originalPrice: 580, image: "https://agribegri.com/_next/image?url=https%3A%2F%2Fdujjhct8zer0r.cloudfront.net%2Fmedia%2Fprod_image%2F18202070571750825792.webp&w=750&q=90", tag: "Organic", rating: 4.8 },
    { id: 402, name: "Gibberellic Acid 0.001%L", price: 320, originalPrice: 400, image: "https://agriplexindia.com/cdn/shop/files/ProGibb-Easy.jpg?crop=center&height=940&v=1743241797&width=940", tag: "Hormone", rating: 4.7 },
    { id: 403, name: "Humic Acid + Fulvic Acid", price: 890, originalPrice: 1100, image: "https://napnutriscience.com/wp-content/uploads/2021/04/1-1.png", tag: "Root Booster", rating: 4.9 },
    { id: 404, name: "Amino Acid Micronutrient", price: 550, originalPrice: 700, image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=400&fit=crop", tag: "Foliar Spray", rating: 4.6 },
    { id: 405, name: "Cytokinin Plant Growth", price: 1200, originalPrice: 1550, image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=400&fit=crop", tag: "Flower Booster", rating: 4.8 },
    // Extra products that show on click
    { id: 406, name: "Triacontanol EW 0.1%", price: 280, originalPrice: 350, image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=400&fit=crop", tag: "Growth Regulator", rating: 4.5 },
    { id: 407, name: "Bio-Potash Booster", price: 600, originalPrice: 750, image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400&fit=crop", tag: "Fruit Size", rating: 4.7 },
    { id: 408, name: "Ethephon 39% SL", price: 420, originalPrice: 500, image: "https://agribegri.com/_next/image?url=https%3A%2F%2Fdujjhct8zer0r.cloudfront.net%2Fmedia%2Fprod_image%2F0cb87d807ac73f58631a3f71376ec91f-11-03-25-09-46-48.webp&w=750&q=75", tag: "Ripener", rating: 4.6 },
    { id: 409, name: "Calcium Boron Liquid", price: 750, originalPrice: 900, image: "https://cpimg.tistatic.com/12034197/b/4/calcium-boron-liquid..webp", tag: "Immunity", rating: 4.9 },
    { id: 410, name: "Nitrobenzene 20% Spray", price: 380, originalPrice: 480, image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=400&fit=crop", tag: "Flowering", rating: 4.4 },
  ];

  // Logic to slice the products array
  const displayedProducts = showMore ? promoterProducts : promoterProducts.slice(0, 5);

  return (
    <div id="growth-promoters" className="max-w-7xl mx-auto mt-24 px-4">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-3">
             <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Boost Your Yield</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">Plant Growth Promoters</h2>
          <p className="text-gray-500 mt-2 font-medium">Enhance flowering, fruiting, and overall plant health with our premium range.</p>
        </div>
        
        {/* Toggle Button */}
        <button 
          onClick={() => setShowMore(!showMore)}
          className={`px-8 py-3 rounded-2xl font-bold transition-all shadow-md active:scale-95 border-2 ${
            showMore 
            ? "bg-white text-emerald-700 border-emerald-600" 
            : "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700"
          }`}
        >
          {showMore ? "Show Less" : "Browse All Stimulants"}
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 transition-all duration-700`}>
        {displayedProducts.map((product) => (
          <div key={product.id} className="relative group animate-fadeIn transition-all duration-500">
            {/* Organic/Type Tag */}
            <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                <p className="text-[9px] font-black text-emerald-600 uppercase tracking-tighter">{product.tag}</p>
            </div>
            
            <div className="hover:-translate-y-3 transition-transform duration-500">
              <div className="bg-white rounded-[2.5rem] p-2 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all border border-transparent hover:border-emerald-50">
                <ProductCard product={product} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* INTERACTIVE BENEFIT CARDS */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center group hover:border-emerald-200 transition-all">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <FaLeaf />
              </div>
              <h4 className="font-black text-gray-800 text-lg mb-2">Better Flowering</h4>
              <p className="text-gray-500 text-sm">Prevents flower drop and increases the number of fruits per plant.</p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center group hover:border-blue-200 transition-all">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FaChartLine />
              </div>
              <h4 className="font-black text-gray-800 text-lg mb-2">Increased Yield</h4>
              <p className="text-gray-500 text-sm">Boosts crop weight and quality significantly within 15-20 days.</p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center group hover:border-purple-200 transition-all">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <FaFlask />
              </div>
              <h4 className="font-black text-gray-800 text-lg mb-2">Nutrient Uptake</h4>
              <p className="text-gray-500 text-sm">Helps plants absorb more fertilizers from the soil efficiently.</p>
          </div>
      </div>

    </div>
  );
};

export default GrowthPromoters;