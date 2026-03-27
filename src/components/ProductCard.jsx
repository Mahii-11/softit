const ProductCard = ({ product }) => {
  const discountPct = Math.round(
    ((product.originalPrice - product.price) /
      product.originalPrice) *
      100
  );

  return (
    <div className="bg-white border border-gray-200 rounded-sm hover:shadow-md hover:scale-[1.02] transition-all duration-150 cursor-pointer overflow-hidden group">
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
};

export default ProductCard;