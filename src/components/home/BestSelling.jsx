// src/components/home/BestSelling.jsx
import { useState } from "react";
import ProductCard from "../common/ProductCard";

const BestSelling = () => {
  const [showAll, setShowAll] = useState(false);

  // Agriculture specific best selling products with high-quality working images
  const bestSellers = [
    { id: 201, name: "Syngenta Polytrin C Insecticide", price: 1150, originalPrice: 1350, image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=400&fit=crop", rating: 4.8, sold: "2.5k+" },
    { id: 202, name: "Namdhari Hybrid Watermelon Seeds", price: 990, originalPrice: 1250, image: "https://images.unsplash.com/photo-1595841055318-47db993e83bc?q=80&w=400&fit=crop", rating: 4.9, sold: "1.2k+" },
    { id: 203, name: "UPL Saaf Fungicide 1kg", price: 780, originalPrice: 890, image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=400&fit=crop", rating: 4.7, sold: "5k+" },
    { id: 204, name: "Battery Sprayer (2-in-1) 16L", price: 2999, originalPrice: 3800, image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=400&fit=crop", rating: 4.5, sold: "800+" },
    { id: 205, name: "Organic Seaweed Fertilizer", price: 320, originalPrice: 450, image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=400&fit=crop", rating: 4.6, sold: "3.1k+" },
    // "View All" products
    { id: 206, name: "Drip Irrigation Kit (50 plants)", price: 1800, originalPrice: 2400, image: "https://images.unsplash.com/photo-1563514223351-bf4b7696205d?q=80&w=400&fit=crop", rating: 4.4, sold: "600+" },
    { id: 207, name: "Gromor NPK 10-26-26 50kg", price: 1450, originalPrice: 1700, image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=400&fit=crop", rating: 4.7, sold: "10k+" },
    { id: 208, name: "Bayer Aliette Fungicide", price: 1200, originalPrice: 1450, image: "https://images.unsplash.com/photo-1592919016383-407b5871216e?q=80&w=400&fit=crop", rating: 4.8, sold: "4k+" },
    { id: 209, name: "Solar Light Trap for Pests", price: 850, originalPrice: 1100, image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=400&fit=crop", rating: 4.9, sold: "1k+" },
    { id: 210, name: "Tata Rallis Rogor 500ml", price: 390, originalPrice: 480, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=400&fit=crop", rating: 4.6, sold: "2.1k+" },
  ];

  const visibleProducts = showAll ? bestSellers : bestSellers.slice(0, 5);

  return (
    <div id="best-selling-products" className="max-w-7xl mx-auto mt-24 px-4">
      
      {/* SECTION HEADER - More Attractive */}
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
            
            {/* Sale Badge - More prominent */}
            <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-[11px] font-black px-3 py-1.5 rounded-full shadow-lg transform -rotate-12 group-hover:rotate-0 transition-all">
               SAVE ₹{product.originalPrice - product.price}
            </div>

            <div className="transition-all duration-500 group-hover:-translate-y-3">
                <div className="bg-white rounded-[2rem] p-4 shadow-sm group-hover:shadow-2xl border border-transparent group-hover:border-green-100 transition-all">
                    <ProductCard product={product} />
                    
                    {/* Stats Overlay (Ratings & Sold) */}
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

      {/* LUXURY PROMO BANNER - Redesigned */}
      <div className="mt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full -mr-20 -mt-20 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full -ml-10 -mb-10 blur-[80px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                  <div className="inline-block bg-green-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-lg shadow-green-500/40">
                      Corporate & Cooperatives
                  </div>
                  <h3 className="text-white text-4xl md:text-5xl font-black mb-4 tracking-tighter leading-tight">
                      Buying in bulk for <br /> <span className="text-green-400 underline decoration-yellow-400">Your Village?</span>
                  </h3>
                  <p className="text-gray-400 text-lg max-w-lg">Get direct factory prices and doorstep tractor delivery for bulk seed & fertilizer orders.</p>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <button className="bg-white text-gray-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-green-500 hover:text-white transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95">
                    WhatsApp Quote
                </button>
                <p className="text-gray-500 text-sm font-bold">Responds within 5 minutes</p>
              </div>
          </div>
      </div>

    </div>
  );
};

export default BestSelling;