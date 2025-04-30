import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <main className="flex-grow w-full  ">
          <Outlet />
        </main>
      </div>
    </>
  );
}
