import ProductCard from "../common/ProductCard";

const TodayOffers = () => {
    const offerProducts = [
        {
            id: 201,
            name: "Drip Irrigation Kit",
            price: 1499,
            originalPrice: 2500,
            image: "https://images.unsplash.com/photo-1563514223741-21b455ef1040?auto=format&fit=crop&q=80&w=400",
            category: "Irrigation",
            badge: "40% OFF"
        },
        {
            id: 202,
            name: "Organic Vermicompost 5kg",
            price: 299,
            originalPrice: 450,
            image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=400",
            category: "Nutrients",
            badge: "Deal of Day"
        },
        {
            id: 203,
            name: "Solar Insect Trap",
            price: 850,
            originalPrice: 1200,
            image: "https://images.unsplash.com/photo-1505235687559-28b5f54645b7?auto=format&fit=crop&q=80&w=400",
            category: "Protection",
            badge: "Limited"
        },
        {
            id: 204,
            name: "Hybrid Sweet Corn Seeds",
            price: 180,
            originalPrice: 250,
            image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=400",
            category: "Seeds",
            badge: "Save ₹70"
        },
        {
            id: 205,
            name: "Portable Soil pH Meter",
            price: 1100,
            originalPrice: 1800,
            image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=400",
            category: "Smart Tools",
            badge: "Flash Sale"
        }
    ];

    return (
        <section id="todays-offers" className="max-w-7xl mx-auto mt-16 px-4 scroll-mt-24">
            <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 p-6 md:p-10 rounded-[2.5rem] shadow-xl shadow-orange-100/30 relative overflow-hidden">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-orange-500 p-3 rounded-2xl shadow-lg">
                            <span className="text-2xl text-white">⚡</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-gray-800 tracking-tight">Today's Hot Offers</h2>
                            <p className="text-orange-600 text-sm font-medium">Extra savings on farming essentials</p>
                        </div>
                    </div>
                    <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-[11px] font-bold animate-pulse uppercase tracking-wider">
                        Ending Soon
                    </span>
                </div>

                {/* Offers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {offerProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-3xl p-3 border border-orange-100 flex flex-col group hover:shadow-2xl transition-all duration-300">

                            {/* Image & Badge Wrapper */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-50">
                                <span className="absolute top-2 right-2 z-10 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-md">
                                    {product.badge}
                                </span>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex-1 px-1">
                                <p className="text-[10px] text-orange-600 font-bold uppercase mb-1">{product.category}</p>
                                <h3 className="text-sm font-bold text-gray-800 line-clamp-1 mb-2">{product.name}</h3>

                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-lg font-black text-gray-900">₹{product.price}</span>
                                    <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                                </div>
                            </div>

                            {/* Semantic Add to Cart Button */}
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-sm font-semibold transition-all duration-300">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TodayOffers;