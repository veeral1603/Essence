import Loader from "../components/Loader.jsx";
import { useQuery } from "@tanstack/react-query";
import getAllProducts from "../services/apiProducts.js";
import useProductsStore from "../stores/ProductsStore";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import Heading from "../components/Heading.jsx";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

export default function Shop() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () => getAllProducts(),
  });

  const setProducts = useProductsStore((state) => state.setProducts);
  const products = useProductsStore((state) => state.products);

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    if (data) {
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
      {isLoading ? (
        <div className="my-20">
          <Loader />
        </div>
      ) : (
        <section className="py-2">
          <div className="container">
            <Heading sub=" " className={`my-2 lg:my-6`}>
              Shop All
            </Heading>
            <div className="flex flex-col md:flex-row gap-2 lg:gap-6">
              <div className="flex flex-col gap-2 md:min-w-56 lg:min-w-64 mb-2 md:mb-0">
                <div
                  className="flex items-center"
                  onClick={() => setIsFiltersOpen((curr) => !curr)}
                >
                  <h2 className=" text-xl  lg:text-2xl font-semibold">
                    Filters
                  </h2>
                  <button className="ml-1 md:hidden">
                    {isFiltersOpen ? <FaCaretUp /> : <FaCaretDown />}
                  </button>
                </div>
                <div
                  className={`${
                    isFiltersOpen ? `flex` : `hidden`
                  } md:flex flex-col gap-4 `}
                >
                  <div className="border border-primaryBorder py-2 px-4">
                    <h2 className="font-semibold">Categories</h2>
                    <div className="mt-2 flex flex-col gap-2">
                      <div className="flex items-center text-sm gap-2">
                        <input
                          type="checkbox"
                          name="men"
                          id="men"
                          className="cursor-pointer accent-black"
                        />
                        <label htmlFor="men" className="cursor-pointer">
                          Men
                        </label>
                      </div>
                      <div className="flex items-center text-sm gap-2">
                        <input
                          type="checkbox"
                          name="women"
                          id="women"
                          className="cursor-pointer accent-black"
                        />
                        <label htmlFor="women" className="cursor-pointer">
                          Women
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="border border-primaryBorder py-2 px-4">
                    <h2 className="font-semibold"> Type</h2>

                    <div className="mt-2 flex flex-col gap-2">
                      <div className="flex items-center text-sm gap-2">
                        <input
                          type="checkbox"
                          name="shirts"
                          id="shirts"
                          className="cursor-pointer accent-black"
                        />
                        <label htmlFor="shirts" className="cursor-pointer">
                          Shirts
                        </label>
                      </div>

                      <div className="flex items-center text-sm gap-2">
                        <input
                          type="checkbox"
                          name="shoes"
                          id="shoes"
                          className="cursor-pointer accent-black"
                        />
                        <label htmlFor="shoes" className="cursor-pointer">
                          Shoes
                        </label>
                      </div>
                      <div className="flex items-center text-sm gap-2">
                        <input
                          type="checkbox"
                          name="watches"
                          id="watches"
                          className="cursor-pointer accent-black"
                        />
                        <label htmlFor="watches" className="cursor-pointer">
                          Watches
                        </label>
                      </div>
                      <div className="flex items-center text-sm gap-2">
                        <input
                          type="checkbox"
                          name="bags"
                          id="bags"
                          className="cursor-pointer accent-black"
                        />
                        <label htmlFor="bags" className="cursor-pointer">
                          Bags
                        </label>
                      </div>
                      <div className="flex items-center text-sm gap-2">
                        <input
                          type="checkbox"
                          name="dresses"
                          id="dresses"
                          className="cursor-pointer accent-black"
                        />
                        <label htmlFor="dresses" className="cursor-pointer">
                          Dresses
                        </label>
                      </div>
                      <div className="flex items-center text-sm gap-2">
                        <input
                          type="checkbox"
                          name="jewellery"
                          id="jewellery"
                          className="cursor-pointer accent-black"
                        />
                        <label htmlFor="jewellery" className="cursor-pointer">
                          Jewellery
                        </label>
                      </div>

                      <div className="flex items-center text-sm gap-2">
                        <input
                          type="checkbox"
                          name="sports"
                          id="sports"
                          className="cursor-pointer accent-black"
                        />
                        <label htmlFor="sports" className="cursor-pointer">
                          Sports
                        </label>
                      </div>
                      <div className="flex items-center text-sm gap-2">
                        <input
                          type="checkbox"
                          name="skin-care"
                          id="skin-care"
                          className="cursor-pointer accent-black"
                        />
                        <label htmlFor="skin-care" className="cursor-pointer">
                          Skin Care
                        </label>
                      </div>
                      <div className="flex items-center text-sm gap-2">
                        <input
                          type="checkbox"
                          name="beauty"
                          id="beauty"
                          className="cursor-pointer accent-black"
                        />
                        <label htmlFor="beauty" className="cursor-pointer">
                          Beauty
                        </label>
                      </div>
                      <div className="flex items-center text-sm gap-2">
                        <input
                          type="checkbox"
                          name="vehicle"
                          id="vehicle"
                          className="cursor-pointer accent-black"
                        />
                        <label htmlFor="vehicle" className="cursor-pointer">
                          Vehicle
                        </label>
                      </div>
                      <div className="flex items-center text-sm gap-2">
                        <input
                          type="checkbox"
                          name="mobile-accessories"
                          id="mobile-accessories"
                          className="cursor-pointer accent-black"
                        />
                        <label
                          htmlFor="mobiles-accessories"
                          className="cursor-pointer"
                        >
                          Mobile Accessories
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 lg:gap-4">
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
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
