import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <div className="h-dvh w-full bg-stone-100 p-4">
        <Outlet />
      </div>
    </>
  );
}
