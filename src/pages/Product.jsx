import { useParams } from "react-router-dom";
import useProductsStore from "../stores/ProductsStore";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/apiProducts";
import { LuStar } from "react-icons/lu";

import Loader from "../components/Loader";

export default function Product() {
  const { productID } = useParams();

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

  const currentProduct = products.filter((prod) => prod.id == productID)[0];

  return (
    <>
      {isLoading ? (
        <div className="h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <section className="pt-3 md:pt-10 h-full">
            <div className="container h-full">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 lg:gap-12">
                <div className="flex flex-1 flex-col-reverse  sm:flex-row gap-2 w-full ">
                  <div className="flex sm:flex-col gap-2 flex-1">
                    {currentProduct?.images.map((img, i) => (
                      <div
                        key={i}
                        className=" bg-stone-100 cursor-pointer group overflow-hidden aspect-square"
                      >
                        <img
                          src={img}
                          className="group-hover:scale-[1.05] transition"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="w-full sm:w-[80%]">
                    <div className="bg-stone-100 w-full  aspect-square overflow-hidden flex items-center justify-center">
                      <img
                        src={currentProduct?.images[0]}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col mt-1 sm:mt-0">
                  <div className="text-xl md:text-3xl font-extrabold flex items-center justify-between">
                    <h2>{currentProduct?.title}</h2>

                    <button className="text-xl p-2 border border-primaryBorder rounded-full">
                      <LuStar />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
