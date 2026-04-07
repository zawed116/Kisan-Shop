// src/components/layout/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-green-500 mb-4">Kisan Shop</h2>
          <p className="text-gray-400 text-sm">Empowering farmers with high-quality agricultural products and smart farming solutions.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Shop by Category</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="hover:text-white cursor-pointer">Seeds</li>
            <li className="hover:text-white cursor-pointer">Crop Protection</li>
            <li className="hover:text-white cursor-pointer">Plant Nutrients</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Blogs & Articles</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact Info</h4>
          <p className="text-gray-400 text-sm italic">Address: New Delhi India</p>
          <p className="text-gray-400 text-sm">Email: support@kisanshop.com</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-5 text-center text-gray-500 text-xs">
        © 2026 Kisan Commerce - Built for Indian Farmers. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;