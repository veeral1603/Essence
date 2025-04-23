import { useQuery } from "@tanstack/react-query";
import Heading from "../components/Heading";
import Button from "../components/Button";

import { useState } from "react";
import { getProductsByCategory } from "../services/apiCategories";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";

export default function NewArrivalsSection() {
  const [currentTab, setCurrentTab] = useState(1);

  const tabConfig = {
    1: "womens-dresses",
    2: "mens-shirts",
    3: "womens-jewellery",
    4: "mens-watches",
    5: "mens-shoes",
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["newProducts", currentTab],
    queryFn: () => getProductsByCategory(tabConfig[currentTab]),
    enabled: !!currentTab,
    keepPreviousData: false,
    staleTime: 0,
  });

  const products = data?.products.slice(0, 4) || [];

  const tabBtns = [
    { id: 1, label: `Women's Fashion` },
    { id: 2, label: `Men's Fashion` },
    { id: 3, label: `Women's Accessories` },
    { id: 4, label: `Men's Accessories` },
    { id: 5, label: `Men's Shoes` },
  ];

  return (
    <section className="py-12 md:py-[76px]">
      <div className="container">
        <Heading>New Arrivals</Heading>

        <div className="tabs-section mt-6">
          <div className="flex gap-x-3  overflow-x-auto no-scrollbar flex-nowrap md:overflow-visible md:flex-nowrap lg:gap-x-6 md:justify-center ">
            {tabBtns.map((btn) => {
              {
                return (
                  <button
                    onClick={() => setCurrentTab(btn.id)}
                    className={` min-w-[140px] text-center text-sm py-3 px-4 rounded-md whitespace-nowrap shrink-0 ${
                      btn.id === currentTab
                        ? `bg-black text-stone-100`
                        : `bg-neutral-200`
                    }`}
                    key={btn.id}
                  >
                    {btn.label}
                  </button>
                );
              }
            })}
          </div>
          <div className="tabs-content mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {isPending && (
              <>
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
              </>
            )}

            {error && <p className="text-red-500">Something went wrong...</p>}

            {!isPending && products.length === 0 && (
              <p>No products found in this category.</p>
            )}

            {products.map((item) => {
              {
                return <ProductCard product={item} key={item.id} />;
              }
            })}
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 md:mt-7">
          <Button>VIEW ALL</Button>
        </div>
      </div>
    </section>
  );
}
