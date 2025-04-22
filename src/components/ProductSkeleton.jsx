export default function ProductSkeleton() {
  return (
    <div className="border shadow-sm  overflow-hidden rounded-lg">
      <div className="w-full aspect-square bg-stone-100 animate-pulse"></div>
      <div className="p-3">
        <div className="bg-stone-100 h-5 w-4/5"></div>

        <div className="bg-stone-100 h-4 w-2/5 mt-1 md:mt-2 animate-pulse"></div>
        <div className="bg-stone-100 h-3 w-1/5 mt-1 md:mt-2 animate-pulse"></div>
      </div>
    </div>
  );
}
