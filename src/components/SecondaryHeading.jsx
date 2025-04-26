export default function SecondaryHeading({ children, className }) {
  return (
    <div className={`text-3xl md:text-4xl  font-semibold  ${className} `}>
      <h2>{children}</h2>
    </div>
  );
}
