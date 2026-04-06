// src/components/home/PestDisease.jsx
import { useState } from "react";
import { FaStethoscope, FaMicroscope, FaTimes, FaCheckCircle } from "react-icons/fa";

const PestDisease = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);

  const issues = [
    { 
      name: "Fungal Diseases", 
      desc: "Leaf spots, wilts & blights",
      img: "https://cdn-icons-png.flaticon.com/512/3043/3043510.png", 
      color: "from-red-50 to-orange-50",
      border: "border-red-200",
      details: {
        symptoms: ["Powdery growth on leaves", "Brown spots", "Root rot"],
        prevention: "Avoid overhead watering and use fungicides early.",
        products: ["Mancozeb 75% WP", "Hexaconazole 5% EC"]
      }
    },
    { 
      name: "Insect Pests", 
      desc: "Aphids, beetles & borers",
      img: "https://cdn-icons-png.flaticon.com/512/2405/2405361.png", 
      color: "from-blue-50 to-cyan-50",
      border: "border-blue-200",
      details: {
        symptoms: ["Holes in leaves", "Sticky sap", "Stunted fruit growth"],
        prevention: "Install yellow sticky traps and use Neem Oil.",
        products: ["Imidacloprid 17.8% SL", "Spinosad 45% SC"]
      }
    },
    { 
      name: "Nutrient Deficiency", 
      desc: "Yellowing & stunted growth",
      img: "https://cdn-icons-png.flaticon.com/512/4243/4243948.png", 
      color: "from-yellow-50 to-amber-50",
      border: "border-yellow-200",
      details: {
        symptoms: ["Yellowing of old leaves", "Purple leaf margins", "Pale green appearance"],
        prevention: "Regular soil testing and balanced fertilization.",
        products: ["NPK 19:19:19", "Chelated Zinc"]
      }
    },
    { 
      name: "Viral Diseases", 
      desc: "Mosaic patterns & leaf curl",
      img: "https://cdn-icons-png.flaticon.com/512/2950/2950143.png", 
      color: "from-purple-50 to-pink-50",
      border: "border-purple-200",
      details: {
        symptoms: ["Mottled leaf patterns", "Curled or twisted leaves", "Small fruits"],
        prevention: "Control Whiteflies/Aphids as they spread viruses.",
        products: ["Acetamiprid 20% SP", "Yellow Sticky Traps"]
      }
    },
  ];

  return (
    <div id="shop-by-pest-&-disease" className="max-w-7xl mx-auto mt-20 px-4 relative">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Identify & Cure Pest/Disease</h2>
          <p className="text-gray-500 mt-1">Get expert solutions for your crop health</p>
          <div className="h-1.5 w-20 bg-red-500 rounded-full mt-3 mx-auto md:mx-0"></div>
        </div>
        
        <div className="bg-green-600 text-white px-6 py-3 rounded-2xl flex items-center gap-4 shadow-lg hover:bg-green-700 cursor-pointer transition transform hover:scale-105 active:scale-95">
          <FaStethoscope className="text-2xl animate-pulse" />
          <div>
            <p className="text-xs font-bold uppercase opacity-80 tracking-widest">Free Service</p>
            <p className="font-bold">Talk to Agri-Doctor</p>
          </div>
        </div>
      </div>

      {/* ISSUES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {issues.map((item, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedIssue(item)}
            className={`group relative p-8 rounded-3xl border-2 ${item.border} bg-gradient-to-br ${item.color} hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2`}
          >
            <FaMicroscope className="absolute -right-4 -bottom-4 text-8xl text-black/5 group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
                <img src={item.img} className="w-12 h-12" alt={item.name} />
              </div>
              <h3 className="font-extrabold text-gray-800 mt-6 group-hover:text-red-600 transition-colors">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-2 text-center leading-tight">{item.desc}</p>
              <button className="mt-6 text-xs font-bold text-red-600 uppercase tracking-widest border-b-2 border-red-500 pb-1 group-hover:scale-105 transition-all">
                Find Cure →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* DETAILS MODAL - Unique & Attractive Popup */}
      {selectedIssue && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl relative animate-fadeInUp">
            
            {/* Modal Header */}
            <div className={`p-6 bg-gradient-to-r ${selectedIssue.color} flex justify-between items-center`}>
              <div className="flex items-center gap-4">
                <img src={selectedIssue.img} className="w-10 h-10" alt="" />
                <h3 className="text-xl font-extrabold text-gray-800">{selectedIssue.name} Guide</h3>
              </div>
              <button onClick={() => setSelectedIssue(null)} className="text-gray-500 hover:text-red-500 transition-colors">
                <FaTimes className="text-2xl" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-red-600 font-bold mb-3 flex items-center gap-2">
                  <FaCheckCircle /> Common Symptoms
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {selectedIssue.details.symptoms.map((s, i) => (
                    <li key={i} className="bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-700 border-l-4 border-red-400">
                      • {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-green-600 font-bold mb-2 flex items-center gap-2">
                   <FaCheckCircle /> Expert Prevention
                </h4>
                <p className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg border-l-4 border-green-400 italic">
                  "{selectedIssue.details.prevention}"
                </p>
              </div>

              <div>
                <h4 className="text-blue-600 font-bold mb-3 flex items-center gap-2">
                  <FaCheckCircle /> Recommended Controls
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {selectedIssue.details.products.map((p, i) => (
                    <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg shadow-green-200">
                Shop Treatment Products
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TRUST BANNER */}
      {/* <div className="mt-12 bg-white border border-gray-100 rounded-3xl p-6 flex flex-wrap justify-around items-center gap-6 shadow-sm"> */}
          {/* <div className="flex items-center gap-3">
              <span className="p-3 bg-green-50 text-green-600 rounded-full font-bold">1</span>
              <p className="text-sm font-bold text-gray-700">Click a Photo</p>
          </div> */}
          {/* <div className="flex items-center gap-3">
              <span className="p-3 bg-green-50 text-green-600 rounded-full font-bold">2</span>
              <p className="text-sm font-bold text-gray-700">Identify Disease</p>
          </div> */}
          {/* <div className="flex items-center gap-3">
              <span className="p-3 bg-green-50 text-green-600 rounded-full font-bold">3</span>
              <p className="text-sm font-bold text-gray-700">Get Expert Cure</p>
          </div> */}
      {/* </div> */}
    </div>
  );
};

export default PestDisease;