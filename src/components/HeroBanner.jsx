const bannerImages = [
  {
    url: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=300&fit=crop",
    title: "Summer Sale Up to 90% Off",
    subtitle: "Electronics, Fashion & More",
    badge: "HOT DEALS",
  },
  {
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=300&fit=crop",
    title: "New Fashion Collection",
    subtitle: "Trending Styles from $5.99",
    badge: "NEW ARRIVALS",
  },
  {
    url: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&h=300&fit=crop",
    title: "Smart Home Devices",
    subtitle: "Transform Your Living Space",
    badge: "BEST SELLERS",
  },
];

const promoCards = [
  {
    img: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=200&h=150&fit=crop",
    title: "Phones & Tablets",
    tag: "From $19.99",
  },
  {
    img: "/images/fashiondeals.png",
    title: "Fashion Deals",
    tag: "Up to 80% off",
  },
];

export default function HeroBanner() {
  return (
    <div className="flex gap-2 mb-3">
      
      {/* Main Banner */}
      <div className="flex-1 relative overflow-hidden rounded-sm min-h-[160px] bg-gradient-to-r from-orange-600 to-red-600">
        <img
          src={bannerImages[0].url}
          alt="Main Banner"
          className="w-full h-full object-cover opacity-80 absolute inset-0"
        />

        <div className="relative z-10 p-5 flex flex-col justify-center h-full">
          <span className="bg-yellow-400 text-gray-900 text-[10px] font-bold px-1.5 py-0.5 rounded-sm w-fit mb-2">
            {bannerImages[0].badge}
          </span>

          <h1 className="text-white font-bold text-xl leading-tight drop-shadow">
            {bannerImages[0].title}
          </h1>

          <p className="text-orange-100 text-xs mt-1">
            {bannerImages[0].subtitle}
          </p>

          <button className="mt-3 bg-white text-[#e62e04] text-xs font-bold px-4 py-1.5 rounded-sm hover:bg-orange-50 w-fit">
            Shop Now
          </button>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`rounded-full ${
                i === 0
                  ? "bg-white w-4 h-1.5"
                  : "bg-white/50 w-1.5 h-1.5"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Promo Cards */}
      <div className="hidden sm:flex flex-col gap-2 w-40">
        {promoCards.map((card, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-sm flex-1 bg-gray-100 cursor-pointer hover:opacity-90"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-0 left-0 p-2">
              <p className="text-white text-[11px] font-bold leading-tight">
                {card.title}
              </p>
              <p className="text-orange-300 text-[10px]">
                {card.tag}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side Cards */}
      <div className="hidden lg:flex flex-col gap-2 w-40">
        
        {/* Daily Deals */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-sm p-3 flex-1 cursor-pointer hover:opacity-90">
          <p className="text-white font-bold text-xs">Daily Deals</p>
          <p className="text-blue-200 text-[10px] mt-0.5">
            Refreshed every 24h
          </p>

          <div className="mt-2 grid grid-cols-2 gap-1">
            {[
              "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=60&h=60&fit=crop",
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=60&h=60&fit=crop",
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=60&h=60&fit=crop",
              "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=60&h=60&fit=crop",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="product"
                className="w-full aspect-square object-cover rounded-sm"
              />
            ))}
          </div>
        </div>

        {/* New User Gift */}
        <div className="bg-gradient-to-b from-purple-600 to-purple-800 rounded-sm p-3 flex-1 cursor-pointer hover:opacity-90">
          <p className="text-white font-bold text-xs">New User Gift</p>
          <p className="text-purple-200 text-[10px] mt-0.5">
            Up to $30 coupon
          </p>

          <button className="mt-2 bg-yellow-400 text-gray-900 text-[10px] font-bold px-2 py-1 rounded-sm w-full">
            Claim Now
          </button>
        </div>
      </div>
    </div>
  );
}