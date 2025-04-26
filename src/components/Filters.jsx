export default function Filters({ borders }) {
  const toggleCategory = () => {};

  const toggleType = () => {};

  return (
    <div className={`flex flex-col gap-4 mt-2`}>
      <div className="px-4">
        <h2 className="font-semibold">Categories</h2>
        <div className="mt-2 ml-2 flex flex-col gap-2">
          <div className="flex items-center text-sm gap-2">
            <input
              type="checkbox"
              name="men"
              id="men"
              className="cursor-pointer accent-black"
              onChange={toggleCategory}
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
              onChange={toggleCategory}
            />
            <label htmlFor="women" className="cursor-pointer">
              Women
            </label>
          </div>
        </div>
      </div>

      <div className="px-4">
        <h2 className="font-semibold"> Type</h2>

        <div className="mt-2 ml-2 flex flex-col gap-2">
          <div className="flex items-center text-sm gap-2">
            <input
              type="checkbox"
              name="shirts"
              id="shirts"
              className="cursor-pointer accent-black"
              onChange={toggleType}
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
              onChange={toggleType}
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
              onChange={toggleType}
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
              onChange={toggleType}
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
              onChange={toggleType}
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
              onChange={toggleType}
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
              onChange={toggleType}
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
              onChange={toggleType}
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
              onChange={toggleType}
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
              onChange={toggleType}
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
              onChange={toggleType}
            />
            <label htmlFor="mobiles-accessories" className="cursor-pointer">
              Mobile Accessories
            </label>
          </div>
          <div className="flex items-center text-sm gap-2">
            <input
              type="checkbox"
              name="laptops"
              id="laptops"
              className="cursor-pointer accent-black"
              onChange={toggleType}
            />
            <label htmlFor="laptops" className="cursor-pointer">
              Laptops
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
