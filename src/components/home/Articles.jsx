// src/components/home/Articles.jsx
import { useState } from "react";
import { FaRegCalendarAlt, FaUserEdit, FaArrowRight, FaTimes, FaBookOpen, FaCheckCircle, FaSpinner } from "react-icons/fa";

const Articles = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showAll, setShowAll] = useState(false);
  
  // Newsletter States
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const blogs = [
    {
      id: 1,
      title: "How to increase Tomato yield with Organic Fertilizer",
      category: "Organic Farming",
      date: "Jan 10, 2026",
      author: "Agri-Expert",
      img: "https://images.unsplash.com/photo-1592841608241-94943960098a?q=80&w=600",
      desc: "Learn the secrets of using compost and bio-fertilizers for a massive tomato harvest.",
      content: "Organic fertilizers like neem cake, vermicompost, and liquid seaweed are essential for tomato growth. They not only provide nitrogen but also improve soil texture. Proper mulching and consistent watering are the keys to double your yield without using chemicals."
    },
    {
      id: 2,
      title: "Protecting Mango crops from Monsoon Pests",
      category: "Crop Protection",
      date: "Feb 15, 2026",
      author: "Dr. Sharma",
      img: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=600",
      desc: "Detailed guide on managing fruit flies and hopper attacks during rainy seasons.",
      content: "High humidity in the monsoon attracts fruit flies. Use pheromone traps to capture them effectively. Also, light pruning of the mango tree helps in better aeration, reducing fungal growth. Apply organic sprays before the rains peak for best protection."
    },
    {
      id: 3,
      title: "Smart Irrigation: Save 40% Water in Rice Fields",
      category: "Smart Tech",
      date: "Mar 05, 2026",
      author: "Tech-Agri",
      img: "https://images.unsplash.com/photo-1563514223351-bf4b7696205d?q=80&w=600",
      desc: "Implementing drip systems and soil sensors for sustainable rice production.",
      content: "Rice traditionally requires huge water quantities. However, Alternate Wetting and Drying (AWD) technology combined with soil moisture sensors can save up to 40% water. This method also reduces methane emissions and increases root strength."
    },
    {
      id: 4,
      title: "Hydroponics: The Future of Urban Farming",
      category: "Modern Agri",
      date: "Apr 02, 2026",
      author: "GreenTech",
      img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=600",
      desc: "Grow exotic vegetables in your balcony without any soil using water-based systems.",
      content: "Hydroponics allows you to grow nutrient-rich food in controlled environments. Minerals are delivered directly through water, making plants grow 30% faster."
    }
  ];

  // Join Newsletter Handler
  const handleJoin = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Mock API call (2 seconds delay)
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 4000);
    }, 2000);
  };

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <div id="blog-section" className="max-w-7xl mx-auto mt-24 px-4 mb-20 relative">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <span className="text-green-600 font-black text-xs uppercase tracking-[0.2em]">Kisan Knowledge Center</span>
          <h2 className="text-4xl font-black text-gray-900 mt-1 leading-tight">
            Latest Agricultural <span className="text-orange-500 underline decoration-gray-200">Articles</span>
          </h2>
          <div className="h-1.5 w-24 bg-green-500 rounded-full mt-4"></div>
        </div>
        <button 
          onClick={() => setShowAll(!showAll)}
          className="bg-gray-100 hover:bg-green-600 hover:text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-sm"
        >
          {showAll ? "Show Less" : "Explore All Blogs"}
        </button>
      </div>

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all">
        {visibleBlogs.map((blog, i) => (
          <div key={i} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 animate-fadeIn">
            <div className="relative h-60 overflow-hidden">
              <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md text-green-700 text-[10px] font-black px-4 py-2 rounded-xl shadow-sm uppercase tracking-tight">
                  {blog.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-gray-400 text-[11px] font-bold mb-4">
                <span className="flex items-center gap-1"><FaRegCalendarAlt className="text-green-500"/> {blog.date}</span>
                <span className="flex items-center gap-1"><FaUserEdit className="text-orange-500"/> {blog.author}</span>
              </div>
              <h3 className="font-black text-xl text-gray-800 leading-tight group-hover:text-green-600 transition-colors mb-4 line-clamp-2">{blog.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{blog.desc}</p>
              <button onClick={() => setSelectedBlog(blog)} className="flex items-center gap-2 text-orange-600 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all group/btn">
                Read Story <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL FOR STORY DETAILS */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-[3rem] w-full max-w-2xl overflow-hidden shadow-2xl relative animate-fadeInUp">
            <button onClick={() => setSelectedBlog(null)} className="absolute top-6 right-6 z-10 bg-white/80 p-2 rounded-full text-gray-800 hover:text-red-500 transition-colors shadow-lg">
              <FaTimes className="text-xl" />
            </button>
            <div className="h-64 overflow-hidden"><img src={selectedBlog.img} className="w-full h-full object-cover" alt="" /></div>
            <div className="p-8 md:p-12 overflow-y-auto max-h-[60vh]">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-bold uppercase">{selectedBlog.category}</span>
                <span className="text-gray-400 text-xs font-bold">{selectedBlog.date}</span>
              </div>
              <h3 className="text-3xl font-black text-gray-900 leading-tight mb-6 flex items-center gap-3"><FaBookOpen className="text-orange-500" /> {selectedBlog.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-green-500 pl-4 mb-6">{selectedBlog.desc}</p>
              <div className="text-gray-700 text-base leading-loose whitespace-pre-line">{selectedBlog.content}</div>
              <button onClick={() => setSelectedBlog(null)} className="mt-8 w-full bg-green-600 text-white py-4 rounded-2xl font-black hover:bg-green-700 transition shadow-lg">Done Reading</button>
            </div>
          </div>
        </div>
      )}

      {/* NEWSLETTER BANNER (With Dynamic Data Loading feel) */}
      <div className="mt-20 bg-green-950 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl text-center md:text-left">
                  <h3 className="text-white text-3xl font-black mb-4 leading-tight">Get Farming Tips Directly in Your Inbox!</h3>
                  <p className="text-green-200/70 font-medium">Join 50,000+ farmers receiving weekly advice on crop protection and yield increase.</p>
              </div>

              {/* NEWSLETTER FORM */}
              <div className="w-full md:w-auto">
                {status === "success" ? (
                  <div className="flex flex-col items-center animate-fadeInUp">
                    <FaCheckCircle className="text-green-400 text-5xl mb-3" />
                    <p className="text-white font-bold">You're on the list!</p>
                    <p className="text-green-300 text-xs mt-1">Check your welcome email.</p>
                  </div>
                ) : (
                  <form onSubmit={handleJoin} className="flex flex-col sm:flex-row bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20 w-full">
                    <input 
                      type="email" 
                      required
                      placeholder="kisan@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      className="bg-transparent px-6 py-3 text-white placeholder:text-gray-500 outline-none w-full md:w-64"
                    />
                    <button 
                      type="submit"
                      disabled={status === "loading"}
                      className={`min-w-[120px] flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-black transition-all shadow-lg ${
                        status === "loading" ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 text-black hover:bg-white"
                      }`}
                    >
                      {status === "loading" ? (
                        <>
                          <FaSpinner className="animate-spin" /> Joining...
                        </>
                      ) : (
                        "Join Now"
                      )}
                    </button>
                  </form>
                )}
              </div>
          </div>
      </div>
    </div>
  );
};

export default Articles;