import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-2 md:py-6 mt-4 border-t border-primaryBorder">
      <div className="container">
        <div className="flex items-center flex-col gap-1 md:gap-0  md:flex-row md:justify-between">
          <div className="font-volkhov font-semibold text-2xl md:text-3xl flex items-center gap-6">
            <Link to={"/"}>
              <p>ESSENCE</p>
            </Link>
          </div>
          <div className="flex items-start justify-between gap-4 md:gap-6 text-sm ">
            <Link to={`/support`}>Support</Link>
            <Link to={`/invoicing`}>Invoicing</Link>
            <Link to={`/contract`}>Contract</Link>
            <Link to={`/careers`}>Careers</Link>
            <Link to={`/faq`}>FAQs</Link>
          </div>
        </div>

        <div className="flex items-center justify-center text-xs mt-4">
          <p>Copyright &copy; 2025 Essence. All Rights Reserved. </p>
        </div>
      </div>
    </footer>
  );
}
