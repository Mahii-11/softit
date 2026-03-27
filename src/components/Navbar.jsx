const categories = [
  "Flash Deals", "Electronics", "Fashion", "Home & Garden", "Sports", "Beauty", "Toys",
  "Automotive", "Tools", "Jewelry", "Bags", "Watches", "Shoes", "Office", "Books",
];

export default function Navbar() {
  const currentPath = window.location.pathname;

  const currentCat = currentPath.startsWith("/category/")
    ? decodeURIComponent(currentPath.replace("/category/", ""))
    : "";

  const handleNavigate = (cat) => {
    window.location.href = `/category/${encodeURIComponent(cat)}`;
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-[46px] z-40">
      
      <div className="max-w-screen-2xl mx-auto px-2">
        
        <div className="flex items-center overflow-x-auto gap-0 scrollbar-none">

          {categories.map((cat, i) => {
            const isActive =
              currentCat === cat || (i === 0 && currentPath === "/");

            return (
              <button
                key={i}
                onClick={() => handleNavigate(cat)}
                className={`flex-shrink-0 px-2.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors border-b-2 hover:text-[#e62e04] hover:bg-red-50 ${
                  isActive
                    ? "text-[#e62e04] border-[#e62e04] font-semibold"
                    : "text-gray-700 border-transparent"
                }`}
              >
                {cat}
              </button>
            );
          })}

        </div>
      </div>
    </nav>
  );
}