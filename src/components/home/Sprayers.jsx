// src/components/home/Sprayers.jsx
import { useState } from "react";
import ProductCard from "../common/ProductCard";
import { 
  FaBatteryFull, 
  FaWater, 
  FaGear, 
  FaShieldHalved, 
  FaWrench, 
  FaScrewdriverWrench, // Changed from FaTools
  FaCircleCheck 
} from "react-icons/fa6";

const Sprayers = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showSparesModal, setShowSparesModal] = useState(false);

  // Real Sprayer Products
  const sprayerProducts = [
    { id: 601, name: "2-in-1 Battery & Manual Sprayer", price: 3200, originalPrice: 4500, image: "https://agribegri.com/_next/image?url=https%3A%2F%2Fdujjhct8zer0r.cloudfront.net%2Fmedia%2Fprod_image%2F08ba496c67460b8161c200eaef6a0e88-09-10-25-15-18-41.webp&w=750&q=75", type: "Battery", capacity: "16 Liters", battery: "12V/8Ah" },
    { id: 602, name: "Hand Compression Garden Sprayer", price: 450, originalPrice: 650, image: "https://image.made-in-china.com/2f0j00kdzVTEHsbMbl/Agriculture-or-Garden-5L-Power-Sprayer-Agricultural-Hand-Operated-Compression-Sprayer.jpg", type: "Manual", capacity: "2 Liters", battery: "N/A" },
    { id: 603, name: "Petrol Power Pressure Sprayer", price: 8500, originalPrice: 11000, image: "https://www.oem-india.com/wp-content/uploads/2024/09/Portable-sprayer-1-1.jpg", type: "Petrol", capacity: "20 Liters", battery: "4-Stroke" },
    { id: 604, name: "Knapsack Manual Sprayer", price: 1800, originalPrice: 2200, image: "https://rukminim1.flixcart.com/image/1280/1280/xif0q/garden-sprayer/s/c/8/16-manual-agriculture-spray-pump-machine-garden-sprayer-16-l-original-imahevy7dkhzkagx.jpeg?q=90", type: "Manual", capacity: "16 Liters", battery: "N/A" },
    { id: 605, name: "High Pressure Hose Reel Sprayer", price: 15500, originalPrice: 18500, image: "https://giraffetools.com/cdn/shop/files/TA15B-G2O_1000x.png?v=1762268599", type: "Petrol", capacity: "50 Liters", battery: "Engine" },
  ];

  // Spare Parts Data
  const spareParts = [
    { id: 10, name: "Brass Nozzle Set", price: "₹250", icon: "🚿", description: "Universal 4-hole adjustable nozzle" },
    { id: 11, name: "High-Cap Battery", price: "₹1,200", icon: "🔋", description: "12V/12Ah for 6-hour backup" },
    { id: 12, name: "Trigger Handle", price: "₹180", icon: "🔫", description: "Heavy-duty locking mechanism" },
    { id: 13, name: "Washer/O-Ring Kit", price: "₹99", icon: "⭕", description: "Leak-proof rubber gaskets (10pcs)" },
  ];

  const filteredSprayers = activeFilter === "All" 
    ? sprayerProducts 
    : sprayerProducts.filter(s => s.type === activeFilter);

  return (
    <div id="sprayers" className="max-w-7xl mx-auto mt-24 px-4 relative">
      
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
          <div key={product.id} className="group relative transition-all duration-500">
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
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center md:text-left">
                  <h3 className="text-white text-3xl font-black mb-4">Maintain Your Sprayer Like a Pro!</h3>
                  <p className="text-blue-100 text-lg opacity-80 leading-relaxed">
                    Dirty nozzles reduce efficiency by 30%. Get genuine spare parts to increase the life of your equipment.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                      <div className="flex items-center gap-2 text-white/90 text-sm font-bold bg-white/10 px-4 py-2 rounded-xl border border-white/20">
                         <FaGear className="text-yellow-400" /> Genuine Gaskets
                      </div>
                      <div className="flex items-center gap-2 text-white/90 text-sm font-bold bg-white/10 px-4 py-2 rounded-xl border border-white/20">
                         <FaShieldHalved className="text-green-400" /> Quality Verified
                      </div>
                  </div>
              </div>
              <button 
                onClick={() => setShowSparesModal(true)}
                className="bg-white text-blue-700 px-12 py-5 rounded-2xl font-black text-xl hover:bg-yellow-400 hover:text-black transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95"
              >
                  Shop Spares
              </button>
          </div>
      </div>

      {/* --- UNIQUE SPARES FINDER MODAL --- */}
      {showSparesModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden relative animate-slideUp">
            
            {/* Modal Header */}
            <div className="bg-gray-50 px-8 py-6 border-b flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-black text-gray-800 flex items-center gap-3">
                  <FaScrewdriverWrench className="text-blue-600" /> Sprayer Spares Finder
                </h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Genuine Parts & Accessories</p>
              </div>
              <button 
                onClick={() => setShowSparesModal(false)} 
                className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:text-red-500 transition-colors font-bold"
              >✕</button>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Spares List */}
              <div>
                <h4 className="text-sm font-black text-gray-400 uppercase mb-4">Select Part Category</h4>
                <div className="grid grid-cols-2 gap-4">
                  {spareParts.map((part) => (
                    <div key={part.id} className="p-4 rounded-2xl border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50 cursor-pointer group transition-all">
                      <div className="text-3xl mb-2">{part.icon}</div>
                      <h5 className="font-bold text-gray-800">{part.name}</h5>
                      <p className="text-[10px] text-gray-500 mb-2">{part.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-600 font-black">{part.price}</span>
                        <span className="opacity-0 group-hover:opacity-100 text-blue-600 font-black text-xl">+</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Expert Support */}
              <div className="bg-blue-600 rounded-[2rem] p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <FaWrench className="text-4xl text-blue-300 mb-6" />
                  <h4 className="text-2xl font-black mb-4">Not sure what fits?</h4>
                  <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                    Upload a photo of your sprayer or the broken part on WhatsApp. Our technicians will identify the exact model for you.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm font-bold">
                      <FaCircleCheck className="text-yellow-400" /> Fits all major brands
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold">
                      <FaCircleCheck className="text-yellow-400" /> 100% Genuine Materials
                    </div>
                  </div>

                  <button className="mt-8 w-full bg-yellow-400 text-black py-4 rounded-2xl font-black shadow-lg hover:bg-white transition-colors">
                    Identify Part via WhatsApp
                  </button>
                </div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 border-t flex justify-center">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Next Day Dispatch on all spare parts orders</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sprayers;