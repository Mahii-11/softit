import HeroBanner from "../components/HeroBanner";
import CategoryGrid from "../components/CategoryGrid";
import Sidebar from "../components/Sidebar";
import {
  electronicsProducts,
  flashDeals,
  recommendedProducts,
  trendingProducts,
} from "../data/products";
import ProductSection from "../components/ProductSection";


const HomePage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex gap-0">
      <Sidebar />

      <main className="flex-1 min-w-0 p-2">
         <HeroBanner />
         <CategoryGrid />
          <ProductSection
          title="⚡ Flash Deals"
          subtitle="Limited time offers"
          products={flashDeals}
          accentColor="#e62e04"
          countdown={true}
        />

          <ProductSection
          title="🔥 Trending Now"
          subtitle="What's hot this week"
          products={trendingProducts}
          accentColor="#ff6600"
        />
       
        {/* Banner Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-sm p-4 flex items-center gap-4 cursor-pointer hover:opacity-90">
            <div>
              <p className="text-white font-bold text-sm">New Arrivals</p>
              <p className="text-blue-100 text-xs mt-0.5">
                Fresh styles just landed
              </p>
              <a
                href="#"
                className="inline-block mt-2 bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-sm"
              >
                Explore
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=120&h=100&fit=crop"
              alt="New Arrivals"
              className="w-24 h-20 object-cover rounded-sm ml-auto flex-shrink-0"
            />
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-sm p-4 flex items-center gap-4 cursor-pointer hover:opacity-90">
            <div>
              <p className="text-white font-bold text-sm">
                Beauty & Skincare
              </p>
              <p className="text-purple-100 text-xs mt-0.5">
                Korean beauty from $2.99
              </p>
              <a
                href="#"
                className="inline-block mt-2 bg-white text-purple-600 text-xs font-semibold px-3 py-1 rounded-sm"
              >
                Shop Now
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=120&h=100&fit=crop"
              alt="Beauty"
              className="w-24 h-20 object-cover rounded-sm ml-auto flex-shrink-0"
            />
          </div>
        </div>
          <ProductSection
          title="💡 Electronics"
          subtitle="Gadgets & Tech"
          products={electronicsProducts}
          accentColor="#0066cc"
        />
         <ProductSection
          title="⭐ Recommended For You"
          products={recommendedProducts}
          accentColor="#222"
        />


      </main>
    </div>
  );
};

export default HomePage;