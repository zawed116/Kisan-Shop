// src/components/home/BestSelling.jsx
import { useState } from "react";
import ProductCard from "../common/ProductCard";

const BestSelling = () => {
  const [showAll, setShowAll] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false); // New state for Quote Details

  const bestSellers = [
    { id: 201, name: "Syngenta Polytrin C Insecticide", price: 1150, originalPrice: 1350, image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=400&fit=crop", rating: 4.8, sold: "2.5k+" },
    { id: 202, name: "Namdhari Hybrid Watermelon Seeds", price: 990, originalPrice: 1250, image: "https://www.desikheti.com/cdn/shop/products/NS-AFRICAN-MARIGOLD-F1-INCA-MIX.jpg?v=1686816972&width=1445", rating: 4.9, sold: "1.2k+" },
    { id: 203, name: "UPL Saaf Fungicide 1kg", price: 780, originalPrice: 890, image: "https://agribegri.com/_next/image?url=https%3A%2F%2Fdujjhct8zer0r.cloudfront.net%2Fmedia%2Fprod_image%2F6059457301749465136.webp&w=750&q=90", rating: 4.7, sold: "5k+" },
    { id: 204, name: "Battery Sprayer (2-in-1) 16L", price: 2999, originalPrice: 3800, image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=400&fit=crop", rating: 4.5, sold: "800+" },
    { id: 205, name: "Organic Seaweed Fertilizer", price: 320, originalPrice: 450, image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=400&fit=crop", rating: 4.6, sold: "3.1k+" },
    { id: 206, name: "Drip Irrigation Kit (50 plants)", price: 1800, originalPrice: 2400, image: "https://5.imimg.com/data5/SELLER/Default/2023/10/353608967/MX/WX/FH/3910939/garden-drip-kit-1000x1000.jpg", rating: 4.4, sold: "600+" },
    { id: 207, name: "Gromor NPK 10-26-26 50kg", price: 1450, originalPrice: 1700, image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=400&fit=crop", rating: 4.7, sold: "10k+" },
    { id: 208, name: "Bayer Aliette Fungicide", price: 1200, originalPrice: 1450, image: "https://kisankavikas.com/wp-content/uploads/2024/05/Aliette-_2.webp", rating: 4.8, sold: "4k+" },
    { id: 209, name: "Solar Light Trap for Pests", price: 850, originalPrice: 1100, image: "https://agribegri.com/_next/image?url=https%3A%2F%2Fdujjhct8zer0r.cloudfront.net%2Fmedia%2Fprod_image%2F13678244411750481984.webp&w=750&q=90", rating: 4.9, sold: "1k+" },
    { id: 210, name: "Tata Rallis Rogor 500ml", price: 390, originalPrice: 480, image: "https://agriplexindia.com/cdn/shop/products/Solubor_1.png?crop=center&height=940&v=1743241729&width=940", rating: 4.6, sold: "2.1k+" },
  ];

  const visibleProducts = showAll ? bestSellers : bestSellers.slice(0, 5);

  return (
    <div id="best-selling-products" className="max-w-7xl mx-auto mt-24 px-4 relative">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg rotate-3">
            🏆
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Best Sellers</h2>
            <p className="text-green-600 font-bold tracking-widest uppercase text-xs mt-1">Trending Agricultural Products</p>
          </div>
        </div>
        
        <button 
          onClick={() => setShowAll(!showAll)}
          className="group flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all duration-300 shadow-xl active:scale-95"
        >
          {showAll ? "Show Less" : "View Collection"}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {visibleProducts.map((product) => (
          <div key={product.id} className="relative group animate-fadeIn transition-all duration-500">
            <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-[11px] font-black px-3 py-1.5 rounded-full shadow-lg transform -rotate-12 group-hover:rotate-0 transition-all">
               SAVE ₹{product.originalPrice - product.price}
            </div>
            <div className="transition-all duration-500 group-hover:-translate-y-3">
                <div className="bg-white rounded-[2rem] p-4 shadow-sm group-hover:shadow-2xl border border-transparent group-hover:border-green-100 transition-all">
                    <ProductCard product={product} />
                    <div className="mt-4 flex justify-between items-center px-2 pt-3 border-t border-gray-50">
                        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-lg">
                            <span className="text-yellow-500 text-sm">★</span>
                            <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                        </div>
                        <span className="text-[10px] font-black text-gray-400 uppercase">{product.sold} Sold</span>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* LUXURY PROMO BANNER */}
      <div className="mt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full -mr-20 -mt-20 blur-[100px]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                  <div className="inline-block bg-green-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-lg shadow-green-500/40">
                      Corporate & Cooperatives
                  </div>
                  <h3 className="text-white text-4xl md:text-5xl font-black mb-4 tracking-tighter leading-tight">
                      Buying in bulk for <br /> <span className="text-green-400 underline decoration-yellow-400">Your Village?</span>
                  </h3>
                  <p className="text-gray-400 text-lg max-w-lg">Get direct factory prices and doorstep tractor delivery for bulk orders.</p>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={() => setShowQuoteModal(true)}
                  className="bg-white text-gray-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-green-500 hover:text-white transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95"
                >
                    WhatsApp Quote
                </button>
                <p className="text-gray-500 text-sm font-bold italic">Trusted by 500+ Sarpanchs</p>
              </div>
          </div>
      </div>

      {/* --- BULK QUOTE MODAL --- */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-slideUp">
            
            {/* Close */}
            <button 
              onClick={() => setShowQuoteModal(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-full flex items-center justify-center transition-all z-20 text-xl"
            >✕</button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Left Side: Info */}
              <div className="w-full md:w-5/12 bg-green-600 p-10 text-white flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-black leading-tight">Bulk Purchase Benefits</h4>
                  <ul className="mt-8 space-y-6">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-sm">✓</div>
                      <span className="font-bold">Up to 25% Off MRP</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-sm">✓</div>
                      <span className="font-bold">Free Tractor Delivery</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-sm">✓</div>
                      <span className="font-bold">Pay After Delivery</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                  <p className="text-xs font-medium opacity-80 italic">"Best prices for our cooperative society. Highly recommended!"</p>
                  <p className="text-xs font-black mt-2">— Sharma ji, Village Head</p>
                </div>
              </div>

              {/* Right Side: Quick Form */}
              <div className="w-full md:w-7/12 p-10">
                <h3 className="text-2xl font-black text-gray-800 mb-2">Get Instant Quote</h3>
                <p className="text-gray-500 text-sm mb-8 font-medium">Select requirements to get estimated savings.</p>
                
                <div className="space-y-5">
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Requirement Category</label>
                    <select className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-green-500 transition-all font-bold text-gray-700">
                      <option>Seeds (Bulk Containers)</option>
                      <option>Fertilizers (50+ Bags)</option>
                      <option>Pesticides (Box Packings)</option>
                      <option>Drip Irrigation (Full Farm)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Village Name</label>
                    <input type="text" placeholder="Enter village or panchayat name" className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-green-500 transition-all font-bold" />
                  </div>

                  <div className="pt-4">
                    <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-4 mb-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-gray-600">Estimated Bulk Discount</span>
                        <span className="text-green-600 font-black text-lg">₹5,000 — ₹50,000+</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Final price depends on quantity on WhatsApp</p>
                    </div>

                    <button className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 shadow-lg shadow-green-200 hover:scale-[1.02] active:scale-95 transition-all">
                      <span>Talk to Sales Expert</span>
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.404c0 6.556-5.332 11.888-11.888 11.888-2.003 0-3.963-.505-5.704-1.467l-6.303 1.697zm6.373-3.913c1.554.921 3.189 1.408 4.887 1.408 5.114 0 9.27-4.155 9.27-9.27 0-2.476-.963-4.804-2.712-6.552s-4.075-2.712-6.551-2.712c-5.115 0-9.27 4.155-9.27 9.27 0 1.777.511 3.511 1.48 5.011l-.981 3.581 3.68-.987z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default BestSelling;