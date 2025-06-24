import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const handleLogout = () => {
      localStorage.clear();
      router.push("/");
    };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-black">TL connect</h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {/* ICON  */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 text-black">
          <Link href="/core/dashboard" className="hover:scale-105">
            Dashboard
          </Link>
          <Link href="/core/workshops" className="hover:scale-105">
            Workshops
          </Link>
          <Link href="/core/tasks" className="hover:scale-105">
            Tasks
          </Link>
          {/* <Link href="/summerschool" className="hover:scale-105">
          Summer school
          </Link> */}
          <Link href="/core/announcements" className="hover:scale-105">
            Announcements
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
          >
            Logout
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 text-black text-center">
          <Link href="/core/dashboard" className="block hover:scale-105">
            Dashboard
          </Link>
          <Link href="/core/workshops" className="block hover:scale-105">
            Workshops
          </Link>
          <Link href="/core/tasks" className="block hover:scale-105">
            Tasks
          </Link>
          {/* <Link href="/summerschool" className="block hover:scale-105">
          Summer school
          </Link> */}
          <Link href="/core/announcements" className="block hover:scale-105">
            Announcements
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
