import { useState } from "react";
import { useNavigate } from "react-router-dom";

const sidebarCategories = [
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

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const handleCatClick = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const handleSubClick = (sub) => {
    navigate(`/category/${encodeURIComponent(sub)}`);
    setOpenIndex(null);
  };

  return (
    <aside className="hidden lg:block w-48 flex-shrink-0 bg-white border-r border-gray-200 overflow-y-auto max-h-[calc(100vh-80px)] sticky top-[80px]">
      <div className="py-1">
        {sidebarCategories.map((cat, i) => (
          <div key={i}>
            <button
              onClick={() => handleCatClick(i)}
              className={`w-full flex items-center gap-1.5 px-3 py-2 text-left transition-colors ${
                openIndex === i
                  ? "bg-red-50 text-[#e62e04]"
                  : "hover:bg-red-50 hover:text-[#e62e04]"
              }`}
            >
              <span className="text-sm flex-shrink-0">{cat.icon}</span>
              <span
                className={`text-xs leading-tight flex-1 ${
                  openIndex === i
                    ? "text-[#e62e04] font-medium"
                    : "text-gray-700"
                }`}
              >
                {cat.name}
              </span>
              <svg
                className={`w-3 h-3 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === i
                    ? "rotate-90 text-[#e62e04]"
                    : "text-gray-400"
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
                openIndex === i ? "max-h-48" : "max-h-0"
              }`}
            >
              <div className="bg-gray-50 border-t border-gray-100">
                {cat.sub.map((sub, j) => (
                  <button
                    key={j}
                    onClick={() => handleSubClick(sub)}
                    className="flex items-center gap-2 w-full px-5 py-1.5 text-xs text-gray-600 hover:text-[#e62e04] hover:bg-red-50 text-left border-b border-gray-100 last:border-0 transition-colors"
                  >
                    <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;