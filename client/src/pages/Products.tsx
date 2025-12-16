import {  useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/ProductCard";
import { FilterBar } from "@/components/FilterBar";
import { type Product, type Category, categoryLabels } from "@shared/schema";
import { Package } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/i18n";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

function ProductSkeleton() {
  return (
    <div className="group rounded-2xl border bg-white/80 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
      <Skeleton className="aspect-[3/4] w-full" />
      <div className="p-6 space-y-4 bg-gradient-to-t from-white/90 to-transparent">
        <Skeleton className="h-6 w-3/4 rounded-lg" />
        <Skeleton className="h-4 w-full rounded-lg" />
        <Skeleton className="h-4 w-2/3 rounded-lg" />
        <div className="flex gap-2">
          <Skeleton className="h-7 w-20 rounded-full" />
          <Skeleton className="h-7 w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
}

async function fetchProducts(category: Category | "all"): Promise<Product[]> {
  const url = category === "all"
    ? "/api/products"
    : `/api/products?category=${category}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const { language, t, tCategoryLabel } = useLanguage();

  const { data: products = [], isLoading, isFetching, isError } = useQuery<Product[]>({
    queryKey: ["/api/products", activeCategory],
    queryFn: () => fetchProducts(activeCategory),
    staleTime: 0,
    refetchOnMount: true,
  });

  const showLoading = isLoading || isFetching;


  return (
    <div  className="min-h-screen pt-20 md:pt-24 bg-gradient-to-b from-blue-50/20 via-white to-blue-50/10" data-testid="page-products">
      {/* Premium header with gentle blue depth */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 via-transparent to-pink-400/8" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-blue-700 via-blue-500 to-pink-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            {t("products.header.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light opacity-90">
            {t("products.header.subtitle.1")}<br />
            {t("products.header.subtitle.2")}
          </p>
        </div>
      </section>
      {/* Enhanced Sticky Filter Bar */}

      <main className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
          <div className="md:w-72 flex-shrink-0">
            <div className="sticky top-16 md:top-20 z-1 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]">
              <div className="h-full bg-white/70 backdrop-blur-2xl border-r border-blue-200/30 shadow-2xl shadow-blue-100/20 overflow-hidden rounded-r-2xl">
                <div className="px-8 py-10 h-full flex flex-col">
                  <FilterBar
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid Section */}
          <section className="pb-1 md:pb-4 bg-white/80 backdrop-blur-sm">
            <div id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 py-4">
              {/* Results count – subtle premium style */}
              {!showLoading && !isError && (
                <div className="flex items-center justify-around mb-5">
                  <p className="text-lg text-gray-600 font-medium">
                    {language === "fr"
                      ? `${products.length} produit${products.length > 1 ? "s" : ""} `
                      : `${products.length} product${products.length > 1 ? "s" : ""}`}
                    {activeCategory !== "all" && (
                      <span className="ml-3 text-pink-400 font-semibold">
                        — {tCategoryLabel(activeCategory, categoryLabels[activeCategory])}
                      </span>
                    )}
                  </p>
                </div>
              )}

              {/* Loading / Error / Empty / Grid */}
              {showLoading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <ProductSkeleton key={i} />
                  ))}
                </div>
              ) : isError ? (
                <div className="text-center py-12">
                  <div className="w-32 h-32 mx-auto mb-10 rounded-full bg-red-50/50 flex items-center justify-center ring-8 ring-red-100/30">
                    <Package className="w-16 h-16 text-red-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{t("products.error.title")}</h3>
                  <p className="text-lg text-gray-600 max-w-md mx-auto">
                    {t("products.error.body")}
                  </p>
                </div>
              ) : products.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ring-inset pt-3 ">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-32">
                  <div className="w-32 h-32 mx-auto mb-10 rounded-full bg-blue-50/50 flex items-center justify-center ring-8 ring-blue-100/30">
                    <Package className="w-16 h-16 text-blue-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{t("products.empty.title")}</h3>
                  <p className="text-lg text-gray-600 max-w-md mx-auto">
                    {t("products.empty.body")}
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}