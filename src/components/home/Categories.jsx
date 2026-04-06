// src/components/home/Categories.jsx
import { useState } from "react";

const Categories = () => {
  const [showAll, setShowAll] = useState(false);

  // Yeh saari categories agriculture se related hain
  const categories = [
    { name: "Best Offers", img: "https://cdn-icons-png.flaticon.com/512/3753/3753549.png", color: "bg-orange-100" },
    { name: "Hybrid Seeds", img: "https://cdn-icons-png.flaticon.com/512/3043/3043534.png", color: "bg-green-100" },
    { name: "Crop Protection", img: "https://cdn-icons-png.flaticon.com/512/2950/2950143.png", color: "bg-blue-100" },
    { name: "Plant Nutrients", img: "https://cdn-icons-png.flaticon.com/512/4243/4243948.png", color: "bg-yellow-100" },
    { name: "Agri Implements", img: "https://cdn-icons-png.flaticon.com/512/2910/2910795.png", color: "bg-teal-100" },
    { name: "Urban Gardening", img: "https://cdn-icons-png.flaticon.com/512/3043/3043472.png", color: "bg-pink-100" },
    // Yeh items tab dikhenge jab View All click hoga
    { name: "Insecticides", img: "https://cdn-icons-png.flaticon.com/512/2405/2405361.png", color: "bg-red-100" },
    { name: "Herbicides", img: "https://cdn-icons-png.flaticon.com/512/2950/2950130.png", color: "bg-orange-100" },
    { name: "Animal Husbandry", img: "https://cdn-icons-png.flaticon.com/512/1998/1998614.png", color: "bg-blue-100" },
    { name: "Fungicides", img: "https://cdn-icons-png.flaticon.com/512/3043/3043510.png", color: "bg-purple-100" },
    { name: "Mango Special", img: "https://cdn-icons-png.flaticon.com/512/2909/2909778.png", color: "bg-green-200" },
    { name: "Farm Machinery", img: "https://cdn-icons-png.flaticon.com/512/3043/3043542.png", color: "bg-gray-200" }
  ];

  // Agar showAll false hai toh sirf pehle 6 dikhenge
  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto mt-16 px-4">
      
      {/* TITLE SECTION */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Shop by Category</h2>
          <div className="h-1.5 w-16 bg-green-600 rounded-full mt-2"></div>
        </div>
        <button 
          onClick={() => setShowAll(!showAll)}
          className="text-green-600 font-bold hover:text-green-700 transition flex items-center gap-1 group"
        >
          {showAll ? "Show Less" : "View All Categories"} 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* GRID SECTION */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-6">
        {visibleCategories.map((cat, i) => (
          <div 
            key={i} 
            className="group cursor-pointer flex flex-col items-center animate-fadeIn"
          >
            {/* CIRCLE ICON WRAPPER */}
            <div className={`relative w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center transition-all duration-500 ${cat.color} group-hover:shadow-2xl group-hover:-translate-y-2 border-2 border-transparent group-hover:border-green-500 shadow-sm`}>
              <img
                src={cat.img}
                alt={cat.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Badge for Offers */}
              {cat.name === "Best Offers" && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-2 py-1 rounded-full font-bold animate-bounce">
                  NEW
                </span>
              )}
            </div>

            {/* NAME */}
            <p className="mt-4 text-sm font-bold text-gray-700 group-hover:text-green-700 transition-colors text-center px-2">
              {cat.name}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Categories;