import ProductCard from "./ProductCard";

const ProductSection = ({
  title,
  subtitle,
  products,
  accentColor = "#e62e04",
  countdown = false,
}) => {
  return (
    <section className="mb-3">
      <div
        className="flex items-center justify-between px-3 py-2 rounded-t-sm"
        style={{ backgroundColor: accentColor }}
      >
        <div className="flex items-center gap-2">
          <h2 className="text-white font-bold text-sm">{title}</h2>

          {subtitle && (
            <span className="text-white/80 text-xs">{subtitle}</span>
          )}

          {countdown && (
            <div className="flex items-center gap-0.5 ml-2">
              <span className="bg-white text-[#e62e04] text-[10px] font-bold px-1 py-0.5 rounded leading-none">
                02
              </span>
              <span className="text-white text-[10px] font-bold">:</span>

              <span className="bg-white text-[#e62e04] text-[10px] font-bold px-1 py-0.5 rounded leading-none">
                47
              </span>
              <span className="text-white text-[10px] font-bold">:</span>

              <span className="bg-white text-[#e62e04] text-[10px] font-bold px-1 py-0.5 rounded leading-none">
                33
              </span>
            </div>
          )}
        </div>

        <a
          href="#"
          className="text-white/90 text-xs hover:text-white flex items-center gap-0.5"
        >
          View all
          <svg
            className="w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-gray-200">
        {products?.map((product) => (
          <div key={product.id} className="bg-white">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;