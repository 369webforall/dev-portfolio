"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex gap-6 container mx-auto">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`hover:underline ${
                pathname === item.href ? "font-bold underline" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
