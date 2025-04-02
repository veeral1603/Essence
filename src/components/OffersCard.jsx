export default function OffersCard({ item }) {
  return (
    <div
      className={`h-full overflow-hidden rounded-md flex items-center justify-center bg-stone-50`}
    >
      <img src={item.image} className="h-full w-full aspect-[2/3] " />
    </div>
  );
}
