export default function MobileMenuDivider({ children }) {
  return (
    <div className="flex items-center px-4 sm:px-6 w-full">
      <p className="pr-2 text-sm sm:text-base font-medium">{children}</p>
      <div className="h-px w-full bg-primaryBorder flex-1"></div>
    </div>
  );
}
