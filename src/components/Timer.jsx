export default function Timer() {
  return (
    <div className="grid grid-cols-4 gap-x-4 font-shareTechMono">
      <div>
        <div className="aspect-square drop-shadow-lg flex items-center justify-center bg-white rounded-md text-2xl p-2 ">
          02
        </div>
        <p className="text-xs md:text-sm text-center font-poppins mt-2">Days</p>
      </div>
      <div>
        <div className="aspect-square drop-shadow-lg flex items-center justify-center bg-white rounded-md text-2xl p-2 ">
          06
        </div>
        <p className="text-xs md:text-sm text-center font-poppins mt-2">Hr</p>
      </div>
      <div>
        <div className="aspect-square drop-shadow-lg flex items-center justify-center bg-white rounded-md text-2xl p-2 ">
          05
        </div>
        <p className="text-xs md:text-sm text-center font-poppins mt-2">Mins</p>
      </div>
      <div>
        <div className="aspect-square drop-shadow-lg flex items-center justify-center bg-white rounded-md text-2xl p-2 ">
          30
        </div>
        <p className="text-xs md:text-sm text-center font-poppins mt-2">Sec</p>
      </div>
    </div>
  );
}
