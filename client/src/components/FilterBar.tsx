import { type Category, categoryLabels, allCategories } from "@shared/schema";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";

interface FilterBarProps {
  activeCategory: Category | "all";
  onCategoryChange: (category: Category | "all") => void;
}

export function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  const { t, tCategoryLabel } = useLanguage();
  const categoriesWithAll: (Category | "all")[] = ["all", ...allCategories];

  return (
    <div className="relative h-full flex flex-col">
    
      {/* Scrollable Vertical Navigation */}
      <nav className="flex-1 overflow-y-auto pr-4 custom-scrollbar space-y-2">
        {categoriesWithAll.map((category, index) => {
          const isActive = activeCategory === category;

          return (
            <motion.button
              key={category}
              onClick={() => {
                onCategoryChange(category);
                // scroll to top of products section 
                const productsSection = document.getElementById("products-section");
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              className={cn(
                "relative w-full px-6 py-4 rounded-2xl",
                "text-left text-base font-medium",
                "transition-all duration-500 ease-out",
                "group overflow-hidden",
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              {/* Glassmorphism Background + Glow */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl transition-all duration-500",
                  isActive
                    ? "bg-gradient-to-r from-blue-100/80 to-indigo-100/60 shadow-xl shadow-blue-300/40"
                    : "bg-white/0 group-hover:bg-blue-50/60 group-hover:shadow-lg group-hover:shadow-blue-200/30"
                )}
              />

              {/* Premium Left Active Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-r-full shadow-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              {/* Content with Subtle Icon Dot */}
              <div className="relative z-10 flex items-center gap-4">
                <div
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-500 shadow-md",
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 scale-110"
                      : "bg-blue-300/50 group-hover:bg-blue-500/80 group-hover:scale-110"
                  )}
                />
                <span
                  className={cn(
                    "transition-colors duration-500",
                    isActive
                      ? "text-blue-900 font-semibold"
                      : "text-blue-700/70 group-hover:text-blue-900 font-medium"
                  )}
                >
                  {category === "all"
                    ? t("products.filter.all")
                    : tCategoryLabel(category, categoryLabels[category])}
                </span>
              </div>

              {/* Subtle Shine Overlay for Premium Depth */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                  "bg-gradient-to-r from-transparent via-white/20 to-transparent"
                )}
              />
            </motion.button>
          );
        })}
      </nav>

      {/* Custom Scrollbar Styles (Tailwind + Webkit) */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.3); /* indigo-500/30 */
          border-radius: 4px;
          transition: background 0.3s;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: rgba(79, 70, 229, 0.6); /* indigo-600/60 */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(67, 56, 202, 0.8); /* indigo-700/80 */
        }
      `}</style>
    </div>
  );
}