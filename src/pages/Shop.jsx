import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/apiProducts.js";
import useProductsStore from "../stores/ProductsStore";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

import ProductSkeleton from "../components/ProductSkeleton.jsx";
import SecondaryHeading from "../components/SecondaryHeading.jsx";
import Sort from "../components/Sort.jsx";
import MobileFilters from "../components/MobileFilters.jsx";
import Filters from "../components/Filters.jsx";

export default function Shop() {
  const { data, isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () => getAllProducts(),
  });

  const setProducts = useProductsStore((state) => state.setProducts);
  const products = useProductsStore((state) => state.products);

  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.name)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.name));
    } else {
      setCategory((prev) => [...prev, e.target.name]);
    }
  };

  const toggleType = (e) => {
    if (type.includes(e.target.name)) {
      setType((prev) => prev.filter((item) => item !== e.target.name));
    } else {
      setType((prev) => [...prev, e.target.name]);
    }
  };

  useEffect(() => {
    if (data && products.length == 0) {
      setProducts(
        data.products.filter(
          (prod) =>
            ![
              "furniture",
              "groceries",
              "home-decorations",
              "kitchen-accessories",
            ].includes(prod.category)
        )
      );
    }
  }, [setProducts, data]);

  return (
    <>
      <section className="py-2">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-2 lg:gap-6 md:my-4  ">
            <div className="flex items-center justify-between my-2 md:hidden">
              <div className="flex items-center gap-2">
                <SecondaryHeading>Shop</SecondaryHeading>
                {!isLoading && (
                  <p className="text-xs text-neutral-500">
                    {products.length} Products
                  </p>
                )}
              </div>

              <Sort />
            </div>

            {/* Sidebar  */}

            <div className="flex-col gap-2 md:min-w-56 lg:min-w-64 mb-2 md:mb-0 hidden md:flex">
              <div className="mt">
                <h2 className=" text-xl  lg:text-2xl font-semibold">Filters</h2>
              </div>

              <Filters />
            </div>

            {/* Products Container  */}

            <div className="flex-1 ">
              <div className=" items-center justify-between hidden md:flex mb-2 lg:text-3xl font-semibold ">
                <div className="flex items-center gap-2">
                  <h2>Shop</h2>
                  {!isLoading && (
                    <p className="text-xs text-neutral-500">
                      {products.length} Products
                    </p>
                  )}
                </div>
                <Sort />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 lg:gap-4">
                {isLoading ? (
                  <>
                    {[...Array(16)].map((_, i) => (
                      <ProductSkeleton key={i} />
                    ))}
                  </>
                ) : (
                  <>
                    {products.map((item) => {
                      {
                        return (
                          <ProductCard
                            product={item}
                            key={item.id}
                            rating={false}
                          />
                        );
                      }
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MobileFilters />
    </>
  );
}
