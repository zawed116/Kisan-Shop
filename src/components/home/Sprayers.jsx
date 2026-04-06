// src/components/home/Sprayers.jsx
import { useState } from "react";
import ProductCard from "../common/ProductCard";
import { FaBatteryFull, FaWater, FaGear, FaShieldHalved } from "react-icons/fa6";

const Sprayers = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Real Sprayer Products with High-Quality Images & Specs
  const sprayerProducts = [
    { id: 601, name: "2-in-1 Battery & Manual Sprayer", price: 3200, originalPrice: 4500, image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=400", type: "Battery", capacity: "16 Liters", battery: "12V/8Ah" },
    { id: 602, name: "Hand Compression Garden Sprayer", price: 450, originalPrice: 650, image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=400", type: "Manual", capacity: "2 Liters", battery: "N/A" },
    { id: 603, name: "Petrol Power Pressure Sprayer", price: 8500, originalPrice: 11000, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=400", type: "Petrol", capacity: "20 Liters", battery: "4-Stroke" },
    { id: 604, name: "Knapsack Manual Sprayer", price: 1800, originalPrice: 2200, image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=400", type: "Manual", capacity: "16 Liters", battery: "N/A" },
    { id: 605, name: "High Pressure Hose Reel Sprayer", price: 15500, originalPrice: 18500, image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400", type: "Petrol", capacity: "50 Liters", battery: "Engine" },
  ];

  const filteredSprayers = activeFilter === "All" 
    ? sprayerProducts 
    : sprayerProducts.filter(s => s.type === activeFilter);

  return (
    <div id="sprayers" className="max-w-7xl mx-auto mt-24 px-4">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter">
            Agriculture <span className="text-blue-600">Sprayers</span>
          </h2>
          <p className="text-gray-500 mt-2 font-medium italic">Heavy-duty sprayers for every crop & farm size.</p>
          <div className="flex gap-2 mt-4">
            {["All", "Battery", "Manual", "Petrol"].map(f => (
              <button 
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === f ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-400 hover:bg-blue-100'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-gray-400">
           <div className="flex flex-col items-center"><FaBatteryFull className="text-xl mb-1 text-green-500"/><span className="text-[10px] font-bold">Long Life</span></div>
           <div className="flex flex-col items-center"><FaShieldHalved className="text-xl mb-1 text-blue-500"/><span className="text-[10px] font-bold">Warranty</span></div>
           <div className="flex flex-col items-center"><FaGear className="text-xl mb-1 text-orange-500"/><span className="text-[10px] font-bold">Spare Parts</span></div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {filteredSprayers.map((product) => (
          <div key={product.id} className="group relative">
            {/* Tech Specs Badge on Hover */}
            <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="bg-black/80 backdrop-blur-md text-white text-[9px] px-2 py-1 rounded flex items-center gap-1">
                  <FaWater className="text-blue-400" /> {product.capacity}
               </span>
            </div>
            
            <div className="hover:-translate-y-2 transition-transform duration-500">
                <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>

      {/* UNIQUE EQUIPMENT CARE BANNER */}
      <div className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[3rem] p-10 relative overflow-hidden shadow-2xl">
          {/* Abstract background design */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-40 h-40 bg-blue-400/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center md:text-left">
                  <h3 className="text-white text-3xl font-black mb-4">Maintain Your Sprayer Like a Pro!</h3>
                  <p className="text-blue-100 text-lg opacity-80 leading-relaxed">
                    Dirty nozzles reduce efficiency by 30%. Get our exclusive **Cleaning & Maintenance Kit** free with every Power Sprayer purchase this month.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                      <div className="flex items-center gap-2 text-white/90 text-sm font-bold bg-white/10 px-4 py-2 rounded-xl border border-white/20">
                         <FaGear className="text-yellow-400" /> Free Spare Gaskets
                      </div>
                      <div className="flex items-center gap-2 text-white/90 text-sm font-bold bg-white/10 px-4 py-2 rounded-xl border border-white/20">
                         <FaShieldHalved className="text-green-400" /> 1 Year Warranty
                      </div>
                  </div>
              </div>
              
              <button className="bg-white text-blue-700 px-12 py-5 rounded-2xl font-black text-xl hover:bg-yellow-400 hover:text-black transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95">
                  Shop Spares
              </button>
          </div>
      </div>

    </div>
  );
};

export default Sprayers;