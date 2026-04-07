import { useState } from "react";

const ShopByCrop = () => {
  const [showAll, setShowAll] = useState(false);
  const [showExpertDetails, setShowExpertDetails] = useState(false); // New state for details

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

  const visibleCrops = showAll ? crops : crops.slice(0, 6);

  return (
    <div id="shop-by-crop" className="max-w-7xl mx-auto mt-20 px-4 relative">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Shop by Your Crop</h2>
          <p className="text-sm text-gray-500 mt-1">Get customized solutions for your specific crop needs</p>
          <div className="h-1.5 w-16 bg-green-600 rounded-full mt-2"></div>
        </div>
        
        <button 
          onClick={() => setShowAll(!showAll)}
          className="text-green-600 font-bold hover:text-green-800 transition-all flex items-center gap-1 group"
        >
          {showAll ? "Show Less" : "View All Crops"}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* CROPS GRID */}
      <div className={`${showAll ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-6' : 'flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-2'} transition-all duration-500`}>
        {visibleCrops.map((crop, i) => (
          <div key={i} className="group flex flex-col items-center min-w-[140px] md:min-w-[160px] cursor-pointer animate-fadeIn">
            <div className={`w-28 h-28 md:w-32 md:h-32 rounded-3xl ${crop.color} flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 border-2 border-transparent group-hover:border-green-400 shadow-sm`}>
              <img src={crop.img} className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110" alt={crop.name} />
              <div className="absolute inset-0 bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <p className="mt-4 font-bold text-gray-700 text-sm md:text-base group-hover:text-green-600 transition-colors text-center">{crop.name}</p>
          </div>
        ))}
      </div>

      {/* CROP ADVICE BANNER */}
      <div className="mt-12 bg-white rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between border border-gray-100 shadow-xl shadow-green-900/5 overflow-hidden relative">
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-200 text-3xl animate-bounce">
            🌱
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-800">Custom Crop Protection Plan</h3>
            <p className="text-sm text-gray-500 mt-1">Select your crop and get a complete 90-day nutrition chart.</p>
          </div>
        </div>
        
        <button 
          onClick={() => setShowExpertDetails(true)}
          className="mt-6 md:mt-0 w-full md:w-auto bg-gray-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg active:scale-95 relative z-10"
        >
          Get Expert Advice
        </button>
      </div>

      {/* --- UNIQUE EXPERT DETAILS OVERLAY --- */}
      {showExpertDetails && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-slideUp">
            
            {/* Close Button */}
            <button 
              onClick={() => setShowExpertDetails(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-full flex items-center justify-center transition-colors z-20"
            >
              ✕
            </button>

            <div className="p-8 md:p-12">
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Premium Service</span>
              <h2 className="text-3xl font-black text-gray-800 mt-4 leading-tight">How our experts <br/><span className="text-green-600">help your farm flourish.</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {/* Feature 1 */}
                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100 flex gap-4 items-start group hover:bg-orange-100 transition-colors">
                  <div className="text-2xl">🧪</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Soil Testing</h4>
                    <p className="text-xs text-gray-600 mt-1">Detailed analysis of minerals and pH levels.</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex gap-4 items-start group hover:bg-blue-100 transition-colors">
                  <div className="text-2xl">🐛</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Pest Control</h4>
                    <p className="text-xs text-gray-600 mt-1">AI-driven identification of crop diseases.</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="p-4 rounded-2xl bg-green-50 border border-green-100 flex gap-4 items-start group hover:bg-green-100 transition-colors">
                  <div className="text-2xl">📅</div>
                  <div>
                    <h4 className="font-bold text-gray-800">90-Day Chart</h4>
                    <p className="text-xs text-gray-600 mt-1">Day-by-day watering & spray schedule.</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 flex gap-4 items-start group hover:bg-purple-100 transition-colors">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h4 className="font-bold text-gray-800">On-Call Support</h4>
                    <p className="text-xs text-gray-600 mt-1">Direct access to Agri-scientists 24/7.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center">
                <p className="text-gray-500 text-sm mb-4 italic">Ready to talk to an expert?</p>
                <div className="flex gap-4 w-full">
                   <button className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition-all active:scale-95">
                     Call Now
                   </button>
                   <button className="flex-1 bg-white border-2 border-gray-200 text-gray-800 py-4 rounded-2xl font-bold hover:border-green-600 transition-all active:scale-95">
                     WhatsApp Us
                   </button>
                </div>
              </div>
            </div>

            {/* Bottom Decor */}
            <div className="h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600"></div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ShopByCrop;