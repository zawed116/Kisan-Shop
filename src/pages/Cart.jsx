import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/layout/Header";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* CART ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-3xl font-black text-gray-900 mb-6 italic">Your Shopping Cart ({cart.length})</h1>
          
          {cart.length > 0 ? cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100">
              <img src={item.image} className="w-24 h-24 object-cover rounded-2xl" alt="" />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{item.name}</h3>
                <p className="text-green-600 font-bold">₹{item.price}</p>
              </div>
              
              {/* Quantity Controls */}
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-3 py-2">
                <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-500 hover:text-red-500"><FaMinus text-xs /></button>
                <span className="font-bold w-4 text-center">{item.quantity || 1}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-500 hover:text-green-500"><FaPlus text-xs /></button>
              </div>

              <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 p-3">
                <FaTrash />
              </button>
            </div>
          )) : (
            <div className="bg-white p-10 rounded-[2rem] text-center border-2 border-dashed">
              <p className="text-gray-400 font-bold">Your cart is empty!</p>
            </div>
          )}
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border h-fit">
          <h3 className="text-xl font-bold mb-6 border-b pb-4">Order Summary</h3>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>₹{subtotal}</span></div>
            <div className="flex justify-between text-gray-600"><span>Delivery</span><span className="text-green-600">FREE</span></div>
            <div className="flex justify-between text-xl font-black border-t pt-4"><span>Total</span><span>₹{subtotal}</span></div>
          </div>
          <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black hover:bg-green-600 transition shadow-lg">
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;