import { TbError404 } from "react-icons/tb";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <section className="h-full w-full">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <TbError404 className="text-[200px]" />
          <h2 className="text-4xl font-semibold">Page Not Found!</h2>

          <Button classname="mt-10" onClick={() => navigate(`/`)}>
            HOME
          </Button>
        </div>
      </section>
    </>
  );
}
