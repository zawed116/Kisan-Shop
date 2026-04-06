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
      title: "Premium Organic Seeds",
      subtitle: "GROW THE BEST YIELD",
      description: "Non-GMO, lab-tested seeds for maximum productivity and healthy crops.",
      img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1600",
      btnText: "Shop Seeds",
    },
    {
      id: 2,
      title: "Modern Farming Equipment",
      subtitle: "SMART AGRI-TECH",
      description: "Upgrade your farm with high-performance tractors and automated tools.",
      img: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=1600",
      btnText: "Explore Tools",
    },
    {
      id: 3,
      title: "100% Natural Fertilizers",
      subtitle: "SOIL HEALTH MATTERS",
      description: "Boost your soil's nutrition with our range of organic fertilizers.",
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1600",
      btnText: "Buy Now",
    },
    {
      id: 4,
      title: "Advanced Irrigation Systems",
      subtitle: "SAVE WATER, SAVE CROPS",
      description: "Smart drip irrigation kits designed for efficient water management.",
      img: "https://images.unsplash.com/photo-1563514223351-bf4b7696205d?q=80&w=1600",
      btnText: "View Systems",
    },
    {
      id: 5,
      title: "Fresh Farm Harvest",
      subtitle: "DIRECT FROM THE FIELDS",
      description: "Get farm-fresh vegetables and fruits delivered straight to your door.",
      img: "https://images.unsplash.com/photo-1488459711635-de8256a244b0?q=80&w=1600",
      btnText: "Order Fresh",
    },
    {
      id: 6,
      title: "Eco Pest Solutions",
      subtitle: "PROTECT YOUR FARM",
      description: "Safe and effective organic pest control for sustainable agriculture.",
      img: "https://images.unsplash.com/photo-1592919016383-407b5871216e?q=80&w=1600",
      btnText: "Explore More",
    },
    {
      id: 7,
      title: "Greenhouse Technology",
      subtitle: "ALL-WEATHER FARMING",
      description: "Control your climate and grow exotic crops throughout the year.",
      img: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=1600",
      btnText: "Learn Tech",
    },
    {
      id: 8,
      title: "Expert Agri Consultation",
      subtitle: "FARM WITH KNOWLEDGE",
      description: "Connect with agricultural experts to solve your farming challenges.",
      img: "https://images.unsplash.com/photo-1595841055318-47db993e83bc?q=80&w=1600",
      btnText: "Book Now",
    },
  ];

  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }} // Isse piche wali slide turant gayab ho jayegi
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
            {/* Important: Humne 'bg-black' aur opacity control add kiya hai 
              taaki transition ke waqt piche wali slide na dikhe.
            */}
            <div className="relative w-full h-full bg-black">
              {/* Background Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay - Readability ke liye isko dark rakha hai */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />

              {/* Content Container */}
              <div className="relative z-20 flex items-center h-full px-6 md:px-20 max-w-5xl">
                <div className="text-white">
                  <span className="inline-block bg-green-500 text-black text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 shadow-lg">
                    {slide.subtitle}
                  </span>

                  <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>

                  <p className="text-gray-200 text-sm md:text-xl mb-8 max-w-xl leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button className="bg-green-600 hover:bg-green-700 transition-all duration-300 px-8 py-3 rounded-lg text-white font-bold text-lg shadow-xl hover:scale-105 active:scale-95">
                      {slide.btnText}
                    </button>
                    <button className="backdrop-blur-md border-2 border-white/60 px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-bold text-lg">
                      Learn More
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