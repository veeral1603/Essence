export default function Sort() {
  return (
    <div>
      <select className="outline-none cursor-pointer p-2 md:p-3 bg-stone-100 font-poppins text-xs md:text-sm text-primaryText md:appearance-none font-medium">
        <option value={"relevence"}>Sort by: Relevence</option>
        <option value={"low-high"}>Sort by: Low to High</option>
        <option value={"high-low"}>Sort by: High to Low</option>
      </select>
    </div>
  );
}
