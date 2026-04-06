// src/pages/Login.jsx
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaSignInAlt, FaLeaf } from "react-icons/fa";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle state
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAction = () => {
    if (formData.name.trim()) {
      // Dono cases mein hum login function call kar rahe hain simple demo ke liye
      login(formData.name);
      
      // Real experience ke liye alert
      alert(isSignUp ? "Account Created Successfully!" : "Welcome back!");
      
      navigate("/"); // Home par redirect
    } else {
      alert("Please enter your name");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 animate-fadeIn">
        
        {/* HEADER SECTION */}
        <div className="bg-green-600 p-10 text-center text-white relative overflow-hidden">
          {/* Background Decoration */}
          <FaLeaf className="absolute -top-4 -right-4 text-8xl text-white/10 rotate-12" />
          
          <h2 className="text-4xl font-black tracking-tight flex items-center justify-center gap-3">
            {isSignUp ? <FaUserPlus className="text-3xl" /> : <FaSignInAlt className="text-3xl" />}
            {isSignUp ? "Create Account" : "Kisan Login"}
          </h2>
          <p className="text-green-100 mt-2 font-medium">
            {isSignUp ? "Join our farming community today!" : "Welcome back to your agri-store!"}
          </p>
        </div>
        
        <div className="p-10 space-y-5">
          {/* NAME INPUT */}
          <div className="animate-fadeIn">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Rajesh Kumar"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full mt-1 border-2 border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-green-500 transition-all bg-gray-50 font-bold text-gray-700"
            />
          </div>

          {/* ADDITIONAL INPUTS FOR SIGN UP */}
          {isSignUp && (
            <div className="space-y-5 animate-fadeInUp">
              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full mt-1 border-2 border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-green-500 transition-all bg-gray-50 font-bold"
                />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-widest">Crop Type (Optional)</label>
                <select className="w-full mt-1 border-2 border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-green-500 transition-all bg-gray-50 font-bold text-gray-500">
                  <option>Select your main crop</option>
                  <option>Wheat / Rice</option>
                  <option>Vegetables</option>
                  <option>Fruits</option>
                </select>
              </div>
            </div>
          )}

          {/* MAIN BUTTON */}
          <button
            onClick={handleAction}
            className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-green-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
          >
            {isSignUp ? "Register Now" : "Login to Account"}
          </button>
          
          {/* TOGGLE LINK */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 font-bold">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button 
                onClick={() => setIsSignUp(!isSignUp)}
                className="ml-2 text-green-600 hover:text-green-800 underline decoration-2 underline-offset-4"
              >
                {isSignUp ? "Login here" : "Create one now"}
              </button>
            </p>
          </div>

          <p className="text-center text-[10px] text-gray-400 font-black uppercase tracking-tighter mt-8">
            Secured by Kisan-Gate™ • Terms & Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;