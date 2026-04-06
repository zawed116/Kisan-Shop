// src/components/home/SmartFarming.jsx
import { useState } from "react";
import ProductCard from "../common/ProductCard";
import { FaMicrochip, FaSatellite, FaDroplet, FaPlay, FaXmark } from "react-icons/fa6";

const SmartFarming = () => {
  const [showTools, setShowTools] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const smartProducts = [
    { id: 501, name: "Soil Moisture Sensor Pro", price: 1499, originalPrice: 1999, image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400", category: "IoT", rating: 4.9 },
    { id: 502, name: "Agri-Drone for Spraying", price: 45000, originalPrice: 55000, image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=400", category: "Drones", rating: 5.0 },
    { id: 503, name: "Automated Drip Controller", price: 3500, originalPrice: 4200, image: "https://images.unsplash.com/photo-1563514223351-bf4b7696205d?q=80&w=400", category: "Irrigation", rating: 4.7 },
    { id: 504, name: "PH Meter Digital Pen", price: 850, originalPrice: 1200, image: "https://images.unsplash.com/photo-1576086213369-97a306dca965?q=80&w=400", category: "Testing", rating: 4.5 },
    { id: 505, name: "Smart Weather Station", price: 7999, originalPrice: 9500, image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400", category: "IoT", rating: 4.8 },
  ];

  return (
    <div id="smart-farming" className="max-w-7xl mx-auto mt-24 px-4 relative">
      
      {/* 1. VIDEO MODAL OVERLAY (जब Watch Demo पर क्लिक हो) */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <button 
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-green-400 transition-colors"
          >
            <FaXmark />
          </button>
          <div className="w-full max-w-4xl aspect-video bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
            {/* Replace with your actual video or iframe */}
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200" 
              className="w-full h-full object-cover opacity-50"
              alt="Video Placeholder"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
               <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-black text-2xl animate-pulse">
                  <FaPlay />
               </div>
               <h3 className="text-2xl font-black mt-6 text-white">Smart Farming Demo Video</h3>
               <p className="text-gray-300 mt-2">Connecting AI with your Fields. Loading experience...</p>
            </div>
          </div>
        </div>
      )}

      {/* 2. MAIN TECH BANNER */}
      <div className="relative rounded-[3rem] overflow-hidden min-h-[450px] bg-gray-950 text-white flex items-center shadow-2xl border border-white/5">
        <img 
          src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover opacity-20" 
          alt="Smart Farming"
        />
        
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-gray-950 via-transparent to-transparent z-10"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-600/20 rounded-full blur-[120px]"></div>
        
        <div className="relative z-20 px-8 md:px-16 py-12 max-w-3xl">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-green-400 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest mb-8">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Precision Agriculture 2026
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter">
            The Future of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Digital Farming</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            Stop guessing. Use AI to detect diseases, drones for mapping, and IoT for perfect irrigation.
          </p>

          <div className="flex flex-wrap gap-5">
            <button 
              onClick={() => setShowTools(!showTools)}
              className="group relative overflow-hidden bg-green-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-black transition-all duration-500 shadow-[0_20px_50px_rgba(34,197,94,0.3)]"
            >
              <span className="relative z-10">{showTools ? "Close Tools" : "Explore Smart Tools"}</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>

            <button 
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 border-2 border-white/20 hover:border-white px-10 py-5 rounded-2xl font-black text-lg backdrop-blur-sm transition-all group"
            >
              <FaPlay className="text-green-400 group-hover:scale-125 transition-transform" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* 3. SMART PRODUCTS DRAWER (Explore Tools par click karne se khulega) */}
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${showTools ? "max-h-[1000px] opacity-100 mt-20" : "max-h-0 opacity-0"}`}>
          <div className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
               <div>
                  <h3 className="text-3xl font-black text-gray-900">Tech Tool Catalog</h3>
                  <p className="text-gray-500">Professional equipment for the modern farmer</p>
               </div>
               <div className="flex gap-2">
                  <span className="px-4 py-2 bg-white rounded-full text-xs font-bold border border-gray-100">5 Devices Available</span>
               </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {smartProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                   <div className="bg-white rounded-3xl p-3 shadow-sm group-hover:shadow-xl transition-all border border-transparent group-hover:border-green-100">
                      <ProductCard product={product} />
                   </div>
                </div>
              ))}
            </div>
          </div>
      </div>

      {/* 4. FEATURE CARDS */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <FaSatellite />, title: "Live Mapping", desc: "Real-time crop health monitoring via satellite imagery.", color: "text-green-500" },
            { icon: <FaDroplet />, title: "Smart Water", desc: "AI-driven irrigation that saves up to 40% more water.", color: "text-blue-500" },
            { icon: <FaMicrochip />, title: "AI Assistant", desc: "Instantly diagnose pests using just your phone camera.", color: "text-orange-500" }
          ].map((item, i) => (
            <div key={i} className="relative p-8 rounded-[2rem] bg-white border border-gray-50 shadow-xl shadow-gray-200/40 hover:-translate-y-2 transition-all duration-300">
              <div className={`text-3xl ${item.color} mb-6`}>{item.icon}</div>
              <h4 className="text-xl font-black text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
      </div>

    </div>
  );
};

export default SmartFarming;