import { useState } from "react";

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const menu = [
    "Categories",
    "Trending Products",
    "Today’s Offers",
    "Shop by Pest & Disease",
    "Shop by Crop",
    "Best Selling Products",
    "Seeds",
    "Growth Promoters",
    "Smart Farming",
    "Sprayers",
    "Blog Section",
  ];

  // Helper function to create clean IDs from menu text
  const createId = (text) => text.replace(/\s+/g, '-').replace(/[’']/g, '').toLowerCase();

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center h-12 px-4">
        
        {/* MEGA MENU */}
        <div 
          className="relative h-full flex items-center pr-6 border-r cursor-pointer group"
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          <span className="flex items-center gap-2 font-bold text-green-700">
            <span className="text-lg">☰</span> MEGA MENU
          </span>

          {isMegaMenuOpen && (
            <div className="absolute top-12 left-0 w-[600px] bg-white shadow-2xl border rounded-b-lg p-6 grid grid-cols-3 gap-8 animate-fadeIn">
              <div>
                <h4 className="font-bold text-green-600 border-b pb-2 mb-3">Crops</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="hover:text-green-600 cursor-pointer">Mango</li>
                  <li className="hover:text-green-600 cursor-pointer">Tomato</li>
                  <li className="hover:text-green-600 cursor-pointer">Cotton</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-green-600 border-b pb-2 mb-3">Protection</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="hover:text-green-600 cursor-pointer">Fungicides</li>
                  <li className="hover:text-green-600 cursor-pointer">Insecticides</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* SCROLLABLE NAV ITEMS */}
        <div className="flex flex-1 items-center gap-6 overflow-x-auto no-scrollbar px-6 text-[13px] font-medium text-gray-700 whitespace-nowrap">
          {menu.map((item, i) => (
            <a
              key={i}
              href={`#${createId(item)}`}
              className="hover:text-green-600 transition-colors py-3 border-b-2 border-transparent hover:border-green-600"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;