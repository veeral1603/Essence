import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/apiProducts";

import ProductSkeleton from "../components/ProductSkeleton";
import useProductsStore from "../stores/ProductsStore";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SecondaryHeading from "../components/SecondaryHeading";
import Sort from "../components/Sort";

export default function Women() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () => getAllProducts(),
  });

  const setProducts = useProductsStore((state) => state.setProducts);
  const products = useProductsStore((state) => state.products);

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
          <div className="mt-2 mb-4 flex items-center justify-between">
            <SecondaryHeading>Women</SecondaryHeading>

            <Sort />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {isLoading ? (
              <>
                {[...Array(12)].map((_, i) => (
                  <ProductSkeleton key={i} />
                ))}
              </>
            ) : (
              <>
                {products
                  .filter(
                    (prod) =>
                      prod.category.includes("womens") ||
                      ["tops", "sunglasses"].includes(prod.category)
                  )
                  .map((item, i) => (
                    <ProductCard key={i} product={item} rating={false} />
                  ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
