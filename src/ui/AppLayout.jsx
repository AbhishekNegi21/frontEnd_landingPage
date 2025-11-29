import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <>
      <div className="scrollbar-hide flex h-screen min-h-screen flex-col overflow-y-scroll">
        <Navbar />
        <main className="flex-1 py-2">
          <Outlet />
        </main>
      </div>
    </>
  );
}
