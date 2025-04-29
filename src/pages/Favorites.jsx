import ProductCard from "../components/ProductCard";
import SecondaryHeading from "../components/SecondaryHeading";
import Sort from "../components/Sort";
import useFavoritesStore from "../stores/FavoritesStore";
import { LuStar } from "react-icons/lu";

export default function Men() {
  const { favorites } = useFavoritesStore();

  return (
    <>
      {favorites.length > 0 ? (
        <section className="py-2">
          <div className="container">
            <div className="mt-2 mb-4 flex items-center justify-between">
              <SecondaryHeading>Favorites</SecondaryHeading>

              <Sort />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
              {favorites.map((item, i) => (
                <ProductCard key={i} product={item} rating={false} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="h-full flex flex-col items-center justify-center text-neutral-500 font-semibold text-center p-3">
          <LuStar className="text-[100px]" />
          <h2 className="text-2xl md:text-4xl mt-6">
            You have no favorite products yet.
          </h2>
        </div>
      )}
    </>
  );
}
