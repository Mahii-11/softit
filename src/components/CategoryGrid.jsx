const categories = [
  { icon: "📱", name: "Phones", color: "bg-blue-50" },
  { icon: "👗", name: "Women", color: "bg-pink-50" },
  { icon: "👔", name: "Men", color: "bg-indigo-50" },
  { icon: "🏠", name: "Home", color: "bg-green-50" },
  { icon: "💻", name: "Computers", color: "bg-gray-50" },
  { icon: "⚽", name: "Sports", color: "bg-orange-50" },
  { icon: "💄", name: "Beauty", color: "bg-red-50" },
  { icon: "🎮", name: "Gaming", color: "bg-purple-50" },
  { icon: "🚗", name: "Auto", color: "bg-yellow-50" },
  { icon: "👜", name: "Bags", color: "bg-amber-50" },
  { icon: "⌚", name: "Watches", color: "bg-teal-50" },
  { icon: "👟", name: "Shoes", color: "bg-cyan-50" },
  { icon: "📚", name: "Books", color: "bg-lime-50" },
  { icon: "🧸", name: "Toys", color: "bg-rose-50" },
  { icon: "🌱", name: "Garden", color: "bg-emerald-50" },
  { icon: "🍳", name: "Kitchen", color: "bg-orange-50" },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white mb-3 rounded-sm p-2">
      
      {/* Title */}
      <h2 className="text-xs font-semibold text-gray-700 mb-2 px-1">
        Shop by Category
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-16 gap-1">
        {categories.map((cat, i) => (
          <a
            key={i}
            href="#"
            className={`flex flex-col items-center justify-center gap-0.5 p-2 rounded-sm transition-all duration-200 hover:scale-105 hover:shadow-sm cursor-pointer ${cat.color}`}
          >
            {/* Icon */}
            <span className="text-lg leading-none">
              {cat.icon}
            </span>

            {/* Name */}
            <span className="text-[9px] text-gray-600 text-center leading-tight whitespace-nowrap">
              {cat.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}