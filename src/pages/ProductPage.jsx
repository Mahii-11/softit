import { useState, useRef } from "react";
import { useLocation } from "wouter";
const unsplashBase = "https://images.unsplash.com";


const productImages = [
  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1606741965429-02b5c73e2f3a?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&h=600&fit=crop",
];

const colors = ["Black", "White", "Navy Blue", "Rose Gold", "Silver"];
const colorHex = {
  Black: "#1a1a1a",
  White: "#f5f5f5",
  "Navy Blue": "#1e3a5f",
  "Rose Gold": "#b76e79",
  Silver: "#c0c0c0",
};

 const products = [
  {
    id: 31,
    title: "USB-C Hub 7-in-1 4K HDMI Multiport Adapter",
    price: 17.99,
    originalPrice: 49.0,
    discount: 63,
    rating: 4,
    reviews: 2134,
    image: `${unsplashBase}/photo-1625842268584-8f3296236761?w=300&h=300&fit=crop`,
    freeShipping: true,
  },
  {
    id: 32,
    title: "Mini PC Windows 11 Intel Compact Desktop",
    price: 89.99,
    originalPrice: 259.0,
    discount: 65,
    rating: 5,
    reviews: 345,
    image: `${unsplashBase}/photo-1587202372775-e229f172b9d7?w=300&h=300&fit=crop`,
    sold: "567",
  },
  {
    id: 33,
    title: "65W GaN Fast Charger USB-C Multi Port PD",
    price: 13.99,
    originalPrice: 39.0,
    discount: 64,
    rating: 5,
    reviews: 4567,
    image: `${unsplashBase}/photo-1618477388954-7852f32655ec?w=300&h=300&fit=crop`,
    sold: "10k",
    freeShipping: true,
  },


  {
    id: 34,
    title: "Wireless Bluetooth Over-Ear Headphones ANC",
    price: 24.99,
    originalPrice: 79.99,
    discount: 69,
    rating: 5,
    reviews: 5120,
    image: `${unsplashBase}/photo-1511367461989-f85a21fda167?w=300&h=300&fit=crop`,
    sold: "12k",
    freeShipping: true,
  },
  {
    id: 35,
    title: "4K Action Camera Waterproof Sports Camera",
    price: 39.99,
    originalPrice: 119.99,
    discount: 67,
    rating: 4,
    reviews: 2340,
    image: `${unsplashBase}/photo-1557858310-9052820906f7?w=300&h=300&fit=crop`,
    sold: "5.4k",
  },
  {
    id: 36,
    title: "Smart Home Voice Assistant Speaker Mini",
    price: 19.99,
    originalPrice: 59.99,
    discount: 66,
    rating: 4,
    reviews: 3890,
    image: `${unsplashBase}/photo-1589254065878-42c9da997008?w=300&h=300&fit=crop`,
    freeShipping: true,
  },
  {
    id: 37,
    title: "Portable SSD 1TB High Speed External Drive",
    price: 59.99,
    originalPrice: 149.99,
    discount: 60,
    rating: 5,
    reviews: 1780,
    image: `${unsplashBase}/photo-1597852074816-d933c7d2b988?w=300&h=300&fit=crop`,
    sold: "3.2k",
  },
  {
    id: 38,
    title: "1080P Webcam with Microphone for PC Laptop",
    price: 14.99,
    originalPrice: 39.99,
    discount: 62,
    rating: 4,
    reviews: 4210,
    image: `${unsplashBase}/photo-1587825140708-dfaf72ae4b04?w=300&h=300&fit=crop`,
    freeShipping: true,
  },
  {
    id: 39,
    title: "Smart LED TV Stick 4K Streaming Device",
    price: 21.99,
    originalPrice: 49.99,
    discount: 56,
    rating: 5,
    reviews: 6420,
    image: `${unsplashBase}/photo-1601944177325-f8867652837f?w=300&h=300&fit=crop`,
    sold: "15k",
  },
  {
    id: 40,
    title: "Gaming Controller Wireless Bluetooth for PC",
    price: 18.99,
    originalPrice: 45.99,
    discount: 59,
    rating: 4,
    reviews: 2890,
    image: `${unsplashBase}/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop`,
    freeShipping: true,
  },
];

const reviews = [
  { user: "John M.", country: "US", rating: 5, date: "Mar 12, 2024", text: "Amazing quality! Sound is crystal clear and bass is deep. Delivery was fast, very happy with this purchase.", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=80&h=80&fit=crop" },
  { user: "Sarah K.", country: "UK", rating: 4, date: "Feb 28, 2024", text: "Good earbuds for the price. Noise cancellation works well. Battery lasts around 6 hours.", img: null },
  { user: "Ahmed R.", country: "AE", rating: 5, date: "Feb 15, 2024", text: "Exceeded expectations! Very comfortable to wear. Will buy again.", img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=80&h=80&fit=crop" },
];

const ProductPage = () => {
  const [, navigate] = useLocation();
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [addedToCart, setAddedToCart] = useState(false);

  // Zoom state
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
   const imgRef = useRef(null);

  const handleMouseMove = (e) => {
  if (!imgRef.current) return;

  const rect = imgRef.current.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  setZoomPos({ x, y });
};

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb */}
      <div className="max-w-screen-2xl mx-auto px-3 py-2">
        <div className="flex items-center gap-1 text-xs text-gray-500 flex-wrap">
          <button onClick={() => navigate("/")} className="hover:text-[#e62e04]">Home</button>
          <span>/</span>
          <button onClick={() => navigate("/category/Electronics")} className="hover:text-[#e62e04]">Electronics</button>
          <span>/</span>
          <button onClick={() => navigate("/category/Earbuds")} className="hover:text-[#e62e04]">Earbuds</button>
          <span>/</span>
          <span className="text-gray-700 truncate max-w-[200px]">Wireless Bluetooth Earbuds TWS</span>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-3 pb-6">
        {/* Main product section */}
        <div className="bg-white rounded-sm shadow-sm mb-3">
          <div className="flex flex-col lg:flex-row gap-0">

            {/* ── LEFT: Image Gallery ── */}
            <div className="lg:w-[420px] flex-shrink-0 p-4">
              {/* Main image + zoom */}
              <div className="relative flex gap-3">
                <div
                  ref={imgRef}
                  className="relative w-full aspect-square overflow-hidden rounded-sm border border-gray-200 bg-gray-50 cursor-crosshair"
                  onMouseEnter={() => setShowZoom(true)}
                  onMouseLeave={() => setShowZoom(false)}
                  onMouseMove={handleMouseMove}
                >
                  <img
                    src={productImages[selectedImg]}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                  {/* Lens overlay */}
                  {showZoom && (
                    <div
                      className="absolute w-24 h-24 border-2 border-[#e62e04] rounded-sm pointer-events-none opacity-40 bg-white/30"
                      style={{
                        left: `calc(${zoomPos.x}% - 48px)`,
                        top: `calc(${zoomPos.y}% - 48px)`,
                        transform: "translate(0,0)",
                      }}
                    />
                  )}
                </div>

                {/* Zoomed panel — appears to the right on desktop */}
                {showZoom && (
                  <div className="hidden lg:block absolute left-full top-0 ml-2 w-80 h-80 border border-gray-300 rounded-sm overflow-hidden shadow-xl z-30 bg-white">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url(${productImages[selectedImg]})`,
                        backgroundSize: "300%",
                        backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-none">
                {productImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    className={`flex-shrink-0 w-14 h-14 rounded-sm overflow-hidden border-2 transition-colors ${
                      selectedImg === i ? "border-[#e62e04]" : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Share / Wishlist */}
              <div className="flex gap-3 mt-4">
                <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#e62e04]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Save (3.2k)
                </button>
                <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#e62e04]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>

            {/* ── RIGHT: Product Info ── */}
            <div className="flex-1 p-4 lg:border-l border-gray-100">
              {/* Store badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-orange-100 text-orange-600 text-[10px] font-semibold px-2 py-0.5 rounded-sm">Top Seller</span>
                <span className="text-[10px] text-gray-500">TechGadgets Store</span>
                <span className="text-[10px] text-gray-400">98.2% positive feedback</span>
              </div>

              <h1 className="text-sm font-medium text-gray-800 leading-snug mb-2">
                Wireless Bluetooth Earbuds TWS Pro with Active Noise Cancelling Microphone, 30H Battery Life, IPX5 Waterproof, 2024 Latest Model
              </h1>

              {/* Rating row */}
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400 text-xs">★★★★★</div>
                  <span className="text-xs text-[#e62e04] font-medium">4.8</span>
                </div>
                <span className="text-xs text-gray-500 underline cursor-pointer">2,341 reviews</span>
                <span className="text-xs text-gray-400">|</span>
                <span className="text-xs text-gray-500">5,200+ sold</span>
                <span className="text-xs text-gray-400">|</span>
                <span className="text-xs text-green-600 font-medium">✓ In Stock</span>
              </div>

              {/* Price block */}
              <div className="bg-gray-50 rounded-sm p-3 mb-3">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-[#e62e04] font-bold text-2xl">$8.99</span>
                  <span className="text-gray-400 text-sm line-through">$29.99</span>
                  <span className="bg-[#e62e04] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">-70%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  <span className="text-green-600 font-medium">Extra 5% off</span> with coupon &nbsp;
                  <span className="border border-dashed border-green-500 text-green-600 text-[10px] px-1.5 py-0.5 rounded-sm cursor-pointer hover:bg-green-50">
                    GET5OFF &nbsp; Claim
                  </span>
                </p>
              </div>

              {/* Shipping info */}
              <div className="border border-gray-200 rounded-sm divide-y divide-gray-100 mb-3 text-xs">
                <div className="flex gap-2 p-2.5">
                  <span className="text-gray-400 w-20 flex-shrink-0">Ship to</span>
                  <div className="flex items-center gap-1">
                    <span>🇺🇸 United States</span>
                    <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex gap-2 p-2.5">
                  <span className="text-gray-400 w-20 flex-shrink-0">Shipping</span>
                  <div>
                    <span className="text-green-600 font-medium">Free Shipping</span>
                    <span className="text-gray-500"> · Estimated delivery </span>
                    <span className="text-gray-700 font-medium">Apr 5–15</span>
                  </div>
                </div>
                <div className="flex gap-2 p-2.5">
                  <span className="text-gray-400 w-20 flex-shrink-0">Returns</span>
                  <span className="text-gray-600">Free returns within <span className="font-medium">90 days</span></span>
                </div>
                <div className="flex gap-2 p-2.5">
                  <span className="text-gray-400 w-20 flex-shrink-0">Protection</span>
                  <span className="text-gray-600">
                    <span className="text-orange-500">🛡️ Buyer Protection</span> — Money back guarantee
                  </span>
                </div>
              </div>

              {/* Color selector */}
              <div className="mb-3">
                <p className="text-xs text-gray-600 mb-1.5">
                  Color: <span className="font-semibold text-gray-800">{selectedColor}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        selectedColor === color ? "border-[#e62e04] scale-110 shadow-sm" : "border-gray-300 hover:border-gray-500"
                      }`}
                      style={{ backgroundColor: colorHex[color] }}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-gray-600">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg font-light"
                  >−</button>
                  <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg font-light"
                  >+</button>
                </div>
                <span className="text-xs text-gray-400">999 pieces available</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 min-w-[140px] py-2.5 rounded-sm text-sm font-semibold border-2 flex items-center justify-center gap-2 transition-all ${
                    addedToCart
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-[#e62e04] text-[#e62e04] hover:bg-red-50"
                  }`}
                >
                  {addedToCart ? (
                    <>✓ Added!</>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart
                    </>
                  )}
                </button>
                <button className="flex-1 min-w-[140px] bg-[#e62e04] text-white py-2.5 rounded-sm text-sm font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Buy Now
                </button>
              </div>

              {/* Trust icons */}
              <div className="flex flex-wrap gap-4 mt-4 pt-3 border-t border-gray-100">
                {[
                  { icon: "🔒", text: "Secure Payment" },
                  { icon: "📦", text: "Fast Delivery" },
                  { icon: "↩️", text: "Easy Returns" },
                  { icon: "🌟", text: "Quality Guarantee" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-1 text-[10px] text-gray-500">
                    <span>{t.icon}</span> {t.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Description / Specs / Reviews tabs ── */}
        <div className="bg-white rounded-sm shadow-sm mb-3">
          <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-none">
            {["description", "specifications", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-xs font-medium whitespace-nowrap capitalize border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-[#e62e04] text-[#e62e04]"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab === "reviews" ? `Reviews (2,341)` : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-4">
            {activeTab === "description" && (
              <div className="text-xs text-gray-700 space-y-3 leading-relaxed">
                <p className="font-semibold text-sm text-gray-800">Product Description</p>
                <p>Experience premium sound quality with our latest TWS Pro earbuds. Featuring advanced Active Noise Cancellation technology, these earbuds block out up to 35dB of ambient noise, letting you focus on what matters most.</p>
                <ul className="space-y-1.5 list-none">
                  {[
                    "🎵 High-Fidelity Sound with 13mm dynamic drivers and custom-tuned bass",
                    "🔇 Active Noise Cancellation — blocks 35dB ambient noise",
                    "🔋 30 Hours total battery life (6h earbuds + 24h case)",
                    "💧 IPX5 Waterproof — safe for workouts and rain",
                    "🎙️ Dual microphone with CVC 8.0 noise reduction for clear calls",
                    "📶 Bluetooth 5.3 — stable connection up to 33ft range",
                    "⚡ Quick charge — 10 min charge = 2 hours playtime",
                    "👂 Ergonomic design with 3 ear tip sizes included",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="text-xs">
                <p className="font-semibold text-sm text-gray-800 mb-3">Technical Specifications</p>
                <table className="w-full">
                  <tbody>
                    {[
                      ["Brand", "TechPro Audio"], ["Model", "TWS Pro X5 2024"], ["Bluetooth Version", "5.3"],
                      ["Driver Size", "13mm Dynamic"], ["Frequency Response", "20Hz – 20kHz"],
                      ["Impedance", "32Ω"], ["Battery (Earbuds)", "50mAh × 2"], ["Battery (Case)", "500mAh"],
                      ["Total Battery Life", "30 Hours"], ["Charging Time", "1.5 Hours"], ["Water Resistance", "IPX5"],
                      ["Connection Range", "10m (33ft)"], ["Weight (Earbuds)", "5g each"], ["Weight (Case)", "42g"],
                      ["Colors Available", "Black, White, Navy Blue, Rose Gold, Silver"],
                      ["In the Box", "Earbuds × 2, Charging Case, USB-C Cable, Ear tips (S/M/L), Manual"],
                    ].map(([key, val], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="py-2 px-3 text-gray-500 w-40">{key}</td>
                        <td className="py-2 px-3 text-gray-800">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex flex-col sm:flex-row gap-6 mb-5">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#e62e04]">4.8</div>
                    <div className="flex justify-center text-yellow-400 text-lg mt-1">★★★★★</div>
                    <div className="text-xs text-gray-500 mt-1">2,341 reviews</div>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const pct = star === 5 ? 76 : star === 4 ? 16 : star === 3 ? 5 : star === 2 ? 2 : 1;
                      return (
                        <div key={star} className="flex items-center gap-2 text-xs">
                          <span className="text-gray-600 w-3">{star}</span>
                          <span className="text-yellow-400 text-[10px]">★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                            <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-gray-400 w-6">{pct}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((r, i) => (
                    <div key={i} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                          {r.user[0]}
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-gray-800">{r.user}</span>
                          <span className="text-[10px] text-gray-400 ml-2">from {r.country}</span>
                        </div>
                        <div className="ml-auto flex items-center gap-1">
                          <div className="flex text-yellow-400 text-[10px]">
                            {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                          </div>
                          <span className="text-[10px] text-gray-400">{r.date}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed mb-2">{r.text}</p>
                      {r.img && (
                        <img src={r.img} alt="Review" className="w-16 h-16 object-cover rounded-sm border border-gray-200" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Related Products ── */}
        <div className="bg-white rounded-sm shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-800">You May Also Like</h3>
          </div>
            <div className="grid grid-cols-2 md:grid-cols-5">
  {products.map((product, index) => {
    const discountPct =
      product.originalPrice > product.price
        ? Math.round(
            ((product.originalPrice - product.price) /
              product.originalPrice) *
              100
          )
        : 0;

    return (
      <div
        key={product.id || index}
        className="bg-white border border-gray-200 rounded-sm hover:shadow-md hover:scale-[1.02] transition-all duration-150 cursor-pointer overflow-hidden group"
      >
        {/* IMAGE SECTION */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full aspect-square object-cover"
            loading="lazy"
          />

          {discountPct > 0 && (
            <span className="absolute top-0.5 left-0.5 bg-[#e62e04] text-white text-[9px] font-bold px-1 py-0.5 rounded-sm leading-none">
              -{discountPct}%
            </span>
          )}

          {product.freeShipping && (
            <span className="absolute bottom-0.5 left-0.5 bg-orange-500 text-white text-[8px] px-1 py-0.5 rounded-sm leading-none">
              FREE
            </span>
          )}

          {/* Mobile Cart Button */}
          <button
            onClick={(e) => e.stopPropagation()}
            className="md:hidden absolute bottom-1 right-1 bg-[#e62e04] text-white rounded-full w-7 h-7 flex items-center justify-center shadow-md active:scale-90 transition-transform"
            aria-label="Add to cart"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>

          {/* Desktop Hover Cart Bar */}
          <button
            onClick={(e) => e.stopPropagation()}
            className="hidden md:flex absolute bottom-0 left-0 right-0 bg-[#e62e04] text-white text-[10px] font-semibold py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 items-center justify-center gap-1"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to Cart
          </button>
        </div>

        {/* TEXT SECTION */}
        <div className="p-1.5">
          <p className="text-[11px] text-gray-700 leading-tight line-clamp-2 mb-1 min-h-[2.5em]">
            {product.title}
          </p>

          <div className="flex items-baseline gap-1 flex-wrap">
            <span className="text-[#e62e04] font-bold text-sm leading-none">
              ${product.price.toFixed(2)}
            </span>

            {product.originalPrice > product.price && (
              <span className="text-gray-400 text-[10px] line-through leading-none">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 mt-1">
            <div className="flex text-yellow-400 text-[9px] leading-none">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
            </div>

            <span className="text-gray-400 text-[9px]">
              ({product.reviews})
            </span>

            {product.sold && (
              <span className="text-gray-400 text-[9px] ml-auto">
                {product.sold} sold
              </span>
            )}
          </div>
        </div>
      </div>
    );
  })}
</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
