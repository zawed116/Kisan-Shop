// src/pages/Home.jsx
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero"; 
import Categories from "../components/home/Categories";
import TrendingProducts from "../components/home/TrendingProducts";
import TodayOffers from "../components/home/TodayOffers";
import PestDisease from "../components/home/PestDisease";
import ShopByCrop from "../components/home/ShopByCrop";
import BestSelling from "../components/home/BestSelling";
import SeedsSection from "../components/home/SeedsSection";
import GrowthPromoters from "../components/home/GrowthPromoters";
import SmartFarming from "../components/home/SmartFarming";
import Sprayers from "../components/home/Sprayers";
import Articles from "../components/home/Articles";
import Footer from "../components/layout/Footer"; 

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen scroll-smooth">
      {/* Fixed Layout Components */}
      <Header />
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        <Hero />

        {/* Section Wrapper with IDs for Navbar Navigation */}
        <section id="categories" className="scroll-mt-32">
          <Categories />
        </section>

        <section id="trending-products" className="scroll-mt-32">
          <TrendingProducts />
        </section>

        <section id="today’s-offers" className="scroll-mt-32">
          <TodayOffers />
        </section>

        <section id="shop-by-pest-&-disease" className="scroll-mt-32">
          <PestDisease />
        </section>

        <section id="shop-by-crop" className="scroll-mt-32">
          <ShopByCrop />
        </section>

        <section id="best-selling-products" className="scroll-mt-32">
          <BestSelling />
        </section>

        <section id="seeds" className="scroll-mt-32">
          <SeedsSection />
        </section>

        <section id="growth-promoters" className="scroll-mt-32">
          <GrowthPromoters />
        </section>

        <section id="smart-farming" className="scroll-mt-32">
          <SmartFarming />
        </section>

        <section id="sprayers" className="scroll-mt-32">
          <Sprayers />
        </section>

        <section id="blog-section" className="scroll-mt-32 pb-20">
          <Articles />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;