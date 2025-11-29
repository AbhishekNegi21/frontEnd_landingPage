import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { LuUser } from "react-icons/lu";
import { RiShoppingBagLine } from "react-icons/ri";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-stone-300 bg-white">
      <div className="mx-2 my-2 flex items-center justify-between px-2 py-2 text-xl">
        <Logo />
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="mt-px hidden w-32 rounded-full bg-stone-50 px-2.5 text-[1.1rem] font-[350] ring ring-stone-200 outline-none hover:ring-stone-400 sm:w-56 md:flex"
          />

          <LuUser className="mt-1 cursor-pointer text-xl text-stone-700 hover:text-stone-500" />
          <RiShoppingBagLine className="mt-1 cursor-pointer text-xl text-stone-700 hover:text-stone-500" />
          <HiOutlineMenuAlt4 className="mt-1 cursor-pointer text-xl text-stone-700 hover:text-stone-500" />
        </div>
      </div>
    </nav>
  );
}
