import { Link } from "react-router-dom";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  const slides = [
    {
      id: 1,
      subtitle: "🌱 100% Organic & Certified",
      title: "Premium Organic Seeds",
      description: "Non-GMO, lab-tested seeds for maximum productivity and healthy crops.",
      img: "/images/home1.jpg",
      btn1Text: "Shop Seeds Now",
      btn1Id: "seeds",
      btn2Text: "Watch Demo",
      btn2Id: "smart-farming"
    },
    {
      id: 2,
      subtitle: "🚜 High Performance",
      title: "Modern Agri Equipment",
      description: "Upgrade your farm with our range of durable tractors and sprayers.",
      img: "/images/home2.jpg",
      btn1Text: "Explore Tools",
      btn1Id: "sprayers",
      btn2Text: "Get Quote",
      btn2Id: "best-selling-products"
    },
    {
      id: 3,
      subtitle: "💧 Save Water, Boost Yield",
      title: "Smart Irrigation Systems",
      description: "Automated drip irrigation kits. Efficient water management for your fields.",
      img: "/images/home3.jpg",
      btn1Text: "View Systems",
      btn1Id: "smart-farming",
      btn2Text: "Consult Expert",
      btn2Id: "blog-section"
    },
    {
      id: 4,
      subtitle: "🍓 Direct from Fields",
      title: "Fresh Farm Harvest",
      description: "Order fresh fruits and vegetables. Quality produce at your doorstep.",
      img: "images/home4.jpg",
      btn1Text: "Order Fresh",
      btn1Id: "categories",
      btn2Text: "Bulk Buy",
      btn2Id: "today’s-offers"
    },
    {
      id: 5,
      subtitle: "🌿 Healthy Plants, More Profit",
      title: "Natural Fertilizers",
      description: "Boost soil health and crop nutrition with our range of organic fertilizers.",
      img: "images/home5.jpg",
      btn1Text: "Buy Now",
      btn1Id: "growth-promoters",
      btn2Text: "Application Guide",
      btn2Id: "blog-section"
    },
    {
      id: 6,
      subtitle: " Defeat Pests, Protect Crops",
      title: "Organic Pest Solutions",
      description: "Effective and safe organic pest control. Stop disease and increase your yield.",
      img: "images/home6.jpg",
      btn1Text: "Shop Solutions",
      btn1Id: "shop-by-pest-&-disease",
      btn2Text: "Ask Doctor",
      btn2Id: "blog-section"
    },
    {
      id: 7,
      subtitle: "🏠 Farming in Your Home",
      title: "Urban Gardening Kits",
      description: "Grow fresh herbs and vegetables in your balcony or home. Complete kits.",
      img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1600",
      btn1Text: "Shop Now",
      btn1Id: "categories",
      btn2Text: "Garden Tips",
      btn2Id: "blog-section"
    },
    {
      id: 8,
      subtitle: "📞 Expert Help, Free Support",
      title: "Agri-Doctor Consultation",
      description: "Connect with agricultural experts to solve your crop problems and farming challenges.",
      img: "images/home8.jpg",
      btn1Text: "Book Now",
      btn1Id: "blog-section",
      btn2Text: "Free Guide",
      btn2Id: "seeds"
    },
    {
      id: 9,
      subtitle: "☀️ Precision & Technology",
      title: "Smart Drone Survey",
      description: "Analyze your fields with advanced drone technology. Accurate data for smart decisions.",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1600",
      btn1Text: "Learn More",
      btn1Id: "smart-farming",
      btn2Text: "Demo Video",
      btn2Id: "blog-section"
    },
    {
      id: 10,
      subtitle: "🔒 Safe Storage, Minimum Loss",
      title: "Cold Storage Solutions",
      description: "Preserve your harvest with our efficient cold storage solutions. Reduce wastage.",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600",
      btn1Text: "Explore",
      btn1Id: "best-selling-products",
      btn2Text: "Get Quote",
      btn2Id: "blog-section"
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-[600px] overflow-hidden bg-black relative">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }} // 1. FIXED: Added crossFade to prevent text overlap
        speed={1000}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* 2. FIXED: Added bg-black here so the next slide hides the previous one completely */}
            <div className="relative w-full h-full bg-black">
              {/* Background Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[5s]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />

              {/* Content Container */}
              <div className="relative z-20 flex items-center h-full px-6 md:px-20 max-w-5xl">
                <div className="text-white">
                  <span className="inline-block bg-green-500/20 backdrop-blur-md text-green-400 border border-green-500/30 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
                    {slide.subtitle}
                  </span>

                  <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-medium">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => scrollToSection(slide.btn1Id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center gap-3 shadow-xl shadow-green-900/20 transition-all hover:scale-105 active:scale-95 group"
                    >
                      {slide.btn1Text}
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => scrollToSection(slide.btn2Id)}
                      className="bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-2xl font-black text-lg transition-all flex items-center gap-3 group"
                    >
                      <FaPlayCircle className="text-xl group-hover:scale-110 transition-transform" />
                      {slide.btn2Text}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;