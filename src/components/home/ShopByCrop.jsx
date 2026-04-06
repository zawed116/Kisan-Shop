// src/components/home/ShopByCrop.jsx
import { useState } from "react";

const ShopByCrop = () => {
  // Is state se hum decide karenge ki saari crops dikhani hai ya nahi
  const [showAll, setShowAll] = useState(false);

  const crops = [
    { name: "Rice / Paddy", img: "https://cdn-icons-png.flaticon.com/512/3043/3043472.png", color: "bg-amber-50" },
    { name: "Wheat", img: "https://cdn-icons-png.flaticon.com/512/3043/3043534.png", color: "bg-yellow-50" },
    { name: "Mango", img: "https://cdn-icons-png.flaticon.com/512/2909/2909778.png", color: "bg-orange-50" },
    { name: "Tomato", img: "https://cdn-icons-png.flaticon.com/512/1202/1202125.png", color: "bg-red-50" },
    { name: "Cotton", img: "https://cdn-icons-png.flaticon.com/512/3222/3222792.png", color: "bg-blue-50" },
    { name: "Potato", img: "https://cdn-icons-png.flaticon.com/512/2329/2329865.png", color: "bg-stone-50" },
    { name: "Chilli", img: "https://cdn-icons-png.flaticon.com/512/3043/3043510.png", color: "bg-red-100" },
    { name: "Sugarcane", img: "https://cdn-icons-png.flaticon.com/512/2910/2910795.png", color: "bg-green-50" },
    { name: "Maize (Corn)", img: "https://cdn-icons-png.flaticon.com/512/1135/1135544.png", color: "bg-yellow-100" },
    { name: "Grapes", img: "https://cdn-icons-png.flaticon.com/512/2909/2909808.png", color: "bg-purple-50" },
    { name: "Onion", img: "https://cdn-icons-png.flaticon.com/512/3043/3043431.png", color: "bg-pink-50" },
    { name: "Soybean", img: "https://cdn-icons-png.flaticon.com/512/2329/2329888.png", color: "bg-green-100" },
  ];

  // Shuruat mein sirf 6 crops dikhayenge
  const visibleCrops = showAll ? crops : crops.slice(0, 6);

  return (
    <div id="shop-by-crop" className="max-w-7xl mx-auto mt-20 px-4">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Shop by Your Crop</h2>
          <p className="text-sm text-gray-500 mt-1">Get customized solutions for your specific crop needs</p>
          <div className="h-1.5 w-16 bg-green-600 rounded-full mt-2"></div>
        </div>
        
        {/* Toggle Button */}
        <button 
          onClick={() => setShowAll(!showAll)}
          className="text-green-600 font-bold hover:text-green-800 transition-all flex items-center gap-1 group"
        >
          {showAll ? "Show Less" : "View All Crops"}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* CROPS GRID/SCROLL */}
      {/* Jab showAll false hoga tab scrollable list dikhegi, jab true hoga tab full grid dikhegi */}
      <div className={`${showAll ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-6' : 'flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-2'} transition-all duration-500`}>
        {visibleCrops.map((crop, i) => (
          <div 
            key={i} 
            className="group flex flex-col items-center min-w-[140px] md:min-w-[160px] cursor-pointer animate-fadeIn"
          >
            {/* CROP ICON BOX */}
            <div className={`w-28 h-28 md:w-32 md:h-32 rounded-3xl ${crop.color} flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 border-2 border-transparent group-hover:border-green-400 shadow-sm`}>
              
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-400 to-transparent"></div>
              
              <img 
                src={crop.img} 
                className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110" 
                alt={crop.name} 
              />
              
              <div className="absolute inset-0 bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* CROP NAME */}
            <p className="mt-4 font-bold text-gray-700 text-sm md:text-base group-hover:text-green-600 transition-colors text-center">
              {crop.name}
            </p>
            
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Explore Products
            </span>
          </div>
        ))}
      </div>

      {/* CROP ADVICE BANNER - Unique Branding */}
      <div className="mt-12 bg-white rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between border border-gray-100 shadow-xl shadow-green-900/5 overflow-hidden relative">
        {/* Decorative Background Circle */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-green-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-200 text-3xl">
            🌱
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-800">Custom Crop Protection Plan</h3>
            <p className="text-sm text-gray-500 mt-1">Select your crop and get a complete 90-day nutrition chart.</p>
          </div>
        </div>
        
        <button className="mt-6 md:mt-0 w-full md:w-auto bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg active:scale-95 relative z-10">
          Get Expert Advice
        </button>
      </div>

    </div>
  );
};

export default ShopByCrop;