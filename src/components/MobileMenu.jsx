import { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuCategories = [
  { name: "Consumer Electronics", icon: "💻", sub: ["Phones", "Laptops", "Tablets", "Earbuds"] },
  { name: "Women's Clothing", icon: "👗", sub: ["Dresses", "Tops", "Jeans", "Coats"] },
  { name: "Men's Clothing", icon: "👔", sub: ["T-Shirts", "Shirts", "Pants", "Suits"] },
  { name: "Jewelry & Accessories", icon: "💍", sub: ["Necklaces", "Rings", "Earrings"] },
  { name: "Home & Garden", icon: "🏠", sub: ["Furniture", "Bedding", "Kitchen", "Garden"] },
  { name: "Sports & Outdoor", icon: "⚽", sub: ["Fitness", "Cycling", "Camping"] },
  { name: "Beauty & Health", icon: "💄", sub: ["Skincare", "Makeup", "Hair Care"] },
  { name: "Toys & Hobbies", icon: "🎮", sub: ["Action Figures", "RC Toys", "Board Games"] },
  { name: "Automotive", icon: "🚗", sub: ["Car Parts", "Accessories", "Lights"] },
  { name: "Bags & Luggage", icon: "👜", sub: ["Backpacks", "Handbags", "Luggage"] },
  { name: "Watches", icon: "⌚", sub: ["Men's", "Women's", "Smart"] },
  { name: "Shoes", icon: "👟", sub: ["Sneakers", "Boots", "Sandals"] },
  { name: "Office & School", icon: "📚", sub: ["Stationery", "Printers", "Chairs"] },
  { name: "Tools & Hardware", icon: "🔧", sub: ["Power Tools", "Hand Tools"] },
];

const MobileMenu = ({ isOpen, onClose }) => {
  const [openCat, setOpenCat] = useState(null);
  const navigate = useNavigate();

  const handleSubClick = (sub) => {
    navigate(`/category/${encodeURIComponent(sub)}`);
    onClose();
  };

  const handleCatClick = (catName, idx) => {
    if (openCat === idx) {
      setOpenCat(null);
    } else {
      setOpenCat(idx);
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-[#e62e04] px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div>
            <p className="text-white font-bold text-sm">Hello, Guest</p>
            <p className="text-orange-200 text-xs">Sign in for best deals</p>
          </div>
          <button onClick={onClose} className="text-white hover:text-orange-200 p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto flex-1">
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
              Categories
            </p>
          </div>

          {menuCategories.map((cat, i) => (
            <div key={i} className="border-b border-gray-100">
              <button
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-left"
                onClick={() => handleCatClick(cat.name, i)}
              >
                <span className="text-lg">{cat.icon}</span>
                <span className="text-sm text-gray-700 flex-1">{cat.name}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    openCat === i ? "rotate-90" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openCat === i ? "max-h-48" : "max-h-0"
                }`}
              >
                <div className="bg-gray-50 pl-12 pr-4 pb-2">
                  {cat.sub.map((sub, j) => (
                    <button
                      key={j}
                      onClick={() => handleSubClick(sub)}
                      className="block w-full text-left py-2 text-xs text-gray-600 hover:text-[#e62e04] border-b border-gray-100 last:border-0"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 p-4 flex gap-3 flex-shrink-0">
          <button className="flex-1 bg-[#e62e04] text-white text-xs font-semibold py-2 rounded-sm hover:bg-red-700">
            Sign In
          </button>
          <button className="flex-1 border border-[#e62e04] text-[#e62e04] text-xs font-semibold py-2 rounded-sm hover:bg-red-50">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;