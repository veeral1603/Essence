export default function Heading({ children, className, sub }) {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="space-y-2 md:space-y-2 text-center">
        <h2 className="font-volkhov text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
          {children}
        </h2>
        <p className=" text-xs md:text-sm text-secondaryText">
          {sub
            ? sub
            : " ipsum dolor sitLorem amet consectetur, adipisicing elit. Rem culpaillum libero officia nam voluptate voluptatibus nulla Lorem "}
        </p>
      </div>
    </div>
  );
}
